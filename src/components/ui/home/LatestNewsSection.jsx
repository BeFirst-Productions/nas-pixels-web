"use client";

import Image from "next/image";
import Container from "@/components/common/Layout/Container";
import { ModernButton } from "@/components/common/Button/ModernButton";
import SectionTitle from "@/components/common/Headers/SectionTitle";

const NEWS = [
  {
    title: "Digital Signage Trends Transforming Brand Communication in Dubai",
    desc:
      "Discover how digital signage solutions transform brand communication across retail corporate hospitality environments worldwide today",
    img:"/assets/images/blog/digital.png",
  },
  {
    title: "Smart Home Automation Trends 2026 in UAE",
    desc:
      "Explore smart home automation trends enhancing comfort security energy efficiency modern residential living spaces globally",
    img: "/assets/images/blog/smart.png",
  },
  {
    title: "Advanced Audiovisual Integration for Modern Workspaces in UAE",
    desc:
      "Learn how advanced audiovisual integration improves collaboration engagement performance workplaces education venues and large environments",
    img: "/assets/images/blog/advanced.png",
  },
  {
    title: "Innovative Lighting Technologies for Architectural Spaces in Dubai",
    desc:
      "Understand innovative lighting technologies shaping architectural aesthetics sustainability intelligent indoor outdoor spaces for future projects",
    img: "/assets/images/blog/innovative.png",
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
          Explore updates, trends, and expert insights in digital signage, AV systems, smart automation, lighting, and content technologies.
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