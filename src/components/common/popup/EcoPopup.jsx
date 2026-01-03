"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function EcoPopup() {
  const [show, setShow] = useState(false);
  const popupRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const alreadySeen = localStorage.getItem("ecoPopupSeen");
    if (!alreadySeen) {
      setTimeout(() => setShow(true), 700);
    }
  }, []);

  useEffect(() => {
    if (show) {
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6, ease: "power2.out" }
      );

      gsap.fromTo(
        popupRef.current,
        { scale: 0.8, y: 80, opacity: 0 },
        {
          scale: 1,
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: "expo.out",
        }
      );
    }
  }, [show]);

  const closePopup = () => {
    gsap.to(popupRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 0.5,
      ease: "power2.in",
    });
    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: "power2.in",
      onComplete: () => {
        localStorage.setItem("ecoPopupSeen", "true");
        setShow(false);
      },
    });
  };

  if (!show) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm"
    >
      <div
        ref={popupRef}
        className="relative w-[90%] bg-black max-w-xl rounded-3xl p-8 md:p-10 text-center border-2 border-dashed"
        style={{
          borderColor: "#70C879",

        }}
      >
        {/* Close button */}
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-green-700 text-xl font-bold flex items-center justify-center shadow-lg transition"
        >
          ×
        </button>


        <h2 className="text-3xl md:text-4xl font-bold mb-4 ">
          We’re Eco-Smart
        </h2>

        <p className=" text-base md:text-lg leading-relaxed mb-8">
          Our digital screens replace printed posters and banners — reducing
          paper waste, ink usage, and carbon footprint.  
          Choosing our displays helps create a cleaner, greener future.
        </p>

        <button
          onClick={closePopup}
          className="px-10 py-3 rounded-full bg-green-700 hover:bg-green-800 text-white font-semibold tracking-wide shadow-xl transition-all"
        >
         Explore Now
        </button>
      </div>
    </div>
  );
}
