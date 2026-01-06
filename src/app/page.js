'use client'
import AnimateScrollVideo from '@/components/animation/scroll-animated-video';
import AboutSection from '@/components/ui/about/AboutSection';
import ContactSection from '@/components/ui/contact/ContactSection';
import WhyChooseUs from '@/components/ui/home/WhyChooseUs';
import LatestNewsSection from '@/components/ui/home/LatestNewsSection';
import ProjectsSection from '@/components/ui/projects/ProjectsSection';
import TestimonialsFaqSection from '@/components/ui/home/TestimonialsFaqSection';
import PartnersSection from '@/components/ui/home/PartnersSection';
import StarToSolutionsScene from '@/components/ui/home/StarToSolutionsScene';
import HeroWithAnimatedBackground from '@/components/ui/Hero/HeroWithSyntheticBackground';
// import SolutionsSection from '@/components/ui/home/SolutionsSection';
// import StarProjectSection from '@/components/ui/home/StarProjectSection';
// import TrustedBrandsSection from '@/components/ui/home/TrustedBrandsSection';



export default function Home() {


  return (
    <div className="min-h-screen ">
      <HeroWithAnimatedBackground/>
   
      {/* <ImageRing3D 
        images={myImages}
        backgroundImage="/assets/images/testimonials/testimonial-bg.png"
        title="Transform Visual Communication with Enterprise-Grade LED Display Solutions"
        buttonText="Our Products"
      />  */}
      <AboutSection />   
      <AnimateScrollVideo
        media={{
          mp4: "/assets/videos/screen-installation-and-configuration.mp4",
        }}
      />
      {/* <ProductsSection/> */}
      {/* <TrustedBrandsSection/> */}
      {/* <StarProjectSection/>
      <SolutionsSection/> */}
      <StarToSolutionsScene/>
      <WhyChooseUs/>
      <ProjectsSection/>
      <LatestNewsSection/>
      <PartnersSection/>
      <TestimonialsFaqSection/>
      {/* <TestimonialsSection/>
      <FaqSection/> */}
      <ContactSection/>
      
    </div>
  );
}