"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "@/components/common/layout/Container";

gsap.registerPlugin(ScrollTrigger);

export default function AboutNasPixels() {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);


  useEffect(() => {
    const img = imgRef.current;

    const startAnimation = () => {
      const ctx = gsap.context(() => {

        // Force image start position BEFORE animation
        gsap.set(imgRef.current, {
          x: 160,
          opacity: 0,
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play reset play reset",
          },
        });

        tl.from(".about-text", {
          x: -120,
          opacity: 0,
          duration: 1.2,
          ease: "power4.out",
        })
          .from(
            ".about-list li",
            {
              x: -40,
              opacity: 0,
              stagger: 0.15,
              duration: 0.6,
            },
            "-=0.6"
          )
          .to(
            imgRef.current,
            {
              x: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power3.out",
            },
            "-=0.4"
          )
          .from(
            ".about-border",
            {
              scaleX: 0,
              transformOrigin: "left center",
              duration: 1,
              ease: "power2.out",
            },
            "-=0.6"
          );

        gsap.to(".about-glow", {
          opacity: 0.5,
          scale: 1.2,
          repeat: -1,
          yoyo: true,
          duration: 5,
          ease: "sine.inOut",
        });

      }, sectionRef);

      return () => ctx.revert();
    };

    // If image already cached
    if (img.complete) {
      startAnimation();
    } else {
      img.addEventListener("load", startAnimation);
    }

    return () => {
      img?.removeEventListener("load", startAnimation);
    };
  }, []);


  return (
    <section ref={sectionRef} className="bg-black py-24 text-white relative overflow-hidden">
      {/* Glow */}
      <div className="about-glow absolute inset-0 bg-green-500/10 blur-[140px] rounded-full" />

      <Container>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT – TEXT */}
          <div className="about-text space-y-6">
            <h2 className="text-4xl font-bold">
              NAS PIXELS
            </h2>

            <p className="leading-relaxed">
              At <span className="text-[#70C879] font-semibold">NAS PIXELS</span>,
              we deliver innovative visual, audiovisual, and immersive technology solutions
              designed to transform spaces and enhance communication. Our commitment is to provide
              reliable, high-performance systems tailored to your needs. We look forward to creating impactful
              visual experiences together.
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-4">
                Why NAS PIXELS
              </h3>

              <ul className="about-list space-y-3">
                {[
                  "Industry-grade technology & expert execution",
                  "Custom-designed solutions for every project",
                  "End-to-end service: design, supply, installation & support",
                  "Strong regional presence with global standards",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-green-400">✔</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT – IMAGE */}
          <div className="relative about-image">
            <div className="about-border relative border-dashed border-[#70C879] border-2 rounded-2xl p-8 max-w-[420px] mx-auto">
              <img
                ref={imgRef}
                src="/assets/images/mission_vision/about-nas.png"
                alt="NAS Pixels Visual Systems"
                className="about-img w-full h-[380px] object-cover rounded-xl"
              />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
