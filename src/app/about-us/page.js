import AboutSection from "@/components/ui/AboutPage/AboutSection";
import MissionVisionSection from "@/components/ui/AboutPage/MissionVision";
import Navbar from "@/components/common/Navbar/Navbar";
import Herosection from "@/components/TitleBanner/TitleBanner";
import React from "react";

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
    </div>
  );
};

export default page;
