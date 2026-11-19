'use client';
import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { getLenisInstance, destroyLenis, getLenis } from '@/lib/lenis-singleton';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const LenisContext = createContext(null);

export function useLenis() {
  const context = useContext(LenisContext);
  if (!context && typeof window !== 'undefined') {
    console.warn('useLenis must be used within SmoothScrollProvider');
  }
  return context;
}

export function SmoothScrollProvider({ children, options = {} }) {
  const [lenis, setLenis] = useState(null);
  const [isReady, setIsReady] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let mounted = true;

    const init = async () => {
      const instance = await getLenisInstance(options);

      if (mounted && instance) {
        setLenis(instance);
        setIsReady(true);
      }
    };

    init();

    return () => {
      mounted = false;
    };
  }, []);

  // ALWAYS scroll to top on every new page open / route change
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Prevent browser native scroll restoration from jumping to previous page position
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // If an anchor hash exists (e.g. /#faq), allow target section scroll
    const hash = window.location.hash;
    if (hash) return;

    // 1. Immediately force window and document scroll to top
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // 2. Immediately reset Lenis virtual scroll position to 0
    const instance = lenis || getLenis();
    if (instance) {
      instance.scrollTo(0, { immediate: true, force: true });
    }

    // 3. Re-affirm when the new page component mounts and layout paints
    const rafId = requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      const inst = lenis || getLenis();
      if (inst) {
        inst.scrollTo(0, { immediate: true, force: true });
      }
      try {
        ScrollTrigger.refresh();
      } catch (e) {}
    });

    const timer1 = setTimeout(() => {
      window.scrollTo(0, 0);
      const inst = lenis || getLenis();
      if (inst) {
        inst.scrollTo(0, { immediate: true, force: true });
      }
      try {
        ScrollTrigger.refresh();
      } catch (e) {}
    }, 60);

    const timer2 = setTimeout(() => {
      window.scrollTo(0, 0);
      const inst = lenis || getLenis();
      if (inst) {
        inst.scrollTo(0, { immediate: true, force: true });
      }
      try {
        ScrollTrigger.refresh();
      } catch (e) {}
    }, 200);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [pathname, lenis]);

  const scrollTo = useCallback((target, options = {}) => {
    const instance = lenis || getLenis();
    instance?.scrollTo(target, options);
  }, [lenis]);

  const value = {
    lenis,
    isReady,
    scrollTo,
  };

  return (
    <LenisContext.Provider value={value}>
      {children}
    </LenisContext.Provider>
  );
}
