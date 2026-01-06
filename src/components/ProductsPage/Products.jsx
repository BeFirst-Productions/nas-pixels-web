"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "../common/layout/Container";
import { products } from "@/data/Products";

/* ================= CATEGORIES ================= */

const categories = [
  "Digital Signage Solutions",
  "Static Signage & Wayfinding",
  "Audio-Visual System Integration",
  "Content Creation & Management",
  "Maintenance & Support",
  "Lighting Solutions",
  "Home Cinema & Smart Home Automation",
  "Consultation & Project Management",
];

/* ================= MAIN COMPONENT ================= */

export default function ProductPipeline() {
  const [activeCategory, setActiveCategory] = useState("Digital Signage Solutions");

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const top = filtered.slice(0, 6);
  const centerLeft = filtered.length > 6 ? filtered[6] : null;
  const centerRight = filtered.length > 7 ? filtered[7] : null;
  const middle = filtered.slice(8, 14);

  return (
    <section className="py-10 md:py-20">
      <Container>
        <div className="flex flex-col items-center space-y-24">

          {/* ================= CATEGORY FILTER ================= */}
          {/* ================= CATEGORY FILTER ================= */}

          {/* Mobile (Dropdown) */}
          <div className="block lg:hidden w-full max-w-md mx-auto">
            <select
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
              className="w-full bg-[#06140b] border-dashed border border-[#70C879] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#70C879]"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat} className="bg-[#06140b]">
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Desktop (Buttons) */}
          <div className="hidden lg:flex flex-wrap justify-center gap-4 max-w-7xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-full text-sm md:text-base font-medium transition border-dashed border border-[#70C879]
        ${activeCategory === cat
                    ? "bg-[#16572D] shadow-[0_0_15px_rgba(112,200,121,0.6)]"
                    : "hover:bg-[#16572D]"
                  }
      `}
              >
                {cat}
              </button>
            ))}
          </div>


          {/* ================= TOP 6 ================= */}
          <Grid items={top} />

          {/* ================= CENTER ================= */}
          <div className="flex justify-center flex-col md:flex-row items-center gap-8 md:gap-0 w-full">

            {centerLeft && (
              <div className="w-full max-w-[380px]">
                <Card {...centerLeft} />
              </div>
            )}

            {centerLeft && centerRight && (
              <img
                src="/assets/images/shapes/connectedCircuit.png"
                className="hidden md:block w-[320px] lg:w-[420px] h-[200px] drop-shadow-[0_0_40px_rgba(0,255,120,0.6)]"
              />
            )}

            {centerRight && (
              <div className="w-full max-w-[380px]">
                <Card {...centerRight} />
              </div>
            )}

          </div>

          {/* ================= MIDDLE 6 ================= */}
          <Grid items={middle} />

        </div>
      </Container>
    </section>
  );
}

/* ================= GRID ================= */

function Grid({ items }) {
  if (!items?.length) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl">
      {items.map((p, i) => (
        <Card key={i} {...p} />
      ))}
    </div>
  );
}

/* ================= CARD ================= */

function Card({ title, desc, thumbnail, slug }) {
  return (
    <Link
    //  href={`/products/${slug}`} 
    href={`/products`} 
    
    className="block w-full h-[450px] group">
      <div className="relative group w-full h-[450px]">

        {/* Gradient Border */}
        <div className="absolute inset-0 rounded-xl p-[1.5px] bg-gradient-to-br from-green-400 via-emerald-500 to-lime-400">
          <div className="h-full w-full rounded-xl bg-[linear-gradient(0deg,rgba(112,200,121,0.95)_0%,rgba(112,200,121,0.8)_30%,rgba(112,200,121,0.45)_60%,rgba(112,200,121,0.12)_100%)] blur-md">
            <div className="h-full w-full rounded-xl bg-[#06140b]" />
          </div>
        </div>

        {/* Glow */}
        <div className="absolute inset-0 bg-green-500/30 blur-xl opacity-0  transition" />

        {/* Actual Card */}
        <div className="relative rounded-xl overflow-hidden h-full flex flex-col z-10">

          {/* Image */}
          <div className="h-[75%] p-4">
            <img
              src={thumbnail}
              className="w-full h-full object-cover rounded-lg"
              alt={title}
            />
          </div>

          {/* Content */}
          <div className="h-[25%] p-4 bg-[#16572D] flex flex-col justify-center">
            <h3 className="text-lg md:text-xl font-semibold mb-1">
              {title}
            </h3>
            <p className="text-xs leading-tight">
              {desc}
            </p>
          </div>

        </div>
      </div>
    </Link>
  );
}
