import React from 'react'
import Antigravity from '../animation/bg'
import { SparklesCore } from '../animation/HeroBg'

const Herosection = ({ title, description }) => {
  return (
  //   <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">

  //     {/* Background Animation */}
  //     <div className="absolute inset-0 -z-10 pointer-events-none">
  //       {/* <Antigravity
  //         count={300}
  //         magnetRadius={50}
  //         ringRadius={25}
  //         waveSpeed={0.4}
  //         waveAmplitude={1}
  //         particleSize={1.5}
  //         lerpSpeed={0.05}
  //         color={'#16572D'}
  //         autoAnimate={true}
  //         particleVariance={1}
  //       /> */}
  //  {/* Core component */}
  //       <SparklesCore
  //         background="transparent"
  //         minSize={0.4}
  //         maxSize={1}
  //         particleDensity={1200}
  //         className="w-full h-full"
  //         particleColor="#FFFFFF"
  //       />      </div>

  //     {/* Hero Content */}
  //     <div className="relative z-10 text-center max-w-2xl px-4">
  //       <h1 className="text-4xl md:text-6xl font-bold mb-4">
  //         {title}
  //       </h1>
  //       <p className="text-lg md:text-xl">
  //         {description}
  //       </p>
  //     </div>

  //   </div>
    <div className="py-28 lg:py-56   w-full  flex flex-col items-center justify-center overflow-hidden rounded-md">
     
      <h2 className="md:text-7xl text-3xl mb-2 font-bold text-center text-white relative z-20">
        {title}
      </h2>
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

export default Herosection
