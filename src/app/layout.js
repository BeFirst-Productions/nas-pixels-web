import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar/Navbar";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import ScrollToTop from "@/components/common/Scroll/ScrollToTop";

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
  title: 'NAS PIXELS',
  description: 'Professional animation platform built with Next.js and GSAP',
  keywords: ['animation', 'gsap', 'nextjs', 'tailwind'],
  authors: [{ name: 'Your Team' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
            {children}
                   <ScrollToTop />

          </main>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}