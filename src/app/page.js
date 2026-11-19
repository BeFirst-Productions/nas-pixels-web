'use client'
import { useEffect, useState } from 'react';
import { useLenis } from '@/components/providers/smooth-scroll-provider';
import AnimateScrollVideo from '@/components/animation/scroll-animated-video';
import AboutSection from '@/components/ui/about/AboutSection';
import CountriesCarousel from '@/components/ui/countries/CountriesCarousel';
import ContactSection from '@/components/ui/contact/ContactSection';
import WhyChooseUs from '@/components/ui/home/WhyChooseUs';
import LatestNewsSection from '@/components/ui/home/LatestNewsSection';
import ProjectsSection from '@/components/ui/projects/ProjectsSection';
import TestimonialsFaqSection from '@/components/ui/home/TestimonialsFaqSection';
import PartnersSection from '@/components/ui/home/PartnersSection';
import StarToSolutionsScene from '@/components/ui/home/StarToSolutionsScene';
import HeroWithAnimatedBackground from '@/components/ui/Hero/HeroWithSyntheticBackground';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import SolutionsSection from '@/components/ui/home/SolutionsSection';
// import StarProjectSection from '@/components/ui/home/StarProjectSection';
// import TrustedBrandsSection from '@/components/ui/home/TrustedBrandsSection';



export default function Home() {

  const { lenis } = useLenis();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // If there is no hash, or window is undefined, show page immediately
    if (typeof window !== 'undefined' && !window.location.hash) {
      setIsReady(true);
    }
  }, []);

  useEffect(() => {
    if (!lenis) return;

    if (window.location.hash) {
      const hash = window.location.hash;

      // Stop browser from auto-scrolling to the wrong place
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }

      // Hide content by scrolling to top initially
      window.scrollTo(0, 0);

      // Wait for layout to be stable (ScrollTrigger pins expand/collapse page height)
      const timer = setTimeout(() => {
        try {
          // Force GSAP to recalculate layout (add pin spacers) BEFORE we scroll
          ScrollTrigger.refresh();

          let target = null;
          try {
            target = document.querySelector(hash);
          } catch (e) { }

          // Fallback if querySelector fails on some ID formats, though unlikely for 'faq'
          if (!target) {
            target = document.getElementById(hash.replace('#', ''));
          }

          if (target) {
            // Instant jump to the FAQ section
            lenis.scrollTo(hash, {
              offset: 0,
              immediate: true,
              force: true,
            });
          }
        } catch (e) {
          console.warn('Hash scroll error:', e);
        }
        // Reveal the page content
        setIsReady(true);
      }, 1000); // 1s delay to be absolutely sure

      return () => clearTimeout(timer);
    }
  }, [lenis]);

  return (
    <div className={`min-h-screen transition-opacity duration-500 ${isReady ? 'opacity-100' : 'opacity-0'}`}>
      <HeroWithAnimatedBackground />

      {/* <ImageRing3D 
        images={myImages}
        backgroundImage="/assets/images/testimonials/testimonial-bg.png"
        title="Transform Visual Communication with Enterprise-Grade LED Display Solutions"
        buttonText="Our Products"
      />  */}
      <AboutSection />
      <CountriesCarousel />
      <AnimateScrollVideo
        media={{
          mp4: "/assets/videos/screen-installation-and-configuration.mp4",
        }}
      />
      {/* <ProductsSection/> */}
      {/* <TrustedBrandsSection/> */}
      {/* <StarProjectSection/>
      <SolutionsSection/> */}
      <StarToSolutionsScene />
      <WhyChooseUs />
      <ProjectsSection />
      <LatestNewsSection />
      <PartnersSection />
      <TestimonialsFaqSection />
      {/* <TestimonialsSection/>
      <FaqSection/> */}
      <ContactSection />

    </div>
  );
}