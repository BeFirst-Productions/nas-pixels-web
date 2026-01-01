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
  /* ---------------- TESTIMONIAL STATE ---------------- */
  const [index, setIndex] = useState(0);
  const cardRef = useRef(null);
  const timerRef = useRef(null);

const animateCard = (direction = 1) => {
  const el = cardRef.current;

  // Lock height before changing content to avoid layout jump
  const height = el.offsetHeight;
  el.style.height = height + "px";

  gsap.fromTo(
    el,
    { x: direction * 60, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power3.out",
      clearProps: "height", // unlock height after animation
    }
  );
};


  const next = () => {
    setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    animateCard(1);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? TESTIMONIALS.length - 1 : prev - 1
    );
    animateCard(-1);
  };

  useEffect(() => {
    timerRef.current = setInterval(next, 2000);
    return () => clearInterval(timerRef.current);
  }, []);

  /* ---------------- FAQ STATE ---------------- */
  const [openIndex, setOpenIndex] = useState(null);

  const faqSectionRef = useRef(null);
  const faqCardRef = useRef(null);
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

  /* ---------------- FAQ ENTRY ANIMATION ---------------- */
useEffect(() => {
  const ctx = gsap.context(() => {

    // Initial state (ONLY ONCE)
    gsap.set(faqCardRef.current, {
      y: 100,
      scale: 0.9,
      autoAlpha: 0,
    });

    gsap.set(faqTitleRef.current, {
      y: -40,
      autoAlpha: 0,
    });

    gsap.set(faqItemsRef.current, {
      x: window.innerWidth,
      autoAlpha: 0,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: faqSectionRef.current,
        start: "top 75%",
        end: "bottom 25%",
        toggleActions: "restart none restart none",
      },
    });

    tl.to(faqCardRef.current, {
      y: 0,
      scale: 1,
      autoAlpha: 1,
      duration: 0.9,
      ease: "power3.out",
    })
      .to(faqTitleRef.current, {
        y: 0,
        autoAlpha: 1,
        duration: 0.5,
        ease: "power3.out",
      })
      .to(faqItemsRef.current, {
        x: 0,
        autoAlpha: 1,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.15,
      });

  }, faqSectionRef);

  return () => ctx.revert();
}, []);


  /* ---------------- FAQ TOGGLE ANIMATION ---------------- */
  useEffect(() => {
    answerRefs.current.forEach((el, idx) => {
      if (!el) return;

      gsap.to(el, {
        height: openIndex === idx ? "auto" : 0,
        opacity: openIndex === idx ? 1 : 0,
        duration: 0.4,
        ease: "power3.out",
      });
    });
  }, [openIndex]);

  return (
    <section className="relative w-full overflow-hidden">
      {/* SHARED BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/assets/images/testimonials/testimonial-bg.png"
          alt="Testimonials & FAQ background"
          fill
          className="object-cover object-center"
        />
      </div>

      {/* ================= TESTIMONIALS ================= */}
      <Container className="relative z-10 py-16 sm:py-20 md:py-24">
        <div className="mb-7 md:mb-24">
          <SectionTitle title="Testimonials" />
        </div>

        <div
          className="relative flex flex-col items-center"
          onMouseEnter={() => clearInterval(timerRef.current)}
          onMouseLeave={() =>
            (timerRef.current = setInterval(next, 5000))
          }
        >
          {/* Desktop */}
          <div className="hidden md:flex items-center justify-center gap-6 w-full">
            <ArrowButton direction="left" onClick={prev} />
            <div ref={cardRef}>
              <TestimonialCard data={TESTIMONIALS[index]} />
            </div>
            <ArrowButton direction="right" onClick={next} />
          </div>

          {/* Mobile */}
          <div className="mt-6 w-full flex flex-col items-center md:hidden">
            <div ref={cardRef}>
              <TestimonialCard data={TESTIMONIALS[index]} />
            </div>
            <div className="flex gap-10 mt-6">
              <ArrowButton direction="left" onClick={prev} />
              <ArrowButton direction="right" onClick={next} />
            </div>
          </div>
        </div>
      </Container>

      {/* ================= FAQ ================= */}
      <section ref={faqSectionRef} className="relative z-10 py-12 lg:pb-24 lg:pt-36 overflow-hidden">
     <Container>
            <div
            id="faq"
            //   ref={cardRef}
              className=" mx-w-7xl mx-auto bg-transparent rounded-3xl  pt-6 pb-10 sm:pb-24"
            >
              <div ref={faqTitleRef} className="pb-7">
                <SectionTitle title="FAQ" ClrGradet1="#70C879" />
              </div>
    
              <div className="space-y-3">
                {faqs.map((item, idx) => (
                  <div
                    key={idx}
                    ref={(el) => (faqItemsRef.current[idx] = el)}
                    className="rounded-2xl border-2 border-[#70C879] border-dotted w-full max-w-[1050px] mx-auto"
                  >
                    <button
                      onClick={() =>
                        setOpenIndex(openIndex === idx ? null : idx)
                      }
                      className="w-full py-3 md:h-[64px] flex items-center justify-between px-5 sm:px-6 text-left text-white text-sm sm:text-base"
                    >
                      <span className="pr-4 leading-relaxed">{item.q}</span>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${
                          openIndex === idx ? "rotate-180" : ""
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
