"use client"
import { Renderer, Program, Mesh, Color, Triangle } from "ogl"
import { useEffect, useRef } from "react"

/* ================= VERTEX (WebGL1) ================= */
const VERT = `
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`

/* ================= FRAGMENT (WebGL1) ================= */
const FRAG = `
precision highp float;
#define fragColor gl_FragColor

uniform float uTime;
uniform float uAmplitude;
uniform vec3 uColorStops[3];
uniform vec2 uResolution;
uniform float uBlend;

vec3 permute(vec3 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}

float snoise(vec2 v){
  const vec4 C = vec4(
      0.211324865405187, 0.366025403784439,
      -0.577350269189626, 0.024390243902439
  );
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);

  vec3 p = permute(
      permute(i.y + vec3(0.0, i1.y, 1.0))
    + i.x + vec3(0.0, i1.x, 1.0)
  );

  vec3 m = max(
      0.5 - vec3(
          dot(x0, x0),
          dot(x12.xy, x12.xy),
          dot(x12.zw, x12.zw)
      ), 
      0.0
  );
  m = m * m;
  m = m * m;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);

  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;

  vec3 c1 = uColorStops[0];
  vec3 c2 = uColorStops[1];
  vec3 c3 = uColorStops[2];

  vec3 ramp = mix(c1, c2, smoothstep(0.0, 0.5, uv.x));
  ramp = mix(ramp, c3, smoothstep(0.5, 1.0, uv.x));

  float height = snoise(vec2(uv.x * 1.5 + uTime * 0.15, uTime * 0.10)) * 0.35 * uAmplitude;
  height = exp(height);

  float field = height - uv.y * 1.5;
  float alpha = smoothstep(-0.2, uBlend * 1.2, field);
  float glow = pow(max(field, 0.0), 0.025);

  fragColor = vec4(ramp * glow * alpha, alpha);
}
`

export default function Aurora({
  colorStops = ["#5227FF", "#7cff67", "#5227FF"],
  amplitude = 1,
  blend = 0.5
}) {
  const ctn = useRef(null)
  const propsRef = useRef({ colorStops, amplitude, blend })
  propsRef.current = { colorStops, amplitude, blend }

  useEffect(() => {
    if (!ctn.current) return
    if (!window.WebGLRenderingContext) return

    const renderer = new Renderer({
      webgl: 1,
      alpha: true,
      premultipliedAlpha: true,
      antialias: false,
      powerPreference: "low-power"
    })

    const gl = renderer.gl
    gl.clearColor(0, 0, 0, 0)
    gl.enable(gl.BLEND)
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA)

    const geometry = new Triangle(gl)
    if (geometry.attributes.uv) delete geometry.attributes.uv

    const toRGB = hex => {
      const c = new Color(hex)
      return [c.r, c.g, c.b]
    }

    const program = new Program(gl, {
      vertex: VERT,
      fragment: FRAG,
      uniforms: {
        uTime: { value: 0 },
        uAmplitude: { value: amplitude },
        uBlend: { value: blend },
        uResolution: { value: [1, 1] },
        uColorStops: { value: colorStops.map(toRGB) }
      }
    })

    const mesh = new Mesh(gl, { geometry, program })
    ctn.current.appendChild(gl.canvas)

    const resize = () => {
      const w = ctn.current.offsetWidth
      const h = ctn.current.offsetHeight
      renderer.setSize(w, h)
      program.uniforms.uResolution.value = [w, h]
    }

    resize()
    window.addEventListener("resize", resize)

    let raf
    const loop = t => {
      raf = requestAnimationFrame(loop)
      program.uniforms.uTime.value = t * 0.0004
      program.uniforms.uAmplitude.value = propsRef.current.amplitude
      program.uniforms.uBlend.value = propsRef.current.blend
      program.uniforms.uColorStops.value = propsRef.current.colorStops.map(toRGB)
      renderer.render({ scene: mesh })
    }
    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", resize)
      gl.getExtension("WEBGL_lose_context")?.loseContext()
      if (gl.canvas.parentNode) gl.canvas.parentNode.removeChild(gl.canvas)
    }
  }, [])

  return <div ref={ctn} className="w-full h-full" />
}
