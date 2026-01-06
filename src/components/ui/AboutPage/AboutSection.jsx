"use client"
import React from "react";
import Link from "next/link";
import { ModernButton } from "../../common/Button/ModernButton";
import Container from "../../common/Layout/Container";
import Image from "next/image";
import { useRouter } from "next/navigation";

const AboutSection = () => {
  const router = useRouter()
  return (
    <section className="w-full  py-10 md:py-20  flex items-center">
      <Container>
        <div className=" max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="">
            <div className="flex items-center gap-3">
              <h2 className=" font-host inline-block text-3xl md:text-4xl xl:text-[2.625rem] font-semibold  py-1  rounded-full ">
                About Us
              </h2>

              <div className="relative -left-[8%] lg:-left-[5%]  flex items-center justify-center w-11 h-11 md:w-12 md:h-12 lg:w-[52px] lg:h-[52px] rounded-full flex-shrink-0">
                <svg
                  className="absolute inset-0 w-full h-full -rotate-45 transition-all duration-300"
                  viewBox="0 0 52 52"
                  style={{ opacity: 0.7 }}
                >
                  <defs>
                    <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: "#0000", stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: "#70C879", stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>
                  <circle
                    cx="26"
                    cy="26"
                    r="25"
                    fill="none"
                    stroke="url(#borderGradient)"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
            </div>

            <p className=" text-lg md:text-xl  font-medium leading-relaxed  py-4">
              We specialize in providing high-quality commercial display solutions designed for modern businesses. From LED walls and digital signage to professional-grade monitors and control room displays, we supply reliable, high-performance screens built to deliver clarity, durability, and visual impact.

            </p>
            <p className=" text-lg md:text-xl  font-medium leading-relaxed mb-8 ">
              With a focus on certified products, expert technical support, and efficient installation, we help businesses create powerful visual environments that support communication, branding, and operations. Our goal is simple — to provide the right display technology that works flawlessly in every space.

            </p>

            {/* <Link
            href="/about"
            className="inline-flex items-center gap-3 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full transition"
          >
            More About Us
            <span className="text-lg">→</span>
          </Link> */}
            <ModernButton text="Learn Our Story" onClick={() => router.push("#our-story")} />
          </div>

          {/* Right Image/Card */}
          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-lg h-[300px] relative rounded-xl overflow-hidden 
                  shadow-[0_0_30px_rgba(34,197,94,0.6)] 
                  hover:shadow-[0_0_45px_rgba(34,197,94,0.8)] 
                  transition-shadow duration-300">
              <Image
                src="/assets/images/mission_vision/about.png"
                alt="Hero image"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>


        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
