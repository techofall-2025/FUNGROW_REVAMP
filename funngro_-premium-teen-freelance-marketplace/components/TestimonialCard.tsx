import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  age: number;
  city: string;
  earned: string;
  quote: string;
  avatarSeed: string;
  rating: number;
}

export default function TestimonialCard({
  name,
  age,
  city,
  earned,
  quote,
  avatarSeed,
  rating = 5
}: TestimonialCardProps) {
  const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    avatarSeed
  )}&background=00C853&color=09090B&size=80&bold=true`;

  return (
    <div className="flex flex-col bg-zinc-900 border border-zinc-800/80 rounded-2xl p-6 hover:-translate-y-1 hover:border-brand-green/30 hover:shadow-[0_4px_30px_rgba(0,200,83,0.06)] transition-all duration-300">
      {/* Stars Assessment */}
      <div className="flex items-center gap-1 mb-5" aria-label={`Rating: ${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating ? "fill-amber-400 text-amber-400" : "text-zinc-700"
            }`}
          />
        ))}
      </div>

      {/* Narrative Quote */}
      <p className="text-gray-300 text-sm md:text-base leading-relaxed flex-grow mb-6 italic">
        "{quote}"
      </p>

      {/* Profile Details footer */}
      <div className="flex items-center gap-4 pt-4 border-t border-zinc-800/50">
        <img
          src={avatarUrl}
          referrerPolicy="no-referrer"
          width={48}
          height={48}
          className="rounded-full bg-zinc-800 border-2 border-zinc-900 shadow-md transform hover:rotate-6 transition-transform duration-200"
          alt={`Avatar of ${name}, teen freelancer on Funngro`}
        />
        <div className="flex-grow">
          <h4 className="font-display font-semibold text-white text-sm md:text-base">
            {name}, <span className="text-zinc-500 font-normal">{age}</span>
          </h4>
          <span className="text-xs text-zinc-500 font-mono tracking-wider uppercase block">
            {city}
          </span>
        </div>
        <div className="text-right shrink-0">
          <span className="text-xs text-zinc-500 uppercase font-mono block">Earned</span>
          <span className="text-sm md:text-base font-bold text-brand-green tracking-tight">
            {earned}
          </span>
        </div>
      </div>
    </div>
  );
}
