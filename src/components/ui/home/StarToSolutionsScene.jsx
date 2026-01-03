"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SolutionsSection from "./SolutionsSection";

gsap.registerPlugin(ScrollTrigger);



export default function StarToSolutionsScene() {
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
          end: "+=800%", // Extended to accommodate all phases
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      /* PHASE 1 - Initial image movement */
      tl.to(imagesRef.current, {
        x: (i) => (i % 2 === 0 ? -120 : 120),
        y: (i) => (i < 2 ? -70 : 70),
        duration: 1,
        ease: "power2.out",
      });

      /* PHASE 2 - Images spread out */
      tl.to(imagesRef.current, {
        x: (i) => (i % 2 === 0 ? "-40vw" : "40vw"),
        y: (i) => (i < 2 ? "-40vh" : "40vh"),
        scale: 0.9,
        duration: 1,
        ease: "power2.inOut",
      });

      /* PHASE 3 - Text zoom */
      tl.to(textRef.current, {
        scale: 14,
        transformOrigin: "center center",
        duration: 2,
        ease: "power3.inOut",
      });

      /* PHASE 4 - White reveal & fade images */
      tl.to(
        whiteRef.current,
        {
          opacity: 1,
          duration: 0.6,
          ease: "power2.inOut",
        },
        "-=1.4"
      );

      tl.to(
        imagesRef.current,
        {
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "<"
      );

      /* PHASE 5 - Hold white screen briefly */
      tl.to({}, { duration: 0.3 });

      /* PHASE 6 - Reveal Solutions (fade white out, fade solutions in) */
      tl.to(whiteRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.inOut",
      });

      tl.to(
        solutionsRef.current,
        {
          opacity: 1,
          duration: 0.8,
          ease: "power2.inOut",
        },
        "<" // Start at the same time as white fades
      );

      /* PHASE 7 - Hold on solutions before unpin */
      tl.to({}, { duration: 0.5 });

    }, sceneRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sceneRef} className="relative w-full">
      {/* PINNED CONTAINER */}
      <div
        ref={starRef}
        className="relative h-screen w-full flex items-center justify-center overflow-hidden"
      >
        {/* BLACK BACKGROUND LAYER */}
        <div className="absolute inset-0 bg-black z-0" />

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
          <div className="text-[12vw] md:text-[10vw]">START A</div>
          <div className="text-[12vw] md:text-[10vw]">PROJECT</div>
        </div>

        {/* WHITE OVERLAY */}
        <div
          ref={whiteRef}
          className="pointer-events-none absolute inset-0 bg-white z-30"
        />

        {/* SOLUTIONS SECTION (REVEALED IN PLACE) */}
        <div
          ref={solutionsRef}
          className="absolute inset-0 z-40 overflow-hidden"
        >
          <SolutionsSection/>
        </div>
      </div>
    </section>
  );
}