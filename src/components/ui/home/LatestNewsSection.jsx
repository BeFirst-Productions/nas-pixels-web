"use client";

import Image from "next/image";
import Container from "@/components/common/Layout/Container";
import { ModernButton } from "@/components/common/Button/ModernButton";
import SectionTitle from "@/components/common/Headers/SectionTitle";

const NEWS = [
  {
    title: "New LED technology trends",
    desc:
      "Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euest turpis molestie, dictum est.",
    img: "/assets/images/news/news-1.png",
  },
  {
    title: "New LED technology trends",
    desc:
      "Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euest turpis molestie, dictum est.",
    img: "/assets/images/news/news-2.png",
  },
  {
    title: "New LED technology trends",
    desc:
      "Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euest turpis molestie, dictum est.",
    img: "/assets/images/news/news-3.png",
  },
  {
    title: "New LED technology trends",
    desc:
      "Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euest turpis molestie, dictum est.",
    img: "/assets/images/news/news-4.png",
  },
];

export default function LatestNewsSection() {
  return (
    <section className="w-full bg-black text-white py-16 md:py-24">
      <Container>
        {/* Header */}
        <div className="mb-14 md:mb-24 max-w-7xl mx-auto">
          <div className=" mb-4">
        <SectionTitle title="Latest News"/>
          </div>

          <p className="text-gray-300 text-sm md:text-[20px] max-w-2xl  font-medium leading-relaxed">
            Morem ipsum dolor sit amet, consectetur adipiscing elit.
            Etiam eu turpis molestie, dictum est a, mattis tellus.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {NEWS.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-4">
              
        {/* IMAGE CARD — WITH 10px GREEN INSIDE GAP */}
<div
  className="
    w-full
   
   
    aspect-square
    border-2
    border-dotted
    border-[#70C879]
    rounded-[12px]
    box-border
  "
>
  {/* INNER GREEN GAP */}
  <div
    className="
      w-full
      h-full
      p-[10px]
      bg-[#0F3A22]
      rounded-xl
      box-border
    "
  >
    {/* IMAGE */}
    <div className="relative w-full h-full rounded-xl overflow-hidden">
      <Image
        src={item.img}
        alt={item.title}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 260px, 280px"
      />
    </div>
  </div>
</div>


              {/* Text */}
              <div>
                <h3 className="text-sm md:text-lg font-semibold mb-1">
                  {item.title}
                </h3>
                <p className="text-xs md:text-base font-normal text-gray-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-16 flex justify-center items-center gap-4">
   <ModernButton text="Button"/>
        </div>
      </Container>
    </section>
  );
}
