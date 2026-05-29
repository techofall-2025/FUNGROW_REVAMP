import {
  ArrowRight,
  TrendingUp,
  Percent,
  Clock,
  Zap,
  CheckCircle,
  BarChart,
  Target,
  FileCheck
} from "lucide-react";
import StatsBar from "../../components/StatsBar";
import {
  COMPANY_STATS,
  COMPANY_HOW_IT_WORKS,
  VALUE_PROPS,
  TRUST_ITEMS_COMPANY,
  TRUSTED_BRANDS,
  COMPANY_FAQS,
  COST_COMPARISON
} from "../../lib/constants";
import HowItWorks from "../../components/HowItWorks";
import TrustSection from "../../components/TrustSection";
import ContactForm from "../../components/ContactForm";
import FAQ from "../../components/FAQ";
import { getOrganizationSchema, getBreadcrumbSchema, getFAQSchema } from "../../lib/structured-data";

export const metadata = {
  title: "Funngro for Business | Hire Gen-Z Talent in India",
  description: "Access India's most creative Gen-Z talent. Hire verified, digitally-native teens for real projects. Fast, cost-effective, safe.",
  keywords: ["hire Gen-Z India", "teen freelancers for business", "youth marketing India", "Funngro for companies"],
};

const vPropIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Percent,
  Clock,
  TrendingUp,
  Zap
};

