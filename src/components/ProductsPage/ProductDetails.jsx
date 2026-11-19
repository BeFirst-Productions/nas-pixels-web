"use client";

import { useEffect, useRef } from "react";
import Container from "@/components/common/layout/Container";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, CheckCircle2, ChevronRight, ArrowUpRight, ChevronLeft } from "lucide-react";
import { slides } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";
import { getLocalizedProduct } from "@/data/localizedProducts";

// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProductDetails({ product }) {
  const { t, language } = useLanguage();
  const currentProduct = getLocalizedProduct(product, language) || product;
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const infoRef = useRef(null);
  const featuresRef = useRef(null);
  const projectsRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image Animation
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
      );

      // Info Animation
      gsap.fromTo(
        infoRef.current.children,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out", delay: 0.2 }
      );

      // Features Animation
      gsap.fromTo(
        featuresRef.current.children,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.05,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 85%",
          }
        }
      );

      // Projects Animation
      if (projectsRef.current) {
        gsap.fromTo(
          projectsRef.current.children,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: projectsRef.current,
              start: "top 80%",
            }
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [product]);

  if (!product) return null;

  // Use all slides instead of slicing if we want a slider
  const relatedProjects = slides || [];
  const showSlider = relatedProjects.length > 3;

  const ProjectCard = ({ project }) => (
    <Link href="/projects" className="group cursor-pointer block h-full">
      <div className="relative h-64 w-full overflow-hidden rounded-xl border border-white/10 bg-white/5">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10" />
        <Image
          src={project.img}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent z-20">
          <p className="text-green-400 text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            {project.location}
          </p>
          <h3 className="text-white font-bold text-lg leading-tight group-hover:text-green-300 transition-colors line-clamp-2">
            {project.title}
          </h3>
        </div>
      </div>
    </Link>
  );

  return (
    <section ref={containerRef} className=" py-10 md:py-20 relative overflow-hidden bg-black ">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px] -z-10" />

      <Container>
        {/* Breadcrumb / Back Navigation */}


        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* LEFT — PRODUCT VISUAL */}
          <div className="lg:col-span-5 relative group" ref={imageRef}>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl shadow-green-900/10 aspect-[4/3]">
              {/* Glow Effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-overlay" />

              <Image
                src={currentProduct.thumbnail}
                alt={currentProduct.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />

              {/* Category Badge Floating */}
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full">
                <span className="text-green-400 text-xs font-bold uppercase tracking-wider">
                  {currentProduct.category}
                </span>
              </div>
            </div>

            {/* Spec Highlight Card - Floating below image */}
            {currentProduct.specs?.Service && (
              <div className="absolute -bottom-6 -right-6 hidden sm:block bg-[#0A0A0A] border border-green-500/30 p-6 rounded-xl shadow-xl max-w-xs z-20">
                <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">
                  {t("common.serviceType", "Service Type")}
                </p>
                <p className="text-xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                  {currentProduct.specs.Service}
                </p>
              </div>
            )}
          </div>

          {/* RIGHT — PRODUCT INFO */}
          <div className="lg:col-span-7 space-y-8" ref={infoRef}>

            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                {currentProduct.title}
              </h1>
              <p className="text-xl text-gray-400 font-light leading-relaxed border-l-2 border-green-500/50 pl-4">
                {currentProduct.shortDescription}
              </p>
            </div>

            <div className="prose prose-invert prose-p:text-gray-300 prose-p:leading-7 max-w-none bg-white/5 p-6 rounded-xl border border-white/5">
              <p>{currentProduct.details?.overview}</p>
            </div>

            {/* Key Features Grid */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest">
                {t("common.keyFeatures", "Key Features")}
              </h3>
              <div ref={featuresRef} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentProduct.details?.keyFeatures?.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/5 group/feature"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0 group-hover/feature:scale-110 transition-transform" />
                    <span className="text-gray-300 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            {/* Action Buttons Removed */}

          </div>
        </div>

        {/* RELATED PROJECTS SECTION */}
        {/* <div className="max-w-7xl mx-auto border-t border-white/10 pt-16">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold text-white">Related Projects</h2>
            <Link
              href="/projects"
              className="hidden sm:flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors uppercase text-sm font-bold tracking-widest"
            >
              View All Projects <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div ref={projectsRef} className="w-full">
            {showSlider ? (
              <div className="relative group/slider">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={20}
                  slidesPerView={1}
                  loop={true}
                  speed={5000}
                  autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                  }}
                  onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                  }}
                  navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                  }}
                  allowTouchMove={true}
                  breakpoints={{
                    640: { slidesPerView: 2, spaceBetween: 20 },
                    1024: { slidesPerView: 3, spaceBetween: 30 },
                  }}
                  className="w-full !pb-10 [&>.swiper-wrapper]:!ease-linear"
                >
                  {relatedProjects.map((project, index) => (
                    <SwiperSlide key={index}>
                      <ProjectCard project={project} />
                    </SwiperSlide>
                  ))}
                </Swiper>

              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedProjects.slice(0, 3).map((project, index) => (
                  <div key={index} className="w-full">
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="mt-8 flex justify-center sm:hidden">
            <Link
              href="/projects"
              className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors uppercase text-sm font-bold tracking-widest"
            >
              View All Projects <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div> */}
      </Container>
    </section>
  );
}
