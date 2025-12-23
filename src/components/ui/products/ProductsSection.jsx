'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const ProductsSection = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const [activeProduct, setActiveProduct] = useState(1); // Start with first product active
  
  const products = [
    {
      id: 1,
      title: 'Outdoor & Indoor Screens',
      subtitle: 'Digital Signage Solutions',
      description: 'High-brightness displays engineered for any environment, delivering crystal-clear visuals in direct sunlight or controlled indoor settings.',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    },
    {
      id: 2,
      title: 'Stadium & Sports LED',
      subtitle: 'Interactive Touch Screens',
      description: 'Massive-scale displays for stadiums and arenas combined with interactive solutions for immersive fan experiences.',
      image: 'https://images.unsplash.com/photo-1511886929837-354d827aae26?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    },
    {
      id: 3,
      title: 'Rental & Event Screens',
      subtitle: 'Fine Pixel / UHD Display',
      description: 'Modular rental solutions and ultra-high-definition displays for temporary events, concerts, and exhibitions.',
      image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    },
    {
      id: 4,
      title: 'Transparent LED',
      subtitle: 'Control Room / Command Center Screens',
      description: 'Cutting-edge see-through display technology and mission-critical monitoring solutions for control centers.',
      image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    }
  ];

  const activeProductData = products.find(p => p.id === activeProduct);

  useEffect(() => {
    // Initial animations
    const ctx = gsap.context(() => {
      // Animate section entrance
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out"
        }
      );

      // Animate image on load
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            delay: 0.3
          }
        );
      }

      // Animate product items
      gsap.fromTo(
        ".product-item",
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.5
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleProductHover = (productId) => {
    setActiveProduct(productId);
    
    // Animate image transition
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        opacity: 0.5,
        scale: 0.95,
        duration: 0.2,
        ease: "power2.out",
        onComplete: () => {
          gsap.to(imageRef.current, {
            opacity: 1,
            scale: 1,
            duration: 0.4,
            ease: "power2.out"
          });
        }
      });
    }

    // Animate the active product highlight
    gsap.to(`[data-product-id="${productId}"] .number-circle`, {
      backgroundColor: '#70c879',
      color: 'black',
      duration: 0.3,
      ease: "power2.out"
    });

    // Reset previous active
    products.forEach(p => {
      if (p.id !== productId) {
        gsap.to(`[data-product-id="${p.id}"] .number-circle`, {
          backgroundColor: 'transparent',
          color: '#666',
          duration: 0.3,
          ease: "power2.out"
        });
      }
    });
  };

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen bg-black text-white py-20 md:py-32 overflow-hidden"
    >
      {/* Background Gradient */}
      <div 
        className="absolute top-0 left-0 right-0 h-96 opacity-30"
        style={{
          background: 'linear-gradient(180deg, rgba(112,200,121,1.00) 0%, transparent 100%)',
          filter: 'blur(80px)'
        }}
      />

      {/* Main Container */}
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#70c879] via-white to-[#70c879] bg-clip-text text-transparent">
              Our Products
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light tracking-wide">
            Premium display solutions engineered for excellence
          </p>
          
          {/* Divider Line */}
          <div className="mt-12 md:mt-16 relative">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-px bg-gradient-to-r from-[#70c879] to-emerald-500" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Product List */}
          <div className="space-y-4 md:space-y-6">
            {products.map((product, index) => (
              <div
                key={product.id}
                data-product-id={product.id}
                className="product-item group cursor-pointer"
                onMouseEnter={() => handleProductHover(product.id)}
                onClick={() => handleProductHover(product.id)}
              >
                <div className="flex items-start gap-4 md:gap-6 p-4 md:p-6 rounded-xl transition-all duration-300 hover:bg-gray-900/30">
                  {/* Number Indicator */}
                  <div className="flex-shrink-0">
                    <div className={`number-circle w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-700 flex items-center justify-center text-lg md:text-xl font-bold transition-all duration-300 ${activeProduct === product.id ? 'bg-[#70c879] text-black' : 'bg-transparent text-gray-500'}`}>
                      {index + 1}
                    </div>
                  </div>
                  
                  {/* Product Info */}
                  <div className="flex-1">
                    <h3 className={`text-2xl md:text-3xl font-bold mb-2 transition-colors duration-300 ${activeProduct === product.id ? 'text-[#70c879]' : 'text-white'}`}>
                      {product.title}
                    </h3>
                    <h4 className={`text-base md:text-lg font-light transition-colors duration-300 ${activeProduct === product.id ? 'text-emerald-300' : 'text-gray-400'}`}>
                      {product.subtitle}
                    </h4>
                    
                    {/* Description (shown only for active product on mobile) */}
                    <div className={`mt-3 ${activeProduct === product.id ? 'block md:hidden' : 'hidden'}`}>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {product.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Active Indicator */}
                  <div className="flex-shrink-0">
                    <div className={`w-6 h-6 rounded-full border transition-all duration-300 ${activeProduct === product.id ? 'border-[#70c879] bg-[#70c879]/20' : 'border-gray-700'}`}>
                      {activeProduct === product.id && (
                        <div className="w-3 h-3 rounded-full bg-[#70c879] mx-auto mt-1 animate-pulse" />
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Hover Line */}
                <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mx-4">
                  <div className={`h-full transition-all duration-500 ease-out ${activeProduct === product.id ? 'w-full' : 'w-0'}`}>
                    <div className="h-full bg-gradient-to-r from-[#70c879] to-emerald-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Product Image */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
            {/* Image Container */}
            <div
              ref={imageRef}
              className="absolute inset-0 rounded-2xl md:rounded-3xl overflow-hidden"
            >
              {/* Background Image with Gradient Overlay */}
              <div className="absolute inset-0">
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"
                  style={{
                    backgroundImage: `url(${activeProductData?.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(0.9) contrast(1.1)'
                  }}
                />
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
                
                {/* Glow Effect */}
                <div className="absolute -inset-8 bg-gradient-to-r from-[#70c879]/10 via-emerald-500/10 to-[#70c879]/10 blur-3xl opacity-30" />
              </div>
              
              {/* Product Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-sm md:text-base text-emerald-400 font-light tracking-wider mb-1">
                      PRODUCT {activeProductData?.id}
                    </div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
                      {activeProductData?.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    {[...Array(4)].map((_, i) => (
                      <div 
                        key={i}
                        className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${i < activeProduct ? 'bg-[#70c879] animate-pulse' : 'bg-gray-700'}`}
                        style={{ animationDelay: `${i * 0.2}s` }}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl">
                  {activeProductData?.description}
                </p>
              </div>
              
              {/* Corner Accents */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#70c879]/50 rounded-tl-lg" />
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#70c879]/50 rounded-tr-lg" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#70c879]/50 rounded-bl-lg" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#70c879]/50 rounded-br-lg" />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-[#70c879]/10 blur-xl animate-pulse" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-emerald-500/10 blur-xl animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
        </div>
        
        {/* Bottom Description */}
        <div className="mt-16 md:mt-24 pt-8 border-t border-gray-800/50">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              Each solution is crafted with precision engineering, combining cutting-edge technology with 
              elegant design to deliver unparalleled visual experiences across all environments.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#70c879] to-transparent" />
              <div className="w-2 h-2 rounded-full bg-[#70c879]" />
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#70c879] to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Additional Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .product-item:hover .number-circle:not(.active) {
          background-color: rgba(112, 200, 121, 0.1);
          border-color: #70c879;
          color: #70c879;
        }
        
        .product-item:hover h3 {
          color: #70c879;
        }
        
        .product-item:hover h4 {
          color: #a5d6a7;
        }
      `}</style>
    </section>
  );
};

export default ProductsSection;