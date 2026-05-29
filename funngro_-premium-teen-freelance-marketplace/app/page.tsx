import {
  Share2,
  Palette,
  PenTool,
  Search,
  Video,
  Database,
  Smartphone,
  User,
  BadgeCheck,
  Briefcase,
  Sparkles,
  Calendar,
  TrendingUp,
  ShieldAlert,
  ShieldCheck,
  ArrowRight,
  Tv,
  Star
} from "lucide-react";
import StatsBar from "../components/StatsBar";
import {
  TEEN_STATS,
  TEEN_HOW_IT_WORKS,
  TASK_CATEGORIES,
  BENEFITS,
  TESTIMONIALS,
  TRUST_ITEMS_TEEN,
  TRUSTED_BRANDS,
  TEEN_FAQS
} from "../lib/constants";
import HowItWorks from "../components/HowItWorks";
import TestimonialCard from "../components/TestimonialCard";
import TrustSection from "../components/TrustSection";
import AppDownloadSection from "../components/AppDownloadSection";
import FAQ from "../components/FAQ";
import StickyMobileCTA from "../components/StickyMobileCTA";
import { getOrganizationSchema, getWebsiteSchema, getFAQSchema, getMobileAppSchema } from "../lib/structured-data";

export const metadata = {
  title: "Funngro | Earn Money as a Teenager in India",
  description: "India's #1 teen earning platform. Work with real brands, earn real ₹, build your portfolio. Featured on Shark Tank India Season 2.",
  keywords: ["teen earning app India", "earn money as student India", "teen freelancing platform", "Funngro"],
};

const categoryIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Share2,
  Palette,
  PenTool,
  Search,
  Video,
  Database
};

const benefitIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Briefcase,
  Sparkles,
  Calendar,
  TrendingUp,
  ShieldAlert,
  ShieldCheck
};

