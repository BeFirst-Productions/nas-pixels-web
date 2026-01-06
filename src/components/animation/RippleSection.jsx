"use client";

import RippleGrid from "./RippleGrid";


export default function RippleSection() {
  return (
    <div className="relative h-screen overflow-hidden">
      <RippleGrid
        enableRainbow={false}
        gridColor="#70C879"
        rippleIntensity={0.09}
        gridSize={15}
        gridThickness={18}
        mouseInteraction={true}
        mouseInteractionRadius={1.2}
        opacity={0.8}
      />
    </div>
  );
}
