'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Container from '../Layout/Container';
import { MobileMenuButton } from './MobileMenuButton';
import { DesktopMenu } from './DesktopMenu';
import { MobileDropdown } from './MobileDropdown';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const lastScrollY = useRef(0);
  // const navRef = useRef(null);


  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;

      if (currentY < 20) {
        setIsVisible(true);
      } else if (currentY > lastScrollY.current + 10) {
        setIsVisible(false);
      } else if (currentY < lastScrollY.current - 10) {
        setIsVisible(true);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
<nav
  className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ease-in-out ${
    isVisible ? "translate-y-0" : "-translate-y-full"
  }`}
>
      {/* Background */}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-[#75C378] to-transparent backdrop-blur-[8px]" /> */}
      <div className="absolute inset-0 navbar-bg" />

      <Container>
      {/* Main Content */}
        <div className="mx-auto max-w-7xl relative flex items-center justify-between pt-6 pb-4 md:pb-2 md:pt-10">

          {/* Logo (Desktop) */}
          <div className="hidden md:block">
            <Image
              src="/assets/images/logos/logo.png"
              alt="NAS Pixels Logo"
              width={135}
              height={87}
              className="object-contain"
              priority
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
            <DesktopMenu
              isOpen={isMenuOpen}
              onToggle={() => setIsMenuOpen(v => !v)}
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden mx-auto">
            <MobileMenuButton
              isOpen={isMenuOpen}
              onToggle={() => setIsMenuOpen(v => !v)}
            />
          </div>

        </div>
      </Container>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <MobileDropdown onClose={() => setIsMenuOpen(false)} />
      )}
    </nav>
  );
}
