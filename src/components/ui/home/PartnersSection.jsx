"use client";

import SectionTitle from '@/components/common/Headers/SectionTitle';
import Container from '@/components/common/Layout/Container';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger);

const BRANDS = [
  { name: "miras", src: "/assets/images/partners/partner-1.png" },
  { name: "DUBAI COURTS", src: "/assets/images/partners/partner-2.png" },
  { name: "atrium", src: "/assets/images/partners/partner-3.png" },
  { name: "EMAAR", src: "/assets/images/partners/partner-4.png" },
  { name: "Yas Asset Management", src: "/assets/images/partners/partner-5.png" },
  { name: "MAJID AL FUTTAIM", src: "/assets/images/partners/partner-6.png" },
  { name: "flynas", src: "/assets/images/partners/partner-7.png" },
  { name: "ALSHAYA GROUP", src: "/assets/images/partners/partner-8.png" },
  { name: "Deerfields MAll", src: "/assets/images/partners/partner-9.png" },
  { name: "Global Village", src: "/assets/images/partners/partner-10.png" },
  { name: "Saudio", src: "/assets/images/partners/partner-11.png" },
  { name: "ADNOC", src: "/assets/images/partners/partner-12.png" },
  { name: "The Avenues", src: "/assets/images/partners/partner-13.png" },
  { name: "Sheich Zayed Festival", src: "/assets/images/partners/partner-14.png" },
  { name: "sewa international", src: "/assets/images/partners/partner-15.png" },
  { name: "THE DUBAI MALL", src: "/assets/images/partners/partner-16.png" },
  { name: "MIRAL", src: "/assets/images/partners/partner-17.png" },
  { name: "MIRA DEVELOPMENTS", src: "/assets/images/partners/partner-18.png" },
  { name: "gym Nation", src: "/assets/images/partners/partner-19.png" },
  { name: "Emirates", src: "/assets/images/partners/partner-20.png" },
  { name: "DUBAI POLICE", src: "/assets/images/partners/partner-21.png" },
  { name: "Bawabat Al Sharq Mall", src: "/assets/images/partners/partner-22.png" },
  { name: "AL YOUSUF", src: "/assets/images/partners/partner-23.png" },
  { name: "Al Khyma Mall", src: "/assets/images/partners/partner-24.png" },
  { name: "ALDAR", src: "/assets/images/partners/partner-25.png" },
  { name: "AHMED", src: "/assets/images/partners/partner-26.png" },
  { name: "REEF", src: "/assets/images/partners/partner-27.png" },
  { name: "Dubai International Financial Cenetre", src: "/assets/images/partners/partner-28.png" },
  { name: "DUBAI FITNESS CHALLENGE", src: "/assets/images/partners/partner-29.png" },
];

/* Gentle curvature */
const ARC_Y = [-6, -3, 0, 3, 6, 3, 0, -3];

const PartnersSection = () => {
      const sectionRef = useRef(null);
        const titleRef = useRef(null);
  const pillRef = useRef(null);
  const trackRef = useRef(null);
  const logoRefs = useRef([]);
  const marqueeTl = useRef(null);
    
      useEffect(()=>{
      const ctx = gsap.context(() => {
      
              gsap.set(titleRef.current, { y: -40, autoAlpha: 0 });
                 gsap.set(pillRef.current, { y: 60, autoAlpha: 0 });
                 gsap.set(logoRefs.current, { y: 40, autoAlpha: 0 });
           
                 const introTl = gsap.timeline({
                   scrollTrigger: {
                     trigger: sectionRef.current,
                     start: "top 75%",
                     toggleActions: "play none none reset",
                   },
                 });
           
                 introTl
                   // Title from top
                   .to(titleRef.current, {
                     y: 0,
                     autoAlpha: 1,
                     duration: 0.8,
                     ease: "power3.out",
                   })
           
                   // Pill from bottom
                   .to(
                     pillRef.current,
                     {
                       y: 0,
                       autoAlpha: 1,
                       duration: 0.9,
                       ease: "power3.out",
                     },
                     "-=0.4"
                   )
           
                   // Logos staggered in
                   .to(
                     logoRefs.current,
                     {
                       y: 0,
                       autoAlpha: 1,
                       duration: 0.6,
                       ease: "power3.out",
                       stagger: {
                         each: 0.08,
                         from: "start",
                       },
                       onComplete: startMarquee,
                     },
                     "-=0.2"
                   );
          }, sectionRef);
      
          return () => ctx.revert();
        }, []);

          /* ---------------- MARQUEE (STARTS AFTER INTRO) ---------------- */
          const startMarquee = () => {
            if (marqueeTl.current) return;
        
            const track = trackRef.current;
            if (!track) return;
        
            const totalWidth = track.scrollWidth / 2;
            const STEP_DISTANCE = totalWidth / BRANDS.length;
        
            marqueeTl.current = gsap.timeline({
              repeat: -1,
              defaults: { ease: "power2.inOut" },
            });
        
            for (let i = 0; i < BRANDS.length * 2; i++) {
              marqueeTl.current
                .to(track, {
                  x: `-=${STEP_DISTANCE}`,
                  duration: 0.9,
                  modifiers: {
                    x: (x) => `${parseFloat(x) % totalWidth}px`,
                  },
                })
                .to({}, { duration: 1.2 });
            }
          };
        
          const pause = () => marqueeTl.current?.pause();
          const play = () => marqueeTl.current?.play();
  return (
      <section
      ref={sectionRef}
      className="relative w-full overflow-hidden py-16 md:py-20"
    >
             {/* BASE GRADIENT */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#000000_-7%,#2FBD61_62%,#16572D_22%,#2FBD61_58%,#000000_100%)]" />
  <Container>
        {/* Heading */}
        <div
          ref={titleRef}
          className="w-full flex justify-center mb-8 "
        >
          <SectionTitle title="Our Trusted Partners" ClrGradet1="#70C879" />
        </div>

        {/* Pill Container */}
        <div
          ref={pillRef}
          className="
            relative mx-auto
            max-w-7xl
          
            bg-white
            rounded-[28px]
            py-6 md:py-8
            px-4 md:px-10
            shadow-xl
            overflow-hidden
          "
          onMouseEnter={pause}
          onMouseLeave={play}
        >
          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[rgba(112,200,121,0.35)] via-[rgba(112,200,121,0.15)] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[rgba(112,200,121,0.35)] via-[rgba(112,200,121,0.15)] to-transparent z-10" />

          {/* Track */}
          <div
            ref={trackRef}
            className="flex gap-6 md:gap-10 will-change-transform items-center mb-5"
          >
            {[...BRANDS, ...BRANDS].map((brand, index) => {
              const y = ARC_Y[index % ARC_Y.length];

              return (
                <div
                  key={index}
                  ref={(el) => (logoRefs.current[index] = el)}
                  className="flex items-center justify-center flex-shrink-0 w-[120px] md:w-[140px]"
                  style={{ transform: `translateY(${y}px)` }}
                >
                  <Image
                    src={brand.src}
                    alt={brand.name}
                    width={100}
                    height={60}
                    className="object-cover  transition"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default PartnersSection
