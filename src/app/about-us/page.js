import AboutSection from "@/components/ui/AboutPage/AboutSection";
import MissionVisionSection from "@/components/ui/AboutPage/MissionVision";
import Navbar from "@/components/common/Navbar/Navbar";
import Herosection from "@/components/TitleBanner/TitleBanner";
import React from "react";
import ContactSection from "@/components/ui/contact/ContactSection";
import TestFooter from "@/components/common/Footer/TestFooter";
import Footer from "@/components/common/Footer/Footer";
import AboutNasPixels from "@/components/ui/AboutPage/AboutNasPixels";
import CoreServices from "@/components/ui/AboutPage/CoreServices";
import BottomBanner from "@/components/ui/AboutPage/BottomBanner";
import StorySection from "@/components/ui/AboutPage/StorySection";

const page = () => {
  return (
    <div>
      <Herosection
        title={"ABOUT US"}
        description={
          "Dorem ipsum dolor sit amet, consectetur adipiscing elit. aliquet mattis."
        }
      />
      <AboutSection />
      <MissionVisionSection />
      <StorySection/>
      <AboutNasPixels/>
      <CoreServices/>
      <BottomBanner/>
      <ContactSection/>
      <Footer/>
    </div>
  );
};

export default page;
