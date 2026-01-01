import { products } from "@/data/Products";
import Footer from "@/components/common/Footer/Footer";
import ProductDetails from "@/components/ProductsPage/ProductDetails";
import Herosection from "@/components/TitleBanner/TitleBanner";
import ContactSection from "@/components/ui/contact/ContactSection";
import { notFound } from "next/navigation";
export function generateStaticParams() {
  return products.map(product => ({
    slug: product.slug,
  }));
}
export default function Page({ params }) {
  const product = products.find(p => p.slug === params.slug);

  if (!product) return notFound();

  return (
    <>
      <Herosection title={product.title} />
      <ProductDetails product={product} />
      <ContactSection />
      <Footer />
    </>
  );
}
