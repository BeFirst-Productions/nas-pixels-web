"use client";

import React, { useRef, useEffect, forwardRef } from "react";
import { ModernButton } from "@/components/common/Button/ModernButton";
import { useRouter } from "next/navigation";
import SectionTitle from "@/components/common/Headers/SectionTitle";
import Container from "@/components/common/Layout/Container";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* =======================
   ABOUT CARD (UNCHANGED)
======================= */

const AboutCard = forwardRef(({ title, description, icon }, ref) => {
  return (
    <div
      ref={ref}
      className="
        relative group
        w-full
        rounded-[18px]
        border border-[#2D5440]/40
        bg-[#1C1F24]
        p-6 md:p-7
        transition-all duration-500
        hover:border-[#70C879]/70
        hover:shadow-[0_0_24px_rgba(112,200,121,0.25)]
      "
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-[18px]"
        style={{
          boxShadow: "inset 0 0 18px rgba(112, 200, 121, 0.25)",
        }}
      />

      <div className="relative z-10 flex flex-col">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#16572D]/25 text-[#70C879]">
          {icon}
        </div>

        <h3 className="mb-3 text-xl font-semibold text-white">
          {title}
        </h3>

        <p className="text-sm leading-[24px] text-white/80">
          {description}
        </p>
      </div>
    </div>
  );
});

AboutCard.displayName = "AboutCard";

/* =======================
   ICONS
======================= */

const InnovationIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const TechnologyIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="9" y="9" width="6" height="6" />
  </svg>
);

const SupportIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const QualityIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

/* =======================
   ABOUT SECTION
======================= */

export default function AboutSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const cardRefs = useRef([]);
const router =useRouter()
  useEffect(() => {
    const ctx = gsap.context(() => {

      // Initial states
      gsap.set([titleRef.current, textRef.current], {
        opacity: 0,
        y: -40,
      });

      gsap.set(buttonRef.current, {
        opacity: 0,
        y: 40,
      });

      const fromCorners = [
        { x: -80, y: -80 },
        { x: 80, y: -80 },
        { x: -80, y: 80 },
        { x: 80, y: 80 },
      ];

      cardRefs.current.forEach((card, i) => {
        gsap.set(card, {
          opacity: 0,
          ...fromCorners[i],
        });
      });

    ScrollTrigger.create({
  trigger: sectionRef.current,
  start: "top 70%",
  onEnter: () => {
    const tl = gsap.timeline();

    tl.to([titleRef.current, textRef.current], {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.15,
    })
      .to(
        buttonRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.3"
      )
      .to(
        cardRefs.current,
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15,
        },
        "-=0.2"
      );
  },

  // 🔥 THIS IS THE KEY
  onLeaveBack: () => {
    gsap.set([titleRef.current, textRef.current], {
      opacity: 0,
      y: -40,
    });

    gsap.set(buttonRef.current, {
      opacity: 0,
      y: 40,
    });

    const fromCorners = [
      { x: -80, y: -80 },
      { x: 80, y: -80 },
      { x: -80, y: 80 },
      { x: 80, y: 80 },
    ];

    cardRefs.current.forEach((card, i) => {
      gsap.set(card, {
        opacity: 0,
        ...fromCorners[i],
      });
    });
  },
});


    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-black py-20">
      <Container>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 lg:grid-cols-[1fr_1.15fr]">
          
          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-center">
            <div ref={titleRef}>
              <SectionTitle title="About NAS Pixels" ClrGradet1="#70C879" />
            </div>

            <p
              ref={textRef}
              className="mt-6 text-sm leading-relaxed text-gray-400 md:text-base lg:text-lg"
            >
            NAS Pixels is a Dubai-based digital innovation company delivering advanced LED screen and digital signage solutions across the Middle East. Backed by strong technical expertise and proven business capabilities, we provide reliable, scalable, and performance-driven visual communication systems tailored to diverse industries.
            </p>

            <div ref={buttonRef} className="mt-8">
              <ModernButton text="More About Us" onClick={()=>router.push("/about-us")} />
            </div>
          </div>

          {/* RIGHT CARDS */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {[
            {
              title: "Innovation",
              icon: <InnovationIcon />,
              description:
"We deliver forward-looking digital display solutions that enhance communication, audience engagement, and brand visibility across diverse environments."            },
            {
              title: "Technology",
              icon: <TechnologyIcon />,
              description:
  "Our solutions are powered by advanced LED and AV technologies, ensuring high performance, long-term reliability, and scalable system design."            },
            {
              title: "Support",
              icon: <SupportIcon />,
              description:
   "We offer continuous pre- and post-deployment support to ensure seamless operation, minimal downtime, and lasting client satisfaction.",            },
            {
              title: "Quality",
              icon: <QualityIcon />,
              description:
 "Every project adheres to strict quality standards, covering design, installation, testing, and ongoing system optimization.",            },
            ].map((item, i) => (
              <AboutCard
                key={item.title}
                ref={(el) => (cardRefs.current[i] = el)}
                {...item}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
