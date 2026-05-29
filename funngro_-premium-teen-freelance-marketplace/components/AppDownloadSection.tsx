export default function AppDownloadSection() {
  return (
    <section
      id="app-download-section"
      className="py-24 px-6 bg-zinc-950 border-t border-zinc-900 relative overflow-hidden"
    >
      {/* Immersive Emerald Radial Shadow Flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-green/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto bg-zinc-900/60 border border-zinc-800/80 rounded-3xl p-8 md:p-16 backdrop-blur-sm relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Texts */}
        <div className="max-w-xl text-center lg:text-left">
          <span className="text-xs text-brand-green tracking-widest font-mono font-bold uppercase">
            Start Your Freelance Career
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-black text-white tracking-tight mt-3 mb-6">
            Your first rupee is <br className="hidden md:inline" />3 taps away.
          </h2>
          <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-8">
            Install India’s #1 teenage earnings portal today. Work on legimate projects, complete easy tasks, and build your digital bank portfolio safely. Completely free to join, zero investments.
          </p>
          
          {/* Target App Downloading Badges */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            
            {/* Google Play Store Badge */}
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center gap-3 bg-zinc-800 border border-zinc-750 hover:bg-zinc-800/60 hover:border-brand-green hover:-translate-y-0.5 active:translate-y-0 text-white font-sans rounded-xl px-6 py-3 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-green/50"
              aria-label="Download Funngro on Google Play Store"
            >
              <svg className="w-6 h-6 text-white shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5,3.14L15.3,13.43L18.19,10.54L5.3,3.31C5.2,3.25 5.1,3.19 5,3.14M3.56,3.8L3.5,3.85V19.79L13.88,12L3.56,3.8M5,20.5C5.1,20.45 5.2,20.39 5.3,20.33L18.7,12.79L15.3,13.43L5,20.5M19.78,11.45L16.72,13.17L14.59,12L16.72,10.83L19.78,12.55C19.92,12.63 20,12.77 20,12.92C19.98,13.07 19.9,11.53 19.78,11.45Z" />
              </svg>
              <div className="text-left leading-tight">
                <span className="text-[10px] text-zinc-400 block uppercase font-medium">Get it on</span>
                <span className="text-sm font-semibold tracking-tight">Google Play</span>
              </div>
            </a>

            {/* Apple App Store Badge */}
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center gap-3 bg-zinc-800 border border-zinc-750 hover:bg-zinc-800/60 hover:border-brand-green hover:-translate-y-0.5 active:translate-y-0 text-white font-sans rounded-xl px-6 py-3 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-green/50"
              aria-label="Download Funngro on Apple App Store"
            >
              <svg className="w-6 h-6 text-white shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.1,16.67C20.08,16.74 19.67,18.11 18.71,19.5M15.97,4.17C16.63,3.37 17.07,2.28 16.95,1C16,1.04 14.9,1.6 14.24,2.38C13.68,3.04 13.19,4.14 13.34,5.39C14.39,5.47 15.4,4.88 15.97,4.17Z" />
              </svg>
              <div className="text-left leading-tight">
                <span className="text-[10px] text-zinc-400 block uppercase font-medium">Download on the</span>
                <span className="text-sm font-semibold tracking-tight">App Store</span>
              </div>
            </a>

          </div>
        </div>

        {/* Dynamic QR Scan Box */}
        <div className="flex flex-col items-center gap-3 bg-zinc-950/80 border border-zinc-800 p-6 rounded-2xl w-full max-w-[200px] shrink-0 transform hover:scale-105 transition-transform duration-200">
          <div className="w-[120px] h-[120px] border-2 border-dashed border-zinc-700 bg-zinc-900 rounded-xl flex flex-col items-center justify-center p-3 text-center" aria-hidden="true">
            {/* Elegant SVG grid resembling QR template structure */}
            <svg className="w-16 h-16 text-brand-green/35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="6" height="6" />
              <rect x="16" y="2" width="6" height="6" />
              <rect x="2" y="16" width="6" height="6" />
              <path d="M16 16h2v2h-2zm4 4h2v2h-2zm-4 4h2v-2h-2zm4-4h2v-2h-2z" />
            </svg>
          </div>
          <span className="text-xs font-mono font-semibold text-gray-300">Scan to Download</span>
          <span className="text-[10px] text-zinc-500 text-center font-sans">Requires Android 8+<br />or iOS 14+</span>
        </div>

      </div>
    </section>
  );
}
