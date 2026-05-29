"use client";

import { useInView } from "../hooks/useInView";
import { useCountUp } from "../hooks/useCountUp";
import { StatItem } from "../lib/constants";

interface StatsBarProps {
  stats: StatItem[];
}

function StatCounter({ item, trigger }: { item: StatItem; trigger: boolean }) {
  const animatedNumber = useCountUp(item.value, {
    prefix: item.prefix || "",
    suffix: item.suffix || "",
    duration: 2200
  }, trigger);

  return (
    <div className="flex flex-col items-center text-center p-4">
      <span className="font-display font-black text-4xl md:text-5xl text-brand-green tracking-tight drop-shadow-[0_0_15px_rgba(0,200,83,0.15)]">
        {animatedNumber}
      </span>
      <span className="text-xs md:text-sm text-gray-400 font-medium tracking-wide mt-2">
        {item.label}
      </span>
    </div>
  );
}

export default function StatsBar({ stats }: StatsBarProps) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div
      ref={ref}
      className="w-full bg-zinc-900/60 border border-zinc-800/80 rounded-3xl p-6 md:p-8 backdrop-blur-sm shadow-[0_4px_30px_rgba(0,0,0,0.2)]"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4 items-center">
        {stats.map((item, index) => {
          const isNotLast = index < stats.length - 1;
          return (
            <div key={index} className="relative flex justify-center w-full">
              <StatCounter item={item} trigger={inView} />
              
              {/* Vertical separators for large layouts */}
              {isNotLast && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 w-[1px] h-10 bg-zinc-800" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
