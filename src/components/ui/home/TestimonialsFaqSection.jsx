"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown } from "lucide-react";

import Container from "@/components/common/Layout/Container";
import SectionTitle from "@/components/common/Headers/SectionTitle";
import { TESTIMONIALS } from "@/data/TestimonialsSection";
import TestimonialCard from "../testimonials/TestimonialCard";
import ArrowButton from "../testimonials/ArrowButton";

gsap.registerPlugin(ScrollTrigger);

export default function TestimonialsFaqSection() {
  /* ================= TESTIMONIALS ================= */
  const [index, setIndex] = useState(0);
  const cardRef = useRef(null);
  const timerRef = useRef(null);

  const slideCard = (direction = 1, callback) => {
    const el = cardRef.current;
    if (!el) return;

    const height = el.offsetHeight;
    el.style.height = height + "px";

    const tl = gsap.timeline({
      onComplete: () => {
        el.style.height = "auto";
        callback?.();
      },
    });

    tl.to(el, {
      x: -direction * 80,
      opacity: 0,
      duration: 0.45,
      ease: "power3.inOut",
    })
      .set(el, { x: direction * 80 })
      .to(el, {
        x: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
      });
  };

  const next = () => {
    slideCard(1, () => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    });
  };

  const prev = () => {
    slideCard(-1, () => {
      setIndex((i) => (i === 0 ? TESTIMONIALS.length - 1 : i - 1));
    });
  };

  useEffect(() => {
    timerRef.current = setInterval(next, 5000);
    return () => clearInterval(timerRef.current);
  }, []);

  /* ================= FAQ ================= */
  const [openIndex, setOpenIndex] = useState(null);
  const faqSectionRef = useRef(null);
  const faqTitleRef = useRef(null);
  const faqItemsRef = useRef([]);
  const answerRefs = useRef([]);

  const faqs = [
    { q: "What services do you offer in digital signage and smart technology?", a: "We provide end-to-end digital signage, AV integration, smart home automation, lighting, content creation, and ongoing support services." },
    { q: "Do you provide complete design installation content and maintenance solutions?", a: "Yes, we handle everything from concept, design, installation, content management, to long-term maintenance and support." },
    { q: "Which industries benefit most from your audiovisual and digital signage solutions?", a: "Corporate, retail, hospitality, healthcare, education, government, and residential sectors benefit from our solutions." },
    { q: "Can solutions be customized based on project requirements and available budgets?", a: "Absolutely. All solutions are tailored to client goals, technical needs, budgets, and future scalability." },
    { q: "Do you offer ongoing support and annual maintenance after project completion?", a: "Yes, we provide AMC contracts, preventive maintenance, remote monitoring, and dedicated technical support." },
  ];

  /* FAQ Entrance */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(faqTitleRef.current, { y: -40, opacity: 0 });
      gsap.set(faqItemsRef.current, { y: 60, opacity: 0 });

      gsap.timeline({
        scrollTrigger: {
          trigger: faqSectionRef.current,
          start: "top 85%",
          toggleActions: "restart none restart none",
        },
      })
        .to(faqTitleRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
        })
        .to(faqItemsRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
        }, "-=0.4");
    }, faqSectionRef);

    return () => ctx.revert();
  }, []);

  /* FAQ Toggle Animation */
  useEffect(() => {
    answerRefs.current.forEach((el, idx) => {
      if (!el) return;

      gsap.to(el, {
        height: openIndex === idx ? "auto" : 0,
        opacity: openIndex === idx ? 1 : 0,
        duration: 0.6,
        ease: "power4.out",
      });
    });
  }, [openIndex]);

  return (
    <section className="relative overflow-hidden">
      <Image
        src="/assets/images/testimonials/testimonial-bg.png"
        alt="bg"
        fill
        className="object-cover"
      />

      {/* ================= TESTIMONIALS ================= */}
      <Container className="relative z-10 py-20">
        <div className="mb-7 md:mb-24 max-w-7xl mx-auto"> <SectionTitle title="Testimonials" /> </div>
        <div
          className="flex justify-center items-center mt-12"
          onMouseEnter={() => clearInterval(timerRef.current)}
          onMouseLeave={() => (timerRef.current = setInterval(next, 5000))}
        >
          <ArrowButton direction="left" onClick={prev} />
          <div ref={cardRef} className="mx-6">
            <TestimonialCard data={TESTIMONIALS[index]} />
          </div>
          <ArrowButton direction="right" onClick={next} />
        </div>
      </Container>

      {/* ================= FAQ ================= */}
      <section
        ref={faqSectionRef}
        className="relative z-10 py-12 lg:pb-24 lg:pt-36 overflow-hidden"
      >
        <Container>
          <div
            id="faq"
            className="max-w-7xl mx-auto bg-transparent rounded-3xl pt-6 pb-10 sm:pb-24"
          >
            {/* Title */}
            <div ref={faqTitleRef} className="pb-7">
              <SectionTitle title="FAQ" ClrGradet1="#70C879" />
            </div>

            {/* FAQ Items */}
            <div className="space-y-3">
              {faqs.map((item, idx) => (
                <div
                  key={idx}
                  ref={(el) => (faqItemsRef.current[idx] = el)}
                  className="rounded-2xl border-2 border-[#70C879] border-dashed w-full max-w-[1050px] mx-auto overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === idx ? null : idx)
                    }
                    className="w-full py-3 md:h-[64px] flex items-center justify-between px-5 sm:px-6 text-left text-white text-sm sm:text-base"
                  >
                    <span className="pr-4 leading-relaxed">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${openIndex === idx ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  {/* Animated Answer */}
                  <div
                    ref={(el) => (answerRefs.current[idx] = el)}
                    className="overflow-hidden h-0 opacity-0"
                  >
                    <div className="px-5 sm:px-6 pb-5">
                      <div className="border-t border-dashed border-[#70C879]/40 mb-4" />
                      <p className="text-white/90 text-sm leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

    </section>
  );
}
