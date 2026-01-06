"use client";

import { useState } from "react";
import Container from "@/components/common/layout/Container";

export default function ProductDetails({product}) {
  
  // const images = product.images

  // const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <section className="  py-16">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* LEFT — IMAGE GALLERY */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#06140b] border border-green-500/40 rounded-xl p-4">
              {/* <img
                src={activeImage}
                className="w-full h-[420px] object-cover rounded-lg transition-all duration-300"
              /> */}
            </div>

            {/* <div className="grid grid-cols-4 gap-3">
              {images.map((img) => (
                <img
                  key={img}
                  src={img}
                  onClick={() => setActiveImage(img)}
                  className={`h-24 w-full object-cover rounded-lg cursor-pointer border
                    ${
                      activeImage === img
                        ? "border-green-400 ring-2 ring-green-400"
                        : "border-green-500/40 hover:border-green-400"
                    }`}
                />
              ))}
            </div> */}
          </div>

          {/* CENTER — PRODUCT DETAILS */}
          <div className="lg:col-span-5 space-y-6">

            <h1 className="text-3xl font-bold ">
             {product.title}
            </h1>

            <p className="">
                          {product.shortDescription}

            </p>

          <div className="border border-green-500/30 rounded-lg p-5 space-y-3">
  <p>
    <span className="text-green-400">Panel Technology:</span>{" "}
    {product.specs["Panel Technology"]}
  </p>

  <p>
    <span className="text-green-400">Resolution:</span>{" "}
    {product.specs["Resolution"]}
  </p>

  <p>
    <span className="text-green-400">Brightness:</span>{" "}
    {product.specs["Brightness"]}
  </p>

  <p>
    <span className="text-green-400">Bezel:</span>{" "}
    {product.specs["Bezel"]}
  </p>

  <p>
    <span className="text-green-400">Operating:</span>{" "}
    {product.specs["Operating"]}
  </p>

  <p>
    <span className="text-green-400">Use Cases:</span>{" "}
    {product.specs["Use Cases"]}
  </p>
</div>


            <div className="space-y-2 text-green-200/80">
             { product?.features?.map((feature)=>{
              return <p>✔ {feature}</p>

             })
 }
              
            </div>

          </div>

          {/* RIGHT — ACTION PANEL */}
          {/* <div className="lg:col-span-2">
            <div className="bg-[#06140b] border border-green-500/40 rounded-xl p-6 space-y-5 sticky top-24">

              <p className="text-green-300 text-sm">
                Professional Display Solution
              </p>

              <button className="w-full bg-green-500 hover:bg-green-400 text-black py-3 rounded-lg font-semibold">
                Request Quotation
              </button>

              <button className="w-full border border-green-500 text-green-400 py-3 rounded-lg hover:bg-green-500/10">
                Download Datasheet
              </button>

              <button className="w-full border border-green-500/40 text-green-300 py-3 rounded-lg hover:bg-green-500/10">
                Talk to a Display Expert
              </button>

              <div className="text-xs text-green-200/70 pt-3">
                ✔ Installation support  
                ✔ Custom wall sizing  
                ✔ 24/7 technical assistance  
                ✔ On-site calibration  
              </div>

            </div>
          </div> */}

        </div>

        {/* FULL DESCRIPTION */}
        <div className="mt-24 max-w-5xl">
          <h2 className="text-2xl font-bold  mb-4">
            Enterprise-Grade Big Screen Technology
          </h2>
          <p className=" leading-relaxed">
            Our Big Screen Display Systems are engineered for environments where
            visual clarity, reliability, and scale are critical. From security
            control rooms to broadcast studios and immersive digital signage,
            these displays deliver exceptional brightness, contrast, and
            uninterrupted operation.
          </p>
        </div>

      </Container>
    </section>
  );
}
