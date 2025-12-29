import Footer from '@/components/common/Footer/Footer'
import Herosection from '@/components/TitleBanner/TitleBanner'
import IndoorSlider from '@/components/ui/ProjectPage/IndoorSlide'
import OutdoorSection from '@/components/ui/ProjectPage/OutdoorSection'
import React from 'react'

const page = () => {
  return (
       <div>
      <Herosection
        title={"PROJECTS"}
        description={
          "Dorem ipsum dolor sit amet, consectetur adipiscing elit. aliquet mattis."
        }
      />
      <IndoorSlider/>
      <OutdoorSection/>
      <Footer/>
     
    </div>
  )
}

export default page