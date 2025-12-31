"use client";
import { useState } from "react";
import Image from "next/image";
import SectionTitle from "@/components/common/Headers/SectionTitle";
import Container from "@/components/common/layout/Container";

const ROW_HEIGHT = 120;

const products = [
  {
    title: "Outdoor & Indoor Screens",
    image: "/assets/images/home-products/outdoor.png",
    row: 0,
    side: "left",
  },
  {
    title: "Digital Signage Solutions",
    image: "/assets/images/home-products/digital.png",
    row: 0,
    side: "right",
  },
  {
    title: "Stadium & Sports LED",
    image: "/assets/images/home-products/stadium.jpg",
    row: 1,
    side: "left",
  },
  {
    title: "Interactive Touch Screens",
    image: "/assets/images/home-products/interactive.png",
    row: 1,
    side: "right",
  },
  {
    title: "Rental & Event Screens",
    image: "/assets/images/home-products/rental.png",
    row: 2,
    side: "left",
  },
  {
    title: "Fine Pixel / UHD Display",
    image: "/assets/images/home-products/fine-pixel.png",
    row: 2,
    side: "right",
  },
  {
    title: "Transparent LED",
    image: "/assets/images/home-products/transparent.png",
    row: 3,
    side: "left",
  },
  {
    title: "Control Room / Command Center",
    image: "/assets/images/home-products/control-room.png",
    row: 3,
    side: "right",
  },
];

export default function ProductsSection() {
  const [active, setActive] = useState(products[0]);

  const rows = [...new Set(products.map((p) => p.row))];

  return (
    <section className="relative py-10 md:py-20  overflow-hidden">
      <Container>
        <div className="flex justify-center pb-8">
          <SectionTitle title="Our Products" />
        </div>

        <div className="max-w-7xl mx-auto">

          {/* DESKTOP VIEW */}
          <div className="hidden md:grid grid-cols-[1fr_280px_1fr] gap-12">
            {/* LEFT */}
            <div className="space-y-[120px] pt-2">
              {rows.map((row) => (
                <Row key={row} row={row} side="left" active={active} setActive={setActive} />
              ))}
            </div>

            {/* CENTER IMAGE */}
            <CenterImage active={active} rows={rows} />

            {/* RIGHT */}
            <div className="space-y-[120px] pt-2 text-right">
              {rows.map((row) => (
                <Row key={row} row={row} side="right" active={active} setActive={setActive} />
              ))}
            </div>
          </div>

          {/* MOBILE VIEW (Accordion) */}
          <div className="md:hidden space-y-4">
            {products.map((p, i) => {
              const isOpen = active.title === p.title;

              return (
                <div key={i} className=" rounded-lg overflow-hidden">
                  <button
                    onClick={() => setActive(p)}
                    className={`w-full px-4 py-3 text-left transition ${
                      isOpen ? "text-[#70C879]" : "text-white/80"
                    }`}
                  >
                    {p.title}
                  </button>

                  {/* IMAGE */}
                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? "grid-rows-[1fr] p-4" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="relative w-full h-[220px]">
                        <Image
                          src={p.image}
                          alt={p.title}
                          fill
                          className="object-contain"
                        />
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

function CenterImage({ active, rows }) {
  const ROW_HEIGHT = 120;
  const imageHeight = 320;
  const BOTTOM_PADDING = 40;

  const trackHeight = rows.length * ROW_HEIGHT;
  const maxY = trackHeight - imageHeight + BOTTOM_PADDING;
  const y = Math.min(active.row * ROW_HEIGHT, maxY);

  return (
    <div className="relative pt-2">
      <div className="relative" style={{ height: trackHeight }}>
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2
          w-[260px] h-[320px] rounded-xl overflow-hidden
          transition-transform duration-500 ease-out"
          style={{ transform: `translate(-50%, ${y}px)` }}
        >
          <Image
            src={active.image}
            alt={active.title}
            fill
            className="object-contain"
          />
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
        <span className="text-lg hover:text-[#70C879]">{item.title}</span>
      </div>
    </div>
  );
}
