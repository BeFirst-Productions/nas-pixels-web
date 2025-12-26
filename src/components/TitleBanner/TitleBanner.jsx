import React from 'react'
import Antigravity from '../animation/bg'

const Herosection = ({ title, description }) => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background Animation */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <Antigravity
          count={300}
          magnetRadius={50}
          ringRadius={25}
          waveSpeed={0.4}
          waveAmplitude={1}
          particleSize={1.5}
          lerpSpeed={0.05}
          color={'#16572D'}
          autoAnimate={true}
          particleVariance={1}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-2xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {title}
        </h1>
        <p className="text-lg md:text-xl">
          {description}
        </p>
      </div>

    </div>
  )
}

export default Herosection
