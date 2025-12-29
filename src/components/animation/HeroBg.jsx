"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import gsap from "gsap";
import { cn } from "@/lib/utils";

export const SparklesCore = ({
  id,
  className,
  background,
  minSize,
  maxSize,
  speed,
  particleColor,
  particleDensity,
}) => {
  const [init, setInit] = useState(false);
  const wrapperRef = useRef(null);
  const generatedId = useId();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = () => {
    gsap.to(wrapperRef.current, {
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    });
  };

  return (
    <div
      ref={wrapperRef}
      className={cn("opacity-0", className)}
    >
      {init && (
        <Particles
          id={id || generatedId}
          className="h-full w-full"
          particlesLoaded={particlesLoaded}
          options={{
            background: {
              color: { value: background || "#0d47a1" },
            },
            fullScreen: { enable: false, zIndex: 1 },
            fpsLimit: 120,
            particles: {
              color: { value: particleColor || "#ffffff" },
              number: {
                value: particleDensity || 120,
                density: { enable: true, width: 400, height: 400 },
              },
              opacity: {
                value: { min: 0.1, max: 1 },
                animation: {
                  enable: true,
                  speed: speed || 4,
                  sync: false,
                },
              },
              size: {
                value: { min: minSize || 1, max: maxSize || 3 },
              },
              move: {
                enable: true,
                speed: { min: 0.1, max: 1 },
                direction: "none",
                outModes: { default: "out" },
              },
              shape: { type: "circle" },
              links: { enable: false },
            },
            detectRetina: true,
          }}
        />
      )}
    </div>
  );
};
