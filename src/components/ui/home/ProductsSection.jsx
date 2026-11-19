"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import SectionTitle from "@/components/common/Headers/SectionTitle";
import Container from "@/components/common/layout/Container";
import { ModernButton } from "@/components/common/button/ModernButton";
import { useRouter } from "next/navigation";
import PillerAnimation from "@/components/animation/PillerAnimation";
import gsap from "gsap";

const ROW_HEIGHT = 120;
import { Zen_Antique_Soft } from "next/font/google";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const zenAntiqueSoft = Zen_Antique_Soft({
  subsets: ["latin"],
  weight: "400",
});

const products = [
  {
    key: "01",
    title: "Digital Signage Solutions",
    image: "/assets/images/home-products/Digital Signage Solutions.jpg",
    row: 0,
    side: "left",
    category: "Commercial LED",
    subCategories: [
      "Indoor & Outdoor LED Screens",
      "Video Walls (Fine Pitch, COB, LCD)",
      "Interactive Digital Kiosks & Touch Displays",
      "Transparent & Flexible LED Displays",
      "Drive-Thru / QSR Menu Boards",
      "Centralized Content Management & Scheduling",
    ],
    description:
      "We deliver advanced digital signage systems that transform communication and customer engagement.",
    pixelPitch: ["P3", "P4", "P5", "P6", "P8", "P10"],
    cabinet: " Customized, 960mm x 960mm",
    brightness: "4500-10000 Nits",
  },

  {
    key: "05",
    title: "Static Signage & Wayfinding",
    image: "/assets/images/home-products/Static Signage & Wayfinding.jpg",
    row: 0,
    side: "right",
    category: "Signage",
    subCategories: [
      "Architectural & Branding Signage",
      "Illuminated & Non-Illuminated Solutions",
      "Wayfinding & Directional Signage Systems",
      "Safety & Compliance Signage",
      "Environmental & Decorative Graphics",
    ],
    description:
      "We design and implement effective static signage and wayfinding systems to guide, inform, and inspire.",
    pixelPitch: ["LCD", "4K", "FHD"],
    cabinet: "Various sizes",
    brightness: "700 – 2500 nits",
  },

  {
    key: "02",
    title: "Audio-Visual System Integration",
    image: "/assets/images/home-products/Audio-Visual System Integration.jpg",
    row: 1,
    side: "left",
    category: "Sports Display",
    subCategories: [
      "Professional Audio & Public Address Systems",
      "Video Conferencing & Collaboration Solutions",
      "Projection & Interactive Display Systems",
      "Control Rooms & Command Centers",
      "IPTV & Broadcast Solutions",
      "Structured Cabling & Networking",
    ],
    description:
      "From boardrooms to large venues, we integrate cutting-edge AV solutions that enhance communication and experiences.",
    pixelPitch: ["P6", "P8", "P10"],
    cabinet: "960 x 960mm",
    brightness: "6000 – 10000 nits",
  },

  {
    key: "06",
    title: "Content Creation & Management",
    image: "/assets/images/home-products/Content Creation & Management.jpg",
    row: 1,
    side: "right",
    category: "Interactive",
    subCategories: [
      "Motion Graphics & Animations (2D/3D)",
      "Digital Menu Design & Management",
      "Interactive & Experiential Content Development",
      "Dynamic Scheduling & Cloud-Based Updates",
      "Branding & Creative Consultation",
    ],
    description:
      "We offer creative and technical expertise to keep your screens dynamic and engaging.",
    pixelPitch: ["4K UHD"],
    cabinet: "55\" – 86\"",
    brightness: "400 – 600 nits",
  },

  {
    key: "03",
    title: "Maintenance & Support",
    image: "/assets/images/home-products/Maintenance & Support.jpg",
    row: 2,
    side: "left",
    category: "Rental",
    subCategories: [
      "Annual Maintenance Contracts (AMC)",
      "Preventive & Corrective Maintenance",
      "Remote Monitoring & Support",
      "Spare Parts & Replacement Services",
      "On-Site Technical Training",
    ],
    description:
      "Our dedicated support ensures your systems run seamlessly with minimal downtime.",
    pixelPitch: ["P2.9", "P3.9", "P4.8"],
    cabinet: "500 × 500 mm",
    brightness: "4500 – 6000 nits",
  },

  {
    key: "07",
    title: "Lighting Solutions",
    image: "/assets/images/home-products/Stage & Event Lighting Systems.jpg",
    row: 2,
    side: "right",
    category: "Ultra HD",
    subCategories: [
      "Architectural & Decorative Lighting",
      "Facade & Outdoor LED Illumination",
      "Stage & Event Lighting Systems",
      "Smart Lighting Controls (DALI, DMX, KNX)",
      "Energy-Efficient LED Solutions",
    ],
    description:
      "We provide innovative lighting designs that enhance aesthetics and functionality.",
    pixelPitch: ["P0.9", "P1.2", "P1.5"],
    cabinet: "600 × 337.5 mm",
    brightness: "600 – 1000 nits",
  },

  {
    key: "04",
    title: "Home Cinema & Smart Home Automation",
    image: "/assets/images/home-products/Home Cinema & Smart Home Automation.jpg",
    row: 3,
    side: "left",
    category: "Architectural",
    subCategories: [
      "Dedicated Home Cinema & Theater Rooms",
      "Multiroom Audio & Video Distribution",
      "Smart Home Automation (Lighting, Curtains, HVAC, Security)",
      "Voice Control Integration (Alexa, Google, Siri)",
      "Security & Surveillance Systems",
      "Networking & Wi-Fi Optimization",
    ],
    description:
      "We bring technology and lifestyle together with personalized smart home solutions.",
    pixelPitch: ["P3.9", "P6"],
    cabinet: "1000 × 500 mm",
    brightness: "3000 – 5000 nits",
  },

  {
    key: "08",
    title: "Consultation & Project Management",
    image: "/assets/images/home-products/Consultation & Project Management.jpg",
    row: 3,
    side: "right",
    category: "Control Systems",
    subCategories: [
      "Site Surveys & Feasibility Studies",
      "End-to-End Project Management",
      "Digital Transformation & Signage Strategy",
      "Custom Solutions for Corporate, Retail, Hospitality, Healthcare, Education & Government",
    ],
    description:
      "We work with clients at every stage, from concept to completion.",
    pixelPitch: ["P1.2", "P1.5", "P1.8"],
    cabinet: "600 × 337.5 mm",
    brightness: "600 – 1200 nits",
  },
];



