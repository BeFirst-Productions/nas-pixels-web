import Link from "next/link"

export function NavLink({ label, onClick, mobile }) {
  return (
    <Link
      href={label.href}
      onClick={onClick}
      className={`uppercase tracking-wide transition-colors ${mobile
          ? "block px-4 py-3 text-xs text-white/90 hover:text-[#70C879]"
          : "text-[11px] text-white hover:text-[#70C879]"
        }`}
    >
      {label.label}
    </Link>
  )
}
