import Footer from '@/components/common/Footer/Footer'
import TestFooter from '@/components/common/Footer/testFooter'
import SolutionsSection from '@/components/ui/SolutionsPage/SolutionsSection'
import Herosection from '@/components/TitleBanner/TitleBanner'
import IndoorSlider from '@/components/ui/ProjectPage/IndoorSlide'
import OutdoorSection from '@/components/ui/ProjectPage/OutdoorSection'
import React from 'react'

const page = () => {
  return (
       <div>
      <Herosection
        title={"SOLUTIONS"}
      />
      <SolutionsSection/>  
     
    </div>
  )
}

export default page