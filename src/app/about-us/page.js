import AboutSection from '@/components/AboutPage/AboutSection'
import MissionVisionSection from '@/components/AboutPage/MissionVision'
import Navbar from '@/components/common/Navbar/Navbar'
import Herosection from '@/components/TitleBanner/TitleBanner'
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar/>
        <Herosection title={"ABOUT US"} description={"Dorem ipsum dolor sit amet, consectetur adipiscing elit. aliquet mattis."}/>
    <AboutSection/>
    <MissionVisionSection/>
    </div>
  )
}

export default page