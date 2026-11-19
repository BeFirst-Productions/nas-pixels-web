"use client";

// components/projects/ProjectsCarousel.jsx

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ProjectCard from "./ProjectCard";
import { PROJECTS, slides } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";

export default function ProjectsCarousel() {
  const { t } = useLanguage();
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
        {[...slides, ...slides].map((item, index) => {
          const slideIdx = index % slides.length;
          const slideTitle = t(`ourProjects.slides.${slideIdx}.title`, item.title);
          const slideLocation = t(`ourProjects.slides.${slideIdx}.location`, item.location);
          return (
            <ProjectCard
              key={index}
              {...item}
              title={slideTitle}
              location={slideLocation}
            />
          );
        })}
      </div>
    </div>
  );
}
