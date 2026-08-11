import Image from "next/image";
import Link from "next/link";
import { 
  AppGlyph, 
  LogoGlyph, 
  ScreenGlyph 
} from "@/components/hero/Hero";
import clarityPanelTexture from "../../../public/images/clarity/clarity-panel-texture.png";

export function FeaturedWork() {
  return (
    <section 
      id="featured-work" 
      aria-labelledby="featured-work-heading"
      className="scroll-mt-24 border-t border-gold/20 bg-cream-deep py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[var(--content-frame)] px-6 sm:px-8 lg:px-[50px]">
        
        {/* Editorial Left-Aligned Section Header */}
        <div className="text-left mb-10 lg:mb-14 max-w-2xl">
          <p className="text-eyebrow font-semibold uppercase tracking-[0.22em] text-gold-dark mb-2">
            Current Focus & Projects
          </p>
          <h2 id="featured-work-heading" className="font-display text-[2rem] sm:text-[2.5rem] font-semibold text-black tracking-tight leading-[1.1]">
            Active initiatives built with purpose.
          </h2>
          <p className="mt-3.5 text-lead text-body/85 leading-relaxed">
            A look at what is currently live, in active development, or continuously expanding across the platform.
          </p>
        </div>

        {/* Asymmetric 12-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* LEFT / FLAGSHIP: The CLarity Project (7 Columns) */}
          <Link
            href="/clarity-project"
            className="lg:col-span-7 group relative flex flex-col justify-between p-8 sm:p-10 rounded-[var(--radius-lg)] bg-[#080f1d] border border-gold/50 shadow-[0_8px_32px_rgba(192,136,32,0.16)] transition-all duration-300 hover:-translate-y-1.5 hover:border-gold hover:shadow-[0_14px_44px_rgba(192,136,32,0.28)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold overflow-hidden"
          >
            {/* Decorative Atmospheric Texture Background Layer (Dark CLarity Render at ~15% Opacity) */}
            <div 
              className="absolute inset-0 pointer-events-none select-none opacity-[0.15]" 
              aria-hidden="true"
            >
              <Image
                src={clarityPanelTexture}
                alt=""
                placeholder="blur"
                fill
                className="object-cover object-right"
                style={{
                  maskImage: "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0) 100%)",
                  WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0) 100%)",
                }}
              />
            </div>

            <div className="relative z-10">
              {/* Top Row: Flagship Eyebrow + Status Badge */}
              <div className="flex items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gold animate-pulse" aria-hidden="true" />
                  <span className="text-[0.7rem] font-bold uppercase tracking-[0.22em] text-gold-light">
                    FLAGSHIP INITIATIVE
                  </span>
                </div>
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[0.6rem] font-bold tracking-[0.18em] uppercase border bg-gold/20 border-gold/40 text-gold-light">
                  IN DEVELOPMENT
                </span>
              </div>

              {/* Bare Icon + Main Title */}
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-6 h-6 text-gold-light shrink-0">
                  <LogoGlyph />
                </div>
                <h3 className="font-display text-[1.65rem] sm:text-[1.85rem] font-semibold text-white tracking-tight leading-snug group-hover:text-gold-light transition-colors">
                  The CLarity Project
                </h3>
              </div>

              {/* Description */}
              <p className="text-[0.95rem] sm:text-[1rem] text-gray-300 font-normal leading-relaxed mb-8 max-w-xl">
                A public-facing application designed to organize complex information and help people move from confusion toward clear next steps.
              </p>
            </div>

            {/* Integrated CTA Link */}
            <div className="relative z-10 pt-6 border-t border-white/10 flex items-center gap-2 text-[0.875rem] font-bold text-gold-light transition-colors">
              <span>Explore Flagship Initiative</span>
              <svg 
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={2.2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </Link>

          {/* RIGHT / STACKED: Websites & Free Apps (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            
            {/* Website Redevelopment */}
            <Link
              href="/websites"
              className="group relative flex-1 flex flex-col justify-between p-6 sm:p-7 rounded-[var(--radius-lg)] bg-[#0a1224] border border-gold/30 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-gold-light/85">
                    WEBSITES
                  </span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[0.55rem] font-bold tracking-[0.16em] uppercase border bg-white/10 border-white/20 text-gray-300">
                    ACTIVE
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <div className="w-5 h-5 text-gold-light shrink-0">
                    <ScreenGlyph />
                  </div>
                  <h3 className="font-display text-[1.25rem] font-semibold text-white tracking-tight leading-snug group-hover:text-gold-light transition-colors">
                    Website Redevelopment
                  </h3>
                </div>

                <p className="text-[0.875rem] text-gray-300 font-normal leading-relaxed mb-6">
                  Modern website redesigns built for real businesses to improve performance, conversion, and brand presence.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-[0.825rem] font-semibold text-gold-light">
                <span>View Redevelopment Work</span>
                <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </Link>

            {/* Free Apps & Tools */}
            <Link
              href="/free-apps"
              className="group relative flex-1 flex flex-col justify-between p-6 sm:p-7 rounded-[var(--radius-lg)] bg-[#0a1224]/80 border border-gold/20 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-gray-400">
                    APPLICATIONS
                  </span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[0.55rem] font-bold tracking-[0.16em] uppercase border bg-white/5 border-white/15 text-gray-400">
                    GROWING COLLECTION
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <div className="w-5 h-5 text-gold/80 shrink-0">
                    <AppGlyph />
                  </div>
                  <h3 className="font-display text-[1.25rem] font-semibold text-white tracking-tight leading-snug group-hover:text-gold-light transition-colors">
                    Free Apps & Tools
                  </h3>
                </div>

                <p className="text-[0.875rem] text-gray-300 font-normal leading-relaxed mb-6">
                  Practical, focused tools built to solve everyday productivity and operational challenges.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-[0.825rem] font-semibold text-gold-light">
                <span>Browse Free Tools</span>
                <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}
