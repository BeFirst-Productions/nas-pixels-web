"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import Container from "@/components/common/layout/Container";
import { useLanguage } from "@/context/LanguageContext";

/**
 * Safely segments text into words, respecting Thai word boundaries without breaking lines mid-word.
 */
function getWords(text, lang) {
  if (!text) return [];
  if (lang === "th" && typeof Intl !== "undefined" && Intl.Segmenter) {
    try {
      const segmenter = new Intl.Segmenter("th", { granularity: "word" });
      const segments = Array.from(segmenter.segment(text), (s) => s.segment);
      const filtered = segments.filter((s) => s.trim().length > 0);
      if (filtered.length > 0) return filtered;
    } catch (e) {}
  }
  return text.split(" ");
}

/**
 * Safely segments a word into grapheme clusters so Thai combining marks
 * (vowels and tones) never detach from their base consonants.
 */
function getGraphemes(word) {
  if (!word) return [];
  if (typeof Intl !== "undefined" && Intl.Segmenter) {
    try {
      const segmenter = new Intl.Segmenter(undefined, { granularity: "grapheme" });
      return Array.from(segmenter.segment(word), (s) => s.segment);
    } catch (e) {}
  }
  return word.split("");
}

/**
 * CountryHero - Dynamic Hero Section with initial entrance text animation matching the exact reference.
 * The text animation cascades across the hero title when it first shows on page load.
 *
 * @param {object} props
 * @param {object} props.country - Country data object containing hero info.
 */
export default function CountryHero({ country }) {
  if (!country) return null;

  const { t, language } = useLanguage();

  const containerRef = useRef(null);
  const badgeRef = useRef(null);
  const headingRef = useRef(null);
  const bannerRef = useRef(null);

  const heroData = country.hero || {};
  const countrySlug = country.slug || country.id;
  const rawBadge = heroData.badge || country.badge || country.title || "Region";
  const rawHeading = heroData.heading || "Dorem ipsum dolor sit amet, consectetur adipiscing elit. aliquet mattis.";

  const badgeText = t(`countries.${countrySlug}.badge`, rawBadge);
  const headingText = t(`countries.${countrySlug}.heroHeading`, rawHeading);
  const heroImage = heroData.image || country.image || "/assets/images/countries/saudi-hero.jpg";
  const heroAlt = heroData.alt || `${country.name || country.title} LED Displays`;

  // Words split for semantic line wrapping and high-tech letter animation
  const words = getWords(headingText, language);

  // Initial Entrance Animation when the component first shows / mounts
  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      // 1. Region Pill Badge slides down gently
      if (badgeRef.current) {
        tl.fromTo(
          badgeRef.current,
          { opacity: 0, y: -16, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6 }
        );
      }

      // 2. Cascading 3D letter reveal with emerald highlight settling into crisp white
      const chars = headingRef.current?.querySelectorAll(".hero-char");
      if (chars && chars.length > 0) {
        tl.fromTo(
          chars,
          {
            opacity: 0,
            y: 26,
            rotateX: -65,
            filter: "blur(6px)",
            color: "#70C879",
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            filter: "blur(0px)",
            color: "#ffffff",
            stagger: 0.016,
            duration: 0.65,
            ease: "power2.out",
          },
          "-=0.35"
        );
      }

      // 3. Panoramic Hero Banner reveals smoothly
      if (bannerRef.current) {
        tl.fromTo(
          bannerRef.current,
          { opacity: 0, y: 28, scale: 0.985 },
          { opacity: 1, y: 0, scale: 1, duration: 0.85, ease: "power2.out" },
          "-=0.45"
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [country?.slug, headingText, language]);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-black pt-20 sm:pt-24 md:pt-8 pb-10 sm:pb-14 md:pb-16 overflow-hidden flex flex-col justify-start"
    >
      {/* Background ambient radial glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-16 -translate-x-1/2 h-[260px] w-[500px] sm:w-[700px] rounded-full bg-[#70C879]/8 blur-[100px]"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="w-full max-w-6xl xl:max-w-7xl mx-auto flex flex-col items-center">
          {/* Region Pill Badge */}
          <div
            ref={badgeRef}
            className="inline-flex items-center justify-center rounded-full px-4 sm:px-5 py-1 bg-[#133820] text-[#70C879] border border-[#2D5440]/80 shadow-[0_0_14px_rgba(112,200,121,0.18)] mb-2.5 sm:mb-3"
          >
            <span className="text-xs sm:text-[13px] font-medium tracking-wide">
              {badgeText}
            </span>
          </div>

          {/* Hero Title in Orbitron geometric techno typeface with initial entrance animation */}
          <h1
            ref={headingRef}
            className="font-orbitron text-lg sm:text-xl md:text-2xl lg:text-[28px] font-normal tracking-tight text-white leading-snug max-w-3xl text-center mx-auto mb-4 sm:mb-5 md:mb-6 select-none transition-shadow duration-300 hover:drop-shadow-[0_0_18px_rgba(112,200,121,0.45)]"
            style={{ perspective: "1000px" }}
          >
            {words.map((word, wIdx) => (
              <span
                key={wIdx}
                className="hero-word inline-block whitespace-nowrap mr-[0.28em] last:mr-0"
              >
                {getGraphemes(word).map((char, cIdx) => (
                  <span
                    key={cIdx}
                    className="hero-char inline-block will-change-transform"
                  >
                    {char}
                  </span>
                ))}
              </span>
            ))}
          </h1>

          {/* Panoramic Hero Banner with Top Curvy Green Border Accent (No Side Borders) */}
          <div
            ref={bannerRef}
            className="relative w-full rounded-t-[28px] sm:rounded-t-[38px] md:rounded-t-[46px] rounded-b-[18px] sm:rounded-b-[24px] overflow-hidden bg-[#0d0e12]"
          >
            {/* Top Curvy Green Border Accent: curves around top ends and fades at corners, no side borders */}
            <div
              className="pointer-events-none absolute top-0 left-0 right-0 h-[38px] sm:h-[48px] md:h-[56px] rounded-t-[28px] sm:rounded-t-[38px] md:rounded-t-[46px] border-t-[3.5px] sm:border-t-[4px] md:border-t-[5px] border-l-[3.5px] sm:border-l-[4px] md:border-l-[5px] border-r-[3.5px] sm:border-r-[4px] md:border-r-[5px] border-b-0 z-20"
              style={{
                borderColor: "#327c44",
                boxShadow: "0 0 20px rgba(50, 124, 68, 0.45)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 65%, rgba(0,0,0,0.4) 85%, transparent 100%)",
                maskImage:
                  "linear-gradient(to bottom, black 65%, rgba(0,0,0,0.4) 85%, transparent 100%)",
              }}
              aria-hidden="true"
            />

            <div className="relative w-full h-[220px] sm:h-[300px] md:h-[360px] lg:h-[400px] xl:h-[430px] max-h-[50vh]">
              <Image
                src={heroImage}
                alt={heroAlt}
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 95vw, 1240px"
                className="object-cover object-center"
              />
              {/* Soft gradient fade at the bottom to blend seamlessly into the pure black page */}
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
