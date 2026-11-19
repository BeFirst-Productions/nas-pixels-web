import Footer from '@/components/common/Footer/Footer'
import TestFooter from '@/components/common/Footer/TestFooter'
import SolutionsSection from '@/components/ui/SolutionsPage/SolutionsSection'
import Herosection from '@/components/TitleBanner/TitleBanner'
import IndoorSlider from '@/components/ui/ProjectPage/IndoorSlide'
import OutdoorSection from '@/components/ui/ProjectPage/OutdoorSection'
import React from 'react'
import ContactSection from '@/components/ui/contact/ContactSection'
export const metadata = {
  title: "LED Screens in UAE | LED Screens | Naspixels",
  description:
    "Nas Pixels provides superior command center, home theatre, and smart classroom solutions using high-performance LED screens in the UAE.",

  keywords: [
    "led screens in uae",
    "led screens",
    "led display dubai",
    "outdoor led screen dubai",
    "led suppliers in dubai",
    "led display solution",
    "led screen suppliers in dubai",
    "led signage company uae",
    "led screen company in dubai",
  ],

  alternates: {
    canonical: "https://naspixels.com/solutions",
  },

  openGraph: {
    title: "LED Screens in UAE | LED Screens | Naspixels",
    description:
      "Nas Pixels provides superior command center, home theatre, and smart classroom solutions using high-performance LED screens in the UAE.",
    url: "https://naspixels.com/solutions",
    siteName: "Naspixels",
    type: "website",
  },
};
const page = () => {
  return (
    <div>
      <Herosection
        title={"SOLUTIONS"}
      />
      <SolutionsSection />
      <ContactSection />

    </div>
  )
}

export default page