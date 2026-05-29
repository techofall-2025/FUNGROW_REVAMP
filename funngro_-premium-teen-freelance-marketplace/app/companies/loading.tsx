import { Loader2 } from "lucide-react";

export default function CompaniesLoading() {
  return (
    <div className="flex-grow min-h-[85vh] w-full flex flex-col items-center justify-center p-6 text-center bg-zinc-950 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-brand-green/5 blur-[90px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center gap-4 animate-pulse">
        {/* Spinner */}
        <div className="relative flex items-center justify-center">
          <Loader2 className="w-10 h-10 text-brand-green animate-spin" />
          <div className="absolute w-12 h-12 rounded-full border-2 border-dashed border-brand-green/20 animate-spin-slow shrink-0" />
        </div>
        
        <div>
          <span className="font-display font-medium text-white tracking-tight text-sm uppercase block">
            Loading Company Portal
          </span>
          <span className="text-[10px] font-mono text-zinc-550 block mt-1">
            Reindexing Verified Gen-Z Creator Rosters...
          </span>
        </div>
      </div>
    </div>
  );
}
