'use client';
import React, { useEffect, useMemo, useRef } from "react";
import { getLenisInstance, getLenis } from "@/lib/lenis-singleton";
import AboutSection from "../ui/about/AboutSection";
import ProductsSection from "../ui/products/ProductsSection";

const DEFAULTS = {
  initialBoxSize: 360,
  targetSize: "fullscreen",
  scrollHeightVh: 280,
  overlayBlur: 10,
  overlayRevealDelay: 0.35,
  eases: {
    container: "power2.out",
    overlay: "power2.out",
    text: "power3.inOut",
  },
};

function isSourceObject(m) {
  return !!m && typeof m !== "string";
}

export const AnimateScrollVideo = ({
  title = "Future Forms",
  subtitle = "Design in Motion",
  meta = "2025",
  credits = (
    <>
      <p>Crafted by</p>
      <p>Scott Clayton</p>
    </>
  ),

  media,
  poster,
  mediaType = "video",
  muted = true,
  loop = true,
  playsInline = true,
  autoPlay = false,

  overlay = {
    caption: "PROJECT • 07",
    heading: "Clarity in Motion",
    paragraphs: [
      "Scroll to expand the frame and reveal the story.",
      "Built with GSAP ScrollTrigger and Lenis smooth scroll.",
    ],
    extra: null,
  },

  initialBoxSize = DEFAULTS.initialBoxSize,
  targetSize = DEFAULTS.targetSize,
  scrollHeightVh = DEFAULTS.scrollHeightVh,
  showHeroExitAnimation = true,
  sticky = true,
  overlayBlur = DEFAULTS.overlayBlur,
  overlayRevealDelay = DEFAULTS.overlayRevealDelay,
  eases = DEFAULTS.eases,

  className,
  style,
}) => {
  const rootRef = useRef(null);
  const containerRef = useRef(null);
  const headlineRef = useRef(null);
  const overlayRef = useRef(null);
  const overlayCaptionRef = useRef(null);
  const overlayContentRef = useRef(null);

  const isClient = typeof window !== "undefined";

  const cssVars = useMemo(
    () => ({
      ["--initial-size"]: `${initialBoxSize}px`,
      ["--overlay-blur"]: `${overlayBlur}px`,
    }),
    [initialBoxSize, overlayBlur]
  );

  useEffect(() => {
    if (!isClient) return;

    let gsap;
    let ScrollTrigger;
    let heroTl;
    let mainTl;
    let overlayDarkenEl = null;
    let scrollListener = null;
    let cancelled = false;

    (async () => {
      try {
        // Import GSAP
        const gsapPkg = await import("gsap");
        gsap = gsapPkg.gsap || gsapPkg.default;

        const ScrollTriggerPkg = await import("gsap/ScrollTrigger").catch(() =>
          import("gsap/dist/ScrollTrigger")
        );
        ScrollTrigger = ScrollTriggerPkg.default || ScrollTriggerPkg.ScrollTrigger;

        if (!gsap || !ScrollTrigger) {
          console.error("Failed to load GSAP or ScrollTrigger");
          return;
        }

        gsap.registerPlugin(ScrollTrigger);

        if (cancelled) return;

        // CRITICAL: Get or wait for global Lenis instance
        const lenis = await getLenisInstance();
        
        if (lenis && ScrollTrigger) {
          // Connect Lenis to ScrollTrigger (only once per component)
          scrollListener = () => ScrollTrigger.update();
          lenis.on('scroll', scrollListener);
          console.log('✅ Lenis connected to ScrollTrigger in HeroScrollVideo');
        }

        // Small delay for initialization
        await new Promise(resolve => setTimeout(resolve, 100));

        if (cancelled) return;

        const containerEase = eases.container ?? "power2.out";
        const overlayEase = eases.overlay ?? "power2.out";
        const textEase = eases.text ?? "power3.inOut";

        const container = containerRef.current;
        const overlayEl = overlayRef.current;
        const overlayCaption = overlayCaptionRef.current;
        const overlayContent = overlayContentRef.current;
        const headline = headlineRef.current;

        if (!container) {
          console.error("Container ref not found");
          return;
        }

        // Darkening overlay
        overlayDarkenEl = document.createElement("div");
        overlayDarkenEl.setAttribute("data-auto-darken", "true");
        overlayDarkenEl.style.cssText = `
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0);
          pointer-events: none;
          z-index: 1;
        `;
        container.appendChild(overlayDarkenEl);

        // Headline animation
        if (showHeroExitAnimation && headline) {
          const headlineChildren = headline.querySelectorAll(".hsv-headline > *");
          
          if (headlineChildren.length > 0) {
            heroTl = gsap.timeline({
              scrollTrigger: {
                trigger: headline,
                start: "top top",
                end: "top+=420 top",
                scrub: 0.5,
                invalidateOnRefresh: true,
              },
            });

            headlineChildren.forEach((el, i) => {
              heroTl.to(
                el,
                {
                  rotationX: 80,
                  y: -36,
                  scale: 0.86,
                  opacity: 0,
                  filter: "blur(4px)",
                  transformOrigin: "center top",
                  ease: textEase,
                },
                i * 0.08
              );
            });
          }
        }

        // Main sticky expansion
        const triggerEl = rootRef.current?.querySelector("[data-sticky-scroll]");

        if (!triggerEl || !overlayEl) {
          console.error("Required elements not found");
          return;
        }

        const target = (() => {
          if (targetSize === "fullscreen") {
            return { width: "100vw", height: "100vh", borderRadius: 0 };
          }
          return {
            width: `${targetSize.widthVw ?? 100}vw`,
            height: `${targetSize.heightVh ?? 100}vh`,
            borderRadius: targetSize.borderRadius ?? 0,
          };
        })();

        // Initial states
        gsap.set(container, {
          width: initialBoxSize,
          height: initialBoxSize,
          borderRadius: 20,
          filter: "none",
          clipPath: "inset(0 0 0 0)",
        });
        
        gsap.set(overlayEl, { 
          clipPath: "inset(100% 0 0 0)",
        });
        
        gsap.set(overlayContent, {
          filter: `blur(var(--overlay-blur))`,
          scale: 1.05,
        });
        
        gsap.set([overlayContent, overlayCaption], { y: 30 });

        // Main timeline - OPTIMIZED SCRUB VALUE
        mainTl = gsap.timeline({
          scrollTrigger: {
            trigger: triggerEl,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.3, // Lower = more responsive
            invalidateOnRefresh: true,
          },
        });

        mainTl
          .to(
            container,
            {
              width: target.width,
              height: target.height,
              borderRadius: target.borderRadius,
              ease: containerEase,
            },
            0
          )
          .to(
            overlayDarkenEl,
            {
              backgroundColor: "rgba(0,0,0,0.5)",
              ease: "power2.out",
            },
            0
          )
          .to(
            overlayEl,
            {
              clipPath: "inset(0% 0 0 0)",
              backdropFilter: `blur(${overlayBlur}px)`,
              ease: overlayEase,
            },
            overlayRevealDelay
          )
          .to(
            overlayCaption,
            { 
              y: 0, 
              ease: overlayEase,
            },
            overlayRevealDelay + 0.05
          )
          .to(
            overlayContent,
            {
              y: 0,
              filter: "blur(0px)",
              scale: 1,
              ease: overlayEase,
            },
            overlayRevealDelay + 0.05
          );

        // Video playback
        const videoEl = container.querySelector("video");
        if (videoEl) {
          const tryPlay = () => {
            videoEl.play().catch(() => {});
          };
          
          tryPlay();
          
          ScrollTrigger.create({
            trigger: triggerEl,
            start: "top top",
            onEnter: tryPlay,
          });
        }

        ScrollTrigger.refresh();
        console.log('✅ HeroScrollVideo animations initialized');

      } catch (error) {
        console.error('Error initializing scroll animations:', error);
      }
    })();

    return () => {
      cancelled = true;

      // Remove scroll listener
      const lenis = getLenis();
      if (lenis && scrollListener) {
        lenis.off?.('scroll', scrollListener);
      }

      // Kill timelines
      heroTl?.kill?.();
      mainTl?.kill?.();

      // Kill ScrollTriggers
      if (ScrollTrigger?.getAll && rootRef.current) {
        ScrollTrigger.getAll().forEach((trigger) => {
          if (rootRef.current?.contains(trigger.trigger)) {
            trigger.kill(true);
          }
        });
      }

      // Remove darken overlay
      if (overlayDarkenEl?.parentElement) {
        overlayDarkenEl.parentElement.removeChild(overlayDarkenEl);
      }

      console.log('🧹 HeroScrollVideo cleanup completed');
    };
  }, [
    isClient,
    initialBoxSize,
    targetSize,
    scrollHeightVh,
    overlayBlur,
    overlayRevealDelay,
    eases.container,
    eases.overlay,
    eases.text,
    showHeroExitAnimation,
    sticky,
  ]);

  const renderMedia = () => {
    if (mediaType === "image") {
      const src = typeof media === "string" ? media : media?.mp4 || "";
      return (
        <img
          src={src}
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      );
    }
    
    const sources = [];
    if (typeof media === "string") {
      sources.push(<source key="mp4" src={media} type="video/mp4" />);
    } else if (isSourceObject(media)) {
      if (media.webm) sources.push(<source key="webm" src={media.webm} type="video/webm" />);
      if (media.mp4) sources.push(<source key="mp4" src={media.mp4} type="video/mp4" />);
      if (media.ogg) sources.push(<source key="ogg" src={media.ogg} type="video/ogg" />);
    }

    return (
      <video
        poster={poster}
        muted={muted}
        loop={loop}
        playsInline={playsInline}
        autoPlay={autoPlay || muted}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      >
        {sources}
      </video>
    );
  };

  return (
    <div
      ref={rootRef}
      className={["hsv-root relative h-screen", className].filter(Boolean).join(" ")}
      style={{ ...cssVars, ...style }}
    >
      {/* Hero Text Section */}
      <div className="absolute top-0 inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
        <h1 className="font-heading text-6xl md:text-8xl font-bold text-white mb-6">
          Welcome to the Future
        </h1>
        <p className="font-sans text-xl md:text-2xl text-gray-300 max-w-2xl">
          Experience the next generation of web design
        </p>
      </div>

      {/* Video Container with increased scroll height */}
      <div
        className="hsv-scroll"
        data-sticky-scroll
        style={{ height: `${Math.max(200, scrollHeightVh)}vh` }}
      >
        <div className={`hsv-sticky ${sticky ? "is-sticky" : ""}`}>
          <div className="hsv-media" ref={containerRef}>
            {renderMedia()}

            {/* Overlay replaced with AboutSection - FULL WIDTH */}
            <div className="hsv-overlay" ref={overlayRef}>
              <div className="w-full h-full" ref={overlayContentRef}>
                <ProductsSection />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional spacing after the video section */}
      <div className="h-32 md:h-48"></div>

      <style jsx>{`
        .hsv-root {
          --bg: transparent;
          --text: #0f1115;
          --muted: #6b7280;
          --muted-bg: rgba(15,17,21,0.06);
          --muted-border: rgba(15,17,21,0.12);
          --overlay-bg: rgba(0, 0, 0, 0.85);
          --overlay-text: #ffffff;
          --accent: #7c3aed;
          --accent-2: #22d3ee;
          --shadow: 0 10px 30px rgba(0,0,0,0.08);
        }

        .hsv-scroll { 
          position: relative;
          margin-bottom: 2rem;
        }
        
        .hsv-sticky.is-sticky {
          position: sticky;
          top: 0;
          height: 100vh;
          display: grid;
          place-items: center;
        }

        .hsv-media {
          position: relative;
          width: var(--initial-size);
          height: var(--initial-size);
          border-radius: 20px;
          overflow: hidden;
          background: #000;
          display: grid;
          place-items: center;
          box-shadow: var(--shadow);
          transform: translateZ(0);
          backface-visibility: hidden;
        }

        .hsv-overlay {
          position: absolute;
          inset: 0;
          background: var(--overlay-bg);
          color: var(--overlay-text);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 0;
          clip-path: inset(100% 0 0 0);
          backdrop-filter: blur(${overlayBlur}px);
          z-index: 2;
          transform: translateZ(0);
          backface-visibility: hidden;
        }
      `}</style>
    </div>
  );
};

export default AnimateScrollVideo;