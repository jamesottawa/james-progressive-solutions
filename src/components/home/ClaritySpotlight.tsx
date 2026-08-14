import Link from "next/link";
import { LogoGlyph } from "@/components/hero/Hero";

type SpotlightPoint = {
  title: string;
  desc: string;
};

const spotlightPoints: SpotlightPoint[] = [
  {
    title: "Organize scattered facts",
    desc: "Gather disparate details, notes, and documentation into one structured source of context.",
  },
  {
    title: "Build timelines & connections",
    desc: "Map dependencies, chronological events, and relationships between complex information.",
  },
  {
    title: "Surface gaps & next steps",
    desc: "Highlight missing information and establish clear, actionable priorities.",
  },
  {
    title: "Preserve project evolution",
    desc: "Retain complete history and context as the project continuously develops over time.",
  },
];

export function ClaritySpotlight() {
  return (
    <section 
      id="clarity-spotlight" 
      aria-labelledby="clarity-spotlight-heading"
      className="scroll-mt-24 border-t border-gold/20 bg-[#070d1a] py-14 sm:py-16 lg:py-20 text-white relative overflow-hidden"
    >
      {/* Subtle Background Glow Accent */}
      <div 
        className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2" 
        aria-hidden="true" 
      />

      <div className="mx-auto max-w-[var(--content-frame)] px-6 sm:px-8 lg:px-[50px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Copy, Points & CTA */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 border border-gold/35 text-gold-light text-[0.68rem] font-bold tracking-[0.2em] uppercase mb-5">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" aria-hidden="true" />
              Problem-Solving Core
            </div>

            <h2 id="clarity-spotlight-heading" className="font-display text-[2rem] sm:text-[2.5rem] font-semibold text-white leading-[1.1] tracking-tight">
              CLarity is being built to turn scattered facts into organized progress.
            </h2>

            <p className="mt-4 text-[0.95rem] sm:text-[1rem] text-gray-300 font-normal leading-relaxed max-w-2xl">
              A structured workspace engineered to map dependencies, surface information gaps, and preserve working context as projects evolve over time.
            </p>

            {/* 4 Supporting Points Grid */}
            <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-5 pt-5 border-t border-white/10">
              {spotlightPoints.map((pt, idx) => (
                <div key={pt.title} className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 font-semibold text-white text-[0.9rem]">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-gold/20 text-gold-light text-[0.65rem] font-bold shrink-0">
                      {idx + 1}
                    </span>
                    {pt.title}
                  </div>
                  <p className="text-[0.8rem] text-gray-400 leading-normal pl-7">
                    {pt.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Primary CTA */}
            <div className="mt-8 pt-2 flex items-center gap-4">
              <Link
                href="/clarity-project"
                className="group inline-flex h-[48px] items-center justify-center gap-2.5 rounded-[var(--radius-md)] bg-[linear-gradient(180deg,var(--gold-grad-from),var(--gold-grad-to))] px-7 text-[0.875rem] font-bold text-black shadow-[0_4px_20px_rgba(192,136,32,0.25),inset_0_1px_0_rgba(255,255,255,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(192,136,32,0.4)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-dark"
              >
                Explore the CLarity Project
                <svg 
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  strokeWidth={2.2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Interface Framing Panel */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-gold/30 bg-[#0a1224]/90 p-6 sm:p-8 backdrop-blur-md shadow-[0_12px_48px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.08)] relative">
              
              {/* Window Bar */}
              <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-gold/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-gold/30" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                </div>
                <span className="text-[0.625rem] font-bold tracking-[0.2em] text-gold-light/80 uppercase font-mono">
                  CLARITY // CORE FOCUS
                </span>
              </div>

              {/* Architectural Structure List */}
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 transition-colors hover:border-gold/30">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[0.7rem] font-bold text-gold uppercase tracking-wider">01. Fact Organization</span>
                    <span className="text-[0.625rem] text-gray-400 font-mono">STRUCTURED</span>
                  </div>
                  <p className="text-[0.8rem] text-gray-300">Contextual gathering & scattered data alignment</p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 transition-colors hover:border-gold/30">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[0.7rem] font-bold text-gold uppercase tracking-wider">02. Timeline Mapping</span>
                    <span className="text-[0.625rem] text-gray-400 font-mono">CONNECTED</span>
                  </div>
                  <p className="text-[0.8rem] text-gray-300">Chronological dependency & event links</p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 transition-colors hover:border-gold/30">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[0.7rem] font-bold text-gold uppercase tracking-wider">03. Gap & Action Analysis</span>
                    <span className="text-[0.625rem] text-gray-400 font-mono">ACTIONABLE</span>
                  </div>
                  <p className="text-[0.8rem] text-gray-300">Identifying missing information & next priorities</p>
                </div>
              </div>

              {/* Status Pill Footer */}
              <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center text-gold-light shrink-0">
                    <LogoGlyph />
                  </div>
                  <span className="text-[0.725rem] font-semibold text-white">Public Build Journey</span>
                </div>
                <span className="text-[0.625rem] font-bold tracking-widest text-gold-light bg-gold/15 px-2.5 py-1 rounded-full border border-gold/30 uppercase">
                  Active Build
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
