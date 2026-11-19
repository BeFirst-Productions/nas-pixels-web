"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProductsSection from "../ui/home/ProductsSection";
import { Zen_Dots } from "next/font/google";
import { useLanguage } from "@/context/LanguageContext";
const zenDots = Zen_Dots({
  subsets: ["latin"],
  weight: "400",
});
gsap.registerPlugin(ScrollTrigger);

export default function AnimateScrollVideo({ media }) {
  const { t } = useLanguage();
  const rootRef = useRef(null);
  const videoRef = useRef(null);
  const textRef = useRef(null);
  const revealRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.refresh();

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "+=350%",
          scrub: true,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
        },
      });

      tl.to(videoRef.current, {
        width: "100vw",
        height: "100vh",
        borderRadius: 0,
        ease: "power2.out",
      }, 0);

      tl.to(textRef.current, {
        y: -140,
        opacity: 0,
        ease: "power3.out",
      }, 0.1);

      tl.fromTo(
        revealRef.current,
        { y: "100%" },
        { y: "0%", ease: "power3.out" },
        0.55
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={rootRef}
        className="relative h-screen bg-black overflow-hidden"
      >
        {/* VIDEO */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div
            ref={videoRef}
            className="w-[320px] h-[320px] rounded-2xl overflow-hidden"
          >
            <video
              src={media.mp4}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* HERO TEXT */}
        <div
          ref={textRef}
          className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center pointer-events-none"
        >
          <h1 className={`${zenDots.className} text-white text-5xl md:text-8xl font-bold`}>
            {t("scrollVideo.heading", "Display the Future")}
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mt-4 max-w-2xl">
            {t("scrollVideo.subtitle", "Advanced LED display solutions for powerful, immersive visual experiences.")}
          </p>
        </div>

        {/* PRODUCTS REVEAL — desktop only */}
        <div
          ref={revealRef}
          className="hidden md:block absolute inset-0 z-30 bg-black  min-h-screen"
        >
          <ProductsSection />
        </div>
      </section>

      {/* Mobile Products (single instance) */}
      <div className="block md:hidden bg-black">
        <ProductsSection />
      </div>
    </>
  );
}
