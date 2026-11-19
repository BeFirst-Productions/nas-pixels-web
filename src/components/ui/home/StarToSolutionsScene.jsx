"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SolutionsSection from "./SolutionsSection";
import { useLanguage } from "@/context/LanguageContext";
import localFont from "next/font/local";
const abducted = localFont({
  src: "../../../../public/fonts/Itai-Abducted.ttf",
});
gsap.registerPlugin(ScrollTrigger);

export default function StarToSolutionsScene() {
  const { t } = useLanguage();
  const sceneRef = useRef(null);
  const starRef = useRef(null);
  const textRef = useRef(null);
  const imagesRef = useRef([]);
  const whiteRef = useRef(null);
  const solutionsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial setup
      gsap.set(imagesRef.current, {
        x: (i) => (i % 2 === 0 ? -100 : 100),
        y: (i) => (i < 2 ? -60 : 60),
        opacity: 1,
        scale: 1,
      });

      gsap.set(whiteRef.current, { opacity: 0 });
      gsap.set(solutionsRef.current, { opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: starRef.current,
          start: "top top",
          end: "+=400%", // Reduced from 800% to 400% - much shorter scroll distance
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      /* PHASE 1 - Initial image movement */
      tl.to(imagesRef.current, {
        x: (i) => (i % 2 === 0 ? -120 : 120),
        y: (i) => (i < 2 ? -70 : 70),
        duration: 0.8,
      });

      /* PHASE 2 - Images spread out */
      tl.to(imagesRef.current, {
        x: (i) => (i % 2 === 0 ? "-30vw" : "30vw"), // Reduced spread distance
        y: (i) => (i < 2 ? "-30vh" : "30vh"),
        scale: 0.9,
        duration: 0.8,
      });

      /* PHASE 3 - Text zoom (shorter duration) */
      tl.to(textRef.current, {
        scale: 19,
        transformOrigin: "center center",
        duration: 1.2,
      });

      /* PHASE 4 - White reveal & fade images SIMULTANEOUSLY */
      tl.to(whiteRef.current, {
        opacity: 1,
        duration: 0.6,
      }, "-=0.4") // Start earlier, no overlap gap

        .to(imagesRef.current, {
          opacity: 0,
          duration: 0.6,
        }, "<"); // Start at the same time as white reveal

      /* PHASE 5 - IMMEDIATE solutions reveal (no hold duration) */
      tl.to(whiteRef.current, {
        opacity: 0,
        duration: 0.6,
      }, "-=0.2") // Start white fade immediately after peak

        .to(solutionsRef.current, {
          opacity: 1,
          duration: 0.6,
        }, "<"); // Solutions appear as white fades out

    }, sceneRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sceneRef} className="relative w-full">
      <div
        ref={starRef}
        className="relative h-screen w-full flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-black z-0">
          {/* Green Pixel Background */}
          <div
            className="absolute inset-0 opacity-40 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right, #70C879 1px, transparent 1px), linear-gradient(to bottom, #70C879 1px, transparent 1px)`,
              backgroundSize: '20px 20px',
              maskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
              WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
            }}
          />
        </div>

        {/* Images */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          {[1, 2, 3, 4].map((_, i) => (
            <div
              key={i}
              ref={(el) => (imagesRef.current[i] = el)}
              className="absolute w-40 h-28 md:w-52 md:h-36"
            >
              <img
                src={`/assets/images/solutions/${i + 1}.png`}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Text */}
        <div
          ref={textRef}
          className="relative z-20 text-center font-extrabold tracking-tight leading-none text-white"
        >
          <div className={`${abducted.className} text-[12vw] md:text-[10vw]`}>{t("scene.startA", "START A")}</div>
          <div className={`${abducted.className} text-[12vw] md:text-[10vw]`}>{t("scene.project", "PROJECT")}</div>
        </div>

        {/* WHITE OVERLAY */}
        <div
          ref={whiteRef}
          className="pointer-events-none absolute inset-0 bg-white z-30"
        />

        {/* SOLUTIONS SECTION */}
        <div
          ref={solutionsRef}
          className="absolute inset-0 z-40 overflow-hidden bg-white"
        >
          <SolutionsSection />
        </div>
      </div>
    </section>
  );
}
