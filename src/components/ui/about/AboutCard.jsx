import { forwardRef } from "react";

const AboutCard = forwardRef(
  ({ title, description, icon }, ref) => {
    return (
      <div
        ref={ref}
        className="
          relative
          w-[260px] h-[236px]
          flex items-center justify-center
        "
      >
        {/* GREEN HOLLOW GLOW FRAME */}
        <div
          className="
            absolute inset-0
            rounded-2xl
            bg-[#70C879]/80
            blur-[10px]
          "
        />

        {/* FRAME CUT (CREATES HOLLOW CENTER) */}
        <div
          className="
            absolute inset-[6px]
            rounded-xl
            bg-black
          "
        />

        {/* INNER CONTENT CARD */}
        <div
          className="
            relative z-10
            w-[92%] h-[88%]
            rounded-xl
            bg-[#15171B]
            p-5
            text-center
            flex flex-col items-center justify-center
          "
        >
          {icon && (
            <div className="mb-3 text-[#70C879]">
              {icon}
            </div>
          )}

          <h4 className="mb-2 text-lg font-semibold text-white">
            {title}
          </h4>

          <p className="text-sm leading-relaxed text-gray-400">
            {description}
          </p>
        </div>
      </div>
    );
  }
);

AboutCard.displayName = "AboutCard";
export default AboutCard;
