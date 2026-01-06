"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Container from "@/components/common/Layout/Container";
import ProjectsCarousel from "./ProjectsCarousel";
import { ModernButton } from "@/components/common/button/ModernButton";
import SectionTitle from "@/components/common/Headers/SectionTitle";
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsSection() {
  // aurora refs (unchanged)
  const topAurora = useRef(null);
  const bottomAurora = useRef(null);

  // NEW animation refs
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const descRef = useRef(null);
   const router = useRouter();

  /* ---------------- AURORA (UNCHANGED) ---------------- */
  useEffect(() => {
    gsap.to(topAurora.current, {
      x: 220,
      scaleX: 1.15,
      opacity: 0.75,
      duration: 22,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    gsap.to(bottomAurora.current, {
      x: -260,
      scaleX: 1.2,
      opacity: 0.7,
      duration: 26,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });
  }, []);

  /* ---------------- TEXT ANIMATION ---------------- */
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split description into lines
      const lines = descRef.current.innerHTML
        .split("<br>")
        .map(
          (line) =>
            `<span class="block overflow-hidden"><span class="line inline-block">${line}</span></span>`
        )
        .join("");

      descRef.current.innerHTML = lines;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "bottom top",
          toggleActions: "play reset play reset",
        },
      });

      tl.from(
        headingRef.current,
        {
          y: -40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        0
      ).from(
        descRef.current.querySelectorAll(".line"),
        {
          y: 24,
          opacity: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: "power3.out",
        },
        0
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden py-16 md:py-20"
    >
      {/* BASE GRADIENT */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#000000_0%,#2FBD61_28%,#16572D_54%,#2FBD61_78%,#000000_100%)]" />

      {/* AURORA BLACK BLENDS */}
      <div
        ref={topAurora}
        className="absolute -top-[35%] left-[-20%] w-[140%] h-[60%]
        bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.6)_35%,transparent_70%)]
        blur-[140px] mix-blend-multiply pointer-events-none"
      />

      <div
        ref={bottomAurora}
        className="absolute -bottom-[35%] left-[-20%] w-[140%] h-[60%]
        bg-[radial-gradient(ellipse_at_bottom,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.6)_35%,transparent_70%)]
        blur-[160px] mix-blend-multiply pointer-events-none"
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-[1650px] mx-auto">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="max-w-5xl mb-12 md:mb-16">
              {/* HEADING */}
              <div ref={headingRef} className="mb-8">
                <SectionTitle title="Our Projects" />
              </div>

              {/* DESCRIPTION (use <br> for line control) */}
<p
  ref={descRef}
  className="text-white text-sm md:text-xl font-medium leading-relaxed"
>
  We craft impactful visual solutions that elevate brands, engage audiences,
  and communicate messages with clarity.Every project reflects our focus on innovation, precision, and design excellence.
</p>


            </div>
          </div>
        </Container>

        <ProjectsCarousel />

        <div className="mt-12 md:mt-16 flex justify-center">
          <ModernButton text="View more" onClick={()=>router.push("/projects")} />
        </div>
      </div>
    </section>
  );
}
