import { ArrowLeft, RefreshCw } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex-grow min-h-screen bg-zinc-950 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      {/* Background Ambience decorative glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-brand-green/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center gap-6 max-w-lg">
        
        {/* Large gradient tracking code */}
        <h1 className="text-8xl md:text-9xl font-display font-black tracking-tighter bg-gradient-to-b from-brand-green via-emerald-600 to-zinc-950 bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-300">
          404
        </h1>

        <div>
          <h2 className="text-xl md:text-2xl font-display font-bold text-white tracking-tight mb-2">
            This page doesn't exist yet.
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            The resource coordinate you are attempting to trigger is either moved, deprecated, or under ongoing sandbox build. Reach out on our primary nodes below.
          </p>
        </div>

        {/* Choice of actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center mt-4">
          <a
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-green text-zinc-950 font-semibold font-sans px-6 py-3 rounded-xl hover:bg-brand-green-hover hover:scale-105 active:scale-95 transition-all text-sm shrink-0 shadow-glow-green"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Teen Portal
          </a>
          <a
            href="/companies"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-zinc-750 text-gray-200 hover:border-brand-green hover:text-brand-green font-semibold font-sans px-6 py-3 rounded-xl hover:scale-105 active:scale-95 transition-all text-sm shrink-0"
          >
            Back to Companies
          </a>
        </div>
      </div>
    </div>
  );
}
