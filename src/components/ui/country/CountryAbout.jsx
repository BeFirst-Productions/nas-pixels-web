"use client";

import React from "react";
import Image from "next/image";
import Container from "@/components/common/layout/Container";
import { useLanguage } from "@/context/LanguageContext";

/**
 * CountryAbout - Dynamic About Section matching the exact reference mockup.
 *
 * Sizing & Layout Details:
 * - Aligned to top (`items-start`) so the "About Us" badge and image container start on the exact same horizontal line.
 * - Column proportions: Left text column is wider (~54%), Right image column is sleek (~46%) with aspect ratio ~1.5:1.
 * - Typography: Clean font-normal/font-medium heading (not chunky bold) with two-line break matching mockup.
 * - Image: Smooth rounded corners (`rounded-[20px] sm:rounded-[26px] md:rounded-[28px]`), no harsh border, natural shadow.
 *
 * @param {object} props
 * @param {object} props.country - Country data object containing about info.
 */
export default function CountryAbout({ country }) {
  if (!country) return null;

  const { t } = useLanguage();

  const aboutData = country.about || {};
  const countrySlug = country.slug || country.id;
  const badgeText = t("country.aboutUsBadge", aboutData.badge || "About Us");
  const headingText = t(
    `countries.${countrySlug}.aboutHeading`,
    aboutData.heading || "Morem ipsum dolor sit amet, consectetur adipiscing"
  );
  const paragraph1 = t(
    `countries.${countrySlug}.aboutParagraph1`,
    aboutData.paragraph1 ||
      "Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus."
  );
  const paragraph2 = t(
    `countries.${countrySlug}.aboutParagraph2`,
    aboutData.paragraph2 ||
      "Maecenas eget condimentum velit, sit amet feugiat lectus. dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum"
  );
  const aboutImage =
    aboutData.image || "/assets/images/countries/saudi-about.jpg";
  const aboutAlt =
    aboutData.alt || `${country.name || country.title} Experience Center`;

  return (
    <section className="relative w-full bg-black pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-16 sm:pb-24 lg:pb-28 overflow-hidden">
      {/* Background ambient accent glow */}
      <div
        className="pointer-events-none absolute right-10 top-1/3 -translate-y-1/2 h-[320px] w-[450px] rounded-full bg-[#70C879]/5 blur-[120px]"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="w-full max-w-5xl xl:max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] xl:grid-cols-[1.65fr_1fr] gap-8 lg:gap-10 xl:gap-12 items-start">
            {/* Left Column: Text Content */}
            <div className="flex flex-col items-start w-full">
              {/* About Us Pill Badge */}
              <div className="inline-flex items-center rounded-full px-4 sm:px-5 py-1 bg-[#133820] text-[#70C879] border border-[#2D5440]/80 shadow-[0_0_14px_rgba(112,200,121,0.18)] mb-4 sm:mb-5">
                <span className="text-xs sm:text-[13px] font-medium tracking-wide">
                  {badgeText}
                </span>
              </div>

              {/* Main Heading (Clean font-normal/medium matching mockup) */}
              <h2 className="text-2xl sm:text-3xl md:text-[32px] lg:text-[35px] font-normal sm:font-medium text-white tracking-tight leading-[1.25] mb-5 max-w-[500px]">
                {headingText}
              </h2>

              {/* Paragraph 1 */}
              <p className="text-xs sm:text-sm md:text-[14px] lg:text-[15px] text-gray-300 font-normal leading-[1.7] mb-4 max-w-[540px]">
                {paragraph1}
              </p>

              {/* Paragraph 2 */}
              <p className="text-xs sm:text-sm md:text-[14px] lg:text-[15px] text-gray-400 font-normal leading-[1.7] max-w-[540px]">
                {paragraph2}
              </p>
            </div>

            {/* Right Column: Experience Center / Showroom Display Image */}
            <div className="relative w-full flex justify-start lg:justify-start">
              <div
                className="relative w-full max-w-[310px] sm:max-w-[330px] lg:max-w-[340px] rounded-[18px] sm:rounded-[22px] overflow-hidden bg-[#0d0e12] border border-white/5 shadow-[0_12px_40px_rgba(0,0,0,0.8)]"
                style={{ aspectRatio: "323 / 280" }}
              >
                <Image
                  src={aboutImage}
                  alt={aboutAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 330px, 340px"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
