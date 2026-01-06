"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

/* ---------------- Shader Plane ---------------- */

function ShaderPlane({ vertexShader, fragmentShader, uniforms }) {
  const meshRef = useRef(null);
  const { size } = useThree();

  useFrame((state) => {
    if (!meshRef.current) return;

    const material = meshRef.current.material;
    material.uniforms.u_time.value = state.clock.elapsedTime * 0.5;
    material.uniforms.u_resolution.value.set(
      size.width,
      size.height,
      1.0
    );
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        side={THREE.FrontSide}
        depthTest={false}
        depthWrite={false}
      />
    </mesh>
  );
}

/* ---------------- Shaders ---------------- */

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = `
  precision highp float;

  varying vec2 vUv;
  uniform float u_time;
  uniform vec3 u_resolution;

  vec2 toPolar(vec2 p) {
    float r = length(p);
    float a = atan(p.y, p.x);
    return vec2(r, a);
  }

  void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec2 p = 6.0 * ((fragCoord.xy - 0.5 * u_resolution.xy) / u_resolution.y);

    vec2 polar = toPolar(p);
    float r = polar.x;

    vec2 i = p;
    float c = 0.0;
    float rot = r + u_time + p.x * 0.1;

    for (float n = 0.0; n < 4.0; n++) {
      float rr = r + 0.15 * sin(u_time * 0.7 + n + r * 2.0);
      p *= mat2(
        cos(rot), sin(rot),
        -sin(rot), cos(rot)
      ) * -0.25;

      float t = r - u_time / (n + 30.0);
      i -= p + sin(t - i.y) + rr;

      c += 2.2 / length(vec2(
        sin(i.x + t) / 0.15,
        cos(i.y + t) / 0.15
      ));
    }

    c /= 8.0;

    vec3 baseColor = vec3(0.2, 0.7, 0.5);
    vec3 finalColor = baseColor * smoothstep(0.0, 1.0, c * 0.6);

    fragColor = vec4(finalColor, 1.0);
  }

  void main() {
    vec4 fragColor;

    // ✅ FULL VERTICAL FLIP (TOP ↔ BOTTOM)
    vec2 fragCoord = vec2(
      vUv.x,
      1.0 - vUv.y
    ) * u_resolution.xy;

    mainImage(fragColor, fragCoord);
    gl_FragColor = fragColor;
  }
`;

/* ---------------- Public Component ---------------- */

export default function SyntheticBackground() {
  const uniforms = useMemo(
    () => ({
      u_time: { value: 0 },
      u_resolution: { value: new THREE.Vector3(1, 1, 1) },
    }),
    []
  );

  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        dpr={[1, 2]}
        gl={{ antialias: false, alpha: true }}
      >
        <ShaderPlane
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}
        />
      </Canvas>
    </div>
  );
}
