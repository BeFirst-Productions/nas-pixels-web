import { NAV_ITEMS } from "@/data/nav";
import Container from "../Container";
import { NavLink } from "./NavLink";



export function MobileDropdown({ onClose }) {
  return (
    <div className="md:hidden bg-[#21222F]/95 backdrop-blur-xl border-t border-[#70C879]/20">
      <Container>
        <div className="py-6 space-y-3">
          {NAV_ITEMS.map(item => (
            <NavLink key={item} label={item} onClick={onClose} mobile />
          ))}
        </div>
      </Container>
    </div>
  );
}