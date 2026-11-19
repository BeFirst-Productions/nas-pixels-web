"use client";

import React, { useState } from "react";
import CountryCard from "./CountryCard";
import { COUNTRIES_DATA } from "@/data/countries";

/**
 * CountriesCarousel - An infinite sliding carousel showcasing country cards with a slow, smooth drift.
 * Clicking any card navigates dynamically to /countries/[slug].
 *
 * @param {Array} [countries=COUNTRIES_DATA] - Array of country data objects.
 * @param {number} [speed=70] - Speed of the infinite loop in seconds.
 * @param {boolean} [pauseOnHover=true] - Whether to pause sliding when mouse hovers over a card.
 * @param {string} [className=""] - Optional wrapper container classes.
 */
export default function CountriesCarousel({
  countries = COUNTRIES_DATA,
  speed = 70,
  pauseOnHover = true,
  className = "",
}) {
  const [isPaused, setIsPaused] = useState(false);

  const baseItems = Array.isArray(countries) && countries.length > 0 ? countries : COUNTRIES_DATA;
  // Duplicate baseItems into 2 repetitions per track segment (8 cards per segment)
  const trackItems = [...baseItems, ...baseItems];

  return (
    <section
      aria-label="Global Presence Countries"
      className={`relative w-full bg-black py-12 sm:py-16 md:py-20 overflow-hidden ${className}`}
    >
      {/* Ambient glow matching Nas Pixels theme */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[350px] w-[650px] rounded-full bg-[#70C879]/5 blur-[120px]"
        aria-hidden="true"
      />

      {/* Left and Right Edge Vignette / Gradient Mask for smooth entry and exit */}
      <div
        className="pointer-events-none absolute left-0 top-0 bottom-0 z-20 w-12 sm:w-24 md:w-36 bg-gradient-to-r from-black via-black/80 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 top-0 bottom-0 z-20 w-12 sm:w-24 md:w-36 bg-gradient-to-l from-black via-black/80 to-transparent"
        aria-hidden="true"
      />

      {/* Infinite Sliding Track Container with vertical padding so borders and shadows are never clipped */}
      <div
        className="relative w-full overflow-hidden py-4 sm:py-6"
        onMouseEnter={() => pauseOnHover && setIsPaused(true)}
        onMouseLeave={() => pauseOnHover && setIsPaused(false)}
        onTouchStart={() => pauseOnHover && setIsPaused(true)}
        onTouchEnd={() => pauseOnHover && setIsPaused(false)}
      >
        <div
          className="flex will-change-transform py-2"
          style={{
            width: "max-content",
            animation: `countries-slide ${speed}s linear infinite`,
            animationPlayState: isPaused ? "paused" : "running",
          }}
        >
          {/* Segment 1 */}
          <div className="flex gap-5 sm:gap-6 pr-5 sm:pr-6 py-1">
            {trackItems.map((item, index) => (
              <CountryCard
                key={`track-1-${item.id || item.title}-${index}`}
                slug={item.slug}
                image={item.image}
                title={item.title}
                description={item.description}
                alt={item.alt}
                showOverlayText={item.showOverlayText}
                overlayText={item.overlayText}
              />
            ))}
          </div>

          {/* Segment 2 - Exact duplicate to create a mathematically seamless infinite loop */}
          <div className="flex gap-5 sm:gap-6 pr-5 sm:pr-6 py-1" aria-hidden="true">
            {trackItems.map((item, index) => (
              <CountryCard
                key={`track-2-${item.id || item.title}-${index}`}
                slug={item.slug}
                image={item.image}
                title={item.title}
                description={item.description}
                alt={item.alt}
                showOverlayText={item.showOverlayText}
                overlayText={item.overlayText}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scoped CSS animation for continuous infinite sliding */}
      <style jsx>{`
        @keyframes countries-slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
