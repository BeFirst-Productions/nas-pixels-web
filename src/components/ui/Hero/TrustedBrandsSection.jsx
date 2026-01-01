"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import SectionTitle from "@/components/common/Headers/SectionTitle";
import Container from "@/components/common/Layout/Container";
import Image from "next/image";

/**
 * INTERVAL-BASED INFINITE MARQUEE (FIXED CURVE)
 * - Interval sliding (slide → rest)
 * - Infinite & seamless
 * - Correct logo alignment
 * - Gentle curved illusion (no misplacement)
 * - Pause on hover
 */

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

// SAFE, REPEATING ARC (px)
const ARC_Y = [-6, -3, 0, 3, 6, 3, 0, -3];

export default function TrustedBrandsSection() {
  const trackRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const totalWidth = track.scrollWidth / 2;
    const STEP_DISTANCE = totalWidth / BRANDS.length;

    const MOVE_DURATION = 0.9;
    const PAUSE_DURATION = 1.3;

    const tl = gsap.timeline({
      repeat: -1,
      defaults: { ease: "power2.inOut" },
    });

    for (let i = 0; i < BRANDS.length * 2; i++) {
      tl.to(track, {
        x: `-=${STEP_DISTANCE}`,
        duration: MOVE_DURATION,
        modifiers: {
          x: (x) => `${parseFloat(x) % totalWidth}px`,
        },
      }).to({}, { duration: PAUSE_DURATION });
    }

    timelineRef.current = tl;
    return () => tl.kill();
  }, []);

  const pause = () => timelineRef.current?.pause();
  const play = () => timelineRef.current?.play();

  return (
    <section className="relative w-full bg-black py-16 md:py-24 overflow-hidden">
      <Container>
        {/* Heading */}
        <div className="w-full flex justify-center mb-12">
          <SectionTitle title="Our Trusted Partners" ClrGradet1="#70C879" />
        </div>

        {/* Pill Container */}
        <div
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
                  className="flex items-center justify-center flex-shrink-0 w-[120px] md:w-[140px]"
                  style={{
                    transform: `translateY(${y}px)`,
                  }}
                >
                  <Image
                    src={brand.src}
                    alt={brand.name}
                    width={100}
                    height={60}
                    className="object-contain grayscale hover:grayscale-0 transition"
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
