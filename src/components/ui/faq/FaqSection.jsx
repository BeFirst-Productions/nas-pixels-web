"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import SectionTitle from "@/components/common/Headers/SectionTitle";
import Container from "@/components/common/Layout/Container";

gsap.registerPlugin(ScrollTrigger);

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const titleRef = useRef(null);
  const faqItemsRef = useRef([]);
  const answerRefs = useRef([]);

  const faqs = [
    {
      q: "Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est",
      a: "dictum est a, mattis tellus.",
    },
    {
      q: "Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est",
      a: "dictum est a, mattis tellus.",
    },
    {
      q: "Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est",
      a: "dictum est a, mattis tellus.",
    },
    {
      q: "Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est",
      a: "dictum est a, mattis tellus.",
    },
    {
      q: "Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est",
      a: "dictum est a.",
    },
  ];

  /* ---------------- SECTION ENTRY ANIMATION ---------------- */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const setInitial = () => {
        gsap.set(cardRef.current, { y: 100, scale: 0.9, autoAlpha: 0 });
        gsap.set(titleRef.current, { y: -40, autoAlpha: 0 });
        gsap.set(faqItemsRef.current, {
          x: () => window.innerWidth,
          autoAlpha: 0,
        });
      };

      setInitial();

      const tl = gsap.timeline({ paused: true });

      tl.to(cardRef.current, {
        y: 0,
        scale: 1,
        autoAlpha: 1,
        duration: 1,
        ease: "power3.out",
      });

      tl.to(titleRef.current, {
        y: 0,
        autoAlpha: 1,
        duration: 0.6,
        ease: "power3.out",
      });

      tl.to(faqItemsRef.current, {
        x: 0,
        autoAlpha: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
      });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 75%",
        end: "bottom 25%",
        onEnter: () => {
          setInitial();
          tl.restart();
        },
        onEnterBack: () => {
          setInitial();
          tl.restart();
        },
        onLeave: () => {
          setInitial();
          tl.pause(0);
        },
        onLeaveBack: () => {
          setInitial();
          tl.pause(0);
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* ---------------- FAQ OPEN / CLOSE ANIMATION ---------------- */
  useEffect(() => {
    answerRefs.current.forEach((el, idx) => {
      if (!el) return;

      if (openIndex === idx) {
        gsap.to(el, {
          height: "auto",
          opacity: 1,
          duration: 0.45,
          ease: "power3.out",
        });
      } else {
        gsap.to(el, {
          height: 0,
          opacity: 0,
          duration: 0.35,
          ease: "power3.inOut",
        });
      }
    });
  }, [openIndex]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-12 lg:pb-24 lg:pt-36 overflow-hidden"
    >
      {/* Background gradient */}
      <div
        className="absolute left-1/2 -translate-x-1/2 -top-[120px] sm:-top-[80px] md:-top-[40px] lg:-top-0 -z-10 rounded-full blur-[60px] scale-[0.6] sm:scale-[0.75] md:scale-[0.9] lg:scale-100"
        style={{
          width: "580.66px",
          height: "670px",
          backgroundImage:
            "linear-gradient(107deg, rgba(0,0,0,1) 0%, rgba(117,195,120,1) 100%)",
        }}
      />

      <Container>
        <div
          ref={cardRef}
          className="bg-[#18572E] rounded-3xl px-6 sm:px-10 pt-6 pb-10 sm:pb-24"
        >
          <div ref={titleRef} className="pb-7">
            <SectionTitle title="FAQ" ClrGradet1="#70C879" />
          </div>

          <div className="space-y-3">
            {faqs.map((item, idx) => (
              <div
                key={idx}
                ref={(el) => (faqItemsRef.current[idx] = el)}
                className="rounded-2xl border border-[#70C879]/40 bg-[#2F6E3A] w-full max-w-[1050px] mx-auto"
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
  );
}
