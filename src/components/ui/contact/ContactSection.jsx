"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import SectionTitle from "@/components/common/Headers/SectionTitle";
import { ModernButton } from "@/components/common/button/ModernButton";
import CircuitLines from "@/components/animation/CircuitLines";
import CircuitConnections from "@/components/animation/CircuitLines";
import Container from "@/components/common/Layout/Container";
import { Input } from "@/components/common/Input/Input";

export default function ContactSection() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const videoRef = useRef(null);
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.currentTime = 0;
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      {
        threshold: 0.5, // 50% visible
      }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(leftRef.current, {
        opacity: 0,
        x: -60,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(rightRef.current, {
        opacity: 0,
        x: 60,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleClick = () => {
    console.log("More About Us clicked!");
  };

  return (
    <>
      <section
        ref={sectionRef}
        className="relative w-full bg-black text-white py-20 px-6 md:px-16 overflow-hidden"
      >
        {/* Circuit lines - bottom left (Figma accurate) */}
        <div className="absolute hidden md:block -bottom-10 lg:bottom-0 left-0 z-0 pointer-events-none">
          <Image
            src="/assets/images/shapes/doted-line.png"
            alt="Circuit Connections"
            width={351}
            height={276}
            className="
      opacity-100
      w-[250px] 
      lg:w-[351px]
      h-auto
    "
          />
        </div>
        <Container>
          {/* Decorative circuit background */}

          {/* Header */}
          <div className="max-w-7xl mx-auto mb-14">
            <SectionTitle title="Contact Us" />

            <p className="mt-4 max-w-xl text-gray-400 text-sm md:text-base">
              Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus.
            </p>
          </div>

          {/* Main Content */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-5 xl:gap-2 items-start">
            {/* LEFT IMAGE */}
            <div ref={leftRef} className="flex justify-center lg:justify-start">
              <div className="relative w-[300px] h-[260px] md:w-[500px] md:h-[410px] rounded-2xl overflow-hidden neon-glow">
                <video
                  ref={videoRef}
                  src="/assets/videos/contact.mp4"
                  muted
                  playsInline
                  preload="auto"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* RIGHT FORM */}
            <div ref={rightRef}>
              <form className="w-full max-w-xl space-y-6">
                {/* Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input label="Name" />
                  <Input label="Phone Number" />
                </div>

                <Input label="Email" />
                <Input label="Company name & Location" />

                {/* Select */}
                <div>
                  <label className="block mb-2 text-sm">
                    Select Your Product
                  </label>
                  <select className="w-full bg-transparent neon-dotted rounded-xl px-4 py-3 text-sm focus:outline-none">
                    <option className="bg-black">Select product</option>
                    <option className="bg-black">Product 1</option>
                    <option className="bg-black">Product 2</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block mb-2 text-sm">
                    Text your message
                  </label>
                  <textarea
                    rows="4"
                    className="w-full bg-transparent neon-dotted rounded-xl px-4 py-3 text-sm resize-none focus:outline-none"
                  />
                </div>
                <div className="mt-8 flex justify-center ">
                  <ModernButton
                    text="Send Message"
                    onClick={handleClick}
                    arrowClr="#fffff"
                  />
                </div>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}


