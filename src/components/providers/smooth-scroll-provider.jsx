'use client';
import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { getLenisInstance, destroyLenis, getLenis } from '@/lib/lenis-singleton';

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
      // Note: We don't destroy here to allow other components to use it
      // Destroy only on app unmount or when explicitly needed
    };
  }, []);

  const scrollTo = useCallback((target, options = {}) => {
    const instance = getLenis();
    instance?.scrollTo(target, options);
  }, []);

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