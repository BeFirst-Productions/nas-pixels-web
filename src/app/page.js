'use client'
import AnimateScrollVideo from '@/components/animation/scroll-animated-video';
import AboutSection from '@/components/ui/about/AboutSection';
import ContactSection from '@/components/ui/contact/ContactSection';
import FaqSection from '@/components/ui/faq/FaqSection';
import Demo from '@/components/ui/Hero/Demo';
import HeroSection from '@/components/ui/Hero/HeroSection';
import ImageRing3D from '@/components/ui/Hero/ImageRing3D';
import TestimonialsSection from '@/components/ui/testimonials/TestimonialsSection';
import WhyChooseUs from '@/components/ui/home/WhyChooseUs';
import LatestNewsSection from '@/components/ui/home/LatestNewsSection';
import OurProjectsSection from '@/components/ui/home/OurProjectsSection';
import ProjectsSection from '@/components/ui/home/ProjectsSection';


export default function Home() {


  return (
    <div className="min-h-screen ">
      {/* <ImageRing3D/>
      <Demo/>
<HeroSection/> */}
      <AboutSection />
      
      {/* <section className=''>
    <AnimateScrollVideo
        media={{
          mp4: "/assets/videos/screen-installation-and-configuration.mp4",
          webm: "/assets/videos/screen-installation-and-configuration.mp4"
        }}
        overlay={{
          caption: "NEXT.JS • 15",
          heading: "Modern Web Animation",
          paragraphs: [
            "A focused reel highlighting interaction, craft, and intent.",
            "Built with GSAP ScrollTrigger and Lenis smooth scroll in Next.js 15."
          ],
          extra: (
            <div style={{ marginTop: '2rem' }}>
              <button 
                style={{
                  background: 'linear-gradient(135deg, #7c3aed, #22d3ee)',
                  color: 'white',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                Explore More
              </button>
            </div>
          )
        }}
        initialBoxSize={320}
        targetSize={{ widthVw: 90, heightVh: 90, borderRadius: 12 }}
      />
      </section> */}
      <WhyChooseUs/>
      <ProjectsSection/>
      <LatestNewsSection/>
      <TestimonialsSection/>
      <FaqSection/>
      <ContactSection/>
    </div>
  );
}