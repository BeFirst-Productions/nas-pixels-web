"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionTitle from "@/components/common/Headers/SectionTitle";
import Container from "@/components/common/layout/Container";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

/* ---------------- DATA ---------------- */

const BRANDS = [
  { name: "ADCB", src: "/assets/images/partners/pr-1.png" },
  { name: "ACA", src: "/assets/images/partners/pr-2.png" },
  { name: "ACE Hardware", src: "/assets/images/partners/pr-3.png" },
  { name: "ADNOC", src: "/assets/images/partners/pr-4.png" },
  { name: "Al Rams", src: "/assets/images/partners/pr-5.png" },
  { name: "Al Fandi", src: "/assets/images/partners/pr-6.png" },
  { name: "Al Hamra", src: "/assets/images/partners/pr-7.png" },
  { name: "Al Futtaim", src: "/assets/images/partners/pr-8.png" },
  { name: "Al Futtaim", src: "/assets/images/partners/pr-9.png" },
  { name: "Al Futtaim", src: "/assets/images/partners/pr-10.png" },
  { name: "Al Futtaim", src: "/assets/images/partners/pr-11.png" },
  { name: "Al Futtaim", src: "/assets/images/partners/pr-12.png" },
  { name: "Al Futtaim", src: "/assets/images/partners/pr-13.png" },
  { name: "Al Futtaim", src: "/assets/images/partners/pr-14.png" },
  { name: "Al Futtaim", src: "/assets/images/partners/pr-15.png" },
  { name: "Al Futtaim", src: "/assets/images/partners/pr-16.png" },
  { name: "Al Futtaim", src: "/assets/images/partners/pr-17.png" },
  { name: "Al Futtaim", src: "/assets/images/partners/pr-18.png" },
  { name: "Al Futtaim", src: "/assets/images/partners/pr-19.png" },
  { name: "Al Futtaim", src: "/assets/images/partners/pr-20.png" },
  { name: "Al Futtaim", src: "/assets/images/partners/pr-21.png" },
  { name: "Al Futtaim", src: "/assets/images/partners/pr-22.png" },
  { name: "Al Futtaim", src: "/assets/images/partners/pr-23.png" },
  { name: "Al Futtaim", src: "/assets/images/partners/pr-24.png" },
  { name: "Al Futtaim", src: "/assets/images/partners/pr-25.png" },
  { name: "Al Futtaim", src: "/assets/images/partners/pr-26.png" },
  { name: "Al Futtaim", src: "/assets/images/partners/pr-27.png" },
  { name: "Al Futtaim", src: "/assets/images/partners/pr-28.png" },
];

/* Gentle curvature */
const ARC_Y = [-6, -3, 0, 3, 6, 3, 0, -3];

export default function TrustedBrandsSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const pillRef = useRef(null);
  const trackRef = useRef(null);
  const logoRefs = useRef([]);
  const marqueeTl = useRef(null);

  /* ---------------- ENTRANCE ANIMATION ---------------- */
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial states
      gsap.set(titleRef.current, { y: -40, autoAlpha: 0 });
      gsap.set(pillRef.current, { y: 60, autoAlpha: 0 });
      gsap.set(logoRefs.current, { y: 40, autoAlpha: 0 });

      const introTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reset",
        },
      });

      introTl
        // Title from top
        .to(titleRef.current, {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          ease: "power3.out",
        })

        // Pill from bottom
        .to(
          pillRef.current,
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.4"
        )

        // Logos staggered in
        .to(
          logoRefs.current,
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.6,
            ease: "power3.out",
            stagger: {
              each: 0.08,
              from: "start",
            },
            onComplete: startMarquee,
          },
          "-=0.2"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* ---------------- MARQUEE (STARTS AFTER INTRO) ---------------- */
  const startMarquee = () => {
    if (marqueeTl.current) return;

    const track = trackRef.current;
    if (!track) return;

    const totalWidth = track.scrollWidth / 2;
    const STEP_DISTANCE = totalWidth / BRANDS.length;

    marqueeTl.current = gsap.timeline({
      repeat: -1,
      defaults: { ease: "power2.inOut" },
    });

    for (let i = 0; i < BRANDS.length * 2; i++) {
      marqueeTl.current
        .to(track, {
          x: `-=${STEP_DISTANCE}`,
          duration: 0.9,
          modifiers: {
            x: (x) => `${parseFloat(x) % totalWidth}px`,
          },
        })
        .to({}, { duration: 1.2 });
    }
  };

  const pause = () => marqueeTl.current?.pause();
  const play = () => marqueeTl.current?.play();

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black py-16 md:py-24 overflow-hidden"
    >
      <Container>
        {/* Heading */}
        <div
          ref={titleRef}
          className="w-full flex justify-center mb-12"
        >
          <SectionTitle title="Our Trusted Partners" ClrGradet1="#70C879" />
        </div>

        {/* Pill Container */}
        <div
          ref={pillRef}
          className="
            relative mx-auto
            max-w-6xl
            border-2 border-[#70C879]
            rounded-[28px]
            py-6 md:py-8
            px-4 md:px-10
            shadow-xl
            overflow-hidden
          "
          onMouseEnter={pause}
          onMouseLeave={play}
        >
          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[rgba(112,200,121,0.35)] via-[rgba(112,200,121,0.15)] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[rgba(112,200,121,0.35)] via-[rgba(112,200,121,0.15)] to-transparent z-10" />

          {/* Track */}
          <div
            ref={trackRef}
            className="flex gap-6 md:gap-10 will-change-transform items-center"
          >
            {[...BRANDS, ...BRANDS].map((brand, index) => {
              const y = ARC_Y[index % ARC_Y.length];

              return (
                <div
                  key={index}
                  ref={(el) => (logoRefs.current[index] = el)}
                  className="flex items-center justify-center flex-shrink-0 w-[120px] md:w-[140px]"
                  style={{ transform: `translateY(${y}px)` }}
                >
                  <Image
                    src={brand.src}
                    alt={brand.name}
                    width={100}
                    height={60}
                    className="object-cover grayscale hover:grayscale-0 transition"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
