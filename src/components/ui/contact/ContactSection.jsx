"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import SectionTitle from "@/components/common/Headers/SectionTitle";
import { ModernButton } from "@/components/common/Button/ModernButton";
import { Input } from "@/components/common/Input/Input";

export default function ContactSection() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

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
    <section
      ref={sectionRef}
      className="relative w-full bg-black text-white py-20 px-6 md:px-16 overflow-hidden"
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-14">
        <SectionTitle title="Contact Us" />
        <p className="mt-4 max-w-xl text-gray-400 text-sm md:text-base">
          Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* LEFT IMAGE */}
        <div ref={leftRef} className="flex justify-center lg:justify-start">
          <div className="relative w-[300px] h-[260px] md:w-[420px] md:h-[360px] rounded-2xl overflow-hidden neon-glow">
            <Image
              src="/images/contact-card.png" // <-- replace with your image
              alt="Contact"
              fill
              className="object-cover"
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
              <label className="block mb-2 text-sm">Select Your Product</label>
              <select className="w-full bg-transparent neon-dotted rounded-xl px-4 py-3 text-sm focus:outline-none">
                <option className="bg-black">Select product</option>
                <option className="bg-black">Product 1</option>
                <option className="bg-black">Product 2</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block mb-2 text-sm">Text your message</label>
              <textarea
                rows="4"
                className="w-full bg-transparent neon-dotted rounded-xl px-4 py-3 text-sm resize-none focus:outline-none"
              />
            </div>
            <div className="mt-8 flex justify-center">
              <ModernButton
                text="Send Message"
                onClick={handleClick}
                arrowClr="#fffff"
              />
            </div>
          </form>
        </div>
      </div>

      {/* Decorative circuit lines */}
      <div className="absolute left-0 bottom-10 opacity-40 hidden lg:block">
        <svg width="180" height="120" fill="none">
          <path d="M0 60 H60 V20 H120" stroke="#22c55e" strokeWidth="1" />
          <circle cx="120" cy="20" r="3" fill="#22c55e" />
        </svg>
      </div>
    </section>
  );
}


