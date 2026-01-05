"use client";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
    className={`fixed bottom-14 right-6 z-50 
  w-14 h-14 
  flex items-center justify-center 
  rounded-full 
  bg-black 
  text-white 
  text-xl 
  border-dashed
  border-2 border-[#70C879]
  shadow-lg 
  transition-all duration-300 
  hover:scale-110 hover:bg-gray-900
  ${
    visible
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-10 pointer-events-none"
  }`}

    >
      ↑
    </button>
  );
}
