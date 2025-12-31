"use client";

import Image from "next/image";
import Container from "@/components/common/Layout/Container";
import { ModernButton } from "@/components/common/Button/ModernButton";
import SectionTitle from "@/components/common/Headers/SectionTitle";

const PROJECTS = [
  {
    title: "indoor Outdoor Screen",
    location: "Dubai, UAE",
    img: "/assets/images/projects/project1.png",
  },
  {
    title: "Curve Outdoor Screen",
    location: "Dubai, UAE",
    img: "/assets/images/projects/project2.png",
  },
  {
    title: "Curve Outdoor Screen",
    location: "Dubai, UAE",
    img: "/assets/images/projects/project3.png",
  },
  {
    title: "indoor Outdoor Screen",
    location: "Dubai, UAE",
    img: "/assets/images/projects/project1.png",
  },
];

export default function OurProjectsSection() {
  return (
    <section
      className="w-full min-h-screen text-white py-20 md:py-28"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(47,189,97,1) 38%, rgba(22,87,45,1) 54%, rgba(47,189,97,1) 78%, rgba(0,0,0,1) 100%)",
        backgroundPosition: "center center",
      }}
    >
      <Container>
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="mb-4">
        <SectionTitle title="Our Projects"/>
          </div>

          <p className="text-sm md:text-base text-gray-200 leading-relaxed">
            Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget dignissim, metus nec fringilla
            accumsan.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROJECTS.map((item, idx) => (
            <div
              key={idx}
              className="
                w-full
                max-w-[348px]
                mx-auto
                rounded-[16px]
                overflow-hidden
                bg-black
              "
            >
              {/* Image */}
              <div className="relative w-full h-[260px]">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 348px"
                />
              </div>

              {/* Caption */}
              <div className="px-4 py-4 text-center">
                <h3 className="text-sm font-medium">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-300">
                  {item.location}
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
