import Footer from '@/components/common/Footer/Footer'
import TestFooter from '@/components/common/Footer/testFooter'
import Herosection from '@/components/TitleBanner/TitleBanner'
import IndoorSlider from '@/components/ui/ProjectPage/IndoorSlide'
import OutdoorSection from '@/components/ui/ProjectPage/OutdoorSection'
import TechnologyPartnersSection from '@/components/ui/ProjectPage/TechnologyPartnersSection'
import React from 'react'

const page = () => {
  return (
       <div>
      <Herosection
        title={"PROJECTS"}
       
      />
      <IndoorSlider/>
      {/* <OutdoorSection/> */}
      {/* <TechnologyPartnersSection/> */}
     
    </div>
  )
}

export default page