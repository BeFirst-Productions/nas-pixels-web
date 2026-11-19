import { notFound } from "next/navigation";
import CountryHero from "@/components/ui/country/CountryHero";
import CountryAbout from "@/components/ui/country/CountryAbout";
import CountryProducts from "@/components/ui/country/CountryProducts";
import { COUNTRIES_DATA, getCountryBySlug } from "@/data/countries";
import ContactSection from "@/components/ui/contact/ContactSection";

export async function generateStaticParams() {
  const params = [];
  COUNTRIES_DATA.forEach((country) => {
    params.push({ country: country.slug });
    if (country.aliases) {
      country.aliases.forEach((alias) => {
        if (alias !== country.slug) {
          params.push({ country: alias });
        }
      });
    }
  });
  return params;
}

export async function generateMetadata({ params }) {
  const { country: slug } = await params;
  const country = getCountryBySlug(slug);

  if (!country) {
    return {
      title: "Region Not Found | NAS Pixels",
    };
  }

  return {
    title: `${country.name} LED Screens & Digital Displays | NAS Pixels`,
    description: `Leading provider of advanced LED screens, video walls, and digital display solutions in ${country.name}.`,
    openGraph: {
      title: `${country.name} - NAS Pixels Digital Signage & LED Solutions`,
      description: `Transform visual communication in ${country.name} with enterprise-grade LED displays.`,
      images: [country.hero?.image || country.image],
    },
  };
}

export default async function CountryPage({ params }) {
  const { country: slug } = await params;
  const country = getCountryBySlug(slug);

  if (!country) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#70C879]/30">
      <CountryHero country={country} />
      <CountryAbout country={country} />
      <CountryProducts country={country} />
      <ContactSection />
      
    </div>
  );
}

