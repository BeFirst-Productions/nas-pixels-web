import Footer from '@/components/common/Footer/Footer'
import TestFooter from '@/components/common/Footer/TestFooter'
import Herosection from '@/components/TitleBanner/TitleBanner'
import ContactSection from '@/components/ui/contact/ContactSection'
import IndoorSlider from '@/components/ui/ProjectPage/IndoorSlide'
import OutdoorSection from '@/components/ui/ProjectPage/OutdoorSection'
import TechnologyPartnersSection from '@/components/ui/ProjectPage/TechnologyPartnersSection'
import React from 'react'
export const metadata = {
  title: "Digital Signage Display | Outdoor LED Screen UAE | Projects",
  description:
    "Nas Pixels showcases projects featuring LED display screens in the UAE, digital signage, video walls, AV integration, smart home, and enterprise visual solutions.",

  keywords: [
    "outdoor led screen uae",
    "digital signage display",
    "digital signage",
    "led signage dubai",
    "led suppliers in dubai",
    "led display solution",
    "led signage company uae",
    "led screen company in dubai",
  ],

  alternates: {
    canonical: "https://naspixels.com/projects",
  },

  openGraph: {
    title: "Digital Signage Display | Outdoor LED Screen UAE | Projects",
    description:
      "Nas Pixels showcases projects featuring LED display screens in the UAE, digital signage, video walls, AV integration, smart home, and enterprise visual solutions.",
    url: "https://naspixels.com/projects",
    siteName: "Naspixels",
    type: "website",
  },
};


const page = () => {
  return (
    <div>
      <Herosection
        title={"PROJECTS"}

      />
      <IndoorSlider />
      {/* <OutdoorSection/> */}
      {/* <TechnologyPartnersSection/> */}
      <ContactSection />
    </div>
  )
}

export default page