"use client";
import { useState } from "react";
import Image from "next/image";
import SectionTitle from "@/components/common/Headers/SectionTitle";
import Container from "@/components/common/layout/Container";
import { ModernButton } from "@/components/common/button/ModernButton";
import { useRouter } from "next/navigation";
import PillerAnimation from "@/components/animation/PillerAnimation";

const ROW_HEIGHT = 120;

const products = [
  {
    title: "Outdoor & Indoor Screens",
    image: "/assets/images/home-products/outdoor.png",
    row: 0,
    side: "left",
    category: "Commercial LED",
    subCategories: ["Retail", "Shopping Mall", "Billboards", "Corporate"],
    description: "Display World’s high-grade outdoor LED screens deliver unmatched brightness, vivid color, and long-lasting durability—perfect for capturing attention, promoting your brand, and maximizing outdoor impact.",
    pixelPitch: [ "P3", "P4", "P5", "P6","P8","P10"],
    cabinet: " Customized, 960mm x 960mm",
    brightness: "4500-10000 Nits",
  },
  {
    title: "Digital Signage Solutions",
    image: "/assets/images/home-products/digital.png",
    row: 0,
    side: "right",
    category: "Signage",
    subCategories: ["Retail", "Airports", "Hospitals", "Corporate"],
    description: "Professional digital signage displays for retail, corporate & public spaces.",
    pixelPitch: ["LCD", "4K", "FHD"],
    cabinet: "Various sizes",
    brightness: "700 – 2500 nits",
  },
  {
    title: "Stadium & Sports LED",
    image: "/assets/images/home-products/stadium.jpg",
    row: 1,
    side: "left",
    category: "Sports Display",
    subCategories: ["Cricket", "Football", "Athletics", "Arenas"],
    description: "Display World’s Perimeter LED Screen delivers durable, high-impact outdoor performance with vibrant, clear visuals—perfect for showcasing your brand at sports and live events.",
    pixelPitch: ["P6", "P8", "P10"],
    cabinet: "960 x 960mm",
    brightness: "6000 – 10000 nits",
  },
  {
    title: "Interactive Touch Screens",
    image: "/assets/images/home-products/interactive.png",
    row: 1,
    side: "right",
    category: "Interactive",
    subCategories: ["Education", "Meeting Rooms", "Collaboration"],
    description: "Touch-enabled displays for education, meetings and collaboration.",
    pixelPitch: ["4K UHD"],
    cabinet: "55\" – 86\"",
    brightness: "400 – 600 nits",
  },
  {
    title: "Rental & Event Screens",
    image: "/assets/images/home-products/rental.png",
    row: 2,
    side: "left",
    category: "Rental",
    subCategories: ["Concerts", "Exhibitions", "Stage Shows"],
    description: "Lightweight and modular LED screens for stage, concerts and events.",
    pixelPitch: ["P2.9", "P3.9", "P4.8"],
    cabinet: "500 × 500 mm",
    brightness: "4500 – 6000 nits",
  },
  {
    title: "Fine Pixel / UHD Display",
    image: "/assets/images/home-products/fine-pixel.png",
    row: 2,
    side: "right",
    category: "Ultra HD",
    subCategories: ["Control Rooms", "Broadcast", "Boardrooms"],
    description: "Ultra fine pixel pitch displays for control rooms and premium spaces.",
    pixelPitch: ["P0.9", "P1.2", "P1.5"],
    cabinet: "600 × 337.5 mm",
    brightness: "600 – 1000 nits",
  },
  {
    title: "Transparent LED",
    image: "/assets/images/home-products/transparent.png",
    row: 3,
    side: "left",
    category: "Architectural",
    subCategories: ["Showrooms", "Glass Facades", "Retail"],
    description: "See-through LED screens for showrooms and glass facades.",
    pixelPitch: ["P3.9", "P6"],
    cabinet: "1000 × 500 mm",
    brightness: "3000 – 5000 nits",
  },
  {
    title: "Control Room / Command Center",
    image: "/assets/images/home-products/control-room.png",
    row: 3,
    side: "right",
    category: "Control Systems",
    subCategories: ["Monitoring", "Security", "Traffic Control"],
    description: "Mission-critical display walls for control rooms and monitoring centers.",
    pixelPitch: ["P1.2", "P1.5", "P1.8"],
    cabinet: "600 × 337.5 mm",
    brightness: "600 – 1200 nits",
  },
];


export default function ProductsSection() {
  const [active, setActive] = useState(products[0]);

  const rows = [...new Set(products.map((p) => p.row))];

  return (
    <section className="relative py-10 md:py-20  overflow-hidden">
         
        <PillerAnimation/>
      <Container>
        <div className="flex justify-center pb-8">
          <SectionTitle title="Our Products" />
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
<div className="md:hidden space-y-4">
  {products.map((p, i) => {
    const isOpen = active.title === p.title;

    return (
      <div key={i} className="rounded-lg border border-[#70C879]/20 overflow-hidden">
        <button
          onClick={() => setActive(p)}
          className={`w-full px-4 py-3 text-left transition ${
            isOpen ? "text-[#70C879]" : "text-white/80"
          }`}
        >
          {p.title}
        </button>

        <div
          className={`grid transition-all duration-300 ${
            isOpen ? "grid-rows-[1fr] p-4" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden space-y-4">

            {/* Image */}
            <div className="relative w-full h-[220px] rounded-lg overflow-hidden border border-[#70C879]/30">
              <Image src={p.image} alt={p.title} fill className="object-contain" />
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
        <div className="w-full h-[300px] rounded-xl overflow-hidden  ">
          <Image
            src={active.image}
            alt={active.title}
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* DETAILS SCROLL BELOW IMAGE */}
      <div className="mt-8 space-y-4 text-sm text-white/80">

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
        <div className="grid grid-cols-2 gap-3 text-xs">
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
      className={`cursor-pointer transition ${
        isActive ? "text-[#70C879]" : "text-white/70"
      }`}
    >
      <div className={`flex items-center gap-6 ${side === "right" ? "justify-end" : ""}`}>
        <span className="text-3xl hover:text-[#70C879]">{item.title}</span>
      </div>
    </div>
  );
}
