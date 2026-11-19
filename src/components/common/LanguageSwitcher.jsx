"use client";

import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

/**
 * LanguageSwitcher - Elegant glassmorphic language toggle matching the NAS Pixels aesthetic.
 * Clearly displays English, Thailand (ไทย), and Malay (Bahasa Melayu).
 *
 * @param {object} props
 * @param {boolean} [props.compact=false] - If true, renders an inline pill toggle suitable for mobile drawers.
 * @param {string} [props.className=""] - Additional class names.
 */
export default function LanguageSwitcher({ compact = false, className = "" }) {
  const { language, setLanguage, languages } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click or Escape key
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // Compact inline tabs (perfect for mobile drawer)
  if (compact) {
    return (
      <div
        className={`inline-flex items-center gap-1 rounded-full p-1 bg-[#151620] border border-[#70C879]/30 backdrop-blur-md ${className}`}
      >
        {languages.map((lang) => {
          const isActive = language === lang.code;
          return (
            <button
              key={lang.code}
              onClick={() => setLanguage(lang.code)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                isActive
                  ? "bg-[#70C879] text-black font-semibold shadow-[0_0_12px_rgba(112,200,121,0.4)]"
                  : "text-gray-300 hover:text-white hover:bg-white/5"
              }`}
            >
              {lang.code === "th" ? "ไทย" : lang.code === "ms" ? "Melayu" : "EN"}
            </button>
          );
        })}
      </div>
    );
  }

  const currentLang = languages.find((l) => l.code === language) || languages[0];

  return (
    <div ref={dropdownRef} className={`relative inline-block text-left ${className}`}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Change Language"
        aria-expanded={isOpen}
        className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1b1c26]/80 hover:bg-[#222433] border border-[#70C879]/40 hover:border-[#70C879] text-xs font-medium text-white transition-all duration-300 backdrop-blur-md shadow-[0_4px_16px_rgba(0,0,0,0.5)] focus:outline-none"
      >
        {/* Subtle Globe SVG Icon */}
        <svg
          className="w-3.5 h-3.5 text-[#70C879]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          <path d="M2 12h20" />
        </svg>

        <span className="font-semibold text-white tracking-wide uppercase">
          {currentLang.label}
        </span>

        {/* Small Chevron */}
        <svg
          className={`w-3 h-3 text-gray-400 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-[#70C879]" : "rotate-0"
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {/* Floating Dropdown Menu: fully visible, high z-index, styled with glowing green border */}
      {isOpen && (
        <div className="absolute right-0 mt-2.5 w-52 rounded-2xl bg-[#111218]/98 border border-[#70C879]/40 shadow-[0_18px_45px_rgba(0,0,0,0.9)] backdrop-blur-2xl p-1.5 z-[100] overflow-hidden">
          <div className="px-3 py-1.5 text-[10px] uppercase font-semibold text-gray-400 tracking-wider border-b border-white/5 mb-1">
            Select Language
          </div>

          <div className="space-y-0.5">
            {languages.map((lang) => {
              const isActive = language === lang.code;
              return (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs text-left transition-all duration-200 ${
                    isActive
                      ? "bg-[#70C879]/15 text-[#70C879] font-semibold border border-[#70C879]/30"
                      : "text-gray-300 hover:bg-white/[0.06] hover:text-white border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {/* Glowing active indicator dot */}
                    <span
                      className={`w-1.5 h-1.5 rounded-full transition-colors ${
                        isActive ? "bg-[#70C879] shadow-[0_0_8px_#70C879]" : "bg-transparent"
                      }`}
                    />
                    <span>{lang.name}</span>
                  </div>

                  <span
                    className={`text-[10px] font-mono uppercase px-1.5 py-0.5 rounded ${
                      isActive
                        ? "bg-[#70C879]/20 text-[#70C879]"
                        : "bg-white/5 text-gray-400"
                    }`}
                  >
                    {lang.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
