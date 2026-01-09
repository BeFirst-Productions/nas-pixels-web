"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Container from "@/components/common/Layout/Container";
import SectionTitle from "@/components/common/Headers/SectionTitle";
import { blogs } from "@/data/blogs";
import Link from "next/link";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LatestNewsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(".news-card");

    // SCROLL ANIMATION (slow + re-triggerable)
    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 120,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.8,
        stagger: 0.25,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          end: "bottom 60%",
          toggleActions: "restart none restart none",
        },
      }
    );

    // HOVER EFFECTS
    cards.forEach((card) => {
      const img = card.querySelector("img");

      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          scale: 1.03,
          y: -10,
          duration: 0.6,
          ease: "power3.out",
        });

        gsap.to(img, {
          scale: 1.15,
          duration: 1.2,
          ease: "power3.out",
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          scale: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        });

        gsap.to(img, {
          scale: 1,
          duration: 1,
          ease: "power3.out",
        });
      });
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-black text-white py-16 md:py-24 overflow-hidden"
    >
      <Container>
        {/* Header */}
        <div className="mb-14 md:mb-24 max-w-7xl mx-auto">
          <div className="mb-4">
            <SectionTitle title="Latest News" />
          </div>

          <p className="text-gray-300 text-sm md:text-[20px] max-w-2xl font-medium leading-relaxed">
            Explore updates, trends, and expert insights in digital signage, AV systems, smart automation, lighting, and content technologies.
          </p>
        </div>

        {/* Cards */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogs.map((item, idx) => (
            <Link
              key={idx}
              href={`/blog/${item.slug}`}
              className="news-card group flex flex-col gap-4 will-change-transform"
            >
              {/* IMAGE CARD */}
              <div className="w-full aspect-square border-2 border-dashed border-[#70C879] rounded-[12px] box-border">
                <div className="w-full h-full p-[10px] bg-[#0F3A22] rounded-xl box-border">
                  <div className="relative w-full h-full rounded-xl overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-[1200ms] ease-out"
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 260px, 280px"
                    />
                  </div>
                </div>
              </div>

              {/* Text */}
              <div>
                <h3 className="text-sm md:text-lg font-semibold mb-1">
                  {item.title}
                </h3>
                <p className="text-xs md:text-base font-normal text-gray-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
