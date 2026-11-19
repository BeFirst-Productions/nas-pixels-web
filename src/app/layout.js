import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar/Navbar";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import ScrollToTop from "@/components/common/Scroll/ScrollToTop";
import EcoPopup from "@/components/common/popup/EcoPopup";
import Footer from "@/components/common/Footer/Footer";
import PixelCursor from "@/components/animation/PixelCursor";

import WhatsAppButton from "@/components/common/WhatsAppButton";
import { LanguageProvider } from "@/context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-inter",
});

export const metadata = {
  title: "LED suppliers in Dubai | Naspixels",
  description:
    "Nas Pixels Solutions is among the leading LED providers in Dubai that specializes in the supply of advanced LED screens, video walls, digital screens, with technology support.",

  keywords: [
    "led suppliers in dubai",
    "led display solution",
    "led signage dubai",
    "led signage companies in dubai",
    "led light suppliers in dubai",
    "best led screen suppliers",
    "outdoor led screen supplier in dubai",
    "led screen company in dubai",
    "dubai led screen",
  ],

  alternates: {
    canonical: "https://naspixels.com/",
  },

  openGraph: {
    title: "LED suppliers in Dubai | Naspixels",
    description:
      "Nas Pixels Solutions is among the leading LED providers in Dubai that specializes in the supply of advanced LED screens, video walls, digital screens, with technology support.",
    url: "https://naspixels.com/",
    siteName: "Naspixels",
    type: "website",
  },
};


export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable}`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Host+Grotesk:wght@100;200;300;400;500;600;700;800;900&family=Prompt:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <SmoothScrollProvider>
          <LanguageProvider>
            <Navbar />
            <main className="app-content">
              <EcoPopup />
              <PixelCursor />
              {children}
              <WhatsAppButton />
              <ScrollToTop />
            </main>
            <Footer />
          </LanguageProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
