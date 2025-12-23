// app/test/page.jsx
'use client'
import { useEffect } from 'react';

export default function TestPage() {
  useEffect(() => {
    const initTest = async () => {
      const Lenis = (await import('@studio-freight/lenis')).default;
      
      const lenis = new Lenis({
        duration: 1.4,
        smoothWheel: true,
      });
      
      lenis.on('scroll', (e) => {
        console.log('Lenis scroll:', e);
      });
      
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
      
      window.testLenis = lenis;
    };
    
    initTest();
  }, []);
  
  return (
    <div style={{ height: '300vh', padding: '50px' }}>
      <h1>Lenis Test Page</h1>
      <p>Scroll and check console for Lenis events</p>
      <div style={{ height: '2000px', background: 'linear-gradient(blue, red)' }}></div>
    </div>
  );
}