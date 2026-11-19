"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SolutionCard from "./SolutionCard";
import { solutions } from "@/data/solutionsData";
import PillerAnimation from "../../animation/PillerAnimation";
import Container from "../../common/layout/Container";
import { useLanguage } from "@/context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

export default function SolutionsSection() {
  const { t } = useLanguage();
  const cardsRef = useRef([]);

  useEffect(() => {
    // Title animation
    gsap.from(".solutions-title", {
      opacity: 0,
      y: 60,
      duration: 1,
      scrollTrigger: {
        trigger: ".solutions-title",
        start: "top 80%",
      },
    });

    // Card animations
    cardsRef.current.forEach((card, i) => {
      const fromX = i % 2 === 0 ? -50 : 50;

      gsap.fromTo(
        card,
        { x: fromX, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section className="relative py-10 md:py-20  overflow-hidden">
      <PillerAnimation />
      <Container>
        <div className="absolute max-w-7xl mx-auto inset-0 bg-gradient-to-b from-[#70C879]/10 to-transparent blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="solutions-title text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              {t("solutionsPage.heading", "Integrated Visual, Digital & AV Solutions")}
            </h2>
            <p className="text-white/70 mt-4 max-w-3xl mx-auto">
              NAS PIXELS delivers immersive technology solutions that transform
              spaces, elevate experiences and empower communication.
            </p>
          </div>

          <div className="grid gap-10">
            {solutions.map((item, i) => (
              <SolutionCard
                key={i}
                data={item}
                index={i}
                ref={(el) => (cardsRef.current[i] = el)}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
