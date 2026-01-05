"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import SectionTitle from "@/components/common/Headers/SectionTitle";
import Container from "@/components/common/layout/Container";
import { ModernButton } from "@/components/common/button/ModernButton";
import { useRouter } from "next/navigation";
import PillerAnimation from "@/components/animation/PillerAnimation";

const ROW_HEIGHT = 120;

const products = [
  {
    title: "Digital Signage Solutions",
    image: "/assets/images/home-products/Digital Signage Solutions.jpg",
    row: 0,
    side: "left",
    category: "Commercial LED",
    subCategories: [
      "Indoor & Outdoor LED Screens",
      "Video Walls (Fine Pitch, COB, LCD)",
      "Interactive Digital Kiosks & Touch Displays",
      "Transparent & Flexible LED Displays",
      "Drive-Thru / QSR Menu Boards",
      "Centralized Content Management & Scheduling",
    ],
    description:
      "We deliver advanced digital signage systems that transform communication and customer engagement.",
    pixelPitch: ["P3", "P4", "P5", "P6", "P8", "P10"],
    cabinet: " Customized, 960mm x 960mm",
    brightness: "4500-10000 Nits",
  },

  {
    title: "Static Signage & Wayfinding",
    image: "/assets/images/home-products/Static Signage & Wayfinding.jpg",
    row: 0,
    side: "right",
    category: "Signage",
    subCategories: [
      "Architectural & Branding Signage",
      "Illuminated & Non-Illuminated Solutions",
      "Wayfinding & Directional Signage Systems",
      "Safety & Compliance Signage",
      "Environmental & Decorative Graphics",
    ],
    description:
      "We design and implement effective static signage and wayfinding systems to guide, inform, and inspire.",
    pixelPitch: ["LCD", "4K", "FHD"],
    cabinet: "Various sizes",
    brightness: "700 – 2500 nits",
  },

  {
    title: "Audio-Visual System Integration",
    image: "/assets/images/home-products/Audio-Visual System Integration.jpg",
    row: 1,
    side: "left",
    category: "Sports Display",
    subCategories: [
      "Professional Audio & Public Address Systems",
      "Video Conferencing & Collaboration Solutions",
      "Projection & Interactive Display Systems",
      "Control Rooms & Command Centers",
      "IPTV & Broadcast Solutions",
      "Structured Cabling & Networking",
    ],
    description:
      "From boardrooms to large venues, we integrate cutting-edge AV solutions that enhance communication and experiences.",
    pixelPitch: ["P6", "P8", "P10"],
    cabinet: "960 x 960mm",
    brightness: "6000 – 10000 nits",
  },

  {
    title: "Content Creation & Management",
    image: "/assets/images/home-products/Content Creation & Management.jpg",
    row: 1,
    side: "right",
    category: "Interactive",
    subCategories: [
      "Motion Graphics & Animations (2D/3D)",
      "Digital Menu Design & Management",
      "Interactive & Experiential Content Development",
      "Dynamic Scheduling & Cloud-Based Updates",
      "Branding & Creative Consultation",
    ],
    description:
      "We offer creative and technical expertise to keep your screens dynamic and engaging.",
    pixelPitch: ["4K UHD"],
    cabinet: "55\" – 86\"",
    brightness: "400 – 600 nits",
  },

  {
    title: "Maintenance & Support",
    image: "/assets/images/home-products/Maintenance & Support.jpg",
    row: 2,
    side: "left",
    category: "Rental",
    subCategories: [
      "Annual Maintenance Contracts (AMC)",
      "Preventive & Corrective Maintenance",
      "Remote Monitoring & Support",
      "Spare Parts & Replacement Services",
      "On-Site Technical Training",
    ],
    description:
      "Our dedicated support ensures your systems run seamlessly with minimal downtime.",
    pixelPitch: ["P2.9", "P3.9", "P4.8"],
    cabinet: "500 × 500 mm",
    brightness: "4500 – 6000 nits",
  },

  {
    title: "Lighting Solutions",
    image: "/assets/images/home-products/Stage & Event Lighting Systems.jpg",
    row: 2,
    side: "right",
    category: "Ultra HD",
    subCategories: [
      "Architectural & Decorative Lighting",
      "Facade & Outdoor LED Illumination",
      "Stage & Event Lighting Systems",
      "Smart Lighting Controls (DALI, DMX, KNX)",
      "Energy-Efficient LED Solutions",
    ],
    description:
      "We provide innovative lighting designs that enhance aesthetics and functionality.",
    pixelPitch: ["P0.9", "P1.2", "P1.5"],
    cabinet: "600 × 337.5 mm",
    brightness: "600 – 1000 nits",
  },

  {
    title: "Home Cinema & Smart Home Automation",
    image: "/assets/images/home-products/Home Cinema & Smart Home Automation.jpg",
    row: 3,
    side: "left",
    category: "Architectural",
    subCategories: [
      "Dedicated Home Cinema & Theater Rooms",
      "Multiroom Audio & Video Distribution",
      "Smart Home Automation (Lighting, Curtains, HVAC, Security)",
      "Voice Control Integration (Alexa, Google, Siri)",
      "Security & Surveillance Systems",
      "Networking & Wi-Fi Optimization",
    ],
    description:
      "We bring technology and lifestyle together with personalized smart home solutions.",
    pixelPitch: ["P3.9", "P6"],
    cabinet: "1000 × 500 mm",
    brightness: "3000 – 5000 nits",
  },

  {
    title: "Consultation & Project Management",
    image: "/assets/images/home-products/Consultation & Project Management.jpg",
    row: 3,
    side: "right",
    category: "Control Systems",
    subCategories: [
      "Site Surveys & Feasibility Studies",
      "End-to-End Project Management",
      "Digital Transformation & Signage Strategy",
      "Custom Solutions for Corporate, Retail, Hospitality, Healthcare, Education & Government",
    ],
    description:
      "We work with clients at every stage, from concept to completion.",
    pixelPitch: ["P1.2", "P1.5", "P1.8"],
    cabinet: "600 × 337.5 mm",
    brightness: "600 – 1200 nits",
  },
];



