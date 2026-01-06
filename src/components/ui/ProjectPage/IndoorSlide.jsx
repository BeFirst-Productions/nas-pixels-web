"use client";
import { slides } from "@/data/projects";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";


export default function IndoorSlider() {
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  const [selected, setSelected] = useState(null);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const activeSlider = useRef(null);

  /* Auto Scroll */
  useEffect(() => {
    const s1 = slider1.current;
    const s2 = slider2.current;

    const speed = 0.6;
    let raf;

    const width1 = s1.scrollWidth / 3;
    const width2 = s2.scrollWidth / 3;

    s1.scrollLeft = width1;
    s2.scrollLeft = width2;

    const animate = () => {
      if (!isDragging.current) {
        s1.scrollLeft += speed;
        s2.scrollLeft -= speed;
      }

      if (s1.scrollLeft >= width1 * 2) s1.scrollLeft -= width1;
      if (s1.scrollLeft <= 0) s1.scrollLeft += width1;

      if (s2.scrollLeft <= 0) s2.scrollLeft += width2;
      if (s2.scrollLeft >= width2 * 2) s2.scrollLeft -= width2;

      raf = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(raf);
  }, []);

  /* ESC to close modal */
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
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
    <section className="w-full py-10 md:py-20 overflow-hidden max-w-[100rem] mx-auto">
      {/* TOP SLIDER */}
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
        {/* <div className="flex w-max">
          {[...slides, ...slides, ...slides].map((item, i) => (
            <SlideCard key={i} item={item} onClick={() => setSelected(item)} />
          ))}
        </div> */}
      </div>

      {/* BOTTOM SLIDER */}
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
            <SlideCard key={i} item={item} onClick={() => setSelected(item)} />
          ))}
        </div>
      </div>

      {/* MODAL */}
      {/* {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/70  flex items-center justify-center"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-black rounded-2xl max-w-5xl w-[90%] relative grid grid-cols-1 md:grid-cols-2 gap-6 p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-3xl font-bold text-gray-600 hover:text-black"
              onClick={() => setSelected(null)}
            >
              ×
            </button>

            <div className="flex items-center justify-center">
              <Image
                src={selected.img}
                alt={selected.title}
                width={600}
                height={400}
                className="rounded-xl object-cover"
              />
            </div>

            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">{selected.title}</h2>
              <p className="text-lg  leading-relaxed">
                {selected.desc}
              </p>
            </div>
          </div>
        </div>
      )} */}
    </section>
  );
}

/* Slide Card */
function SlideCard({ item, onClick }) {
  return (
    <div className="w-[400px] lg:w-[600px] mx-6 flex-shrink-0 backdrop-blur-lg rounded-2xl p-6">
      <div
        className="mb-4 flex justify-center cursor-pointer"
        onClick={onClick}
      >
        <div
          className="
      relative w-full
      rounded-xl p-4
      border-2 border-dashed border-[#70C879]
      flex items-center justify-center
      aspect-[16/9]
    "
        >
          <Image
            src={item.img}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 90vw, 600px"
            className="
        object-cover
        p-2
        md:p-3
        rounded-2xl
        transition-transform duration-300
        hover:scale-105
      "
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
