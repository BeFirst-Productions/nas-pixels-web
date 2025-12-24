import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

/**
 * 3D Image Carousel - Curved Screen Effect
 * Images wrap around a 3D curved surface with perspective distortion
 * 
 * @component
 * @author Senior Developer
 */
const ThreeDImageCarousel = ({
  images = [],
  width = 453,
  height = 328,
  arcRadius = 1200,
  arcDepth = 600,
  imageSpacing = 480,
  animationDuration = 1.5,
  staggerDelay = 0.1,
  autoPlay = true,
  autoPlaySpeed = 1.2,
  perspective = 2000,
  backgroundColor = 'transparent',
  className = '',
}) => {
  const containerRef = useRef(null);
  const carouselRef = useRef(null);
  const itemRefs = useRef([]);
  const progressRef = useRef(0);
  const autoPlayRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isReady, setIsReady] = useState(false);

  /**
   * Calculate 3D position with perspective distortion
   * Creates curved screen effect where images follow the arc
   */
  const getPositionOnArc = (position) => {
    // Normalize position: 0 (left) → 0.5 (center) → 1 (right)
    const normalizedPos = position * 3 - 1.5; // Range: -1.5 to 1.5
    
    // Calculate angle on the arc (semicircle)
    const maxAngle = Math.PI * 0.6; // 108 degrees arc
    const angle = normalizedPos * maxAngle;
    
    // Position on semicircle
    const x = Math.sin(angle) * arcRadius;
    const z = -(Math.cos(angle) * arcDepth - arcDepth);
    
    // Slight vertical movement for depth perception
    const y = Math.abs(normalizedPos) * 30;
    
    // Rotation to face the viewer (perpendicular to arc tangent)
    const rotateY = -angle * (180 / Math.PI);
    
    // Scale based on distance from center
    const distanceFromCenter = Math.abs(normalizedPos);
    const scale = 0.75 + (1 - distanceFromCenter / 1.5) * 0.35;
    
    // Opacity fade at edges
    const opacity = Math.max(0, Math.min(1, 1.3 - distanceFromCenter * 0.7));
    
    // Visibility control (show 4 images: 2 center + 2 partial edges)
    const isVisible = Math.abs(normalizedPos) <= 1.6;
    
    // Calculate perspective skew for curved screen effect
    // Left images: right edge smaller (going into depth)
    // Right images: left edge smaller (coming from depth)
    const skewIntensity = normalizedPos * 8; // Degrees of skew
    const rotateX = Math.abs(normalizedPos) * 3; // Slight X rotation for depth
    
    return { 
      x, 
      y, 
      z, 
      rotateY, 
      rotateX,
      scale, 
      opacity, 
      isVisible,
      skewIntensity,
      normalizedPos
    };
  };

  /**
   * Update all images positions with curved screen effect
   */
  const updateCarousel = (progress) => {
    const totalImages = images.length;
    
    itemRefs.current.forEach((item, index) => {
      if (!item) return;

      // Calculate this image's position in the sequence
      const imageOffset = (progress / imageSpacing + index) % totalImages;
      const normalizedPosition = imageOffset / totalImages;
      
      const position = getPositionOnArc(normalizedPosition);
      
      if (position.isVisible) {
        // Apply transforms with perspective distortion
        gsap.set(item, {
          x: position.x,
          y: position.y,
          z: position.z,
          rotationY: position.rotateY,
          rotationX: position.rotateX,
          scale: position.scale,
          opacity: position.opacity,
          display: 'block',
          transformOrigin: 'center center',
        });

        // Apply perspective skew to create curved screen effect
        // This makes the edges appear to wrap around
        const skewValue = position.skewIntensity;
        const perspectiveValue = 1000 - Math.abs(position.normalizedPos) * 200;
        
        item.style.transform = `
          translate3d(${position.x}px, ${position.y}px, ${position.z}px) 
          rotateY(${position.rotateY}deg) 
          rotateX(${position.rotateX}deg)
          scale(${position.scale})
        `;
        
        item.style.transformStyle = 'preserve-3d';
        item.style.perspective = `${perspectiveValue}px`;
      } else {
        gsap.set(item, {
          display: 'none',
        });
      }
    });

    progressRef.current = progress;
  };

  /**
   * Auto-play animation loop
   */
  const startAutoPlay = () => {
    if (!autoPlay || autoPlayRef.current) return;

    const animate = () => {
      progressRef.current += autoPlaySpeed;
      
      // Loop seamlessly
      if (progressRef.current >= imageSpacing) {
        progressRef.current -= imageSpacing;
      }
      
      updateCarousel(progressRef.current);
      autoPlayRef.current = requestAnimationFrame(animate);
    };

    autoPlayRef.current = requestAnimationFrame(animate);
  };

  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      cancelAnimationFrame(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  };

  /**
   * Initialize carousel with entrance animation
   */
  useEffect(() => {
    setIsMounted(true);

    const timeline = gsap.timeline({
      onComplete: () => {
        setIsReady(true);
        if (autoPlay) {
          startAutoPlay();
        }
      },
    });

    // Stagger entrance animation
    itemRefs.current.forEach((item, index) => {
      if (item) {
        gsap.set(item, { y: 400, opacity: 0, scale: 0.6 });
        
        timeline.to(
          item,
          {
            duration: animationDuration,
            ease: 'power3.out',
          },
          index * staggerDelay
        );
      }
    });

    // Initialize positions
    updateCarousel(0);

    return () => {
      timeline.kill();
      stopAutoPlay();
    };
  }, [images.length, animationDuration, staggerDelay]);

  /**
   * Manual drag control with inertia
   */
  useEffect(() => {
    if (!isReady || !containerRef.current) return;

    let isDragging = false;
    let startX = 0;
    let velocity = 0;
    let lastX = 0;
    let lastTime = Date.now();
    let animationFrame = null;

    const onDragStart = (e) => {
      isDragging = true;
      startX = e.clientX || e.touches?.[0]?.clientX || 0;
      lastX = startX;
      lastTime = Date.now();
      velocity = 0;
      stopAutoPlay();

      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };

    const onDragMove = (e) => {
      if (!isDragging) return;

      const currentX = e.clientX || e.touches?.[0]?.clientX || 0;
      const currentTime = Date.now();
      const deltaX = currentX - lastX;
      const deltaTime = currentTime - lastTime;
      
      // Calculate velocity for inertia
      velocity = deltaTime > 0 ? deltaX / deltaTime : 0;
      
      const newProgress = progressRef.current - deltaX * 2;
      updateCarousel(newProgress);
      
      lastX = currentX;
      lastTime = currentTime;
    };

    const onDragEnd = () => {
      if (!isDragging) return;
      isDragging = false;

      // Apply inertia with velocity
      const applyInertia = () => {
        if (Math.abs(velocity) > 0.05) {
          velocity *= 0.93; // Friction
          const newProgress = progressRef.current - velocity * 30;
          updateCarousel(newProgress);
          animationFrame = requestAnimationFrame(applyInertia);
        } else {
          // Snap to nearest image
          const snapTarget = Math.round(progressRef.current / imageSpacing) * imageSpacing;
          gsap.to(progressRef, {
            current: snapTarget,
            duration: 0.6,
            ease: 'power2.out',
            onUpdate: () => {
              updateCarousel(progressRef.current);
            },
            onComplete: () => {
              if (autoPlay) {
                setTimeout(() => startAutoPlay(), 500);
              }
            }
          });
        }
      };

      applyInertia();
    };

    const container = containerRef.current;
    container.addEventListener('mousedown', onDragStart);
    document.addEventListener('mousemove', onDragMove);
    document.addEventListener('mouseup', onDragEnd);
    container.addEventListener('touchstart', onDragStart, { passive: true });
    document.addEventListener('touchmove', onDragMove, { passive: true });
    document.addEventListener('touchend', onDragEnd);

    return () => {
      container.removeEventListener('mousedown', onDragStart);
      container.removeEventListener('touchstart', onDragStart);
      document.removeEventListener('mousemove', onDragMove);
      document.removeEventListener('mouseup', onDragEnd);
      document.removeEventListener('touchmove', onDragMove);
      document.removeEventListener('touchend', onDragEnd);
      
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isReady, autoPlay, imageSpacing]);

  if (!isMounted) return null;

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden select-none cursor-grab active:cursor-grabbing ${className}`}
      style={{ backgroundColor }}
    >
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full"
        style={{
          perspective: `${perspective}px`,
          perspectiveOrigin: 'center center',
        }}
      >
        <div
          ref={carouselRef}
          className="relative w-full h-full"
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          {images.map((imageUrl, index) => (
            <div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg overflow-hidden pointer-events-none"
              style={{
                width: `${width}px`,
                height: `${height}px`,
                transformStyle: 'preserve-3d',
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backfaceVisibility: 'hidden',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
              }}
            />
          ))}
        </div>
      </div>

      {/* Visual depth indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-white/40 text-xs">
        <div className="w-2 h-2 rounded-full bg-white/20" />
        <div className="h-px w-32 bg-gradient-to-r from-white/20 via-white/40 to-white/20" />
        <div className="w-2 h-2 rounded-full bg-white/20" />
      </div>
    </div>
  );
};

// Demo Component
const Demo = () => {
  const sampleImages = [
    'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
    'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800',
    'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800',
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800',
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800',
    'https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800',
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
    'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800',
  ];

  return (
    <div className="w-full h-screen bg-gradient-to-b from-black via-gray-900 to-black flex items-center justify-center">
      <div className="absolute top-8 left-1/2 -translate-x-1/2 text-center z-10">
        <h1 className="text-5xl font-bold text-white mb-3 tracking-tight">
          3D Curved Screen Carousel
        </h1>
        <p className="text-gray-400 text-sm">Images wrap around a virtual curved surface</p>
        <p className="text-gray-500 text-xs mt-2">Drag to navigate • Auto-rotating</p>
      </div>
      
      <ThreeDImageCarousel
        images={sampleImages}
        width={453}
        height={328}
        arcRadius={800}       // Width of the arc
        arcDepth={600}         // Depth of the curve
        imageSpacing={480}     // Space between images
        animationDuration={1.5}
        staggerDelay={0.1}
        autoPlay={true}
        autoPlaySpeed={1.2}    // Rotation speed
        perspective={2000}
        backgroundColor="transparent"
      />
    </div>
  );
};

export default Demo;