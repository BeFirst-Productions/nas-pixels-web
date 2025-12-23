import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar/Navbar";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <main className="min-h-screen"> */}
         <SmoothScrollProvider>
          <Navbar />

          {children}
         </SmoothScrollProvider>
          {/* </main> */}
     
      </body>
    </html>
  );
}
