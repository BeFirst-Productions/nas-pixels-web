"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

/**
 * CountryCard - Reusable, clickable card component matching the exact reference image.
 * Clicking routes directly to /${slug} (e.g. /saudi-arabia, /thailand).
 *
 * @param {string} image - Image source URL (e.g. from /assets/images/countries/...)
 * @param {string} title - Country or card heading (e.g. "Saudi arabia")
 * @param {string} description - Descriptive text paragraph
 * @param {string} [slug] - Country slug for direct domain/country navigation
 * @param {string} [href] - Optional explicit link URL (defaults to /${slug})
 * @param {string} [alt] - Optional alt text for image (defaults to title)
 * @param {string} [className] - Optional custom CSS classes for the card container
 * @param {string} [imageClassName] - Optional custom CSS classes for the image wrapper
 * @param {boolean} [showOverlayText=false] - Whether to render hollow stroked outline text over the image
 * @param {string} [overlayText] - Custom overlay text (defaults to title)
 * @param {Function} [onClick] - Optional click handler
 */
export default function CountryCard({
  image,
  title,
  description,
  slug,
  href,
  alt,
  className = "",
  imageClassName = "",
  showOverlayText = false,
  overlayText,
  onClick,
}) {
  const { t } = useLanguage();
  const targetHref = href || (slug ? `/${slug}` : undefined);
  const displayTitle = slug ? t(`countries.${slug}.badge`, title) : title;
  const displayDescription = slug ? t(`countries.${slug}.cardDescription`, description) : description;

  const CardContent = (
    <div
      onClick={onClick}
      className={`
        group relative flex flex-col justify-between
        w-[280px] sm:w-[320px] md:w-[350px] lg:w-[370px]
        flex-shrink-0 select-none
        rounded-[24px] sm:rounded-[26px]
        border-2 border-dashed border-[#7db68b]
        bg-[#0d0e12]
        p-3.5 sm:p-4 md:p-[18px]
        cursor-pointer
        transition-colors duration-300 ease-out
        hover:border-[#7db68b]
        hover:shadow-[0_0_24px_rgba(125,182,139,0.3)]
        ${className}
      `}
      style={{
        borderStyle: "dashed",
      }}
    >
      {/* Top Image Section */}
      <div
        className={`
          relative w-full aspect-[364/281]
          overflow-hidden
          rounded-[16px] sm:rounded-[18px]
          bg-[#15161a]
          ${imageClassName}
        `}
      >
        {image && (
          <Image
            src={image}
            alt={alt || title || "Country Card"}
            fill
            sizes="(max-width: 640px) 280px, (max-width: 1024px) 350px, 370px"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            priority={false}
          />
        )}

        {/* Optional outline/stroke text overlay for custom images without baked-in text */}
        {showOverlayText && (overlayText || title) && (
          <div className="pointer-events-none absolute left-4 top-3.5 z-10">
            <span
              className="text-lg sm:text-xl md:text-2xl font-semibold tracking-wide text-transparent select-none"
              style={{
                WebkitTextStroke: "1px rgba(255, 255, 255, 0.8)",
              }}
            >
              {overlayText || title}
            </span>
          </div>
        )}
      </div>

      {/* Content Section Below Image */}
      <div className="flex flex-col pt-3.5 sm:pt-4 pb-1 px-1">
        <h3 className="text-white font-bold text-lg sm:text-xl md:text-[22px] tracking-tight leading-snug group-hover:text-[#70C879] transition-colors duration-300">
          {displayTitle}
        </h3>
        {displayDescription && (
          <p className="mt-2 sm:mt-2.5 text-xs sm:text-sm font-normal text-[#9ea3ae] leading-[1.6] line-clamp-3">
            {displayDescription}
          </p>
        )}
      </div>
    </div>
  );

  if (targetHref) {
    return (
      <Link href={targetHref} className="inline-block flex-shrink-0 text-inherit no-underline">
        {CardContent}
      </Link>
    );
  }

  return CardContent;
}
