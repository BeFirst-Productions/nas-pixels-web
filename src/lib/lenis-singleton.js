let lenisInstance = null;
let rafId = null;
let initPromise = null;

export async function getLenisInstance(options = {}) {
  // Return existing instance if already initialized
  if (lenisInstance) {
    return lenisInstance;
  }

  // Return pending initialization
  if (initPromise) {
    return initPromise;
  }

  initPromise = (async () => {
    try {
      // Try modern lenis first, fallback to studio-freight
      const LenisPkg = await import('lenis').catch(() => 
        import('@studio-freight/lenis')
      );
      
      const Lenis = LenisPkg?.default || LenisPkg?.Lenis;
      
      if (!Lenis) {
        throw new Error('Lenis not found');
      }

      // Initialize with optimized settings
      lenisInstance = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom ease
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
        ...options,
      });

      // Start RAF loop
      function raf(time) {
        lenisInstance?.raf(time);
        rafId = requestAnimationFrame(raf);
      }
      rafId = requestAnimationFrame(raf);

      // Expose globally for debugging
      if (typeof window !== 'undefined') {
        window.lenis = lenisInstance;
      }

      console.log('✅ Lenis singleton initialized');
      return lenisInstance;

    } catch (error) {
      console.error('❌ Failed to initialize Lenis:', error);
      lenisInstance = null;
      initPromise = null;
      return null;
    }
  })();

  return initPromise;
}

export function destroyLenis() {
  if (rafId) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }

  if (lenisInstance) {
    lenisInstance.destroy?.();
    lenisInstance = null;
  }

  initPromise = null;

  if (typeof window !== 'undefined') {
    delete window.lenis;
  }

  console.log('🧹 Lenis destroyed');
}

export function getLenis() {
  return lenisInstance;
}
