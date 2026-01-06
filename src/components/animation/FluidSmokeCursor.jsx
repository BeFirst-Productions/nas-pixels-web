"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function FluidSmokeCursor() {
  const containerRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const prev = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;

    const move = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", move);

    gsap.ticker.add(() => {
      const dx = mouse.current.x - prev.current.x;
      const dy = mouse.current.y - prev.current.y;

      const speed = Math.sqrt(dx * dx + dy * dy);
      if (speed < 1) return;

      prev.current.x += dx * 0.9;
      prev.current.y += dy * 0.8;

      createSmoke(prev.current.x, prev.current.y, dx, dy);
    });

    function createSmoke(x, y, dx, dy) {
      const el = document.createElement("div");
      el.className = "fluid-smoke";

      // 🎨 Dynamic color mix (white + black + green)
      const green = "#70C879";
      const whiteOpacity = gsap.utils.random(0.25, 0.45);
      const greenOpacity = gsap.utils.random(0.25, 0.5);
      const darkOpacity = gsap.utils.random(0.15, 0.3);

      el.style.background = `
        radial-gradient(
          circle,
          rgba(255,255,255,${whiteOpacity}) 20%,
          rgba(112,200,121,${greenOpacity}) 35%,
          rgba(0,0,0,${darkOpacity}) 60%,
          transparent 72%
        )
      `;

      container.appendChild(el);

      const size = gsap.utils.clamp(40, 140, Math.abs(dx + dy) * 2);

      gsap.set(el, {
        x,
        y,
        width: size,
        height: size,
        opacity: 0.75,
        scale: 0.4,
      });

      gsap.to(el, {
        x: `+=${dx * 0.4}`,
        y: `+=${dy * 0.4}`,
        scale: 1.8,
        opacity: 0,
        duration: 2.4,
        ease: "power2.out",
        onComplete: () => el.remove(),
      });
    }

    return () => {
      window.removeEventListener("mousemove", move);
      gsap.ticker.remove(() => {});
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-[1] overflow-hidden"
    />
  );
}
