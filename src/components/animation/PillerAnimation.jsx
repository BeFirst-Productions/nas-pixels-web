"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"

const PillerAnimation = () => {
  const left = useRef(null)
  const right = useRef(null)

  useEffect(() => {
    // Initial soft state
    gsap.set([left.current, right.current], {
      opacity: 0.15,
    })

    // Glow breathing animation
    gsap.to([left.current, right.current], {
      opacity: 0.6,
      duration: 1.2,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    })
  }, [])

  const gradient = `
    linear-gradient(
      180deg,
      rgba(112,200,121,0) 0%,
      rgba(112,200,121,0.4) 20%,
      rgba(112,200,121,0.8) 50%,
      rgba(112,200,121,0.4) 80%,
      rgba(112,200,121,0) 100%
    )
  `

  return (
    <div className="pointer-events-none">
      {/* LEFT PILLAR */}
      <div
        ref={left}
        className="hidden md:block absolute inset-y-0 left-0 w-[100px] blur-2xl rounded-r-[999px]"
        style={{
          backgroundImage: gradient,
        }}
      />

      {/* RIGHT PILLAR */}
      <div
        ref={right}
        className="hidden md:block absolute inset-y-0 right-0 w-[100px] blur-2xl rounded-l-[999px]"
        style={{
          backgroundImage: gradient,
        }}
      />
    </div>
  )
}

export default PillerAnimation
