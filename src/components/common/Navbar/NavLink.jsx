"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const NAV_KEY_MAP = {
  "home": "nav.home",
  "about us": "nav.aboutUs",
  "solutions": "nav.solutions",
  "products": "nav.products",
  "projects": "nav.projects",
  "blogs": "nav.blogs",
  "contact": "nav.contact",
};

export function NavLink({ label, onClick, mobile }) {
  const { t } = useLanguage();
  const rawLabel = label?.label || "";
  const navKey = NAV_KEY_MAP[rawLabel.toLowerCase()];
  const displayLabel = navKey ? t(navKey, rawLabel) : rawLabel;

  return (
    <Link
      href={label.href}
      onClick={(e) => {
        if (onClick) onClick(); // Handle mobile menu close

        // Logic for handling #contact link behavior
        if (label.href === '/#contact') {
          const currentPath = window.location.pathname;

          // Check if we are on a page that ALREADY has a contact section
          // (Home, About Us, Solutions, Products, Projects, and Blogs all have local Contact sections)
          const pagesWithContact = ['/', '/about-us', '/solutions', '/products', '/projects', '/blogs'];

          if (pagesWithContact.includes(currentPath)) {
            e.preventDefault();
            const contactSection = document.getElementById('contact');
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: 'smooth' });
            }
          }
          // If we are on any other page (e.g. /projects), let default Link behavior happen
          // which will take us to '/#contact' (the homepage contact section)
        }
      }}
      className={`uppercase tracking-wide transition-colors ${mobile
        ? "block px-4 py-3 text-xs text-white/90 hover:text-[#70C879]"
        : "text-[11px] text-white hover:text-[#70C879]"
        }`}
    >
      {displayLabel}
    </Link>
  );
}
