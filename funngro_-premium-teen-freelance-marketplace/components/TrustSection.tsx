import {
  ShieldCheck,
  Lock,
  UserCheck,
  HelpCircle,
  ShieldAlert,
  Scale,
  Zap,
  CheckCircle
} from "lucide-react";
import { TrustItem } from "../lib/constants";

interface TrustSectionProps {
  items: TrustItem[];
  variant: "teen" | "company";
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ShieldCheck,
  Lock,
  UserCheck,
  HelpCircle,
  ShieldAlert,
  Scale,
  Zap,
  CheckCircle
};

export default function TrustSection({ items, variant }: TrustSectionProps) {
  const headingText =
    variant === "teen"
      ? "Your trust and safety is our top priority"
      : "Enterprise-grade trust. Startup-grade speed.";

  return (
    <section
      aria-labelledby="trust-section-heading"
      className="py-20 px-6 bg-zinc-900/40 relative overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-green/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto position-relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs text-brand-green tracking-widest font-mono uppercase font-semibold">
            {variant === "teen" ? "Vetted Security Eco-System" : "Professional Infrastructure"}
          </span>
          <h2
            id="trust-section-heading"
            className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight mt-3 mb-6"
          >
            {headingText}
          </h2>
          <p className="text-sm md:text-base text-gray-400 leading-relaxed">
            {variant === "teen"
              ? "We have designed every aspect of Funngro to ensure school students can explore work horizons inside a risk-free, compliant, and parent-guided digital atmosphere."
              : "Access India's largest youth freelancer repository backed by stringent copyright transfers, instant digital escrow, and absolute commercial compliance."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => {
            const IconComponent = iconMap[item.icon] || ShieldCheck;
            return (
              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800/80 rounded-2xl p-6 hover:border-brand-green/25 hover:shadow-[0_4px_30px_rgba(0,200,83,0.04)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center p-2.5 text-brand-green mb-6 border border-brand-green/20">
                  <IconComponent className="w-6 h-6" />
                </div>
                
                <h3 className="font-display font-semibold text-lg text-white mb-3">
                  {item.title}
                </h3>
                
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
