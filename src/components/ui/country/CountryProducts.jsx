"use client";

import React, { useState } from "react";
import Image from "next/image";
import Container from "@/components/common/layout/Container";
import { useLanguage } from "@/context/LanguageContext";

/**
 * Product solutions using the dedicated transparent PNG assets from
 * public/assets/images/countries/products/ matching the exact reference mockup.
 */
export const DEFAULT_COUNTRY_PRODUCTS = [
  {
    id: "01",
    number: "01",
    title: "Digital Signage Solutions",
    description:
      "We deliver advanced digital signage systems that transform communication and customer engagement.",
    bullets: [
      "Indoor & Outdoor LED Screens",
      "Video Walls (Fine Pitch, COB, LCD)",
      "Interactive Digital Kiosks & Touch Displays",
    ],
    image: "/assets/images/countries/products/Digital-Signage-Solutions.png",
    alt: "Digital Signage Solutions",
  },
  {
    id: "02",
    number: "02",
    title: "Audio-Visual System Integration",
    description:
      "From boardrooms to large venues, we integrate cutting-edge AV solutions that enhance communication and experiences.",
    bullets: [
      "Professional Audio & Public Address Systems",
      "Video Conferencing & Collaboration Solutions",
      "Projection & Interactive Display Systems",
    ],
    image:
      "/assets/images/countries/products/Audio-Visual-System-Integration.png",
    alt: "Audio-Visual System Integration",
  },
  {
    id: "03",
    number: "03",
    title: "Maintenance & Support",
    description:
      "Our dedicated support ensures your systems run seamlessly with minimal downtime.",
    bullets: [
      "Preventive System Maintenance",
      "Technical Troubleshooting & Repairs",
      "Ongoing Monitoring & After-Sales Support",
    ],
    image: "/assets/images/countries/products/Maintenance-&-Support.png",
    alt: "Maintenance & Support",
  },
  {
    id: "04",
    number: "04",
    title: "Home Cinema & Smart Home Automation",
    description:
      "We bring technology and lifestyle together with personalized smart home solutions.",
    bullets: [
      "Dedicated Home Cinema Systems",
      "Multiroom Audio & Video Solutions",
      "Integrated Smart Home Automation",
    ],
    image:
      "/assets/images/countries/products/Home-Cinema-&-Smart-Home-Automation.png",
    alt: "Home Cinema & Smart Home Automation",
  },
  {
    id: "05",
    number: "05",
    title: "Static Signage & Wayfinding",
    description:
      "We design and implement effective static signage and wayfinding systems to guide, inform, and inspire.",
    bullets: [
      "Indoor & Outdoor Static Signage",
      "Directional & Wayfinding Displays",
      "Custom Signage & Branding Solutions",
    ],
    image:
      "/assets/images/countries/products/Static-Signage-&-Wayfinding.png",
    alt: "Static Signage & Wayfinding",
  },
  {
    id: "06",
    number: "06",
    title: "Content Creation & Management",
    description:
      "We offer creative and technical expertise to keep your screens dynamic and engaging.",
    bullets: [
      "Digital Graphics & Visual Content",
      "Motion Graphics & Promotional Media",
      "Digital Content Management Systems",
    ],
    image:
      "/assets/images/countries/products/Content-Creation-&-Management.png",
    alt: "Content Creation & Management",
  },
  {
    id: "07",
    number: "07",
    title: "Lighting Solutions",
    description:
      "We provide innovative lighting designs that enhance aesthetics and functionality.",
    bullets: [
      "Architectural & Decorative Lighting",
      "Stage & Event Lighting Systems",
      "Energy-Efficient LED Lighting Solutions",
    ],
    image: "/assets/images/countries/products/Lighting-Solutions.png",
    alt: "Lighting Solutions",
  },
  {
    id: "08",
    number: "08",
    title: "Consultation & Project Management",
    description:
      "We work with clients at every stage, from concept to completion.",
    bullets: [
      "Project Consultation & Planning",
      "Technical Design & Coordination",
      "Installation & Project Execution",
    ],
    image:
      "/assets/images/countries/products/Consultation-&-Project-Management.png",
    alt: "Consultation & Project Management",
  },
];