export default function ProductsSection() {
  const [active, setActive] = useState(products[0]);

  const rows = [...new Set(products.map((p) => p.row))];
  const flipRef = useRef(null);

  return (
<section className="relative py-10 md:pt-8 overflow-visible md:overflow-hidden min-h-screen">

      <PillerAnimation />
      <Container>
        <div className="flex justify-center pb-8">
          <SectionTitle ref={flipRef} title="Our Products" />
        </div>

        <div className="max-w-7xl mx-auto">

          {/* DESKTOP VIEW */}
          <div className="hidden md:grid grid-cols-[1fr_280px_1fr] gap-12 items-start">
            {/* LEFT */}
            <div className="space-y-[120px] pt-2">
              {rows.map((row) => (
                <Row key={row} row={row} side="left" active={active} setActive={setActive} />
              ))}
            </div>

            {/* CENTER IMAGE */}
            <div className="relative flex flex-col items-center">
              <CenterImage active={active} />
            </div>

            {/* RIGHT */}
            <div className="space-y-[120px] pt-2 text-right">
              {rows.map((row) => (
                <Row key={row} row={row} side="right" active={active} setActive={setActive} />
              ))}
            </div>
          </div>

          {/* MOBILE VIEW (Accordion) */}
          {/* MOBILE VIEW (Accordion) */}
          <div className="md:hidden space-y-4 ">
            {products.map((p, i) => {
              const isOpen = active.title === p.title;

              return (
                <div key={i} className="rounded-lg border border-[#70C879]/20 overflow-hidden">
                  <button
                    onClick={() => setActive(p)}
                    className={`w-full px-4 py-3 text-left transition ${isOpen ? "text-[#70C879]" : "text-white/80"
                      }`}
                  >
                    {p.title}
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] p-4" : "grid-rows-[0fr]"
                      }`}
                  >
                    <div className="overflow-hidden space-y-4">

                      {/* Image */}
                      <div className="relative w-full h-[220px] rounded-lg overflow-hidden ">
                        <Image src={p.image} alt={p.title} fill className="object-cover rounded-2xl" />
                      </div>

                      {/* Category */}
                      {/* <div className="text-[#70C879] text-xs uppercase tracking-wider">
              {p.category}
            </div> */}

                      {/* Sub Categories */}
                      {/* <div className="flex flex-wrap gap-2">
              {p.subCategories.map((s, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs rounded-full border border-[#70C879]/40 text-[#70C879]"
                >
                  {s}
                </span>
              ))}
            </div> */}

                      {/* Description */}
                      <p className="text-sm text-white/80">{p.description}</p>

                      {/* Specs */}
                      <div className="grid grid-cols-2 gap-3 text-xs text-white/80">
                        <div>
                          <span className="text-white/50">Pixel Pitch</span>
                          <div><span className="text-base">{p.pixelPitch.join(", ")}</span></div>
                        </div>
                        <div>
                          <span className="text-white/50">Cabinet Size</span>
                          <div>{p.cabinet}</div>
                        </div>
                        <div>
                          <span className="text-white/50">Brightness</span>
                          <div>{p.brightness}</div>
                        </div>
                      </div>
                      <div>
                        <ModernButton text="View More" onClick={() => router.push("/products")} />
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>


        </div>
      </Container>
    </section>
  );
}

/* ---------- Desktop Helpers ---------- */

function CenterImage({ active }) {
  const router = useRouter();
  return (
    <div className="w-[380px] flex flex-col">

      {/* IMAGE FIXED AT TOP */}
      <div className="sticky top-24 z-20 ">
        <div className="w-full h-[300px]  overflow-hidden  ">
          <div className="relative w-full h-full overflow-hidden rounded-2xl">
            <Image
              key={active.image}
              src={active.image}
              alt={active.title}
              fill
              className="object-cover p-2 animate-reveal rounded-3xl"
            />
          </div>

        </div>
      </div>

      {/* DETAILS SCROLL BELOW IMAGE */}
      <div className="mt-6 space-y-4 text-sm text-white/80">

        {/* Category */}
        {/* <div className="text-[#70C879] text-xs uppercase tracking-wider">
          {active.category}
        </div> */}

        {/* Sub Categories */}
        {/* <div className="flex flex-wrap gap-2">
          {active.subCategories.map((s, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs rounded-full border border-[#70C879]/40 text-[#70C879]"
            >
              {s}
            </span>
          ))}
        </div> */}

        {/* Description */}
        <p className="text-xl">{active.description}</p>

        {/* Specs */}
        <div className="grid grid-cols-2 gap-3 text-xs p-2">
          <div>
            <span className="text-white/50 text-xl">Pixel Pitch</span>
            <div className="text-white"><span className="text-xl">{active.pixelPitch.join(", ")}</span></div>
          </div>

          <div>
            <span className="text-white/50 text-xl">Cabinet Size</span>
            <div className="text-white"><span className="text-xl">{active.cabinet}</span></div>
          </div>

          <div>
            <span className="text-white/50 text-xl">Brightness</span>
            <div className="text-white "><span className="text-xl">{active.brightness}</span></div>
          </div>
        </div>
        <div>
          <ModernButton text="View More" onClick={() => router.push("/products")} />
        </div>

      </div>
    </div>
  );
}




function Row({ row, side, active, setActive }) {
  const item = products.find((p) => p.row === row && p.side === side);
  if (!item) return <div className="h-[32px]" />;

  const isActive = active.title === item.title;

  return (
    <div
      onMouseEnter={() => setActive(item)}
      className={`cursor-pointer transition ${isActive ? "text-[#70C879]" : "text-white/70"
        }`}
    >
      <div className={`flex items-center gap-6 max-w-md ${side === "right" ? "justify-end" : ""}`}>
        <span className="text-2xl hover:text-[#70C879]">{item.title}</span>
      </div>
    </div>
  );
}
