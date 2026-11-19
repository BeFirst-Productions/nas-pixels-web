"use client";

import React from 'react'
import Antigravity from '../animation/bg'
import { SparklesCore } from '../animation/HeroBg'
import { AnimatedText } from '../animation/AnimatedText'
import { useLanguage } from '@/context/LanguageContext'

const PrivacyTitleBanner = ({ title, description }) => {
  const { t } = useLanguage();
  const displayTitle = title?.toLowerCase().includes("privacy")
    ? t("footer.links.privacy", title)
    : title;
  return (
  
    <div className="py-10 lg:py-20   w-full  flex flex-col items-center justify-center overflow-hidden rounded-md">

       <AnimatedText 
      text={displayTitle} 
      textClassName="md:text-7xl text-3xl mb-2 font-bold text-center relative z-20"
    
    />
      <div className="w-[40rem] h-40 relative ">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-green-500 to-transparent h-[2px] w-3/4 blur-sm" />
<div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-green-500 to-transparent h-px w-3/4" />
<div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-emerald-400 to-transparent h-[5px] w-1/4 blur-sm" />
<div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-emerald-400 to-transparent h-px w-1/4" />


        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={2}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  )
}

export default PrivacyTitleBanner
