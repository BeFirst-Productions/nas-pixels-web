import React from 'react';

export const ModernButton = ({ 
  text = "Explore Solutions", 
  onClick,
  className = "",
  clborder ="",
  arrowClr ="#ffffff"
}) => {
  return (
    <button
      onClick={onClick}
      className={`group relative inline-flex items-center gap-0 border-0 p-0 bg-transparent cursor-pointer transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#70C879] focus-visible:ring-offset-4 ${className}`}
      aria-label={text}
    >
      {/* Left Text Section - Oval Shape */}
      <span className="relative flex items-center justify-center px-8 md:px-10 lg:px-[52px] py-3 md:py-3.5 lg:py-[14px] rounded-full bg-[#16572D]/85 text-white text-base md:text-xl lg:text-[20px] font-normal tracking-wide transition-all duration-300 group-hover:bg-[#16572D] whitespace-nowrap min-h-[44px] md:min-h-[48px] lg:h-[52px]">
        {text}
      </span>

      {/* Right Circle Section with ONLY Gradient Border (Transparent Inside) */}
      <div className="relative flex items-center justify-center w-11 h-11 md:w-12 md:h-12 lg:w-[52px] lg:h-[52px] rounded-full flex-shrink-0">
        {/* Gradient Ring/Border - Using SVG for precise control */}
        <svg 
          className="absolute inset-0 w-full h-full -rotate-45 transition-all duration-300 group-hover:opacity-100"
          viewBox="0 0 52 52"
          style={{ opacity: 0.7 }}
        >
          <defs>
            <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: {clborder}, stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#70C879', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <circle
            cx="26"
            cy="26"
            r="25"
            fill="none"
            stroke="url(#borderGradient)"
            strokeWidth="1"
            className="transition-all duration-300 group-hover:[stroke-width:1.5]"
          />
        </svg>
        
        {/* Arrow Icon - Centered in transparent circle */}
        <svg 
          width="30" 
          height="30"
          viewBox="0 0 24 24" 
          fill="none" 
          className={`relative z-10 text-[${arrowClr}] transition-all duration-300 group-hover:rotate-45 w-4 h-4 md:w-5 md:h-5 lg:w-5 lg:h-5`}
        >
          <path 
            d="M7 17L17 7M17 7H7M17 7V17" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </button>
  );
};