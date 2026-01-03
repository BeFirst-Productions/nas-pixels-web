"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StarProjectSection() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imagesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ============================
         INITIAL IMAGE GRID
      ============================ */
      gsap.set(imagesRef.current, {
        x: (i) => (i % 2 === 0 ? -100 : 60),
        y: (i) => (i < 2 ? -40 : 40),
        scale: 1,
        opacity: 1,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=520%", // enough space for cinematic ending
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      /* ============================
         PHASE 1 – Images move
      ============================ */
      tl.to(imagesRef.current, {
        x: (i) => (i % 2 === 0 ? -120 : 120),
        y: (i) => (i < 2 ? -70 : 70),
        duration: 1,
        ease: "power2.out",
      });

      /* ============================
         PHASE 2 – Images to corners
      ============================ */
      tl.to(imagesRef.current, {
        x: (i) => (i % 2 === 0 ? "-40vw" : "40vw"),
        y: (i) => (i < 2 ? "-40vh" : "40vh"),
        scale: 0.9,
        duration: 1,
        ease: "power2.inOut",
      });

      /* ============================
         PHASE 3 – TEXT ZOOM
      ============================ */
      tl.to(textRef.current, {
        scale: 14,
        transformOrigin: "center center",
        duration: 2,
        ease: "power3.inOut",
      });

      /* ============================
         PHASE 3.5 – CINEMATIC END
         (white bg + hide images)
      ============================ */
      tl.to(
        imagesRef.current,
        {
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.8"
      );

      tl.to(
        sectionRef.current,
        {
          backgroundColor: "#ffffff",
          duration: 0.6,
          ease: "power2.inOut",
        },
        "<"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative h-screen w-full
        overflow-hidden
        bg-black
        flex items-center justify-center
      "
    >
      {/* ============================
         IMAGES
      ============================ */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        {[1, 2, 3, 4].map((_, i) => (
          <div
            key={i}
            ref={(el) => (imagesRef.current[i] = el)}
            className="absolute w-40 h-28 md:w-52 md:h-36 overflow-hidden"
          >
            <img
              src={`/assets/images/solutions/${i + 1}.png`}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* ============================
         TEXT
      ============================ */}
      <div
        ref={textRef}
        className="
          relative z-20
          text-center
          font-extrabold
          tracking-tight
          leading-none
          text-white
        "
      >
        <div className="text-[12vw] md:text-[10vw]">
          START A
        </div>
        <div className="text-[12vw] md:text-[10vw]">
          PROJECT
        </div>
      </div>
    </section>
  );
}
