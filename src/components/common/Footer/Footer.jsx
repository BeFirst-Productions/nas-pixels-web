"use client";
import Image from "next/image";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaInstagramSquare, FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import Container from "../layout/Container";
import Link from "next/link";
import Aurora from "@/components/animation/Aurora";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="relative  pt-20 overflow-hidden">

      {/* Section 1: Gradient Arc Section - Top */}

      <div className="relative h-40 overflow-hidden pointer-events-none">

        {/* Aurora glow */}
        <div className="absolute inset-0 z-0">
          <Aurora
            colorStops={["#70C879", "#7CFF67", "#70C879"]}
            amplitude={1.4}
            blend={0.6}
            speed={1.0}
          />
        </div>

        {/* Black arc mask */}
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 
   w-[107%] h-40 bg-black rounded-t-[90%] z-10" />
      </div>


      {/* Section 2: Rectangle Content Section - Middle */}
      <div className="relative  -mt-4">
        <Container>
          <div className=" pt-4 pb-8">
            <div className="flex flex-col md:flex-row gap-12">

              {/* Newsletter */}
              <div className="w-full md:w-1/2">
                <p className="text-base md:text-xl text-white/80 mb-4 max-w-md">
                  {t("footer.newsletterTitle", "Ready to turn your vision into reality? Join our newsletter for weekly design insights.")}
                </p>

                <div className="relative max-w-md">
                  <input
                    type="email"
                    placeholder={t("footer.newsletterPlaceholder", "Email Address")}
                    className="w-full bg-transparent border-2 border-dashed border-[#70C879] rounded-full pl-5 pr-[130px] py-3 outline-none text-sm text-white placeholder:text-white/40"
                  />

                  <button
                    className="absolute right-4 top-2 bottom-2
          bg-[#70C879] text-black px-6
          rounded-md font-semibold text-sm
          flex items-center justify-center
          hover:opacity-90 transition"
                  >
                    {t("footer.subscribe", "Subscribe")}
                  </button>
                </div>
              </div>

              {/* Quick Links */}
              <div className="w-full md:w-1/4">
                <h4 className="text-base md:text-lg font-semibold mb-4">{t("footer.quickLinks", "Quick Links")}</h4>
                <ul className="space-y-3 text-sm text-white/70">
                  <li>
                    <Link href="/about-us" className="cube-link hover:text-white transition">
                      <span className="cube-text">
                        <span className="front">{t("footer.links.about", "About")}</span>
                        <span className="top">{t("footer.links.about", "About")}</span>
                      </span>
                    </Link>
                  </li>

                  <li>
                    <Link href="/projects" className="cube-link">
                      <span className="cube-text">
                        <span className="front">{t("footer.links.projects", "Projects")}</span>
                        <span className="top">{t("footer.links.projects", "Projects")}</span>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/products" className="cube-link">
                      <span className="cube-text">
                        <span className="front">{t("footer.links.products", "Products")}</span>
                        <span className="top">{t("footer.links.products", "Products")}</span>
                      </span>
                    </Link>
                  </li>

                  <li>
                    <Link href="/#faq" className="cube-link">
                      <span className="cube-text">
                        <span className="front">{t("footer.links.faq", "FAQ")}</span>
                        <span className="top">{t("footer.links.faq", "FAQ")}</span>
                      </span>
                    </Link>
                  </li>

                  <li>
                    <Link href="/privacy-policy" className="cube-link">
                      <span className="cube-text">
                        <span className="front">{t("footer.links.privacy", "Privacy & Policy")}</span>
                        <span className="top">{t("footer.links.privacy", "Privacy & Policy")}</span>
                      </span>
                    </Link>
                  </li>

                  <li>
                    <Link href="/blogs" className="cube-link">
                      <span className="cube-text">
                        <span className="front">{t("footer.links.blog", "Blog")}</span>
                        <span className="top">{t("footer.links.blog", "Blog")}</span>
                      </span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/#contact"
                      className="cube-link"
                      onClick={(e) => {
                        const currentPath = window.location.pathname;
                        const pagesWithContact = ['/', '/about-us', '/solutions', '/products', '/projects', '/blogs'];

                        // normalize path by removing trailing slash if present (except root)
                        const normalizedPath = currentPath === '/' ? '/' : currentPath.replace(/\/$/, '');

                        if (pagesWithContact.includes(normalizedPath)) {
                          e.preventDefault();
                          const contactSection = document.getElementById('contact');
                          if (contactSection) {
                            contactSection.scrollIntoView({ behavior: 'smooth' });
                          }
                        }
                      }}
                    >
                      <span className="cube-text">
                        <span className="front">{t("footer.links.contact", "Contact")}</span>
                        <span className="top">{t("footer.links.contact", "Contact")}</span>
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div className="w-full md:w-1/4">
                <h4 className="text-base md:text-lg font-semibold mb-4">{t("footer.contactUs", "Contact Us")}</h4>
                <ul className="space-y-4 text-sm text-white/70">

                  <li className="flex gap-3 items-center">
                    <span className="w-8 h-8 rounded-full bg-[#70C879] flex items-center justify-center text-[#231F20]">
                      <FaPhoneAlt size={14} />
                    </span>
                    <div className="flex flex-col">
                      <a href="tel:+971567792681" className="hover:underline">
                        +971 56 779 2681
                      </a>
                      <a href="tel:+971523209987" className="hover:underline">
                        +971 52 320 9987
                      </a>
                    </div>
                  </li>

                  <li className="flex gap-3 items-center">
                    <span className="w-8 h-8 rounded-full bg-[#70C879] flex items-center justify-center text-[#231F20]">
                      <FaEnvelope size={14} />
                    </span>
                    <div className="flex flex-col">
                      <a href="mailto:admin@naspixels.com" className="hover:underline">
                        admin@naspixels.com
                      </a>
                      <a href="mailto:nizam@naspixels.com" className="hover:underline">
                        nizam@naspixels.com
                      </a>
                    </div>
                  </li>

                  <li className="flex gap-3 items-center">
                    <span className="w-8 h-8 rounded-full bg-[#70C879] flex items-center justify-center text-[#231F20]">
                      <FaMapMarkerAlt size={14} />
                    </span>
                    ARZOO BUILDING, 101 - Al Nahda St - <br /> Al Twar 5 - Dubai
                  </li>

                </ul>
              </div>

            </div>


            {/* Bottom Row */}
            <div className="flex flex-col md:flex-row items-center justify-between mt-6 gap-6">
              {/* Logo */}
              <div className="flex items-center gap-3 mb-2">
                <div>
                  <Image src="/assets/images/logos/logo.png" alt="logo" width={150} height={60} />
                </div>
              </div>
              {/* Socials will be placed below */}
            </div>

            <div className="w-full h-3 border-dashed border-t-2 border-[#70C879]"></div>

            <div className="flex justify-center pt-4 gap-4">
              {/* Facebook */}
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#16572D] hover:bg-[#70C879] transition flex items-center justify-center text-white"
              >
                <FaFacebookF size={20} />
              </a>

              {/* LinkedIn */}
              <a
                href="
https://www.linkedin.com/company/nas-pixels-technologies/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#16572D] hover:bg-[#70C879] transition flex items-center justify-center text-white"
              >
                <FaLinkedinIn size={20} />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/nas_pixels_?igsh=MXFpenVhcGY2czRtZQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#16572D] hover:bg-[#70C879] transition flex items-center justify-center text-white"
              >
                <FaInstagram size={20} />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/12223339999"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#16572D] hover:bg-[#70C879] transition flex items-center justify-center text-white"
              >
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>
        </Container>
        <div className="border-t border-white/10">
          <p className="text-xs text-white/50 text-center py-6">
            © 2026 Nas Pixels. Published by{" "}
            <a
              href="https://nextmedia.ae/"
              target="_blank"
              rel="noopener noreferrer"
              className="  hover:text-[#70C879] text-[#70C879]/60   transition"
            >
              Next Media
            </a>
            . All Rights Reserved.
          </p>
        </div>

      </div>

      {/* Section 3: Copyright Section - Bottom */}


      {/* Circuit Lines */}
      <div className=" hidden md:block absolute right-0 bottom-[13%] opacity-70 pointer-events-none">
        <Image
          src="/assets/images/footer/footerCircuit.png"
          alt="Circuit decoration"
          width={360}
          height={180}
          className="object-contain"
          priority={false}
        />
      </div>

    </footer>
  );
}