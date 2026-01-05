"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const slides = [
  {
    img: "/assets/images/projects/1.5 cob.jpeg",
    title: "P1.5 Cob HD Screen at Bahrain",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    img: "/assets/images/projects/1.8 Flexible.jpg",
    title: "P1.8 Flexible Indoor Led screen at Qatar",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
  },
  {
    img: "/assets/images/projects/2.5 indoor.jpeg",
    title: "P2.5 Outdoor LED screen at Abudhabi",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse."
  },
  {
    img: "/assets/images/projects/3.9 transparent.jpeg",
    title: "P3.9 outdoor Transparent led screen at Difc Dubai",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa."
  },
  {
    img: "/assets/images/projects/p5 Outdoor.jpeg",
    title: "P5 7000 nits outdoor led screen at Umm ul qain",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem."
  },
  {
    img: "/assets/images/projects/P1.5 Riyadh.jpeg",
    title: "P1.5 Cob at Riyadh",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nemo enim ipsam voluptatem quia voluptas sit aspernatur."
  },
  {
    img: "/assets/images/projects/P1.8 Kuwait.jpeg",
    title: "P1.8 SMD led Screen at Kuwait",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est qui dolorem ipsum quia dolor sit."
  },
];


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
    <section className="w-full py-10 md:py-20 overflow-hidden">
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
            <SlideCard key={i} item={item}  />
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
