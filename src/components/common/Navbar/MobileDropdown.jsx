"use client";

import { NAV_ITEMS } from "@/data/nav";
import Container from "../layout/Container";
import { NavLink } from "./NavLink";
import LanguageSwitcher from "../LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";

export function MobileDropdown({ onClose }) {
  const { t } = useLanguage();
  return (
    <div className="md:hidden bg-[#21222F]/95 backdrop-blur-xl border-t border-[#70C879]/20">
      <Container>
        <div className="py-6 space-y-4">
          <div className="space-y-2">
            {NAV_ITEMS.map((item, idx) => (
              <NavLink key={item.href || idx} label={item} onClick={onClose} mobile />
            ))}
          </div>

          {/* Mobile Language Switcher */}
          <div className="pt-3 border-t border-white/10 flex items-center justify-between">
            <span className="text-xs text-gray-400 font-medium">{t("nav.language", "Language")}:</span>
            <LanguageSwitcher compact />
          </div>
        </div>
      </Container>
    </div>
  );
}