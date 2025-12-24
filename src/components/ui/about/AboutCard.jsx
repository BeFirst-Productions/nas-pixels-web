import Image from "next/image";

export default function AboutCard({
  icon,
  title,
  description,
}) {
  return (
    <div
      className="
        relative
        w-[260px] h-[236px]
        rounded-[16px]
        bg-[#1C1F24]
        overflow-hidden
      "
      style={{
        border: "3px solid #70C879",
        boxSizing: "border-box",
        boxShadow: "0 0 18px rgba(112, 200, 121, 0.55)",
      }}
    >
      {/* INNER CONTENT */}
      <div className="relative z-10 flex h-full flex-col items-center px-4 pt-6 text-center">

        {/* ICON */}
        <div className="mb-4">
          <Image
            src={icon}
            alt={title}
            width={48}
            height={48}
            className="object-contain"
            priority
          />
        </div>

        {/* TITLE */}
        <h3 className="mb-3 text-[24px] font-semibold text-white">
          {title}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-[16px] leading-[26px] text-white/90">
          {description}
        </p>
      </div>

      {/* GLOW OVERLAY (soft edge like Figma) */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[16px]"
        style={{
          boxShadow: "inset 0 0 22px rgba(112, 200, 121, 0.35)",
        }}
      />
    </div>
  );
}
