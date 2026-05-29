import {
  Smartphone,
  User,
  BadgeCheck,
  FileText,
  Users,
  CheckSquare,
  CreditCard,
  ArrowRight
} from "lucide-react";
import { HowItWorksStep } from "../lib/constants";

interface HowItWorksProps {
  steps: HowItWorksStep[];
  title: string;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Smartphone,
  User,
  BadgeCheck,
  FileText,
  Users,
  CheckSquare,
  CreditCard
};

export default function HowItWorks({ steps, title }: HowItWorksProps) {
  return (
    <section aria-labelledby="steps-heading" className="py-24 px-6 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto position-relative z-10">
        
        {/* Caption */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs text-brand-green tracking-widest font-mono uppercase font-semibold">
            Simple & Transparent Processes
          </span>
          <h2
            id="steps-heading"
            className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight mt-3 mb-6"
          >
            {title}
          </h2>
          <p className="text-sm md:text-base text-gray-400 leading-relaxed">
            From setup to complete execution, our process is fully digital, fast, and engineered for high quality outcomes.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          
          {/* Connector Line for Desktop */}
          <div className="hidden xl:block absolute top-[68px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-brand-green/40 via-brand-green/10 to-transparent z-0" />

          {steps.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Smartphone;
            const isLast = idx === steps.length - 1;

            return (
              <div
                key={item.step}
                className="group relative bg-zinc-900 border border-zinc-800/80 rounded-2xl p-6 hover:border-brand-green/30 hover:bg-zinc-900/80 hover:-translate-y-1 transition-all duration-300 flex flex-col z-10 shadow-lg"
              >
                {/* Step badge and icon */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-xl bg-brand-green/10 text-brand-green hover:bg-brand-green/20 flex items-center justify-center p-3 border border-brand-green/20 group-hover:scale-110 transition-transform duration-200">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-green text-zinc-950 font-display font-black text-sm shadow-[0_0_15px_rgba(0,200,83,0.3)]">
                    {item.step}
                  </span>
                </div>

                {/* Info Text */}
                <h3 className="font-display font-bold text-lg text-white mb-3 group-hover:text-brand-green transition-colors duration-200">
                  {item.title}
                </h3>
                
                <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                  {item.description}
                </p>

                {/* Decorative Next arrow for lists */}
                {!isLast && (
                  <div className="hidden xl:block absolute -right-6 top-[54px] z-20 text-brand-green/30 group-hover:text-brand-green/80 group-hover:translate-x-1 transition-all duration-300">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
