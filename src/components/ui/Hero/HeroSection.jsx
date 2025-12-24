"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

/* ---------------- DATA ---------------- */

const ITEMS = [
  { type: "image", src: "https://images.unsplash.com/photo-1557682250-37e0a792c4f6" },
  { type: "image", src: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61" },
  { type: "image", src: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3" },
  { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { type: "image", src: "https://images.unsplash.com/photo-1535223289827-42f1e9919769" },
];

/* ---------------- CURVED SCREEN CONSTANTS ---------------- */

const ITEM_WIDTH = 420;
const ITEM_HEIGHT = 260;

const SCREEN_RADIUS = 300;   // curvature width
const SCREEN_DEPTH = 800;     // depth into screen
const MAX_VISIBLE = 4;

/* ---------------- HERO SECTION ---------------- */

export default function HeroSection() {
  const itemsRef = useRef([]);
  const velocity = useRef(0);
  const position = useRef(0);
  const isInteracting = useRef(false);

  /* ---------------- ANIMATION LOOP ---------------- */

  useEffect(() => {
    gsap.ticker.add(update);
    return () => gsap.ticker.remove(update);
  }, []);

  const update = () => {
    if (!isInteracting.current) velocity.current += 0.00022;

    velocity.current *= 0.92;
    position.current += velocity.current;

    renderItems();
  };

  /* ---------------- TRUE CURVED SCREEN RENDER ---------------- */

  const renderItems = () => {
    const total = ITEMS.length;
    const half = MAX_VISIBLE / 2;

    itemsRef.current.forEach((el, i) => {
      if (!el) return;

      let index = (i + position.current) % total;
      if (index < 0) index += total;

      const offset = index - half;
      const abs = Math.abs(offset);

      if (abs > half) {
        gsap.set(el, { opacity: 0 });
        return;
      }

      /**
       * t = -1 … 0 … +1
       * represents position on curved LED surface
       */
      const t = offset / half;

      // cylindrical projection
      const angle = t * Math.PI * 0.5;

      const x = Math.sin(angle) * SCREEN_RADIUS;
      const z = -Math.cos(angle) * SCREEN_DEPTH + SCREEN_DEPTH;

      // vertical compression creates LED screen illusion
      const verticalCompression = 1 - Math.abs(t) * 0.28;

      // scale based on depth (not linear)
      const scale = 0.92 + Math.cos(angle) * 0.18;

      // inward rotation like real screen panels
      const rotateY = -angle * 42;

      // opacity falloff
      const opacity = 0.55 + Math.cos(angle) * 0.45;

      gsap.set(el, {
        x,
        y: 0,
        z,
        scaleX: scale,
        scaleY: scale * verticalCompression,
        rotateY,
        opacity,
        transformOrigin: "center center",
      });
    });
  };

  /* ---------------- INTERACTION ---------------- */

  const onPointerDown = () => (isInteracting.current = true);
  const onPointerUp = () => (isInteracting.current = false);

  const onPointerMove = (e) => {
    if (!isInteracting.current) return;
    velocity.current += e.movementX * 0.00016;
  };

  const onWheel = (e) => {
    velocity.current += e.deltaY * 0.000035;
  };

  /* ---------------- JSX ---------------- */

  return (
    <section className="relative w-full overflow-hidden bg-black py-40">
      {/* TEXT */}
      <div className="relative z-10 text-center mb-24 px-6">
        <h1 className="text-white text-3xl md:text-5xl font-semibold">
          Curved LED Screen Carousel
        </h1>
        <p className="text-white/70 mt-4 max-w-xl mx-auto">
          True cylindrical projection with realistic screen depth.
        </p>
      </div>

      {/* CURVED SCREEN */}
      <div
        className="relative h-[340px] md:h-[400px]"
        style={{ perspective: "2200px" }}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
        onPointerMove={onPointerMove}
        onWheel={onWheel}
      >
        <div className="absolute left-1/2 top-1/2 translate-x-1/2 -translate-y-1/2 transform-gpu">
          {ITEMS.map((item, i) => (
            <div
              key={i}
              ref={(el) => (itemsRef.current[i] = el)}
              className="absolute transform-gpu rounded-xl overflow-hidden will-change-transform"
              style={{
                width: ITEM_WIDTH,
                height: ITEM_HEIGHT,
                transformStyle: "preserve-3d",
              }}
            >
              {item.type === "image" ? (
                <Image
                  src={item.src}
                  alt=""
                  fill
                  unoptimized
                  className="object-cover"
                />
              ) : (
                <video
                  src={item.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
