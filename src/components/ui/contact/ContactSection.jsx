"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import SectionTitle from "@/components/common/Headers/SectionTitle";
import Container from "@/components/common/Layout/Container";
import { ModernButton } from "@/components/common/button/ModernButton";
import { Input } from "@/components/common/Input/Input";

export default function ContactSection() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const videoRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    product: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  /* ------------------ Animations ------------------ */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.currentTime = 0;
          video.play().catch(() => { });
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(leftRef.current, {
        opacity: 0,
        x: -60,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(rightRef.current, {
        opacity: 0,
        x: 60,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* ------------------ Handlers ------------------ */
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "", // clear only this field’s error
    }));
  };


  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{8,15}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid phone number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email address";
    }

    // if (!formData.product) {
    //   newErrors.product = "Please select a product";
    // }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSendWhatsApp = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const { name, phone, email, company, product, message } = formData;

    const whatsappMessage = `NEW INQUIRY FROM  WEBSITE

Name: ${name}
Phone: ${phone}
Email: ${email}
Company & Location: ${company || "N/A"}
Message: ${message}
------------------------
Sent from Website Contact Form`;


    const whatsappURL = `https://wa.me/971567792681?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");

    // Clear form after sending
    setFormData({
      name: "",
      phone: "",
      email: "",
      company: "",
      product: "",
      message: "",
    });

    setErrors({});
  };


  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full bg-black text-white py-20 overflow-hidden"
    >
      <Container>
        <div className="max-w-7xl mx-auto mb-14">
          <SectionTitle title="Contact Us" />
          <p className="mt-4 max-w-xl text-gray-400">
            Have questions or need help choosing the right display solution? Fill out the form and our team will get back to you shortly.          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Left */}
          <div ref={leftRef} className="flex justify-center lg:justify-start">
            <div className="relative w-[300px] h-[260px] md:w-[500px] md:h-[410px] rounded-2xl overflow-hidden">
              <video
                ref={videoRef}
                src="/assets/videos/Contact.mp4"
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Right */}
          <div ref={rightRef}>
            <form
              onSubmit={handleSendWhatsApp}
              className="w-full max-w-xl space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Input
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <Input
                    label="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div>
                <Input
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              <Input
                label="Company name & Location"
                name="company"
                value={formData.company}
                onChange={handleChange}
              />

              {/* <div>
                <label className="block mb-2 text-sm">Select Your Product</label>
                <select
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  className="w-full bg-transparent neon-dotted rounded-xl px-4 py-3 text-sm focus:outline-none"
                >
                  <option value="">Select product</option>
                  <option value="Product 1">Product 1</option>
                  <option value="Product 2">Product 2</option>
                </select>
                {errors.product && (
                  <p className="text-red-400 text-xs mt-1">{errors.product}</p>
                )}
              </div> */}

              <div>
                <label className="block mb-2 text-sm">Text your message</label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-transparent neon-dotted rounded-xl px-4 py-3 text-sm resize-none focus:outline-none"
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              <div className="mt-8 flex justify-center">
                <ModernButton text="Send via WhatsApp" arrowClr="#ffffff" />
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
