"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const IMAGE_COUNT = 10;
const ROTATION_STEP = 360 / IMAGE_COUNT;
const DEPTH = 500;

export default function ImageRing3D() {
  const ringRef = useRef(null);
  const imgsRef = useRef([]);
  const xPos = useRef(0);

  useEffect(() => {
    const ring = ringRef.current;
    const imgs = imgsRef.current;

    /* ---------------- INIT ---------------- */
    gsap.set(ring, {
      rotationY: 180,
      cursor: "grab",
      transformStyle: "preserve-3d",
    });

    gsap.set(imgs, {
      rotateY: (i) => i * -ROTATION_STEP,
      transformOrigin: `50% 50% ${DEPTH}px`,
      z: -DEPTH,
      backgroundImage: (i) =>
        `url(https://picsum.photos/id/${i + 32}/600/400/)`,
      backgroundSize: "cover",
      backgroundPosition: (i) => getBgPos(i),
      backfaceVisibility: "hidden",
    });

    /* ---------------- ENTRANCE ---------------- */
    gsap.from(imgs, {
      y: 200,
      opacity: 0,
      stagger: 0.1,
      duration: 1.5,
      ease: "expo.out",
    });

    /* ---------------- HOVER ---------------- */
    imgs.forEach((img) => {
      img.addEventListener("mouseenter", () => {
        gsap.to(imgs, {
          opacity: (i, t) => (t === img ? 1 : 0.5),
          ease: "power3.out",
        });
      });

      img.addEventListener("mouseleave", () => {
        gsap.to(imgs, {
          opacity: 1,
          ease: "power2.inOut",
        });
      });
    });

    /* ---------------- DRAG ---------------- */
    const dragStart = (e) => {
      xPos.current = getClientX(e);
      gsap.set(ring, { cursor: "grabbing" });
      window.addEventListener("mousemove", drag);
      window.addEventListener("touchmove", drag);
    };

    const drag = (e) => {
      const currentX = getClientX(e);
      const delta = currentX - xPos.current;

      gsap.to(ring, {
        rotationY: `-=${delta}`,
        duration: 0.3,
        onUpdate: () => {
          imgs.forEach((_, i) =>
            gsap.set(imgs[i], { backgroundPosition: getBgPos(i) })
          );
        },
      });

      xPos.current = currentX;
    };

    const dragEnd = () => {
      window.removeEventListener("mousemove", drag);
      window.removeEventListener("touchmove", drag);
      gsap.set(ring, { cursor: "grab" });
    };

    window.addEventListener("mousedown", dragStart);
    window.addEventListener("touchstart", dragStart);
    window.addEventListener("mouseup", dragEnd);
    window.addEventListener("touchend", dragEnd);

    return () => {
      window.removeEventListener("mousedown", dragStart);
      window.removeEventListener("mouseup", dragEnd);
      window.removeEventListener("touchstart", dragStart);
      window.removeEventListener("touchend", dragEnd);
    };
  }, []);

  /* ---------------- HELPERS ---------------- */
  const getClientX = (e) =>
    e.touches ? e.touches[0].clientX : e.clientX;

  const getBgPos = (i) => {
    const rotY = gsap.getProperty(ringRef.current, "rotationY");
    return `${
      100 -
      (gsap.utils.wrap(0, 360, rotY - 180 - i * ROTATION_STEP) / 360) * 500
    }px 0px`;
  };

  return (
    <div className="relative w-screen h-screen bg-black overflow-hidden">
      <div
        className="absolute left-1/2 top-1/2 w-[300px] h-[400px]"
        style={{
          transform: "translate(-50%, -50%)",
          perspective: "2000px",
        }}
      >
        <div
          ref={ringRef}
          className="relative w-full h-full"
          style={{ transformStyle: "preserve-3d" }}
        >
          {Array.from({ length: IMAGE_COUNT }).map((_, i) => (
            <div
              key={i}
              ref={(el) => (imgsRef.current[i] = el)}
              className="absolute inset-0 rounded-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
