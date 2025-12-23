import Image from "next/image";
import { NAV_ITEMS } from "@/data/nav";
import { NavLink } from "./NavLink";

const CLOSED_WIDTH = 457;
const OPEN_WIDTH = 626;
const HEIGHT = 58;

export function DesktopMenu({ isOpen, onToggle }) {
  return (
    <div
      className="
        relative flex items-center overflow-hidden
        rounded-[24px]
        backdrop-blur-md
        transition-[width] duration-500 ease-in-out
      "
      style={{
        width: isOpen ? OPEN_WIDTH : CLOSED_WIDTH,
        height: HEIGHT,
        backgroundColor: "rgba(33, 34, 47, 0.5)",
        border: "1px solid #70C879",
        boxSizing: "border-box",
        paddingLeft: 16,
        paddingRight: 16,
      }}
    >
      {/* LEFT ZONE — Logo (only when closed) */}
      <div className="flex items-center w-[54px] shrink-0">
        {!isOpen && (
          <Image
            src="/assets/images/logos/nas-pixels-small-logo.png"
            alt="NAS"
            width={54}
            height={21}
            className="object-contain"
          />
        )}
      </div>

      {/* CENTER ZONE — Nav Items (only when open) */}
      <div className="flex-1 flex items-center justify-center">
        {isOpen && (
          <div className="flex items-center gap-6">
            {NAV_ITEMS.map(item => (
              <NavLink key={item} label={item} />
            ))}
          </div>
        )}
      </div>

      {/* RIGHT ZONE — Menu Icon (always visible) */}
   

<div className="flex items-center w-[32px] shrink-0">
  <button
    onClick={onToggle}
    aria-label="Menu toggle"
    className="flex items-center justify-center rounded-lg hover:bg-white/10 transition"
    style={{ width: 32, height: 32 }}
  >
    {isOpen ? (
      <Image
        src="/assets/images/icons/menu-close.png"
        alt="Close menu"
        width={20}
        height={20}
        priority
      />
    ) : (
      <Image
        src="/assets/images/icons/menu-icon.png"
        alt="Open menu"
        width={20}
        height={20}
        priority
      />
    )}
  </button>
</div>

    </div>
  );
}
