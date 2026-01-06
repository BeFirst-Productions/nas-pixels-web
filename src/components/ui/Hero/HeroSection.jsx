"use client";

import RippleSection from "@/components/animation/RippleSection";
import ImageRing3D from "./ImageRing3D";



export default function HeroSection() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black">
      
      {/* 🔹 Ripple background */}
      <div className="absolute inset-0 z-0">
        <RippleSection />
      </div>

      {/* 🔹 TOP gradient cover (fixes empty top space) */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-[35%] z-5
        bg-gradient-to-b from-black via-black/80 to-transparent" />

      {/* 🔹 LEFT gradient */}
      <div className="pointer-events-none absolute top-0 left-0 h-full w-[20%] z-5
        bg-gradient-to-r from-black via-black/70 to-transparent" />

      {/* 🔹 RIGHT gradient */}
      <div className="pointer-events-none absolute top-0 right-0 h-full w-[20%] z-5
        bg-gradient-to-l from-black via-black/70 to-transparent" />

      {/* 🔹 Foreground content (UNCHANGED) */}
      <div className="relative z-10">
        <ImageRing3D />
      </div>

    </div>
  );
}
