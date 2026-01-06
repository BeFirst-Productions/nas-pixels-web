"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "@/components/common/layout/Container";
import { ModernButton } from "@/components/common/button/ModernButton";
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

export default function BottomBanner() {
  const router = useRouter();
  const sectionRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play reset play reset",
      },
    });

    tl.from(".cta-title", {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    })
      .from(
        ".cta-text",
        {
          y: 40,
          opacity: 0,
          duration: 1,
        },
        "-=0.6"
      )
      .from(
        ".cta-button",
        {
          scale: 0.8,
          opacity: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
        },
        "-=0.4"
      );

    gsap.to(".cta-glow", {
      opacity: 0.6,
      scale: 1.1,
      repeat: -1,
      yoyo: true,
      duration: 4,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-10 md:py-20 overflow-hidden"
    >
      {/* Glow background */}
      <div className="cta-glow absolute inset-0 rounded-full" />

      <Container>
        <div className="relative z-10 max-w-7xl mx-auto  border border-[#70C879] rounded-3xl px-10 py-20 text-center bg-[#06140b]">

          <h2 className="cta-title text-4xl md:text-5xl font-bold text-white mb-6">
            Let’s <span className="text-[#70C879]">Work Together</span>
          </h2>

          <p className="cta-text max-w-3xl mx-auto text-lg leading-relaxed mb-10">
            At <span className="text-[#70C879] font-semibold">NAS PIXELS</span>, we don’t just
            install technology — we create experiences. Whether you’re planning a new
            facility, upgrading your AV infrastructure, or launching an immersive brand
            experience, our team is ready to deliver.
          </p>

          <div className="cta-button inline-block">
            <ModernButton
              text="Contact Us Today"
              onClick={() => router.push("#contact")}
            />
          </div>

        </div>
      </Container>
    </section>
  );
}