/**
 * CountryProducts - Dynamic interactive products/services accordion matching the exact mockup.
 *
 * Requirements:
 * - Uses the images from public/assets/images/countries/products/.
 * - Stretches open on HOVER (and touch on mobile).
 * - By default, item 01 is stretched.
 * - Any one item is ALWAYS stretched (items never all close).
 * - Exact structure: rounded dark container card, badge, 2-line heading, dashed green borders.
 *
 * @param {object} props
 * @param {object} [props.country] - Optional country object containing custom overrides.
 */
export default function CountryProducts({ country }) {
  const { t } = useLanguage();

  const rawProducts = country?.productsList || DEFAULT_COUNTRY_PRODUCTS;
  const badgeText = t("country.ourProductsBadge", country?.productsBadge || "Our Products");
  const headingLine1 = t("country.productsHeading1", country?.productsHeading1 || "Discover Our");
  const headingLine2 = t(
    "country.productsHeading2",
    country?.productsHeading2 || "Technology & Solutions"
  );

  // Map each product to its translated title, description, and bullets
  const products = rawProducts.map((item) => ({
    ...item,
    title: t(`products.${item.id}.title`, item.title),
    description: t(`products.${item.id}.description`, item.description),
    bullets: t(`products.${item.id}.bullets`, item.bullets),
  }));

  // By default, the first item is stretched. Exactly one item is always active.
  const [activeId, setActiveId] = useState(products[0]?.id || "01");

  const handleItemActivate = (id) => {
    // Hovering or clicking an item stretches it. All items should never close at once.
    setActiveId(id);
  };

  return (
    <section className="relative w-full bg-black py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Background ambient accent glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[650px] rounded-full bg-[#70C879]/5 blur-[140px]"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="w-full max-w-6xl xl:max-w-7xl mx-auto">
          {/* Outer Dark Container Card matching reference mockup */}
          <div className="relative w-full bg-[#111215] sm:bg-[#101115] rounded-[24px] sm:rounded-[32px] md:rounded-[36px] p-6 sm:p-8 md:p-12 lg:p-14 border border-white/[0.04] shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
          {/* Header Section */}
          <div className="flex flex-col items-start mb-8 sm:mb-10 md:mb-12">
            {/* Pill Badge */}
            <div className="inline-flex items-center rounded-full px-4 sm:px-5 py-1 bg-[#133820] text-[#70C879] border border-[#2D5440]/80 shadow-[0_0_14px_rgba(112,200,121,0.18)] mb-3 sm:mb-4">
              <span className="text-xs sm:text-[13px] font-medium tracking-wide">
                {badgeText}
              </span>
            </div>

            {/* Heading in 2 Lines */}
            <h2 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] font-medium text-white tracking-tight leading-[1.25] max-w-2xl">
              {headingLine1}
              <br />
              {headingLine2}
            </h2>
          </div>

          {/* Accordion Container with Crisp Dashed Green Border */}
          <div
            className="rounded-[18px] sm:rounded-[22px] md:rounded-[24px] border-2 border-dashed border-[#7db68b] overflow-hidden bg-[#0c0d10]"
            style={{ borderStyle: "dashed" }}
          >
            {products.map((item) => {
              const isActive = activeId === item.id;

              return (
                <div
                  key={item.id}
                  onMouseEnter={() => handleItemActivate(item.id)}
                  onClick={() => handleItemActivate(item.id)}
                  className={`border-b-2 border-dashed border-[#7db68b]/75 last:border-b-0 transition-colors duration-300 cursor-pointer ${
                    isActive
                      ? "bg-[#0f1014]"
                      : "bg-transparent hover:bg-white/[0.02]"
                  }`}
                  style={{ borderBottomStyle: "dashed" }}
                >
                  {/* Two-column container: Left Column (Heading + Details), Right Column (Image Card) */}
                  <div
                    className={`transition-all duration-500 ease-in-out px-5 sm:px-7 md:px-8 ${
                      isActive ? "py-6 sm:py-7 md:py-8" : "py-4 sm:py-5"
                    }`}
                  >
                    <div className="flex flex-col md:flex-row items-start justify-between gap-6 md:gap-8 lg:gap-10">
                      {/* Left Column: Heading always visible; Description and Bullets expand when active */}
                      <div className="flex-1 max-w-xl">
                        {/* Heading: Number + Title */}
                        <div
                          aria-expanded={isActive}
                          className="flex items-center select-none"
                        >
                          <span className="text-[#70C879] font-bold text-base sm:text-lg md:text-[19px] mr-3.5 sm:mr-4 font-mono">
                            {item.number}
                          </span>
                          <h3 className="text-white font-semibold text-base sm:text-lg md:text-[19px] tracking-tight">
                            {item.title}
                          </h3>
                        </div>

                        {/* Description & Bullets with CSS Grid transition */}
                        <div
                          className={`grid transition-all duration-500 ease-in-out ${
                            isActive
                              ? "grid-rows-[1fr] opacity-100 mt-3 sm:mt-4"
                              : "grid-rows-[0fr] opacity-0 mt-0 pointer-events-none"
                          }`}
                        >
                          <div className="overflow-hidden">
                            {/* Description */}
                            <p className="text-xs sm:text-sm md:text-[14px] text-gray-300 font-normal leading-relaxed mb-4 sm:mb-5">
                              {item.description}
                            </p>

                            {/* Bullet Points */}
                            {item.bullets && item.bullets.length > 0 && (
                              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-[13px] text-gray-400 font-normal">
                                {item.bullets.map((bullet, bIdx) => (
                                  <li
                                    key={bIdx}
                                    className="flex items-start gap-2"
                                  >
                                    <span className="text-gray-400 font-medium select-none">
                                      →
                                    </span>
                                    <span>{bullet}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Right Column: Image Card top-aligned with heading, expanding when active */}
                      <div
                        className={`grid transition-all duration-500 ease-in-out flex-shrink-0 self-center md:self-start ${
                          isActive
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0 pointer-events-none"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="relative group/card pt-1 md:pt-0 pr-3 sm:pr-4 pb-3 sm:pb-4">
                            {/* Backing dark shadow card tilted at an offset angle */}
                            <div
                              className="absolute inset-0 rounded-[16px] sm:rounded-[18px] bg-black/60 rotate-[2deg] translate-y-2 translate-x-1.5 blur-[4px] transition-transform duration-500 ease-out group-hover/card:rotate-0 group-hover/card:translate-y-1 group-hover/card:translate-x-0 -z-10"
                              aria-hidden="true"
                            />

                            {/* Main Image: Tilted -3deg on default, straightens to 0deg on hover */}
                            <div
                              className="relative w-[220px] sm:w-[250px] md:w-[265px] lg:w-[280px] h-[165px] sm:h-[185px] md:h-[195px] rounded-[16px] sm:rounded-[18px] overflow-hidden border border-white/10 shadow-[0_14px_34px_rgba(0,0,0,0.85)] rotate-[-3deg] group-hover/card:rotate-0 hover:rotate-0 transition-transform duration-500 ease-out bg-[#15161a]"
                            >
                              <Image
                                src={item.image}
                                alt={item.alt || item.title}
                                fill
                                sizes="(max-width: 640px) 220px, (max-width: 1024px) 265px, 280px"
                                className="object-cover object-center transition-transform duration-500 ease-out group-hover/card:scale-105"
                                priority={item.id === "01"}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  </section>
  );
}
