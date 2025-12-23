export function NavLink({ label, onClick, mobile }) {
  return (
    <a
      href={`#${label.toLowerCase().replace(' ', '-')}`}
      onClick={e => {
        e.preventDefault();
        onClick?.();
        document
          .querySelector(`#${label.toLowerCase().replace(' ', '-')}`)
          ?.scrollIntoView({ behavior: 'smooth' });
      }}
      className={`uppercase tracking-wide transition-colors ${
        mobile
          ? 'block px-4 py-3 text-xs text-white/90 hover:text-[#70C879]'
          : 'text-[11px] text-white hover:text-[#70C879]'
      }`}
    >
      {label}
    </a>
  );
}
