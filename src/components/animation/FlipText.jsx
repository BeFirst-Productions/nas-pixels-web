"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

export default function FlipText({
  word,
  duration = 0.5,
  delayMultiple = 0.08,
  className,
}) {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const letters = gsap.utils.toArray(".flip-letter");

      gsap.set(letters, {
        rotateX: -90,
        opacity: 0,
        transformPerspective: 800,
        transformOrigin: "50% 50%",
      });

      gsap.to(letters, {
        rotateX: 0,
        opacity: 1,
        duration,
        ease: "power3.out",
        stagger: delayMultiple,
      });
    }, containerRef);

    return () => ctx.revert();
  }, [word, duration, delayMultiple]);

  return (
    <div
      ref={containerRef}
      className="flex justify-center space-x-2 perspective-[800px]"
    >
      {word.split("").map((char, i) => (
        <span
          key={i}
          className={cn(
            "flip-letter inline-block drop-shadow-sm will-change-transform",
            className
          )}
        >
          {char}
        </span>
      ))}
    </div>
  );
}
