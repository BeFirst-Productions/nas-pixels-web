"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "@/components/common/layout/Container";

gsap.registerPlugin(ScrollTrigger);

export default function CoreServices() {
  const sectionRef = useRef(null);

  const services = [
    {
      title: "Digital Display Solutions",
      tag: "High-Impact Visual Communication",
      desc: "LED video walls, digital signage, and commercial displays engineered for visibility, clarity, and efficiency.",
      list: ["Retail & malls", "Corporate offices", "Public spaces", "Events & exhibitions"],
    },
    {
      title: "AV & System Integration",
      tag: "Seamless AV Experiences",
      desc: "Complete audiovisual integration delivering crystal-clear sound, visuals, and intelligent control.",
      list: ["Boardrooms", "Auditoriums", "PA systems", "Automation systems"],
    },
    {
      title: "Immersive & Interactive",
      tag: "Engage. Inspire. Transform.",
      desc: "Projection, LED, and XR-powered immersive experiences that audiences can see, feel, and explore.",
      list: ["Immersive rooms", "Experience centers", "Interactive displays", "XR environments"],
    },
    {
      title: "Education & Corporate",
      tag: "Smarter Collaboration",
      desc: "Smart classrooms and collaboration spaces designed to improve engagement and productivity.",
      list: ["Universities", "Training centers", "Offices", "Conference halls"],
    },
    {
      title: "Events & Special Projects",
      tag: "Technology That Elevates Events",
      desc: "AV, lighting, projection mapping, and LED systems for events of every scale.",
      list: ["Event AV", "Projection mapping", "Temporary LED", "Live support"],
    },
  ];

  useEffect(() => {
    const cards = gsap.utils.toArray(".service-card");

    gsap.fromTo(
      cards,
      { opacity: 0, y: 120, rotateX: 25 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        stagger: 0.25,
        duration: 1.2,
        ease: "power4.out",
     scrollTrigger: {
  trigger: sectionRef.current,
  start: "top 75%",
  toggleActions: "play reset play reset",
}

      }
    );

    gsap.to(".glow", {
      scale: 1.2,
      opacity: 0.6,
      yoyo: true,
      repeat: -1,
      duration: 4,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <section ref={sectionRef} className=" py-10 md:py-20 relative overflow-hidden">
      <Container>
      <div className="glow absolute inset-0  rounded-full max-w-7xl mx-auto" />

        <div className=" text-center mb-24">
          <h2 className="text-5xl font-bold text-white">
            NAS PIXELS <span className="text-[#70C879]">Ecosystem</span>
          </h2>
          <p className=" mt-6 max-w-3xl mx-auto">
            A fully connected technology stack for displays, AV, immersive spaces, and experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
          {services.map((s, i) => (
            <div
              key={i}
              className="service-card relative p-8 rounded-3xl bg-[#06140b] border border-[#70C879] hover:border-[#70C879] hover:border-dashed hover:border-2 transition"
            >
              <div className="absolute inset-0 bg-green-500/10 blur-2xl rounded-3xl opacity-0 hover:opacity-100 transition" />

              <div className="relative z-10 space-y-5">
                <p className="text-[#70C879] text-sm uppercase tracking-widest">
                  {s.tag}
                </p>
                <h3 className="text-2xl font-semibold text-white">
                  {s.title}
                </h3>
                <p className="">
                  {s.desc}
                </p>

                <ul className="pt-4 space-y-2 ">
                  {s.list.map((l, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="h-2 w-2  rounded-full" />
                      {l}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
