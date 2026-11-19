"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionTitle from "@/components/common/Headers/SectionTitle";
import Container from "@/components/common/Layout/Container";
import { ModernButton } from "@/components/common/Button/ModernButton";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

const SOLUTIONS = [
  { title: "Events & Exhibitions", image: "/assets/images/solutions/solution1.png" },
  { title: "Government & Corporate", image: "/assets/images/solutions/solution2.png" },
  { title: "Hospitality & Entertainment", image: "/assets/images/solutions/solution3.png" },
  { title: "Education & Conference", image: "/assets/images/solutions/solution4.png" },
  { title: "Transportation & Airports", image: "/assets/images/solutions/solution5.png" },
  { title: "Retail & Shopping Malls", image: "/assets/images/solutions/solution6.png" },
];

export default function SolutionsSection() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const titleWrapRef = useRef(null);
  const descRef = useRef(null);
  const cardsRef = useRef([]);
  const [active, setActive] = useState(0);
  const router = useRouter();

  /* ================= EXISTING FLEX ANIMATION (UNCHANGED) ================= */
  useEffect(() => {
    if (window.innerWidth < 1024) return;

    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      gsap.to(card, {
        flexGrow: i === active ? 3.2 : 1,
        duration: 0.8,
        ease: "power3.out",
      });
    });
  }, [active]);

  /* ================= NEW VIEW-BASED ANIMATIONS ================= */
  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Initial states */
      gsap.set(titleWrapRef.current, { y: -60, opacity: 0 });
      gsap.set(descRef.current, { y: -40, opacity: 0 });

      gsap.set(cardsRef.current, {
        opacity: 0,
        z: -200,
        scale: 0.9,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reset", // 🔁 replays every time
        },
      });

      /* Title + description */
      tl.to(titleWrapRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      })
        .to(
          descRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5"
        )

        /* Cards from back → front */
        .to(
          cardsRef.current,
          {
            opacity: 1,
            z: 0,
            scale: 1,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.15, // 👈 interval animation
          },
          "-=0.3"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleRedirect = () => {
    router.push("/solutions");
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full  py-16 lg:py-20 overflow-hidden"
    >
      <Container>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-12">

          {/* ================= TITLE + DESCRIPTION ================= */}
          <div className="lg:col-span-12">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-16">
              <div ref={titleWrapRef} className="flex-shrink-0">
                <SectionTitle title={t("solutions.title", "Solutions")} className="text-black" />
              </div>

              <p
                ref={descRef}
                className="text-gray-700 leading-relaxed max-w-xl lg:text-right"
              >
                {t("solutions.description", "Advanced visual solutions engineered to improve communication, elevate engagement, and deliver consistent performance across industries.")}
              </p>
            </div>
          </div>

          {/* ================= CARDS ================= */}
          <div className="lg:col-span-12 mt-6">

            {/* DESKTOP */}
            <div className="hidden lg:flex h-[460px] gap-4">
              {SOLUTIONS.map((item, index) => {
                const itemTitle = t(`solutions.items.${index}.title`, item.title);
                return (
                  <div
                    key={index}
                    ref={(el) => (cardsRef.current[index] = el)}
                    onMouseEnter={() => setActive(index)}
                    onClick={handleRedirect}
                    className="relative flex-grow overflow-hidden rounded-2xl cursor-pointer group border-2 border-[#70C879]"
                    style={{ flexGrow: index === 0 ? 3.2 : 1 }}
                  >
                    <Image
                      src={item.image}
                      alt={itemTitle}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {active === index ? (
                      <div className="absolute bottom-4 left-4 bg-[#1E293B] border border-[#70C879] text-white px-5 py-2 rounded-full text-sm">
                        {itemTitle}
                      </div>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="bg-[#1E293B] border border-[#70C879] text-white text-sm px-4 py-2 rounded-full rotate-90 whitespace-nowrap">
                          {itemTitle}
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* MOBILE */}
            <div className="lg:hidden flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
              {SOLUTIONS.map((item, index) => {
                const itemTitle = t(`solutions.items.${index}.title`, item.title);
                return (
                  <div
                    key={index}
                    onClick={handleRedirect}
                    className="relative min-w-[280px] h-[360px] snap-center overflow-hidden rounded-2xl"
                  >
                    <Image src={item.image} alt={itemTitle} fill className="object-cover" />
                    <div className="absolute bottom-4 left-4 bg-[#1E293B] border border-[#70C879] text-white px-4 py-2 rounded-full text-sm">
                      {itemTitle}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

        {/* ================= CTA ================= */}
        <div className="mt-10 md:mt-12 flex justify-center">
          <ModernButton
            text={t("solutions.exploreButton", "Explore Solutions")}
            arrowClr="#000000"
            onClick={handleRedirect}
          />
        </div>
      </Container>
    </section>
  );
}
