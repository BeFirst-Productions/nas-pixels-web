"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import en from "@/locales/en.json";
import th from "@/locales/th.json";
import ms from "@/locales/ms.json";

const translations = { en, th, ms };

export const SUPPORTED_LANGUAGES = [
  { code: "en", label: "EN", name: "English", country: "Global" },
  { code: "th", label: "TH", name: "ไทย (Thailand)", country: "Thailand" },
  { code: "ms", label: "MS", name: "Bahasa Melayu", country: "Malaysia" },
];

const LanguageContext = createContext({
  language: "en",
  setLanguage: () => {},
  t: (path, fallback) => fallback || path,
  languages: SUPPORTED_LANGUAGES,
  isReady: false,
});

/**
 * Helper to safely resolve nested dictionary keys like "products.01.title"
 */
function resolvePath(obj, path) {
  if (!obj || !path) return undefined;
  const parts = path.split(".");
  let current = obj;
  for (const part of parts) {
    if (current == null || typeof current !== "object") return undefined;
    current = current[part];
  }
  return current;
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState("en");
  const [isReady, setIsReady] = useState(false);

  // Synchronize client-side language preference from localStorage without SSR hydration mismatch
  useEffect(() => {
    try {
      const savedLang = localStorage.getItem("nas_lang");
      if (savedLang && translations[savedLang]) {
        setLanguageState(savedLang);
      }
    } catch (e) {
      // localStorage may fail in private mode or strict sandboxes
    }
    setIsReady(true);
  }, []);

  const setLanguage = (newLang) => {
    if (!translations[newLang]) return;
    setLanguageState(newLang);
    try {
      localStorage.setItem("nas_lang", newLang);
      // Ensure html lang attribute is updated
      if (typeof document !== "undefined") {
        document.documentElement.lang = newLang;
      }
    } catch (e) {}
  };

  /**
   * Translate key with automatic fallback to English, then to default text
   * @param {string} path - Dot notation key, e.g. "country.aboutUsBadge"
   * @param {string|any} [fallback] - Fallback text if key not found
   * @returns {string|any}
   */
  const t = (path, fallback) => {
    // 1. Try active language
    const currentDict = translations[language] || translations.en;
    const resolved = resolvePath(currentDict, path);
    if (resolved !== undefined && resolved !== null) return resolved;

    // 2. Try English fallback
    const enResolved = resolvePath(translations.en, path);
    if (enResolved !== undefined && enResolved !== null) return enResolved;

    // 3. Use provided fallback or path
    return fallback !== undefined ? fallback : path;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
        languages: SUPPORTED_LANGUAGES,
        isReady,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

