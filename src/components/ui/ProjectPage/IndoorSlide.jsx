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
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  // Drag support
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const activeSlider = useRef(null);

 useEffect(() => {
  const s1 = slider1.current;
  const s2 = slider2.current;

  const speed = 0.6;
  let raf;

  const width1 = s1.scrollWidth / 3;
  const width2 = s2.scrollWidth / 3;

  // Start both in the middle copy
  s1.scrollLeft = width1;
  s2.scrollLeft = width2;

  const animate = () => {
    if (!isDragging.current) {
      // top → right
      s1.scrollLeft += speed;

      // bottom → left
      s2.scrollLeft -= speed;
    }

    /* TOP (normal direction) */
    if (s1.scrollLeft >= width1 * 2) {
      s1.scrollLeft -= width1;
    }
    if (s1.scrollLeft <= 0) {
      s1.scrollLeft += width1;
    }

    /* BOTTOM (reverse direction — IMPORTANT) */
    if (s2.scrollLeft <= 0) {
      s2.scrollLeft += width2;
    }
    if (s2.scrollLeft >= width2 * 2) {
      s2.scrollLeft -= width2;
    }

    raf = requestAnimationFrame(animate);
  };

  animate();
  return () => cancelAnimationFrame(raf);
}, []);


  const startDrag = (e, slider) => {
    isDragging.current = true;
    activeSlider.current = slider;
    startX.current = e.pageX || e.touches[0].pageX;
    scrollLeft.current = slider.scrollLeft;
  };

  const stopDrag = () => {
    isDragging.current = false;
  };

  const onDrag = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX || e.touches[0].pageX;
    const walk = (x - startX.current) * 1.5;
    activeSlider.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <section className="w-full py-10 md:py-20 overflow-hidden">
      <div className="flex justify-center mb-12">
        <SectionTitle title={"Indoor"} />
      </div>

      {/* TOP ROW */}
      <div
        ref={slider1}
        className="w-full overflow-x-scroll scrollbar-hide cursor-grab"
        onMouseDown={(e) => startDrag(e, slider1.current)}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
        onMouseMove={onDrag}
        onTouchStart={(e) => startDrag(e, slider1.current)}
        onTouchEnd={stopDrag}
        onTouchMove={onDrag}
      >
        <div className="flex w-max">
          {[...slides, ...slides, ...slides].map((item, i) => (
            <SlideCard key={i} item={item} />
          ))}
        </div>
      </div>

      {/* BOTTOM ROW (reverse direction) */}
      <div
        ref={slider2}
        className="w-full overflow-x-scroll scrollbar-hide cursor-grab mt-12"
        onMouseDown={(e) => startDrag(e, slider2.current)}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
        onMouseMove={onDrag}
        onTouchStart={(e) => startDrag(e, slider2.current)}
        onTouchEnd={stopDrag}
        onTouchMove={onDrag}
      >
        <div className="flex w-max">
          {[...slides, ...slides, ...slides].map((item, i) => (
            <SlideCard key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* Slide Card Component */
function SlideCard({ item }) {
  return (
    <div className="w-[400px] lg:w-[600px] mx-6 flex-shrink-0 backdrop-blur-lg rounded-2xl p-6">
      <div className="mb-4 flex justify-center">
        <div className="relative w-full h-82 rounded-xl p-4 border-2 border-dashed border-[#70C879] flex items-center justify-center">
          <Image
            src={item.img}
            alt={item.title}
            width={500}
            height={300}
            className="max-w-full max-h-full object-cover hover:scale-105 transition-transform"
          />
        </div>
      </div>

      <h3 className="text-xl md:text-2xl font-semibold">{item.title}</h3>
      <p className="text-base md:text-lg leading-relaxed font-medium">
        {item.desc}
      </p>
    </div>
  );
}
