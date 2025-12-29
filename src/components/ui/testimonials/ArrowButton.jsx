"use client";

export default function ArrowButton({
  direction = "right",
  onClick,
  clborder = "#000",
  arrowClr = "#ffffff",
}) {
  const baseRotate =
    direction === "left" ? "-rotate-90" : "rotate-0";

  const hoverRotate =
    direction === "left"
      ? "group-hover:rotate-[-135deg]"
      : "group-hover:rotate-45";

  return (
    <button
      onClick={onClick}
      aria-label={direction}
      className="
        group
        relative
        flex items-center justify-center
        w-11 h-11
        md:w-12 md:h-12
        lg:w-[52px] lg:h-[52px]
        rounded-full
        flex-shrink-0
      "
    >
      {/* Gradient Ring */}
      <svg
        className="absolute inset-0 w-full h-full -rotate-45 transition-all duration-300 group-hover:opacity-100"
        viewBox="0 0 52 52"
        style={{ opacity: 0.7 }}
      >
        <defs>
<linearGradient
  id={`borderGradient-${direction}`}
  x1={direction === "left" ? "100%" : "0%"}
  y1={direction === "left" ? "100%" : "100%"}
  x2={direction === "left" ? "100%" : "100%"}
  y2={direction === "left" ? "0%" : "80%"}
>
  {/* neutral stroke */}
  <stop offset="0%" stopColor={clborder} />
  <stop offset="70%" stopColor={clborder} />

  {/* concentrated green highlight */}
  <stop offset="88%" stopColor="#70C879" />
  <stop offset="100%" stopColor="#70C879" />
</linearGradient>




        </defs>

        <circle
          cx="26"
          cy="26"
          r="25"
          fill="none"
          stroke={`url(#borderGradient-${direction})`}
          strokeWidth="1"
          className="transition-all duration-300 group-hover:[stroke-width:1.5]"
        />
      </svg>

      {/* Arrow Icon */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={`
          relative z-10
          w-4 h-4
          md:w-5 md:h-5
          text-[${arrowClr}]
          transition-transform duration-300
          ${baseRotate}
          ${hoverRotate}
        `}
      >
        <path
          d="M7 17L17 7M17 7H7M17 7V17"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
