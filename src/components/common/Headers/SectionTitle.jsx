"use client";

export default function SectionTitle({
  title = "",
  offset = {
    base: "-left-[3%]",
    lg: "-left-[0%]",
  },
  className = "",
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Title */}
      <h2 className="font-host inline-block text-3xl md:text-4xl xl:text-[2.625rem] font-semibold py-1 rounded-full">
        {title}
      </h2>

      {/* Decorative Ring */}
      <div
        className={`
          relative
          ${offset.base}
          lg:${offset.lg}
          flex items-center justify-center
          w-11 h-11
          md:w-12 md:h-12
          lg:w-[54px] lg:h-[54px]
          rounded-full
          flex-shrink-0
        `}
      >
        <svg
          className="absolute inset-0 w-full h-full rotate-40 transition-all duration-300"
          viewBox="0 0 52 52"
          style={{ opacity: 0.9 }}
        >
          <defs>
            <linearGradient
              id="borderGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#000" stopOpacity="1" />
              <stop offset="100%" stopColor="#70C879" stopOpacity="1" />
            </linearGradient>
          </defs>

          <circle
            cx="26"
            cy="26"
            r="25"
            fill="none"
            stroke="url(#borderGradient)"
            strokeWidth="1.5"
            strokeDasharray="98.5 42.5"
            strokeDashoffset="42.25"
          />
        </svg>
      </div>
    </div>
  );
}
