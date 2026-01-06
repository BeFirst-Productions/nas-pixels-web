// components/projects/ProjectCard.jsx
import Image from "next/image";

export default function ProjectCard({ title, location, img }) {
  return (
    <div
      className="
        flex-shrink-0
        rounded-[18px]
        overflow-hidden
        bg-black

        /* Desktop (Figma exact) */
        w-[348px] h-[354px]

        /* Tablet */
        md:w-[320px] md:h-[326px]

        /* Mobile */
        sm:w-[280px] sm:h-[300px]
      "
    >
      {/* IMAGE SECTION */}
      <div
        className="
          relative w-full

          /* Desktop */
          h-[274px]

          /* Tablet */
          md:h-[246px]

          /* Mobile */
          sm:h-[220px]
        "
      >
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 348px"
        />
      </div>

      {/* CONTENT SECTION */}
      <div
        className="
          w-full bg-black
          flex flex-col items-center justify-center
          text-center px-3

          /* Desktop */
          h-[80px]

          /* Tablet */
          md:h-[80px]

          /* Mobile */
          sm:h-[80px]
        "
      >
        <p className="text-white text-sm sm:text-[13px] font-medium leading-tight">
          {title}
        </p>
        <p className="text-white/70 text-xs sm:text-[11px] mt-1">
          {location}
        </p>
      </div>
    </div>
  );
}
