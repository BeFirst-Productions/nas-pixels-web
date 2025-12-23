// lib/animations/fadeUp.js
import gsap from "gsap";

export const fadeUp = (targets) =>
  gsap.from(targets, {
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.15,
  });