export default function TeenPortal() {
  // Generate Structured Data (JSON-LD)
  const organizationSchema = getOrganizationSchema();
  const websiteSchema = getWebsiteSchema();
  const faqSchema = getFAQSchema(TEEN_FAQS);
  const mobileAppSchema = getMobileAppSchema();

  return (
    <>
      {/* Inject Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mobileAppSchema) }}
      />

      {/* 1. HERO SECTION */}
      <section
        aria-label="Funngro Teen Hero Overview"
        className="relative pt-32 pb-20 px-6 overflow-hidden min-h-[90vh] flex flex-col justify-center"
      >
        {/* Glow backdrop ambient radial circles */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-green/10 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-emerald-500/5 blur-[90px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full relative z-10">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
            
            {/* Pill Banner */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-green/30 bg-brand-green/5 text-brand-green animate-fadeIn">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
              </span>
              <span className="text-xs font-mono font-bold uppercase tracking-wider">
                Featured on Shark Tank India 🦈 Season 2
              </span>
            </div>

            {/* Main Display Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white tracking-tight leading-[1.1]">
              Get paid by brands <br />
              <span className="bg-gradient-to-r from-emerald-400 via-brand-green to-green-300 bg-clip-text text-transparent italic font-black">
                YOU already love.
              </span>
            </h1>

            {/* Subheadline description */}
            <p className="text-sm md:text-lg text-gray-300 leading-relaxed max-w-2xl">
              India's #1 safe earning destination built for teenagers aged 13-19. Work with legitimate commercial brands, complete simple gigs, and receive direct digital payouts instantly. No upfront investment required ever.
            </p>

            {/* CTA Anchor triggers */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-2">
              <a
                id="hero-download-cta"
                href="#app-download-section"
                className="w-full sm:w-auto text-center bg-brand-green hover:bg-brand-green-hover text-zinc-950 font-sans font-bold px-8 py-4 rounded-xl shadow-glow-green hover:scale-105 active:scale-95 transition-all text-base shrink-0"
              >
                Download App ↓
              </a>
              <a
                href="#how-it-works-section"
                className="w-full sm:w-auto text-center border border-zinc-750 text-gray-200 hover:border-brand-green hover:text-brand-green font-sans font-semibold px-8 py-4 rounded-xl hover:scale-105 active:scale-95 transition-all text-base shrink-0"
              >
                Explore Opportunities →
              </a>
            </div>

            {/* Quick Stats Grid element */}
            <div className="w-full mt-10 pt-8 border-t border-zinc-900/60">
              <StatsBar stats={TEEN_STATS} />
            </div>

          </div>

          {/* Hero Right Visual Phone Mockup */}
          <div className="lg:col-span-5 hidden lg:flex justify-end relative pointer-events-none select-none">
            {/* Ambient overlay behind phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-brand-green/20 blur-[90px] rounded-full z-0" />
            
            {/* CSS-only Phone Frame Layout */}
            <div className="relative w-[300px] h-[600px] bg-zinc-950 border-[6px] border-zinc-800 rounded-[48px] shadow-2xl z-10 flex flex-col overflow-hidden">
              <div className="w-32 h-6 bg-zinc-800 absolute top-0 left-1/2 -translate-x-1/2 rounded-b-2xl z-20" /> {/* Speaker cutout */}
              
              {/* Phone contents */}
              <div className="flex-grow p-4 pt-10 flex flex-col gap-4 text-xs font-sans text-gray-400 bg-zinc-950">
                <div className="flex justify-between items-center px-2">
                  <span className="font-bold text-white text-sm">Funngro Wallet</span>
                  <div className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
                </div>
                
                {/* Visual balance card */}
                <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-2xl flex flex-col gap-1 shadow-inner relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-12 h-12 bg-brand-green/10 blur-md rounded-full" />
                  <span className="text-zinc-500 font-mono text-[9px] uppercase tracking-widest">Available Balance</span>
                  <span className="text-2xl font-black text-brand-green tracking-tight font-display">₹12,450.00</span>
                  <span className="text-[9px] text-zinc-550 italic">Verified parental guardian consent active</span>
                </div>

                {/* Task list cards mockup */}
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-550 font-bold px-2">Active Earning Tasks</span>
                <div className="flex flex-col gap-2.5">
                  <div className="bg-zinc-900 border border-zinc-805 p-3 rounded-xl flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-white text-[11px] mb-0.5">Reels Content Creation</h4>
                      <span className="text-[9px] text-zinc-500">Mamaearth Young Marketer</span>
                    </div>
                    <span className="text-brand-green font-bold text-[11px] bg-brand-green/5 border border-brand-green/25 px-2 py-0.5 rounded-full">₹1,500</span>
                  </div>

                  <div className="bg-zinc-900 border border-zinc-805 p-3 rounded-xl flex items-center justify-between opacity-80">
                    <div>
                      <h4 className="font-semibold text-white text-[11px] mb-0.5">Social Graphic Banner</h4>
                      <span className="text-[9px] text-zinc-500">Boat Smart Campaign</span>
                    </div>
                    <span className="text-brand-green font-bold text-[11px] bg-brand-green/5 border border-brand-green/25 px-2 py-0.5 rounded-full">₹2,200</span>
                  </div>

                  <div className="bg-zinc-900 border border-zinc-850 p-3 rounded-xl flex items-center justify-between opacity-50">
                    <div>
                      <h4 className="font-semibold text-white text-[11px] mb-0.5">App Survey Feedback</h4>
                      <span className="text-[9px] text-zinc-550">Tata Play Survey Group</span>
                    </div>
                    <span className="text-emerald-500 font-bold text-[11px] bg-brand-green/5 border border-brand-green/10 px-2 py-0.5 rounded-full">₹400</span>
                  </div>
                </div>

                {/* App summary chart decoration */}
                <div className="mt-auto bg-zinc-900/60 p-3 rounded-xl border border-zinc-850 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center border border-brand-green/20">
                    🏆
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-[10px]">Priya Earned ₹14,500!</h5>
                    <p className="text-[9px] text-zinc-550">Mumbai • Level 3 Star Creator</p>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. SCROLLING BRAND STRIP */}
      <section
        aria-label="Collaborating Brands Portfolio"
        className="py-12 bg-zinc-950 border-y border-zinc-900 overflow-hidden relative"
      >
        <div className="max-w-7xl mx-auto px-6 mb-6">
          <p className="text-center font-mono text-xs uppercase tracking-widest text-zinc-550 font-bold">
            Guaranteed safe assignments with top operational teams
          </p>
        </div>

        {/* Endless CSS marquee scrolling brand names */}
        <div className="relative flex items-center overflow-x-hidden">
          {/* Subtle horizontal gradient overlay to build mask fade on edges */}
          <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />
          
          <div className="animate-marquee flex gap-12 items-center whitespace-nowrap">
            {/* Double Brand arrays to create seamless loop wrapping */}
            {[...TRUSTED_BRANDS, ...TRUSTED_BRANDS, ...TRUSTED_BRANDS].map((brand, i) => (
              <span
                key={i}
                className="text-zinc-500 font-display font-medium text-lg md:text-xl tracking-tight transition-colors duration-200 hover:text-brand-green"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS */}
      <div id="how-it-works-section">
        <HowItWorks steps={TEEN_HOW_IT_WORKS} title="Get started in 3 simple steps" />
      </div>

      {/* 4. WHAT YOU CAN EARN (Tasks Category Grid) */}
      <section
        aria-labelledby="categories-heading"
        className="py-24 px-6 bg-zinc-900/20 border-t border-zinc-900/60"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs text-brand-green tracking-widest font-mono uppercase font-semibold">
              Find Gigs That Suit Your Style
            </span>
            <h2
              id="categories-heading"
              className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight mt-3 mb-6"
            >
              Tasks that match your skills
            </h2>
            <p className="text-sm md:text-base text-gray-400">
              Pick from a wide array of specialized task brackets. We have assignments ranging from quick 15-minute surveys to highly creative content loops.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {TASK_CATEGORIES.map((cat, idx) => {
              const IconComponent = categoryIconMap[cat.icon] || Share2;
              return (
                <div
                  key={idx}
                  className="bg-zinc-900 border border-zinc-800/80 rounded-2xl p-6 hover:-translate-y-1.5 hover:border-brand-green/35 hover:shadow-[0_4px_25px_rgba(0,198,83,0.08)] transition-all duration-300 flex flex-col justify-between align-start text-left min-h-[170px]"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: `${cat.color}15`, color: cat.color }}
                  >
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-white text-sm md:text-base mb-1.5">
                      {cat.label}
                    </h3>
                    <span className="text-xs md:text-sm text-brand-green font-mono font-bold">
                      {cat.earningRange}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. BENEFITS SECTION */}
      <section aria-labelledby="benefits-heading" className="py-24 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs text-brand-green tracking-widest font-mono uppercase font-semibold">
              Unmatched Teenager Growth Portal
            </span>
            <h2
              id="benefits-heading"
              className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight mt-3 mb-6"
            >
              Why 5 Lakh+ teens choose Funngro
            </h2>
            <p className="text-sm md:text-base text-gray-400">
              We empower young individuals with valuable real-world business acumen, completely remote structures, and validated industry certifications.
            </p>
          </div>

          {/* Benefit Cards Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS.map((item, index) => {
              const IconComponent = benefitIconMap[item.icon] || Sparkles;
              return (
                <div
                  key={index}
                  className="bg-zinc-900 border border-zinc-800/70 p-6 rounded-2xl hover:border-zinc-700 transition-colors flex items-start gap-5 text-left"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-green/10 text-brand-green shrink-0 flex items-center justify-center p-3 border border-brand-green/15">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-base md:text-lg mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. SHARK TANK INDIA SECTION */}
      <section
        aria-labelledby="shark-tank-heading"
        className="py-20 px-6 bg-zinc-900/40 relative overflow-hidden text-center border-y border-zinc-900"
      >
        {/* Glow behind section */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-brand-green/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center gap-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-mono tracking-widest font-bold uppercase">
            🦈 Season 2 Finalist Pitch
          </div>
          
          <h2 id="shark-tank-heading" className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight">
            As Seen on Shark Tank India
          </h2>
          
          <p className="text-sm md:text-base text-gray-300 max-w-2xl leading-relaxed italic">
            "The potential in India's teenage workspace is immense. Funngro bridges a critical gap—teaching our tomorrow's workforce active professionalism, monetization skills, and digital resource usage safely."
          </p>

          {/* YouTube Embed Placeholder to guard performance and CLS */}
          <div className="w-full max-w-2xl aspect-video rounded-3xl bg-zinc-950 border border-zinc-800 p-1 flex items-center justify-center shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900/60 via-zinc-950 to-zinc-950 z-0" />
            
            {/* Visual play elements */}
            <div className="relative z-10 flex flex-col items-center gap-4">
              <button
                className="w-16 h-16 rounded-full bg-brand-green text-zinc-950 flex items-center justify-center pl-1 shadow-glow-green transform hover:scale-110 active:scale-95 transition-all text-xs font-bold"
                aria-label="Play Shark Tank India Episode Summary"
              >
                ▶
              </button>
              <div className="text-center">
                <span className="text-white text-sm font-semibold tracking-tight block">Watch Funngro Shark Tank Pitch</span>
                <span className="text-[10px] text-zinc-550 font-mono">Season 2 • Ep 12 (4.8★ Ratings)</span>
              </div>
            </div>
          </div>

          <a
            href="#app-download-section"
            className="mt-6 inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-hover text-zinc-950 font-sans font-bold px-8 py-3.5 rounded-xl shadow-glow-green hover:scale-[1.02] active:scale-95 transition-all"
          >
            Join the Movement
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section aria-labelledby="testimonials-heading" className="py-24 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs text-brand-green tracking-widest font-mono uppercase font-semibold">
              Success Stories from our Cohorts
            </span>
            <h2
              id="testimonials-heading"
              className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight mt-3 mb-6"
            >
              Real teens. Real earnings.
            </h2>
            <p className="text-sm md:text-base text-gray-400">
              Read how high-school candidates from Bangalore, Mumbai, and Delhi utilize Funngro to fund their books, upskill creatively, and establish self-dependence.
            </p>
          </div>

          {/* Testimonial Cards Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((test, index) => (
              <TestimonialCard
                key={index}
                name={test.name}
                age={test.age}
                city={test.city}
                earned={test.earned}
                quote={test.quote}
                avatarSeed={test.avatarSeed}
                rating={test.rating}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 8. TRUST & SAFETY */}
      <TrustSection items={TRUST_ITEMS_TEEN} variant="teen" />

      {/* 9. APP DOWNLOAD SECTION */}
      <AppDownloadSection />

      {/* 10. FAQ SECTION */}
      <section aria-labelledby="faq-heading" className="py-24 px-6 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs text-brand-green tracking-widest font-mono uppercase font-semibold">
              Clarifications & Safety Details
            </span>
            <h2
              id="faq-heading"
              className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight mt-3 mb-6"
            >
              Frequently asked questions
            </h2>
            <p className="text-sm md:text-base text-gray-400">
              Clear information covering payouts, legal structures, age requirements, and guardian oversight.
            </p>
          </div>

          <FAQ items={TEEN_FAQS} />
        </div>
      </section>

      {/* STICKY MOBILE CTA BAR */}
      <StickyMobileCTA />
    </>
  );
}
