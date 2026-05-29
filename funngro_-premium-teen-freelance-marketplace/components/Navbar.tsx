"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "../lib/constants";

// Client-side portable navigate function
export function navigate(href: string) {
  if (typeof window !== "undefined") {
    window.history.pushState(null, "", href);
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
    window.scrollTo(0, 0);
  }
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("/");
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Synchronize path state
  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    handleLocationChange(); // set initial
    window.addEventListener("popstate", handleLocationChange);
    return () => window.removeEventListener("popstate", handleLocationChange);
  }, []);

  // Handle scroll detection for sticky background aesthetics
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Focus trap inside the mobile drawer
  useEffect(() => {
    if (!isOpen || typeof window === "undefined") return;

    const element = mobileMenuRef.current;
    if (!element) return;

    const focusableEls = element.querySelectorAll(
      'a[href], button:not([disabled]), textarea, input, select'
    );
    const firstFocusable = focusableEls[0] as HTMLElement;
    const lastFocusable = focusableEls[focusableEls.length - 1] as HTMLElement;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
        return;
      }

      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          lastFocusable.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          firstFocusable.focus();
          e.preventDefault();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    firstFocusable?.focus();

    // Prevent background scrolling while modal is active
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/")) {
      e.preventDefault();
      setIsOpen(false);
      navigate(href);
    }
  };

  return (
    <header
      id="main-navbar"
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Skip to Main Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[60] bg-brand-green text-zinc-950 px-4 py-2 rounded-lg font-semibold border-2 border-zinc-950"
        >
          Skip to main content
        </a>

        {/* Brand Logo */}
        <a
          href="/"
          onClick={(e) => handleLinkClick(e, "/")}
          className="flex items-center gap-1 group font-display font-bold text-2xl tracking-tight text-white focus:outline-none focus:ring-2 focus:ring-brand-green/50 rounded-lg p-1"
          aria-label="Funngro Home"
        >
          Funngro<span className="text-brand-green group-hover:scale-125 transition-transform duration-200">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = currentPath === link.href;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`relative py-2 text-sm font-medium transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-green/50 rounded-md px-1 ${
                  isActive ? "text-brand-green font-semibold" : "text-gray-400"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-green rounded-full shadow-[0_0_8px_rgba(0,200,83,0.5)]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Desktop Action Target */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="/"
            onClick={(e) => handleLinkClick(e, "/")}
            className="group relative inline-flex items-center gap-2 bg-brand-green text-zinc-950 font-semibold text-sm rounded-full px-6 py-2.5 overflow-hidden transition-all duration-200 hover:bg-brand-green-hover hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-brand-green/80 shadow-[0_0_20px_rgba(0,200,83,0.15)] hover:shadow-[0_0_25px_rgba(0,200,83,0.3)]"
          >
            Earn Now
            <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Toggle Trigger */}
        <button
          ref={triggerRef}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center justify-center p-2 text-gray-400 hover:text-white hover:bg-zinc-900/50 rounded-lg transition-colors border border-zinc-800 focus:outline-none focus:ring-2 focus:ring-brand-green/50"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close mobile menu" : "Open mobile menu"}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Menu Drawer Content */}
      <div
        ref={mobileMenuRef}
        id="mobile-menu"
        tabIndex={-1}
        className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-xs bg-zinc-900 border-l border-zinc-800/80 p-6 flex flex-col transition-transform duration-300 ease-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
      >
        <div className="flex items-center justify-between mb-8">
          <span className="font-display font-bold text-xl text-white">Navigation</span>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-brand-green/50"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex flex-col gap-6" aria-label="Mobile main navigation">
          {NAV_LINKS.map((link) => {
            const isActive = currentPath === link.href;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-lg font-medium py-2 border-b border-zinc-800/50 transition-colors ${
                  isActive ? "text-brand-green" : "text-gray-300 hover:text-white"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="mt-auto">
          <a
            href="/"
            onClick={(e) => handleLinkClick(e, "/")}
            className="w-full flex items-center justify-center gap-2 bg-brand-green text-zinc-950 font-semibold p-4 rounded-xl hover:bg-brand-green-hover shadow-glow-green"
          >
            Download Free App
            <ArrowUpRight className="w-5 h-5" />
          </a>
          <p className="text-center text-xs text-gray-500 mt-4 leading-relaxed">
            Parental signature required for signup.<br />Made with ❤️ in India
          </p>
        </div>
      </div>
    </header>
  );
}