export default function ProductsSection() {
  const { t } = useLanguage();
  const router = useRouter();
  const [activeKey, setActiveKey] = useState(products[0].key);

  const getProductItem = (p) => {
    if (!p) return null;
    const title = t(`products.${p.key}.title`, p.title);
    const description = t(`products.${p.key}.description`, p.description);
    const bullets = t(`products.${p.key}.bullets`, p.subCategories);
    return {
      ...p,
      title,
      description,
      subCategories: Array.isArray(bullets) && bullets.length > 0 ? bullets : p.subCategories,
    };
  };

  const rawActive = products.find((p) => p.key === activeKey) || products[0];
  const active = getProductItem(rawActive);

  const rows = [...new Set(products.map((p) => p.row))];
  const flipRef = useRef(null);

  return (
    <section className="relative bg-black  py-10 md:pt-8 overflow-visible md:overflow-hidden min-h-screen">

      <PillerAnimation />
      <Container>
        <div className="flex justify-center pb-8">
          <SectionTitle ref={flipRef} title={t("home.productsTitle", "Our Products")} />
        </div>

        <div className="max-w-7xl mx-auto">

          {/* DESKTOP VIEW */}
          <div className="hidden md:grid grid-cols-[1fr_280px_1fr] gap-12 items-start">
            {/* LEFT */}
            <div className="space-y-[120px] pt-2">
              {rows.map((row) => (
                <Row
                  key={row}
                  row={row}
                  side="left"
                  activeKey={activeKey}
                  setActiveKey={setActiveKey}
                  getProductItem={getProductItem}
                />
              ))}
            </div>

            {/* CENTER IMAGE */}
            <div className="relative flex flex-col items-center">
              <CenterImage active={active} />
            </div>

            {/* RIGHT */}
            <div className="space-y-[120px] pt-2 text-right">
              {rows.map((row) => (
                <Row
                  key={row}
                  row={row}
                  side="right"
                  activeKey={activeKey}
                  setActiveKey={setActiveKey}
                  getProductItem={getProductItem}
                />
              ))}
            </div>
          </div>

          {/* MOBILE VIEW (Accordion) */}

          <div className="md:hidden space-y-4 ">
            {products.map((rawP) => {
              const p = getProductItem(rawP);
              const isOpen = activeKey === rawP.key;

              return (
                <div key={rawP.key} className="rounded-lg border border-[#70C879]/20 overflow-hidden">
                  <button
                    onClick={() => setActiveKey(rawP.key)}
                    className={`${zenAntiqueSoft.className} w-full px-4 py-3 text-left transition ${isOpen ? "text-[#70C879]" : "text-white/80"
                      }`}
                  >
                    {p.title}
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] p-4" : "grid-rows-[0fr]"
                      }`}
                  >
                    <div className="overflow-hidden space-y-4">

                      {/* Image */}
                      <div className="relative w-full h-[220px] rounded-lg overflow-hidden ">
                        <Image src={p.image} alt={p.title} fill className="object-cover rounded-2xl" />
                      </div>

                      {/* Description */}
                      <p className="text-sm text-white/80">{p.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {p.subCategories.slice(0, 3).map((s, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-sm rounded-full border border-[#70C879]/60 bg-[#70C879]/10 text-[#70C879]"
                          >
                            {s}
                          </span>
                        ))}
                      </div>

                      <div>
                        <ModernButton text={t("common.viewMore", "View More")} onClick={() => router.push("/products")} />
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>


        </div>
      </Container>
    </section>
  );
}

/* ---------- Desktop Helpers ---------- */

function CenterImage({ active }) {
  const { t } = useLanguage();
  const router = useRouter();
  const subCatsRef = useRef(null);

  useEffect(() => {
    if (subCatsRef.current) {
      // Kill any running animations to prevent conflict
      gsap.killTweensOf(subCatsRef.current.children);

      gsap.fromTo(
        subCatsRef.current.children,
        {
          x: -30,
          opacity: 0
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "power3.out",
        }
      );
    }
  }, [active]);

  return (
    <div className="w-[380px] flex flex-col">

      {/* IMAGE FIXED AT TOP */}
      <div className="sticky top-24 z-20 ">
        <div className="w-full h-[300px]  overflow-hidden  ">
          <div className="relative w-full h-full overflow-hidden rounded-2xl">
            <Image
              key={active.image}
              src={active.image}
              alt={active.title}
              fill
              className="object-cover p-2 animate-reveal rounded-3xl"
            />
          </div>

        </div>
      </div>

      {/* DETAILS SCROLL BELOW IMAGE */}
      <div className="mt-3 space-y-4 text-sm text-white/80">

        {/* Description */}
        <p className="text-xl">{active.description}</p>
        <div ref={subCatsRef} className="flex flex-wrap gap-x-6 gap-y-2">
          {active.subCategories.slice(0, 3).map((s, i) => (
            <Link
              key={i}
              href="/products"
              className="flex items-center gap-2 text-sm text-[#70C879] font-medium opacity-0"
            >
              {/* Arrow */}
              <span className="text-white">➜</span>

              {/* Text */}
              <span className="hover:text-[#70C879] transition-colors duration-200">
                {s}
              </span>
            </Link>
          ))}
        </div>

        <div className="flex justify-center">
          <ModernButton text={t("common.viewMore", "View More")} onClick={() => router.push("/products")} />
        </div>

      </div>
    </div>
  );
}




function Row({ row, side, activeKey, setActiveKey, getProductItem }) {
  const rawItem = products.find((p) => p.row === row && p.side === side);
  if (!rawItem) return <div className="h-[32px]" />;

  const item = getProductItem(rawItem);
  const isActive = activeKey === rawItem.key;

  return (
    <div
      onMouseEnter={() => setActiveKey(rawItem.key)}
      className={`cursor-pointer transition ${isActive ? "text-[#70C879]" : "text-white/70"
        }`}
    >
      <div className={`flex items-center gap-6 max-w-md ${side === "right" ? "justify-end" : ""}`}>
        <span className={`text-2xl hover:text-[#70C879] ${zenAntiqueSoft.className} `}>{item.title}</span>
      </div>
    </div>
  );
}
