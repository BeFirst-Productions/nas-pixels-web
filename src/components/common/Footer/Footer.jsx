import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      
      {/* Curved Gradient Top */}
      {/* <div className="absolute top-0 left-0 w-full h-[260px] bg-gradient-to-b from-[#6dbb7a] to-transparent opacity-60 rounded-b-[100%] blur-[40px]" /> */}

      <div className="relative max-w-[1400px] mx-auto px-6 pt-32 pb-10">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12  pb-10">

          {/* Newsletter */}
          <div className="md:col-span-2">
            <p className="text-sm text-white/80 mb-4 max-w-md">
              Ready to turn your vision into reality? Join our newsletter for weekly design insights.
            </p>

            <div className="flex max-w-md border-2 border-dashed border-[#70C879] rounded-full overflow-hidden">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-transparent px-5 py-3 flex-1 outline-none text-sm text-white placeholder:text-white/40"
              />
              
              <button className="bg-[#70C879]  rounded-lg  text-black px-6 font-semibold text-sm">
                Subscribe
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>About</li>
              <li>FAQ</li>
              <li>Privacy & Policy</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex gap-3 items-center">
                <span className="w-8 h-8 rounded-full bg-[#70C879]/20 flex items-center justify-center text-[#70C879]">📞</span>
                +1 222 333 9999
              </li>
              <li className="flex gap-3 items-center">
                <span className="w-8 h-8 rounded-full bg-[#70C879]/20 flex items-center justify-center text-[#70C879]">✉️</span>
                info@naspixels.com
              </li>
              <li className="flex gap-3 items-center">
                <span className="w-8 h-8 rounded-full bg-[#70C879]/20 flex items-center justify-center text-[#70C879]">📍</span>
                Gurugram Floor...
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row  items-center justify-between mt-6 gap-6">

          {/* Logo */}
          <div className="flex  items-center gap-3">
            <div >
                <Image src="/assets/images/logos/logo.png" alt="logo" width={100} height={60} />
            
            </div>
          </div>

          {/* Socials */}
          {/* <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-[#70C879]/20 hover:bg-[#70C879] transition" />
            <div className="w-8 h-8 rounded-full bg-[#70C879]/20 hover:bg-[#70C879] transition" />
            <div className="w-8 h-8 rounded-full bg-[#70C879]/20 hover:bg-[#70C879] transition" />
          </div> */}

        </div>
      <div className="w-full h-3 border-dashed border-t-2 border-[#70C879]"></div>

        {/* Copyright */}
        <p className="text-xs text-white/50 text-center mt-6">
          © 2025 Nas Pixels. Published by Next Media Group. All Rights Reserved.
        </p>

      </div>

      {/* Circuit Lines */}
 <div className="absolute right-0 bottom-0 opacity-70 pointer-events-none">
  <Image
    src="/assets/images/footer/footerCircuit.png"   // replace with your image path
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