export default function CompanyPortal() {
  const orgSchema = getOrganizationSchema();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "https://funngro.com" },
    { name: "For Companies", item: "https://funngro.com/companies" }
  ]);
  const faqSchema = getFAQSchema(COMPANY_FAQS);

  return (
    <>
      {/* Inject Structured Data for business SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb UI */}
      <nav
        aria-label="Breadcrumb"
        className="pt-28 pb-4 px-6 max-w-7xl mx-auto w-full text-xs font-mono tracking-wider text-zinc-500 uppercase flex items-center gap-2"
      >
        <a href="/" className="hover:text-brand-green transition-colors focus:underline outline-none">Home</a>
        <span aria-hidden="true">&gt;</span>
        <span className="text-gray-300 font-semibold" aria-current="page">For Companies</span>
      </nav>

      {/* 1. HERO SECTION */}
      <section
        aria-label="Enterprise Offering Overview"
        className="relative pb-20 pt-8 px-6 overflow-hidden min-h-[80vh] flex flex-col justify-center"
      >
        {/* Deep emerald blur backlight rings */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-brand-green/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto text-center relative z-10 w-full flex flex-col items-center">
          
          {/* Label Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-green/30 bg-brand-green/5 text-brand-green animate-fadeIn mb-6">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
            </span>
            <span className="text-xs font-mono font-bold uppercase tracking-wider">
              Trusted by 100+ Leading Indian Brands
            </span>
          </div>

          {/* Large H1 Headings */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-white tracking-tight leading-[1.1] max-w-5xl mb-6">
            Access India's Smartest <br />
            <span className="bg-gradient-to-r from-emerald-400 via-brand-green to-green-300 bg-clip-text text-transparent italic">
              Generation-Z Talent.
            </span>
          </h1>

          {/* Pitch subheadline */}
          <p className="text-sm md:text-lg text-gray-300 leading-relaxed max-w-3xl mb-8">
            Deploy hyper-creative, digitally-native freelance talent for your marketing, content, research, and design campaigns. Experience startup-velocity execution at up to 70% lower budgets.
          </p>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-2 mb-16">
            <a
              href="#contact-form"
              className="w-full sm:w-auto text-center bg-brand-green hover:bg-brand-green-hover text-zinc-950 font-sans font-bold px-8 py-4 rounded-xl shadow-glow-green hover:scale-105 active:scale-95 transition-all text-base shrink-0 border border-brand-green"
            >
              Post a Project Today →
            </a>
            <a
              href="mailto:sales@funngro.com"
              className="w-full sm:w-auto text-center border border-zinc-750 text-gray-200 hover:border-brand-green hover:text-brand-green font-sans font-semibold px-8 py-4 rounded-xl hover:scale-105 active:scale-95 transition-all text-base shrink-0"
            >
              Talk to Sales
            </a>
          </div>

          {/* Four Stats Bar */}
          <div className="w-full">
            <StatsBar stats={COMPANY_STATS} />
          </div>

        </div>
      </section>

      {/* 2. TRUSTED BRANDS */}
      <section
        aria-labelledby="brands-heading"
        className="py-12 bg-zinc-950/60 border-y border-zinc-900 text-center"
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 id="brands-heading" className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-550 mb-8">
            Brands already scaling with Funngro
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 justify-center items-center">
            {TRUSTED_BRANDS.slice(0, 8).map((brand, i) => (
              <span
                key={i}
                className="text-zinc-500 font-display font-medium text-base md:text-lg hover:text-white transition-colors cursor-default"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHY GEN-Z — VALUE PROPOSITION */}
      <section aria-labelledby="why-genz-heading" className="py-24 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs text-brand-green tracking-widest font-mono uppercase font-semibold">
              The Digital Nativity Advantage
            </span>
            <h2
              id="why-genz-heading"
              className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight mt-3 mb-6"
            >
              Why Gen-Z talent wins
            </h2>
            <p className="text-sm md:text-base text-gray-400">
              Traditional agencies are slow and detached from viral loops. Our creators are the target demographics—living and engineering digital mediums natively daily.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUE_PROPS.map((vProp, index) => {
              const IconComponent = vPropIconMap[vProp.icon] || Zap;
              return (
                <div
                  key={index}
                  className="bg-zinc-900 border border-zinc-800/80 rounded-2xl p-6 hover:-translate-y-1 hover:border-brand-green/20 hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-green/10 text-brand-green flex items-center justify-center p-3 border border-brand-green/15 mb-6">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  
                  <span className="text-sm font-mono font-bold text-brand-green tracking-tight block mb-2">
                    {vProp.stat}
                  </span>
                  
                  <h3 className="font-display font-bold text-lg text-white mb-2">
                    {vProp.title}
                  </h3>
                  
                  <p className="text-xs md:text-sm text-gray-405 leading-relaxed">
                    {vProp.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS FOR COMPANIES */}
      <HowItWorks steps={COMPANY_HOW_IT_WORKS} title="Start hiring in 4 simple steps" />

      {/* 5. COST COMPARISON TABLE */}
      <section
        aria-labelledby="comparison-heading"
        className="py-24 px-6 bg-zinc-900/20 border-t border-zinc-900/60"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs text-brand-green tracking-widest font-mono uppercase font-semibold">
              Transparent Fiscal Outlines
            </span>
            <h2
              id="comparison-heading"
              className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight mt-3 mb-6"
            >
              Funngro vs Traditional Agency
            </h2>
            <p className="text-sm md:text-base text-gray-400">
              We eliminate excessive partner retainers and overheads. Only pay for verified assets and successful project milestone deliveries directly.
            </p>
          </div>

          {/* Swipeable Table wrapper block */}
          <div className="w-full overflow-x-auto rounded-3xl border border-zinc-801 shadow-2xl bg-zinc-950">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-zinc-900 border-b border-zinc-800 text-xs font-mono text-zinc-400 uppercase tracking-widest">
                  <th className="py-5 px-6 font-semibold">Campaign Metric</th>
                  <th className="py-5 px-6 font-semibold text-brand-green">Funngro Advantage</th>
                  <th className="py-5 px-6 font-semibold">Traditional Agencies</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-850 text-sm">
                {COST_COMPARISON.map((row, index) => (
                  <tr
                    key={index}
                    className={`transition-colors hover:bg-zinc-900/40 ${
                      row.highlighted ? "bg-brand-green/5" : ""
                    }`}
                  >
                    <td className="py-5 px-6 text-white font-medium">{row.metric}</td>
                    <td className="py-5 px-6 font-semibold text-brand-green-hover relative">
                      {row.funngro}
                      {row.highlighted && (
                        <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-brand-green" />
                      )}
                    </td>
                    <td className="py-5 px-6 text-gray-400">{row.agency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <p className="text-center text-xs text-zinc-550 mt-4 leading-relaxed">
            * Surveyed figures based on standard tier India social media agency metrics, Q1 2026.
          </p>

        </div>
      </section>

      {/* 6. CASE STUDY */}
      <section aria-labelledby="case-study-heading" className="py-24 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs text-brand-green tracking-widest font-mono uppercase font-semibold">
              Vetted Commercial Impact
            </span>
            <h2
              id="case-study-heading"
              className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight mt-3 mb-6"
            >
              How "NovaBrew Coffee" saved 65% on campaigns
            </h2>
            <p className="text-sm md:text-base text-gray-400">
              Read how a rising Indian premium beverage startup sourced 8 teen creators to flood online circles and dominate Gen-Z conversions in standard timelines.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800/80 rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col lg:flex-row gap-12 items-center">
            <div className="absolute top-0 left-0 w-24 h-24 bg-brand-green/5 blur-xl rounded-full" />
            
            {/* Story */}
            <div className="lg:w-2/3 flex flex-col items-start text-left gap-6">
              <span className="text-xs bg-brand-green/10 border border-brand-green/20 text-brand-green font-mono px-3 py-1 rounded-full font-bold uppercase">
                Campaign Case Study
              </span>
              
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight">
                Scaling Youth Branding on a Bootstrap Budget
              </h3>
              
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                "NovaBrew Coffee" wanted to launch custom cold brew variants directly targeting campus students. Traditional advertising returns were low. They posted a visual Reels and graphic campaign on Funngro. Matches were completed inside 5 hours, leading of 8 active creators publishing real UGC content.
              </p>
              
              <p className="text-sm text-gray-400 leading-relaxed italic border-l-2 border-brand-green pl-4">
                "The creativity and raw speed of young creators was staggering! They didn't just meet our brand specifications—they optimized the engagement levels naturally. We've completely moved our localized campus budgets to Funngro." <br />
                <span className="text-white text-xs font-semibold not-italic block mt-1.5">— Anjali Sen, VP Marketing, NovaBrew India</span>
              </p>
            </div>

            {/* Micro Stats */}
            <div className="lg:w-1/3 grid grid-cols-2 gap-4 w-full">
              <div className="bg-zinc-950 p-5 rounded-2xl border border-zinc-850 text-center flex flex-col justify-center gap-1">
                <span className="font-display font-black text-2xl text-brand-green tracking-tight">₹3,200</span>
                <span className="text-[10px] text-zinc-500 uppercase font-mono">Campaign Cost</span>
              </div>
              
              <div className="bg-zinc-950 p-5 rounded-2xl border border-zinc-850 text-center flex flex-col justify-center gap-1">
                <span className="font-display font-black text-2xl text-brand-green tracking-tight">5 Days</span>
                <span className="text-[10px] text-zinc-500 uppercase font-mono">Delivery Speed</span>
              </div>

              <div className="bg-zinc-950 p-5 rounded-2xl border border-zinc-850 text-center flex flex-col justify-center gap-1">
                <span className="font-display font-black text-2xl text-brand-green tracking-tight">+40%</span>
                <span className="text-[10px] text-zinc-500 uppercase font-mono">Engagement Lift</span>
              </div>

              <div className="bg-zinc-950 p-5 rounded-2xl border border-zinc-850 text-center flex flex-col justify-center gap-1">
                <span className="font-display font-black text-2xl text-brand-green tracking-tight">8</span>
                <span className="text-[10px] text-zinc-500 uppercase font-mono">Teen Creators</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. TRUST & SAFETY FOR COMPANIES */}
      <TrustSection items={TRUST_ITEMS_COMPANY} variant="company" />

      {/* 8. CONTACT / INQUIRY FORM */}
      <section
        id="contact-form"
        aria-labelledby="contact-form-heading"
        className="py-24 px-6 bg-zinc-950 border-t border-zinc-900"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs text-brand-green tracking-widest font-mono uppercase font-semibold">
              Post a Project Brief
            </span>
            <h2
              id="contact-form-heading"
              className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight mt-3 mb-6"
            >
              Start your first project today
            </h2>
            <p className="text-sm md:text-base text-gray-400">
              Submit your project specifications in under 2 minutes. Our campaign coordinators will evaluate, align matches, and send customized candidate sheets directly.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* 9. FAQ SECTION */}
      <section aria-labelledby="company-faq-heading" className="py-24 px-6 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs text-brand-green tracking-widest font-mono uppercase font-semibold">
              Institutional Queries Answered
            </span>
            <h2
              id="company-faq-heading"
              className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight mt-3 mb-6"
            >
              Questions from businesses like yours
            </h2>
            <p className="text-sm md:text-base text-gray-400">
              Review details detailing compliance, payout handling, work safety guidelines, and copyright transitions.
            </p>
          </div>

          <FAQ items={COMPANY_FAQS} />
        </div>
      </section>
    </>
  );
}
