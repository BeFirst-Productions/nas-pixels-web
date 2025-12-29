import Container from "../common/layout/Container";

const products = [
  { title: "Micro LED Displays", image: "/p1.jpg", desc: "Ultra high brightness panels" },
  { title: "OLED Panels", image: "/p2.jpg", desc: "Perfect black level screens" },
  { title: "Curved Displays", image: "/p3.jpg", desc: "Immersive curved panels" },

  { title: "Video Walls", image: "/p4.jpg", desc: "Multi-screen wall systems" },
  { title: "Touch Screens", image: "/p5.jpg", desc: "Interactive touch panels" },
  { title: "Transparent OLED", image: "/p6.jpg", desc: "See-through OLED technology" },

  { title: "Central Display", image: "/center.png", center: true },

  { title: "Medical Displays", image: "/p7.jpg", desc: "Surgical grade screens" },
  { title: "Digital Signage", image: "/p8.jpg", desc: "Commercial display systems" },
  { title: "Industrial Panels", image: "/p9.jpg", desc: "Factory floor displays" },

  { title: "VR Panels", image: "/p10.jpg", desc: "High DPI VR optics" },
  { title: "HUD Displays", image: "/p11.jpg", desc: "Automotive heads-up display" },
  { title: "Wearable Displays", image: "/p12.jpg", desc: "Smart wearable optics" },

  { title: "Research Displays", image: "/p13.jpg", desc: "Scientific visualization" },
  { title: "Prototype Panels", image: "/p14.jpg", desc: "Next-gen lab displays" },
];

export default function ProductPipeline() {
  return (
    <section className="bg-black py-24 flex justify-center">
   <Container>
       <div className="w-full space-y-24">
        
        {/* Top 6 */}
        <Grid items={products.slice(0, 6)} />

        {/* Center Image */}
        <div className="flex justify-center relative">
          <img
            src={products[6].image}
            className="w-[320px] drop-shadow-[0_0_30px_rgba(0,255,120,0.5)]"
          />
        </div>

        {/* Middle 6 */}
        <div className="flex justify-center gap-12">
          {products.slice(13).map((p, i) => (
            <Card key={i} {...p} />
          ))}
        </div>
        <Grid items={products.slice(7, 13)} />

        {/* Bottom 2 */}

      </div>
   </Container>
    </section>
  );
}
function Grid({ items }) {
  return (
    <div className="grid grid-cols-3 gap-10">
      {items.map((p, i) => (
        <Card key={i} {...p} />
      ))}
    </div>
  );
}
function Card({ title, desc, image }) {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-green-500/30 blur-xl opacity-0 group-hover:opacity-100 transition" />

      <div className="relative bg-[#06140b] border border-green-500/50 rounded-xl overflow-hidden">
        <img src={image} className="w-full h-40 object-cover" />

        <div className="p-4">
          <h3 className="text-green-400 text-sm font-semibold mb-1">
            {title}
          </h3>
          <p className="text-green-200/70 text-xs">{desc}</p>
        </div>
      </div>
    </div>
  );
}
