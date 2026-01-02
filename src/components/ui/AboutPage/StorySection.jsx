"use client";
import Image from "next/image";

export default function StorySection() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#050B0A]">

      {/* Soft background glow */}
      <div id="our-story" className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[#70C879]/10 blur-[140px] rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Small label */}
        <div className="flex justify-center mb-6">
          <div className="px-5 py-2 border border-[#70C879]/30 rounded-full text-xs tracking-widest uppercase text-[#70C879]">
            Our Story
          </div>
        </div>

        {/* Headline */}
        <h2 className="text-center font-semibold text-4xl md:text-5xl font-light text-white leading-tight mb-14">
          Built in Dubai.<br />
          <span className="text-[#70C879] font-semibold">Driven by Digital Innovation</span>
        </h2>

        {/* Story Card */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-br from-[#70C879]/25 to-transparent blur-2xl rounded-3xl" />

          <div className="relative bg-[#0B1512] border border-[#70C879]/20 rounded-3xl p-10 md:p-14 backdrop-blur">

            <div className="space-y-8 text-white/75 leading-relaxed text-lg">

              <p>
                Founded in Dubai, our company was built on a shared dream to
                drive digital innovation across the Middle East. Our leadership
                team combines over a decade of experience in the digital
                innovation market, deep technical expertise in digital
                technologies, and strong business management capabilities.
                This balance allows us to deliver reliable, forward-thinking
                solutions with a clear understanding of both technology and
                business needs.
              </p>

              <p>
                In our early phase, we successfully delivered more than 500 sqm
                of digital LED screens within just six months, reinforcing our
                capability and commitment. Today, we specialize in both
                permanent and rental LED screen solutions, serving well-known
                clients across the UAE, Saudi Arabia, Kuwait, Bahrain, Qatar,
                and Oman.
              </p>

              <p>
                Our goal is to expand throughout the region while maintaining
                complete client satisfaction. We believe in continuous support
                before and after every sale, building long-term partnerships
                based on trust. We value our employees and coworkers, fostering
                a friendly and collaborative culture that reflects in the
                quality of our work. With strong relationships and unwavering
                dedication, we are here to stay — growing together with our
                clients and our team.
              </p>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
