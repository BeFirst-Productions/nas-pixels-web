"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import SectionTitle from "@/components/common/Headers/SectionTitle";
import Container from "@/components/common/Layout/Container";
import { FEATURES } from "@/data/featuresData";

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUs() {
  const [openIndex, setOpenIndex] = useState(null);

  const sectionRef = useRef(null);
  const titleBlockRef = useRef(null);
  const imageRef = useRef(null);
  const featureRefs = useRef([]);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  /* ================= GSAP SCROLL ANIMATION ================= */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(featureRefs.current, {
        x: 120,       // slightly more distance
        opacity: 0,
      });

      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "center center",
          scrub: 1.5,                // ⬅ slower scroll response
          toggleActions: "play reverse play reverse",
        },
      })
        .from(titleBlockRef.current, {
          y: -120,
          opacity: 0,
          duration: 1.2,             // ⬅ slower
          ease: "power2.out",
        })
        .from(
          imageRef.current,
          {
            y: 120,
            scale: 0.85,
            opacity: 0,
            duration: 1.3,           // ⬅ slower
            ease: "power2.out",
          },
          "<"
        )
        .to(
          featureRefs.current,
          {
            x: 0,
            opacity: 1,
            duration: 1.1,           // ⬅ slower per item
            stagger: 0.35,           // ⬅ slow elegant stagger
            ease: "power2.out",
          },
          "<"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);


  return (
    <section
      ref={sectionRef}
      className="w-full bg-black text-white py-16 md:py-24 overflow-hidden"
    >
      <Container>
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">

          {/* LEFT */}
          <div className="flex flex-col justify-self-center lg:justify-self-start">
            <div ref={titleBlockRef} className="mb-5">
              <SectionTitle title="Why Choose Us" />
            </div>

            <p className="text-gray-300 max-w-[520px] mb-10 text-sm md:text-base leading-relaxed">
              We supply high-performance commercial display solutions built for clarity, reliability, and long-term use. From offices and retail spaces to control rooms and large installations, our screens are designed to deliver consistent visual impact. With certified products, expert installation, and responsive after-sales support, we ensure your display systems perform at their best.
            </p>

            <div
              ref={imageRef}
              className="max-w-[600px] border-2 border-dashed border-[#70C879] rounded-[18px] p-[6px]"
            >
              <div className="relative aspect-[517/321] rounded-[14px] overflow-hidden">
                <Image
                  src="/assets/images/whyChoose/why-choose-us.png"
                  alt="Why Choose Us"
                  fill
                  className="object-cover p-2 rounded-xl hover:scale-105 transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-full max-w-[500px] flex flex-col justify-self-center lg:justify-self-end">
            <div className="flex flex-col gap-4 flex-1 justify-end">
              {FEATURES.map((item, idx) => {
                const isOpen = openIndex === idx;

                return (
                  <div
                    key={idx}
                    ref={(el) => (featureRefs.current[idx] = el)}
                    className="rounded-[14px] border-2 border-dashed border-[#70C879]"
                  >
                    <button
                      onClick={() => toggle(idx)}
                      className="w-full flex items-center justify-between px-5 py-[14px] text-left"
                    >
                      <div className="flex items-center gap-3">
                        <div className="relative w-9 h-9 flex-shrink-0">
                          <Image
                            src={item.icon}
                            alt={item.title}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <span className="font-medium text-sm md:text-base">
                          {item.title}
                        </span>
                      </div>
                      <span className="text-white text-xl font-light">
                        {isOpen ? "×" : "+"}
                      </span>
                    </button>

                    <div
                      className={`grid overflow-hidden transition-all duration-500 ease-in-out ${isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                        }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-5 pb-5 text-gray-300 text-sm leading-relaxed">
                          {item.description}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
