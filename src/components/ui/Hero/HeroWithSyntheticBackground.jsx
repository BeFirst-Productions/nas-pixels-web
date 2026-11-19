"use client";

import SyntheticBackground from "@/components/animation/SyntheticBackground";
import ImageRing3D from "./ImageRing3D";
import { myImages } from "@/data/HeroSectionData";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroWithAnimatedBackground() {
  const { t } = useLanguage();
  return (
    <section className="relative w-screen h-screen overflow-hidden bg-black">

      {/* 🔹 NEW animated shader background */}
      <div className="absolute inset-0 z-0">
        <SyntheticBackground />
      </div>

      {/* 🔹 Dark gradient overlays (unchanged) */}
      <div
        className="
          pointer-events-none
          absolute top-0 left-0 right-0
          h-[35%] z-5
          bg-gradient-to-b
          from-black via-black/80 to-transparent
        "
      />

      <div
        className="
          pointer-events-none
          absolute inset-y-0 left-0
          w-[18%] z-5
          bg-gradient-to-r
          from-black via-black/70 to-transparent
        "
      />

      <div
        className="
          pointer-events-none
          absolute inset-y-0 right-0
          w-[18%] z-5
          bg-gradient-to-l
          from-black via-black/70 to-transparent
        "
      />

      {/* 🔹 Bottom Fade to blend with About Section */}
      <div
        className="
          pointer-events-none
          absolute bottom-0 left-0 right-0
          h-[150px] z-10
          bg-gradient-to-t
          from-black via-black/80 to-transparent
        "
      />

      <div className="relative z-10">
        <ImageRing3D
          images={myImages}
          backgroundImage="/assets/images/testimonials/testimonial-bg.png"
          title={t("homeHero.title", "Transform Visual Communication with Enterprise-Grade LED Display Solutions")}
          buttonText={t("homeHero.button", "Our Products")}
        />
      </div>

    </section>
  );
}
