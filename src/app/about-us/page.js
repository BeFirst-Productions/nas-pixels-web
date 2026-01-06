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

export const metadata = {
  title: "About NAS Pixels | Digital Innovation & LED Screen Experts",
  description:
    "Learn about NAS Pixels, a Dubai-based digital innovation company specializing in LED screens, digital signage, AV integration, smart home automation, lighting solutions, and content services across the Middle East.",

  keywords: [
    "about nas pixels",
    "digital signage company dubai",
    "led screen company uae",
    "av integration middle east",
    "smart home automation dubai",
    "digital innovation company middle east",
  ],

  openGraph: {
    title: "About NAS Pixels",
    description:
      "Founded in Dubai, NAS Pixels delivers innovative LED screens, digital signage, AV systems, smart home automation, lighting, and content services across the Middle East.",
    url: "https://naspixels.com/about",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About NAS Pixels",
    description:
      "Dubai-based digital innovation company delivering LED screens, AV integration, smart homes, lighting, and content services.",
  },
};

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
    </div>
  );
};

export default page;
