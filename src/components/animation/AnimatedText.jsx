"use client"
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

const AnimatedText = React.forwardRef(
  (
    {
      text,
      gradientColors = "linear-gradient(90deg, #000, #fff, #000)",
      gradientAnimationDuration = 1,
      hoverEffect = false,
      className,
      textClassName,
      ...props
    },
    ref
  ) => {
    const textRef = useRef(null);
    const glowTween = useRef(null);

    useEffect(() => {
      if (!textRef.current) return;

      const tween = gsap.fromTo(
        textRef.current,
        { backgroundPosition: "0% 50%" },
        {
          backgroundPosition: "100% 50%",
          duration: gradientAnimationDuration *1.5,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        }
      );

      return () => {
        tween.kill();
      };
    }, [gradientAnimationDuration]);

    const handleMouseEnter = () => {
      if (!hoverEffect || !textRef.current) return;

      glowTween.current = gsap.to(textRef.current, {
        textShadow: "0 0 8px rgba(255,255,255,0.35)",
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      if (!hoverEffect || !textRef.current) return;

      if (glowTween.current) glowTween.current.kill();

      gsap.to(textRef.current, {
        textShadow: "0 0 0 rgba(255,255,255,0)",
        duration: 0.3,
        ease: "power2.out",
      });
    };

    return (
      <div
        ref={ref}
        className={cn("flex justify-center items-center ", className)}
        {...props}
      >
        <h2
          ref={textRef}
          className={cn(
            textClassName
          )}
          style={{
            background: gradientColors,
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            willChange: "background-position, text-shadow",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {text}
        </h2>
      </div>
    );
  }
);

AnimatedText.displayName = "AnimatedText";

export { AnimatedText };
