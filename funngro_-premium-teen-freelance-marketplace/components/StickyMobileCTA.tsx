"use client";

import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";

export default function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;

    // We'll watch for the element with id="hero-download-cta"
    const target = document.getElementById("hero-download-cta");

    if (!target) {
      // Fallback scroll listener if element is not in DOM
      const handleScroll = () => {
        if (window.scrollY > 400) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
      
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the hero button is NOT intersecting (out of view), we want to show the sticky footer
        setIsVisible(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleScrollToDownload = () => {
    const targetElement = document.getElementById("app-download-section");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 block md:hidden bg-zinc-950 border-t border-zinc-900 px-6 py-4 transition-all duration-300 ease-in-out transform ${
        isVisible ? "translate-y-0" : "translate-y-full"
      } shadow-[0_-8px_30px_rgba(0,0,0,0.5)]`}
      style={{
        paddingBottom: "calc(env(safe-area-inset-bottom, 16px) + 8px)"
      }}
    >
      <button
        onClick={handleScrollToDownload}
        className="w-full flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-green-hover text-zinc-950 font-sans font-bold py-3.5 px-6 rounded-xl hover:scale-[1.02] active:scale-95 transition-all text-base shadow-[0_0_20px_rgba(0,200,83,0.35)]"
        aria-label="Download Funngro app to start earning"
      >
        <ArrowDown className="w-5 h-5 animate-bounce" />
        Download & Start Earning
      </button>
    </div>
  );
}
