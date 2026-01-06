"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function GlobalCursor() {
  const containerRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const last = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    gsap.ticker.add(() => {
      const dx = mouse.current.x - last.current.x;
      const dy = mouse.current.y - last.current.y;

      if (Math.abs(dx) + Math.abs(dy) < 2) return;

      last.current.x += dx * 0.25;
      last.current.y += dy * 0.25;

      const puff = document.createElement("span");
      puff.className = "smoke-puff";
      container.appendChild(puff);

      gsap.set(puff, {
        x: last.current.x,
        y: last.current.y,
        scale: gsap.utils.random(0.4, 0.8),
        opacity: 0.7,
      });

      gsap.to(puff, {
        opacity: 0,
        scale: 2.5,
        x: `+=${gsap.utils.random(-40, 40)}`,
        y: `+=${gsap.utils.random(-40, 40)}`,
        duration: 2.2,
        ease: "power2.out",
        onComplete: () => puff.remove(),
      });
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      gsap.ticker.remove(() => {});
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-[1]"
    />
  );
}
