"use client";

import { useEffect, useRef, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import ArrowButton from "./ArrowButton";
import Container from "@/components/common/Layout/Container";
import SectionTitle from "@/components/common/Headers/SectionTitle";
import Image from "next/image";
import gsap from "gsap";
import { TESTIMONIALS } from "@/data/TestimonialsSection";

export default function TestimonialsSection() {
    const [index, setIndex] = useState(0);
  const cardRef = useRef(null);
  const timerRef = useRef(null);
  
  const animateCard = (direction = 1) => {
    gsap.fromTo(
      cardRef.current,
      { x: direction * 60, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
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

  /* Auto scroll */
  useEffect(() => {
    timerRef.current = setInterval(next, 5000);
    return () => clearInterval(timerRef.current);
  }, []);
  return (
    <section className="relative w-full py-16 sm:py-20 md:py-24 overflow-hidden">
      
              <div className="absolute hidden md:block -top-10 lg:top-0 right-0 z-0 pointer-events-none">
                <Image
                  src="/assets/images/shapes/footerCircuit.png"
                  alt="Circuit Connections"
                  width={351}
                  height={276}
                  className="
            opacity-100
            w-[250px] 
            lg:w-[351px]
            h-auto
          "
                />
              </div>
              {/* Background Image */}
<div className="absolute inset-0 z-0 pointer-events-none">
  <Image
    src="/assets/images/testimonials/testimonial-bg.png"
    alt="Testimonials background"
    fill
    priority={false}
    className="
      object-cover
      object-center
      select-none
    "
  />
</div>

      <Container className="relative z-10">
<div className="mx-auto max-w-7xl">

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

            <div className="flex items-center justify-center gap-10 mt-6">
              <ArrowButton direction="left" onClick={prev} />
              <ArrowButton direction="right" onClick={next} />
            </div>
          </div>

        </div>
</div>

      </Container>
    </section>
  );
}
