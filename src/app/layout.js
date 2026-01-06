import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar/Navbar";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import ScrollToTop from "@/components/common/Scroll/ScrollToTop";
import EcoPopup from "@/components/common/popup/EcoPopup";
import Footer from "@/components/common/Footer/Footer";
import GlobalCursor from "@/components/animation/GlobalCursor";
import FluidSmokeCursor from "@/components/animation/FluidSmokeCursor";

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
  metadataBase: new URL("https://naspixels.com"),

  title: {
    default: "NAS Pixels | Digital Signage & LED Screen Solutions Middle East",
    template: "%s | NAS Pixels",
  },

  description:
    "NAS Pixels is a Dubai-based digital innovation company delivering LED screens, digital signage, AV integration, smart home automation, lighting solutions, and content services across the Middle East.",

  keywords: [
    "digital signage dubai",
    "led screen solutions uae",
    "indoor outdoor led screens",
    "video walls middle east",
    "av system integration dubai",
    "smart home automation uae",
    "home cinema solutions dubai",
    "lighting solutions middle east",
    "digital signage saudi arabia",
    "qatar kuwait oman bahrain led screens",
    "nas pixels",
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  authors: [{ name: "NAS Pixels" }],

  creator: "NAS Pixels",
  publisher: "NAS Pixels",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://naspixels.com",
    siteName: "NAS Pixels",
    title: "NAS Pixels | Digital Signage & LED Screen Solutions",
    description:
      "Delivering LED screens, digital signage, AV integration, smart home automation, lighting, and content services across UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, and Oman.",
  },

  twitter: {
    card: "summary_large_image",
    title: "NAS Pixels | Digital Signage & LED Solutions",
    description:
      "Dubai-based digital innovation company specializing in LED screens, AV systems, smart homes, lighting, and content services.",
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
          href="https://fonts.googleapis.com/css2?family=Host+Grotesk:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <SmoothScrollProvider>
          <Navbar />
          <main className="app-content">
            <EcoPopup />
            {/* <FluidSmokeCursor /> */}
{/* <GlobalCursor /> */}
            {children}
            <ScrollToTop />
          </main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
