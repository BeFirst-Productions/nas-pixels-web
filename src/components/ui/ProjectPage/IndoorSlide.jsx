"use client";
import SectionTitle from "@/components/common/Headers/SectionTitle";
import Image from "next/image";
import { useEffect, useRef } from "react";

const slides = [
  { img: "/assets/images/test.png", title: "Smart Analytics", desc: "AI-powered insights that help you make better business decisions." },
  { img: "/assets/images/test.png", title: "Cloud Security", desc: "Enterprise-grade protection for your digital infrastructure." },
  { img: "/assets/images/test.png", title: "Data Automation", desc: "Streamline operations with intelligent data workflows." },
  { img: "/assets/images/test.png", title: "Blockchain Tech", desc: "Secure and decentralized digital solutions." },
  { img: "/assets/images/test.png", title: "AI Innovation", desc: "Next-generation artificial intelligence platforms." },
];

export default function IndoorSlider() {
  const sliderRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const slider = sliderRef.current;
    let rafId;
    const speed = 0.5; // scrolling speed

    // Start in the middle
    slider.scrollLeft = slider.scrollWidth / 3;

    const autoScroll = () => {
      if (!isDragging.current) {
        slider.scrollLeft += speed;
      }

      const max = slider.scrollWidth / 3;

      // Infinite teleport
      if (slider.scrollLeft >= max * 2) {
        slider.scrollLeft -= max;
      }
      if (slider.scrollLeft <= 0) {
        slider.scrollLeft += max;
      }

      rafId = requestAnimationFrame(autoScroll);
    };

    autoScroll();
    return () => cancelAnimationFrame(rafId);
  }, []);

  const startDrag = (e) => {
    isDragging.current = true;
    startX.current = e.pageX || e.touches[0].pageX;
    scrollLeft.current = sliderRef.current.scrollLeft;
  };

  const stopDrag = () => {
    isDragging.current = false;
  };

  const onDrag = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX || e.touches[0].pageX;
    const walk = (x - startX.current) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <section className="w-full py-10 md:py-20 overflow-hidden">
          <div className="flex justify-center mb-12">
                               <SectionTitle title={"Indoor"}/>
                            </div>
      <div
        ref={sliderRef}
        className="w-full overflow-x-scroll overflow-y-hidden scrollbar-hide cursor-grab"
        onMouseDown={startDrag}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
        onMouseMove={onDrag}
        onTouchStart={startDrag}
        onTouchEnd={stopDrag}
        onTouchMove={onDrag}
      >
        <div className="flex w-max">
          {[...slides, ...slides, ...slides].map((item, i) => (
            <div
              key={i}
              className="w-[400px]  lg:w-[600px] mx-6 flex-shrink-0 backdrop-blur-lg rounded-2xl p-6"
            >
              <div className="mb-4 flex justify-center">
                <div className="relative w-full h-82 rounded-xl p-4 border-2 border-dashed border-[#70C879] flex items-center justify-center">
                  <div className="w-full h-full flex items-center justify-center">
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={500}
                      height={300}
                      className="max-w-full max-h-full object-cover hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-semibold">{item.title}</h3>
              <p className="text-base md:text-lg leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
