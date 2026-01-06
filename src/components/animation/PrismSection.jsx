"use client";

import Prism from "./Prism";




export default function PrismSection() {
  return (
    <div className="relative h-screen overflow-hidden">
  <Prism
    animationType="rotate"
    timeScale={0.5}
    height={3.5}
    baseWidth={5.5}
    scale={5}
    hueShift={0}
    colorFrequency={1}
    noise={0}
    glow={1}
  />
    </div>
  );
}
