"use client";

import { useEffect, useRef } from "react";
import { blogs } from "@/data/blogs";
import Link from "next/link";
import Container from "../common/layout/Container";
import PillerAnimation from "../animation/PillerAnimation";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BlogPage() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(".blog-card");

    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 80,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.1,
        stagger: 0.15,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen py-10 md:py-20 px-4"
    >
      <PillerAnimation />

      <Container>
        <div className="max-w-7xl mx-auto space-y-16">

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {blogs.map((blog) => (
              <Link
                key={blog.id}
                href={`/blog/${blog.slug}`}
                className="blog-card group rounded-xl overflow-hidden bg-[#16572D]
                hover:shadow-[0_0_30px_rgba(0,255,120,0.3)] transition"
              >
                {/* Image */}
                <div className="h-56 overflow-hidden">
                  <img
                    src={blog.img}
                    alt={blog.title}
                    className="w-full h-full object-cover
                    group-hover:scale-110 transition duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h2 className="text-xl font-semibold">
                    {blog.title}
                  </h2>

                  <p className="text-sm">
                    {blog.desc}
                  </p>
                </div>
              </Link>
            ))}

          </div>
        </div>
      </Container>
    </section>
  );
}
