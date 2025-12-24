import React from "react";
import Link from "next/link";
import { ModernButton } from "../common/ModernButton";
import Container from "../common/Container";

const AboutSection = () => {
  return (
    <section className="w-full  py-10 md:py-20  flex items-center">
   <Container>
       <div className=" grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

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
      
          <p className=" text-lg md:text-xl  font-medium leading-relaxed mb-8 py-4">
           Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
          </p>

          {/* <Link
            href="/about"
            className="inline-flex items-center gap-3 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full transition"
          >
            More About Us
            <span className="text-lg">→</span>
          </Link> */}
          <ModernButton text="More About Us" />
        </div>

        {/* Right Image/Card */}
        <div className="flex justify-center md:justify-end">
          <div className="w-full max-w-lg h-[300px] bg-gray-300 rounded-xl shadow-lg" />
        </div>

      </div>
   </Container>
    </section>
  );
};

export default AboutSection;
