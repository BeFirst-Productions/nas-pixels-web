"use client"
import React, { useEffect, useRef } from "react"
import gsap from "gsap"

const PillerAnimation = () => {
  const left = useRef(null)
  const right = useRef(null)

  useEffect(() => {
    gsap.set([left.current, right.current], {
      backgroundPositionX: "50%",
    })

    const wave = {
      backgroundPositionX: "80%",
      duration: 0.9,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    }

    // Both sides move identically
    gsap.to(left.current, wave)
    gsap.to(right.current, wave)
  }, [])



  const gradient = `
    linear-gradient(
      90deg,
      rgba(112,200,121,0.1) 0%,
      rgba(112,200,121,0.6) 20%,
      rgba(112,200,121,0.2) 40%,
      rgba(112,200,121,0.7) 60%,
      rgba(112,200,121,0.2) 80%,
      rgba(112,200,121,0.5) 100%
    )
  `

  return (
    <div className="">
      <div
        ref={left}
        className="hidden md:block absolute inset-y-0 left-0 w-[100px] blur-xl pointer-events-none
+ rounded-r-[999px]"
        style={{
          backgroundImage: gradient,
          backgroundSize: "200% 100%",
        }}
      />

      <div
        ref={right}
        className="hidden md:block absolute inset-y-0 right-0 w-[100px] blur-xl pointer-events-none
+ rounded-l-[999px]"
        style={{
          backgroundImage: gradient,
          backgroundSize: "200% 100%",
        }}
      />
    </div>
  )
}

export default PillerAnimation
