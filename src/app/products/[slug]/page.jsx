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

export async function generateMetadata({ params }) {
  const product = products.find(p => p.slug === params.slug);

  if (!product) {
    return {
      title: 'Product Not Found',
    }
  }

  return {
    title: product.seo?.title || product.title,
    description: product.seo?.description || product.desc,
    keywords: product.seo?.keywords || [],
    openGraph: {
      title: product.seo?.title || product.title,
      description: product.seo?.description || product.desc,
      images: [
        {
          url: product.thumbnail,
          width: 800,
          height: 600,
          alt: product.title,
        },
      ],
    },
  }
}

export default function Page({ params }) {
  const product = products.find(p => p.slug === params.slug);

  if (!product) return notFound();

  return (
    <>
      <Herosection title={product.title} slug={product.slug} />
      <ProductDetails product={product} />
      <ContactSection />
      
    </>
  );
}

