import React from 'react'
import { useEffect, useRef, useState } from "react";
import Container from '@/components/common/layout/Container';
import { PRIVACY_POLICY_SECTIONS } from '@/data/PrivacyPolicyData';
import { AnimatedSection } from '@/components/animation/AnimationSection';

const PrivacyPolicySection = () => {
      const [active, setActive] = useState("introduction");
    
      useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((e) => {
              if (e.isIntersecting) setActive(e.target.id);
            });
          },
          { rootMargin: "-35% 0px -55% 0px" }
        );
    
        PRIVACY_POLICY_SECTIONS.forEach(({ id }) => {
          const el = document.getElementById(id);
          if (el) observer.observe(el);
        });
    
        return () => observer.disconnect();
      }, []);
  return (
    <>
    <div className="bg-black text-white">
<Container>

      {/* HERO */}
      {/* <section className="relative py-24 md:py-32 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Terms & Policies
          </h1>
          <p className="mt-5 text-gray-400">
            NAS PIXEL · Last updated: <span className="text-gray-300">[Add Date]</span>
          </p>
        </div>
      </section> */}

      {/* LAYOUT */}
      <section className="max-w-7xl mx-auto  py-16 md:py-24 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-14">

        {/* SIDEBAR */}
        <aside className="lg:sticky lg:top-28 h-fit">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-4">
            <nav className="flex lg:flex-col gap-2 relative">
              {PRIVACY_POLICY_SECTIONS.map((item) => (
                <button
                  key={item.id}
                  onClick={() =>
                    document.getElementById(item.id)
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className={`
                    relative px-4 py-2 text-sm rounded-lg text-left transition-all
                    ${
                      active === item.id
                        ? "bg-[#2FBD61]/90 text-black font-medium"
                        : "text-gray-400 hover:text-white hover:bg-white/10"
                    }
                  `}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* CONTENT */}
        <div className="space-y-20 text-gray-300 leading-relaxed">
          <AnimatedSection id="introduction" title="1. Introduction">
            <p>
              Welcome to <strong className="text-white">NAS PIXEL</strong>.
            </p>
            <p>
            By accessing, browsing, or using this website and our services, you acknowledge that you have 
read, understood, and agree to be bound by these Terms & Policies. If you do not agree, please 
refrain from using our website or services. 
            </p>
            <p>
These Terms & Policies apply to all users, clients, visitors, and partners across the <strong>
   United Arab Emirates (UAE) and GCC countries. </strong> 
            </p>
          </AnimatedSection>

          <AnimatedSection id="about" title="2. About NAS PIXEL">
            <p>
                NAS PIXEL is a creative and digital solutions company offering services including but not limited 
to: 
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Branding & Creative Design</li>
              <li>Digital Marketing & Advertising</li>
              <li>Media Production & Content Creation</li>
              <li>Web Development & IT Solutions</li>
              <li>Motion Graphics & Visual Communication</li>
            </ul>
            <p>
                All services are provided in accordance with professional standards applicable in the UAE and 
GCC region. 

            </p>
          </AnimatedSection>

          <AnimatedSection id="usage" title="3. Use of Website">
            <p>
                By using this website, you agree: 
            </p>

            <ul className="list-disc pl-6 space-y-1">
              <li>Lawful usage only</li>
              <li>No unauthorized access</li>
              <li>No malicious content</li>
            </ul>
            <p>
                Any misuse may result in restricted access and legal action under applicable UAE cyber laws. 
            </p>

          </AnimatedSection>

          <AnimatedSection id="ip" title="4. Intellectual Property Rights">
            <p>
             All materials on this website, including but not limited to: 
            </p>
                   <ul className="list-disc pl-6 space-y-1">
              <li>Text, graphics, images, videos </li>
              <li> Logos, branding, designs </li>
              <li>Source code, layouts, and media assets </li>
            </ul>
            <p>
                are the exclusive intellectual property of NAS PIXEL, unless otherwise stated. 
            </p>
            <p>
                Unauthorized reproduction, distribution, or commercial use is strictly prohibited under UAE and 
GCC intellectual property laws. 
            </p>
          </AnimatedSection>

          <AnimatedSection id="engagements" title="5. Client Engagements & Deliverables">
            <ul className="list-disc pl-6 space-y-1">
              <li>All project details, pricing, timelines, and deliverables shall be mutually agreed in writing 
prior to project initiation. </li>
              <li>Ownership of final deliverables shall be transferred to the client<strong>
                only upon full and final 
payment</strong> , unless otherwise agreed.</li>
              <li>NAS PIXEL reserves the right to display completed projects for portfolio, marketing, and 
promotional purposes unless a non-disclosure agreement (NDA) is in place. </li>
            </ul>
          </AnimatedSection>

          <AnimatedSection id="payments" title="6. Payments, Invoicing & Refunds">
            <ul className="list-disc pl-6 space-y-1">
              <li>All invoices must be settled within the agreed payment terms. </li>
              <li>Advance payments are <strong>non-refundable </strong> once the project has commenced. </li>
              |<li>Refunds, if any, shall be considered solely at the discretion of NAS PIXEL based on 
project progress and contractual terms.</li>
<li>Delayed payments may result in project suspension or service termination.</li>
            </ul>
          </AnimatedSection>

          <AnimatedSection id="confidentiality" title="7. Confidentiality">
            <p>
             NAS PIXEL respects client confidentiality and agrees to safeguard all sensitive business 
information shared during the course of the project, except where disclosure is required by law 
or authorized by the client.
            </p>
          </AnimatedSection>

          <AnimatedSection id="liability" title="8. Limitation of Liability">
            <p>
              To the maximum extent permitted under UAE law:
            </p>
                 <ul className="list-disc pl-6 space-y-1">
              <li>NAS PIXEL shall not be liable for indirect, incidental, or consequential damages  </li>
              <li>NAS PIXEL is not responsible for losses arising from third-party platforms, hosting 
services, or external vendors  </li>
              <li>Services are provided on an “as-is” and “as-available” basis  </li>

            </ul>
          </AnimatedSection>

          <AnimatedSection id="thirdparty" title="9. Third-Party Services & Links">
            <p>
This website may include links or integrations with third-party platforms. NAS PIXEL does not 
control and is not responsible for their content, policies, or services. Users are advised to review 
third-party terms independently. 
            </p>
          </AnimatedSection>

     <AnimatedSection id="privacy" title="10. Privacy Policy">
  <h4 className="text-white font-semibold">
    10.1 Information Collection
  </h4>

  <p>
    NAS PIXEL may collect personal and business information including:
  </p>

  <ul className="list-disc pl-6 space-y-1">
    <li>Name, contact details</li>
    <li>Company information</li>
    <li>Project requirements</li>
  </ul>

  <p>
    Data is collected in compliance with the UAE Personal Data Protection
    Law (PDPL) and relevant GCC data protection regulations.
  </p>

  <h4 className="text-white font-semibold mt-6">
    10.2 Use of Information
  </h4>

  <p>
    Collected data is used strictly for:
  </p>

  <ul className="list-disc pl-6 space-y-1">
    <li>Client communication and service delivery</li>
    <li>Project execution and support</li>
    <li>Legal, administrative, and billing purposes</li>
  </ul>

  <p className="mt-4">
    NAS PIXEL does not sell or rent personal data to third parties.
  </p>
   <h4 className="text-white font-semibold mt-6">
    10.3 Data Security 
  </h4>

  <p>
  Reasonable administrative and technical measures are implemented to protect user data. 
However, absolute security of digital data transmission cannot be guaranteed.
  </p>
</AnimatedSection>


          <AnimatedSection id="cookies" title="11. Cookies Policy">
            <p>
             This website uses cookies to enhance user experience, analytics, and website performance. By 
continuing to use our website, you consent to the use of cookies in accordance with UAE 
regulations. 
            </p>
          </AnimatedSection>

          <AnimatedSection id="amendments" title="12. Amendments">
            <p>
             NAS PIXEL reserves the right to modify these Terms & Policies at any time. Updated terms will 
be effective immediately upon publication on the website.
            </p>
          </AnimatedSection>

          <AnimatedSection id="law" title="13. Governing Law & Jurisdiction">
            <p>
             These Terms & Policies shall be governed by and construed in accordance with the laws of the 
<strong>United Arab Emirates.</strong> 
            </p>
            <p>

Any disputes shall be subject to the exclusive jurisdiction of the competent courts of the UAE.
            </p>
          </AnimatedSection>

          <AnimatedSection id="contact" title="14. Contact Details">
            <p className="text-white font-medium">For any inquiries regarding these Terms & Policies, please contact:</p>
          </AnimatedSection>
        </div>
      </section>
      
</Container>

    </div>
    </>
  )
}

export default PrivacyPolicySection
