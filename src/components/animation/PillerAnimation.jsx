"use client"
import React, { useEffect, useRef } from "react"
import gsap from "gsap"

const PillerAnimation = () => {
  const left = useRef(null)
  const right = useRef(null)

  useEffect(() => {
    gsap.set([left.current, right.current], {
      backgroundPositionX: "0%",
    })

    // Left pillar flows to the right forever
    gsap.to(left.current, {
      backgroundPositionX: "300%",
      duration: 6,          // faster
      ease: "linear",       // NO slowdown = infinite feel
      repeat: -1,
    })

    // Right pillar flows left forever
    gsap.to(right.current, {
      backgroundPositionX: "-300%",
      duration: 6,
      ease: "linear",
      repeat: -1,
    })
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
    <>
      <div
        ref={left}
        className="hidden md:block absolute inset-y-0 left-0 w-[90px]  blur-xl pointer-events-none"
        style={{
          backgroundImage: gradient,
          backgroundSize: "300% 100%",
        }}
      />

      <div
        ref={right}
        className="hidden md:block absolute inset-y-0 right-0 w-[90px] blur-xl pointer-events-none"
        style={{
          backgroundImage: gradient,
          backgroundSize: "300% 100%",
        }}
      />
    </>
  )
}

export default PillerAnimation
