import { ModernButton } from "@/components/common/Button/ModernButton";
import React, { useEffect, useRef, forwardRef } from "react";


// AboutCard Component
const AboutCard = forwardRef(({ title, description, icon, rotate = "", offset = "" }, ref) => {
  return (
    <div
      ref={ref}
      className={`group relative rounded-3xl border border-[#2D5440]/40 bg-gradient-to-br from-[#1a2e24]/40 to-[#0d1912]/40 p-6 md:p-8 backdrop-blur-sm transition-all duration-500 hover:border-[#70C879]/60 hover:shadow-[0_0_30px_rgba(112,200,121,0.15)] ${rotate} ${offset}`}
    >
      {/* Icon */}
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#16572D]/20 text-[#70C879] transition-all duration-300 group-hover:bg-[#16572D]/40 group-hover:scale-110">
        {icon}
      </div>

      {/* Title */}
      <h3 className="mb-3 text-xl font-semibold text-white md:text-2xl">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm leading-relaxed text-gray-400 md:text-base">
        {description}
      </p>

      {/* Hover gradient overlay */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#70C879]/0 to-[#70C879]/0 opacity-0 transition-opacity duration-500 group-hover:from-[#70C879]/5 group-hover:to-transparent group-hover:opacity-100" />
    </div>
  );
});

AboutCard.displayName = "AboutCard";

// Icons
const InnovationIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

const TechnologyIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="2"/>
    <rect x="9" y="9" width="6" height="6"/>
    <line x1="9" y1="1" x2="9" y2="4"/>
    <line x1="15" y1="1" x2="15" y2="4"/>
    <line x1="9" y1="20" x2="9" y2="23"/>
    <line x1="15" y1="20" x2="15" y2="23"/>
    <line x1="20" y1="9" x2="23" y2="9"/>
    <line x1="20" y1="14" x2="23" y2="14"/>
    <line x1="1" y1="9" x2="4" y2="9"/>
    <line x1="1" y1="14" x2="4" y2="14"/>
  </svg>
);

const SupportIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
    <line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>
);

const QualityIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
);

// Main AboutSection Component
const AboutSection = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const cardRefs = useRef([]);

  const handleClick = () => {
    console.log('More About Us clicked!');
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-black px-6 py-20 md:px-16 lg:px-24"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        
        {/* LEFT CONTENT */}
        <div ref={textRef} className="flex flex-col justify-center">
          <h2 className="flex items-center gap-3 text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
            About NAS Pixels
            <span className="inline-block h-3 w-3 md:h-4 md:w-4 rounded-full border-2 border-[#70C879] flex-shrink-0" />
          </h2>

          <p className="mt-6 text-sm leading-relaxed text-gray-400 md:text-base lg:text-lg">
            Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
          </p>

          <div className="mt-8">
            <ModernButton 
              text="More About Us" 
              onClick={handleClick}
              arrowClr="white#fffff"
            />
          </div>
        </div>

        {/* RIGHT CARDS */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
          {[
            {
              title: "Innovation",
              icon: <InnovationIcon />,
              description: "Maecenas eget condimentum velit, sit amet feugiat lectus, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla",
              rotate: "lg:-rotate-2",
              offset: "lg:translate-x-2",
            },
            {
              title: "Technology",
              icon: <TechnologyIcon />,
              description: "Maecenas eget condimentum velit, sit amet feugiat lectus, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla",
              rotate: "lg:rotate-2",
              offset: "lg:-translate-x-2",
            },
            {
              title: "Support",
              icon: <SupportIcon />,
              description: "Maecenas eget condimentum velit, sit amet feugiat lectus, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla",
              rotate: "lg:-rotate-1",
              offset: "lg:translate-x-2",
            },
            {
              title: "Quality",
              icon: <QualityIcon />,
              description: "Maecenas eget condimentum velit, sit amet feugiat lectus, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla",
              rotate: "lg:rotate-1",
              offset: "lg:-translate-x-2",
            },
          ].map((item, i) => (
            <AboutCard
              key={item.title}
              ref={(el) => (cardRefs.current[i] = el)}
              title={item.title}
              description={item.description}
              icon={item.icon}
              rotate={item.rotate}
              offset={item.offset}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;