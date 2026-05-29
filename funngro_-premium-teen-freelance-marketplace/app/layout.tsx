import { Inter, Space_Grotesk } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ErrorBoundary from "../components/ErrorBoundary";
import "./globals.css";
import React from "react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://funngro.com"),
  title: {
    default: "Funngro | Earn Money as a Teenager in India",
    template: "%s | Funngro",
  },
  description: "India's #1 teen earning platform. Work with real brands, earn real ₹, and build your portfolio. Featured on Shark Tank India Season 2.",
  keywords: ["teen earning app India", "earn money as student India", "teen freelancing platform", "Funngro"],
  alternates: {
    canonical: "./",
    languages: {
      "en-IN": "/en-in",
    },
  },
  openGraph: {
    title: "Funngro | Earn Money as a Teenager in India",
    description: "India's #1 teen earning platform. Work with real brands, earn real ₹, and build your portfolio.",
    url: "https://funngro.com",
    siteName: "Funngro",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Funngro | Earn Money as a Teenager in India",
    description: "Work with real brands, earn real money, and build a career before turning 18.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body className="bg-background text-gray-100 min-h-screen flex flex-col font-sans antialiased text-opacity-95">
        <ErrorBoundary>
          <Navbar />
          <main id="main-content" className="flex-grow focus:outline-none">
            {children}
          </main>
          <Footer />
        </ErrorBoundary>
      </body>
    </html>
  );
}
