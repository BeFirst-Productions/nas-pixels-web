import Image from "next/image";

export function MobileMenuButton({ isOpen, onToggle }) {
  return (
    <button
      onClick={onToggle}
      aria-label="Menu toggle"
      className={`flex items-center gap-3 rounded-full backdrop-blur-md transition-all duration-300 ${
        isOpen
          ? 'bg-[#21222F]/95 border border-[#70C879] px-4 py-2.5'
          : 'bg-[#21222F]/70 px-4 py-2'
      }`}
    >
      {!isOpen && (
        <Image
          src="/assets/images/logos/nas-pixels-small-logo.png"
          alt="NAS"
          width={48}
          height={20}
        />
      )}

      {/* Inline Icon */}
      {isOpen ? (
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="currentColor"
          className="text-white"
        >
          {[6, 12, 18].map(y =>
            [6, 12, 18].map(x => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r="1.5" />
            ))
          )}
        </svg>
      ) : (
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="currentColor"
          className="text-white"
        >
          <rect x="4" y="4" width="7" height="7" rx="1.5" />
          <rect x="13" y="4" width="7" height="7" rx="1.5" />
          <rect x="4" y="13" width="7" height="7" rx="1.5" />
          <rect x="13" y="13" width="7" height="7" rx="1.5" />
        </svg>
      )}
    </button>
  );
}

