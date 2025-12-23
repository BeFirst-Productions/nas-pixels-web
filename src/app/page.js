'use client'
import AnimateScrollVideo from '@/components/animation/scroll-animated-video';
import Container from '@/components/common/Container';
import { ModernButton } from '@/components/common/ModernButton';
import AboutSection from '@/components/ui/about/AboutSection';
import { FallingPattern } from '@/components/ui/falling-pattern';

export default function Home() {
  // Create sections for navigation
  const sections = [
    { id: 'about', title: 'About Us', color: 'bg-blue-50' },
    { id: 'solutions', title: 'Our Solutions', color: 'bg-green-50' },
    { id: 'products', title: 'Our Products', color: 'bg-purple-50' },
    { id: 'contact', title: 'Contact Us', color: 'bg-yellow-50' },
  ];
  const handleClick = () => {
    console.log('Button clicked!');
    alert('Explore Solutions clicked!');
  };
  return (
    <div className="min-h-screen ">

      <AboutSection />
      
      {/* <FallingPattern 
        color="#22d3ee" // cyan
        backgroundColor="#000000"
        duration={100}
        className="h-full"
      /> */}
      <section className=''>


    <AnimateScrollVideo
        // title="Scroll Animated Video"
        // subtitle="A Next.js 15 Implementation"
        // meta="Q3 • 2025"
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
      </section>
      
    </div>
  );
}