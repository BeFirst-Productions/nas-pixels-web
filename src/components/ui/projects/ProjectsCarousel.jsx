// components/projects/ProjectsCarousel.jsx
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ProjectCard from "./ProjectCard";
import { PROJECTS, slides } from "@/data/projects";

export default function ProjectsCarousel() {
  const trackRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const gap = 24;

      const getWidth = () => {
        let width = 0;
        Array.from(track.children).forEach((card) => {
          width += card.offsetWidth + gap;
        });
        return width / 2;
      };

      let totalWidth = getWidth();

      const tween = gsap.to(track, {
        x: `-=${totalWidth}`,
        duration: 30,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: (x) => `${parseFloat(x) % totalWidth}px`,
        },
      });

      // Recalculate on resize
      const onResize = () => {
        totalWidth = getWidth();
        tween.invalidate();
      };

      window.addEventListener("resize", onResize);

      return () => {
        window.removeEventListener("resize", onResize);
        tween.kill();
      };
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={trackRef}
        className="flex gap-6 will-change-transform"
      >
        {[...slides, ...slides].map((item, index) => (
          <ProjectCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
