"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Container from "@/components/common/Layout/Container";
import gsap from "gsap";

const LOGOS = [
  { src: "/assets/images/partners/partner-1.png", alt: "Unilumin" },
  { src: "/assets/images/partners/partner-2.png", alt: "Qiangli" },
  { src: "/assets/images/partners/partner-3.png", alt: "Samsung" },
  { src: "/assets/images/partners/partner-4.png", alt: "LG" },
];

export default function TechnologyPartnersSection() {
  const trackRef = useRef(null);
  const boxRef = useRef(null);

  /* ---------------- LOGO CAROUSEL ---------------- */
  useEffect(() => {
    const track = trackRef.current;
    let index = 0;

    const interval = setInterval(() => {
      index++;
      track.style.transform = `translateX(-${index * 220}px)`;
      track.style.transition = "transform 0.8s ease-in-out";

      if (index >= LOGOS.length) {
        setTimeout(() => {
          track.style.transition = "none";
          track.style.transform = "translateX(0)";
          index = 0;
        }, 850);
      }
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  /* ---------------- LIVE SHADOW ANIMATION ---------------- */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        boxRef.current,
        {
          boxShadow:
            "0 0 25px rgba(112,200,121,0.35), 0 0 50px rgba(112,200,121,0.25)",
          scale: 1,
        },
        {
          boxShadow:
            "0 0 45px rgba(112,200,121,0.65), 0 0 90px rgba(112,200,121,0.45)",
          scale: 1.01,
          duration: 2.6,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        }
      );
    }, boxRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full py-16 md:py-20">
      <Container>
        <div
          ref={boxRef}
          className="
            grid grid-cols-1 lg:grid-cols-2 gap-12 items-center
            bg-black px-6 md:px-12 py-10
            rounded-2xl text-white
          "
        >
          {/* LEFT CONTENT */}
          <div className="max-w-xl">
     <h2 className="text-3xl md:text-4xl font-bold mb-4">
  Trusted Technology Partners
</h2>

<p className="text-white/80 text-base md:text-lg leading-relaxed">
  We collaborate with globally recognized technology partners to deliver
  high-performance LED display solutions for retail, events, advertising,
  exhibitions, transport hubs, and enterprise environments.
</p>

          </div>

          {/* RIGHT LOGO CAROUSEL */}
          <div className="relative overflow-hidden">
            <div
              ref={trackRef}
              className="flex items-center gap-16 w-max"
            >
              {[...LOGOS, ...LOGOS].map((logo, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center min-w-[180px] h-[80px]"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={160}
                    height={60}
                    className="
                      object-contain
                      transition-transform duration-300 ease-out
                      hover:scale-110
                    "
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
