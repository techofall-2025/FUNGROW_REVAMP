import { Instagram, Linkedin, Twitter, Youtube, MessageSquare } from "lucide-react";
import { SITE_CONFIG, SOCIAL_LINKS } from "../lib/constants";

export default function Footer() {
  return (
    <footer id="main-footer" className="bg-zinc-950 border-t border-zinc-900 pt-16 pb-8 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Brand Column */}
        <div className="flex flex-col gap-6">
          <a
            href="/"
            className="flex items-center gap-1 font-display font-bold text-2xl tracking-tight text-white focus:outline-none focus:ring-2 focus:ring-brand-green/50 rounded"
            aria-label="Funngro Home"
          >
            Funngro<span className="text-brand-green">.</span>
          </a>
          <p className="text-sm leading-relaxed max-w-xs">
            {SITE_CONFIG.description}
          </p>
          
          {/* Social Channels Row */}
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((item) => {
              let Icon = Instagram;
              if (item.platform === "LinkedIn") Icon = Linkedin;
              if (item.platform === "Twitter") Icon = Twitter;
              if (item.platform === "YouTube") Icon = Youtube;

              return (
                <a
                  key={item.platform}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-zinc-800 rounded-lg hover:border-brand-green hover:text-white hover:bg-zinc-900/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-green/50"
                  aria-label={item.ariaLabel}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Platform Directory Column */}
        <div>
          <h3 className="font-display font-semibold text-white text-sm tracking-wider uppercase mb-6">
            Platform Gateway
          </h3>
          <ul className="flex flex-col gap-4 text-sm" role="list">
            <li>
              <a
                href="/"
                className="hover:text-white hover:underline focus:outline-none focus:underline"
              >
                Teens Earning Ecosystem
              </a>
            </li>
            <li>
              <a
                href="/companies"
                className="hover:text-white hover:underline focus:outline-none focus:underline"
              >
                Company Talent Portal
              </a>
            </li>
            <li>
              <a
                href="/login"
                className="hover:text-white hover:underline focus:outline-none focus:underline"
              >
                Account Login
              </a>
            </li>
            <li>
              <a
                href="#app-download-section"
                className="hover:text-white hover:underline focus:outline-none focus:underline"
              >
                Install Earning App
              </a>
            </li>
          </ul>
        </div>

        {/* Company Editorial Column */}
        <div>
          <h3 className="font-display font-semibold text-white text-sm tracking-wider uppercase mb-6">
            Company & Press
          </h3>
          <ul className="flex flex-col gap-4 text-sm" role="list">
            <li>
              <a
                href="/about"
                className="hover:text-white hover:underline focus:outline-none focus:underline"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/blog"
                className="hover:text-white hover:underline focus:outline-none focus:underline"
              >
                Insights Blog
              </a>
            </li>
            <li>
              <a
                href="/careers"
                className="hover:text-white hover:underline focus:outline-none focus:underline"
              >
                We're Hiring
              </a>
            </li>
            <li>
              <a
                href="/press"
                className="hover:text-white hover:underline focus:outline-none focus:underline"
              >
                Press & Media Kit
              </a>
            </li>
          </ul>
        </div>

        {/* Regulatory & Enterprise Contact Column */}
        <div>
          <h3 className="font-display font-semibold text-white text-sm tracking-wider uppercase mb-6">
            Support & Legal
          </h3>
          <ul className="flex flex-col gap-4 text-sm mb-6" role="list">
            <li>
              <a
                href="/privacy"
                className="hover:text-white hover:underline focus:outline-none focus:underline"
              >
                Privacy Standard Policy
              </a>
            </li>
            <li>
              <a
                href="/terms"
                className="hover:text-white hover:underline focus:outline-none focus:underline"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="/grievance"
                className="hover:text-white hover:underline focus:outline-none focus:underline"
              >
                Grievance Redressal (India)
              </a>
            </li>
          </ul>
          
          <div className="flex flex-col gap-3">
            <span className="text-xs text-zinc-500 uppercase tracking-widest font-semibold block">
              Direct Contact Channels
            </span>
            <a
              href="https://wa.me/919988776655"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-brand-green hover:text-brand-green-hover transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-brand-green/30 px-1 rounded"
            >
              <MessageSquare className="w-4 h-4" />
              Chat on WhatsApp Business
            </a>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="text-sm hover:text-white transition-colors focus:outline-none focus:underline"
            >
              Email: {SITE_CONFIG.email}
            </a>
          </div>
        </div>
      </div>

      {/* Copyright & Core Origin */}
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-zinc-900/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
        <p>
          &copy; {new Date().getFullYear()} Funngro Technologies Pvt. Ltd. All rights reserved.
        </p>
        <p className="flex items-center gap-1">
          Made with <span className="text-red-500 hover:scale-125 transition-transform" aria-hidden="true">❤️</span> in Mumbai, India 🇮🇳
        </p>
      </div>
    </footer>
  );
}
