import Image from "next/image";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaInstagramSquare, FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import Container from "../layout/Container";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-black pt-20 overflow-hidden">

      {/* Section 1: Gradient Arc Section - Top */}

      <div className="relative h-60 bg-[#70C879]/80 ">
        {/* Arc/Ellipse Design */}
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-[107%] h-72 bg-black rounded-t-[90%]"></div>
      </div>

      {/* Section 2: Rectangle Content Section - Middle */}
      <div className="relative  -mt-16">
        <Container>
          <div className=" pt-4 pb-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-10">

              {/* Newsletter */}
              <div className="md:col-span-2">
                <p className="text-base md:text-xl text-white/80 mb-4 max-w-md">
                  Ready to turn your vision into reality? Join our newsletter for weekly design insights.
                </p>

                <div className="relative max-w-md">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-transparent border-2 border-dashed border-[#70C879] rounded-full pl-5 pr-[130px] py-3 outline-none text-sm text-white placeholder:text-white/40"
                  />

                  <button
                    className="absolute right-4 top-2 bottom-2
             bg-[#70C879] text-black px-6
             rounded-md font-semibold text-sm
             flex items-center justify-center
             hover:opacity-90 transition"
                  >

                    Subscribe
                  </button>
                </div>
              </div>




              <div>
                <h4 className="text-base md:text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-3 text-sm text-white/70">
                  <li>
                    <Link href="/about-us" className="cube-link hover:text-white transition">
                      <span className="cube-text">
                        <span className="front">About</span>
                        <span className="top">About</span>
                      </span>
                    </Link>
                  </li>

                  <li>
                    <Link href="/projects" className="cube-link">
                      <span className="cube-text">
                        <span className="front">Projects</span>
                        <span className="top">Projects</span>
                      </span>
                    </Link>
                  </li>

                  <li>
                    <Link href="/faq" className="cube-link">
                      <span className="cube-text">
                        <span className="front">FAQ</span>
                        <span className="top">FAQ</span>
                      </span>
                    </Link>
                  </li>

                  <li>
                    <Link href="/privacy-policy" className="cube-link">
                      <span className="cube-text">
                        <span className="front">Privacy & Policy</span>
                        <span className="top">Privacy & Policy</span>
                      </span>
                    </Link>
                  </li>

                  <li>
                    <Link href="/blog" className="cube-link">
                      <span className="cube-text">
                        <span className="front">Blog</span>
                        <span className="top">Blog</span>
                      </span>
                    </Link>
                  </li>

                  <li>
                    <Link href="/contact" className="cube-link">
                      <span className="cube-text">
                        <span className="front">Contact</span>
                        <span className="top">Contact</span>
                      </span>
                    </Link>
                  </li>

                </ul>
              </div>


              {/* Contact */}
              <div>
                <h4 className="text-base md:text-lg font-semibold mb-4">Contact Us</h4>
                <ul className="space-y-4 text-sm text-white/70">
                  <li className="flex gap-3 items-center">
                    <span className="w-8 h-8 rounded-full bg-[#70C879] flex items-center justify-center text-[#231F20]">
                      <FaPhoneAlt size={14} />
                    </span>
                    +1 222 333 9999
                  </li>

                  <li className="flex gap-3 items-center">
                    <span className="w-8 h-8 rounded-full bg-[#70C879] flex items-center justify-center text-[#231F20]">
                      <FaEnvelope size={14} />
                    </span>
                    info@naspixels.com
                  </li>

                  <li className="flex gap-3 items-center">
                    <span className="w-8 h-8 rounded-full bg-[#70C879] flex items-center justify-center text-[#231F20]">
                      <FaMapMarkerAlt size={14} />
                    </span>
                    Gurugram Floor...
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
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#16572D] hover:bg-[#70C879] transition flex items-center justify-center text-white"
              >
                <FaLinkedinIn size={20} />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com"
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
      </div>

      {/* Section 3: Copyright Section - Bottom */}
      <div className="border-t border-white/10">
        <Container>
          <p className="text-xs text-white/50 text-center py-6">
            © 2025 Nas Pixels. Published by Next Media Group. All Rights Reserved.
          </p>
        </Container>
      </div>

      {/* Circuit Lines */}
      <div className=" hidden md:block absolute right-0 bottom-[15%] opacity-70 pointer-events-none">
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