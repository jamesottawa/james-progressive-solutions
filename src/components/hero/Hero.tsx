import Image from "next/image";
import Link from "next/link";
import { HeroArtwork } from "./HeroArtwork";
import sceneProduction from "../../../public/images/hero/james-hero-clean-plate-final.png";
import { ReactNode } from "react";

/*
 * Hero reproducing the approved reference image composition.
 *
 * Desktop uses an aspect-ratio wrapper (1672x941) so the absolute coordinates
 * of the text and 5 category cards scale perfectly in sync with the artwork.
 * Capped at 1672px max-width to prevent absurd upscaling on ultrawides.
 */
const SHOW_DESKTOP_FLOATING_CARDS = false;

export function Hero() {
  return (
    <section 
      aria-labelledby="hero-heading" 
      className="relative isolate overflow-hidden w-full hidden lg:block aspect-[1672/941]"
    >
      <HeroArtwork />

      {/* Desktop Overlay Content Container */}
      <div className="absolute inset-0 z-10 w-full h-full">
        
        {/* Left Side: Main Text content */}
        <div className="absolute top-[13%] left-[6%] w-[46%] max-w-[660px] pt-2 motion-safe:animate-[fade-up-in_700ms_ease-out_both]">
            <p className="text-eyebrow font-semibold tracking-[0.2em] text-gold uppercase">
              From Chaos Comes Clarity.
            </p>

            <h1 id="hero-heading" className="mt-3.5 font-display text-hero tracking-tight leading-[0.92]">
              <span className="font-medium text-black/85 block whitespace-nowrap">Clarity reveals.</span>
              <span className="relative inline-block font-semibold text-gold mt-0.5 whitespace-nowrap">
                <span className="absolute inset-0 bg-gold/10 blur-xl rounded-full -z-10 mix-blend-multiply" aria-hidden="true" />
                Progress begins.
              </span>
            </h1>

            <p className="mt-6 max-w-[340px] text-[0.9375rem] leading-[1.5] text-body/85">
              AI solutions, practical tools, and thoughtful redevelopment built to turn ideas into progress.
            </p>

            <div className="mt-7 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <Link
                href="/work"
                className="group inline-flex h-[48px] whitespace-nowrap items-center justify-center gap-2 rounded-[var(--radius-md)] bg-[linear-gradient(180deg,var(--gold-grad-from),var(--gold-grad-to))] px-6 text-[0.875rem] font-semibold text-black shadow-[0_3px_10px_rgba(192,136,32,0.2),inset_0_1px_0_rgba(255,255,255,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_16px_rgba(192,136,32,0.35),inset_0_1px_0_rgba(255,255,255,0.4)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-dark"
              >
                Explore Solutions
                <ArrowGlyph />
              </Link>
              <Link
                href="/about"
                className="inline-flex h-[48px] whitespace-nowrap items-center justify-center gap-2 rounded-[var(--radius-md)] border border-[var(--border-card)] bg-white/50 backdrop-blur-sm px-6 text-[0.875rem] font-semibold text-black/90 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/85 hover:border-gold hover:text-gold-dark hover:shadow-[0_6px_16px_rgba(192,136,32,0.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                Work With Us
              </Link>
            </div>
            
            {/* Trust Badges */}
            <div className="mt-6 flex flex-row items-center gap-x-5 text-[0.75rem] font-semibold text-slate-900 drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)] whitespace-nowrap">
              <span className="flex items-center gap-1.5">
                <ShieldGlyph /> Secure & Reliable
              </span>
              <span className="flex items-center gap-1.5">
                <MapleGlyph /> Canadian Based
              </span>
              <span className="flex items-center gap-1.5">
                <TargetGlyph /> Results Focused
              </span>
            </div>
          </div>

        {/* Desktop Absolute Category Cards (Temporarily hidden for hero evaluation pass) */}
        {SHOW_DESKTOP_FLOATING_CARDS && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="relative w-full h-full pointer-events-auto">
              <CategoryCard 
                title="AI Creations" 
                desc="Intelligent content built for impact." 
                href="/ai-creations" 
                top="var(--card-ai-top)" 
                left="var(--card-ai-left)" 
                icon={<BrainGlyph />} 
              />
              <CategoryCard 
                title="Free Apps" 
                desc="Tools designed to simplify your day." 
                href="/free-apps" 
                top="var(--card-free-top)" 
                left="var(--card-free-left)" 
                icon={<AppGlyph />} 
              />
              <CategoryCard 
                title="For Sale" 
                desc="Premium digital assets and more." 
                href="/for-sale" 
                top="var(--card-sale-top)" 
                left="var(--card-sale-left)" 
                icon={<TagGlyph />} 
              />
              <CategoryCard 
                title="Website Redevelopment" 
                desc="Modernize. Optimize. Outperform." 
                href="/websites" 
                top="var(--card-web-top)" 
                left="var(--card-web-left)" 
                icon={<ScreenGlyph />} 
              />
              <CategoryCard 
                title="The CLarity Project" 
                desc="Giving back through purpose and impact." 
                href="/clarity-project" 
                top="var(--card-clarity-top)" 
                left="var(--card-clarity-left)" 
                icon={<LogoGlyph />} 
              />

              {/* Ambient Nodes (overlaying background wireframes) */}
              <AmbientNode top="18%" left="38%" icon={<CodeGlyph />} />
              <AmbientNode top="35%" left="75%" icon={<SparkleGlyph />} />
              <AmbientNode top="65%" left="86%" icon={<GridGlyph />} />
              <AmbientNode top="52%" left="35%" icon={<NodeGlyph />} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export function HeroMobile() {
  return (
    <section aria-labelledby="hero-heading-mobile" className="relative isolate lg:hidden">
      {/* Mobile/Tablet Fallback Stack */}
      <div className="mx-auto max-w-[var(--content-frame)] px-6 sm:px-8 mt-6">
        <div className="pt-2 pb-6 motion-safe:animate-[fade-up-in_700ms_ease-out_both]">
          <p className="text-eyebrow font-semibold tracking-[0.19em] text-gold uppercase">
            From Chaos Comes Clarity.
          </p>
          <h1 id="hero-heading-mobile" className="mt-4 font-display text-[2.2rem] sm:text-[2.75rem] font-semibold text-black leading-[1.05] tracking-tight">
            Clarity reveals.<br/>
            <span className="relative inline-block text-gold mt-1">
              <span className="absolute inset-0 bg-gold/10 blur-xl rounded-full -z-10 mix-blend-multiply" aria-hidden="true" />
              Progress begins.
            </span>
          </h1>
          <p className="mt-4 max-w-[420px] text-[0.9375rem] text-body/90 leading-[1.5]">
            AI solutions, practical tools, and thoughtful redevelopment built to turn ideas into progress.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/work"
              className="group inline-flex h-[50px] whitespace-nowrap items-center justify-center gap-2.5 rounded-[var(--radius-md)] bg-[linear-gradient(180deg,var(--gold-grad-from),var(--gold-grad-to))] px-8 text-[0.95rem] font-bold text-black shadow-[0_4px_12px_rgba(192,136,32,0.25),inset_0_1px_0_rgba(255,255,255,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(192,136,32,0.4),inset_0_1px_0_rgba(255,255,255,0.4)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-dark"
            >
              Explore Solutions
              <ArrowGlyph />
            </Link>
            <Link
              href="/about"
              className="inline-flex h-[50px] whitespace-nowrap items-center justify-center gap-2.5 rounded-[var(--radius-md)] border-2 border-[var(--border-card)] bg-white/40 backdrop-blur-sm px-8 text-[0.95rem] font-bold text-black shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/80 hover:border-gold hover:text-gold-dark hover:shadow-[0_8px_20px_rgba(192,136,32,0.15)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
            >
              Work With Us
            </Link>
          </div>
        </div>

        <div className="overflow-hidden rounded-[var(--radius-lg)] shadow-[var(--shadow-card)] h-[280px] sm:h-[340px] relative">
          <Image
            src={sceneProduction}
            alt="A figure at a multi-monitor desk, surrounded by a swirl of product, website and app cards rising into a golden vortex above a sunlit city."
            placeholder="blur"
            fill
            className="object-cover object-[center_bottom]"
          />
        </div>
        
        <div className="mt-8 flex flex-col gap-4 pb-12">
           <CategoryCardMobile title="AI Creations" desc="Intelligent content built for impact." href="/ai-creations" icon={<BrainGlyph />} />
           <CategoryCardMobile title="Free Apps" desc="Tools designed to simplify your day." href="/free-apps" icon={<AppGlyph />} />
           <CategoryCardMobile title="For Sale" desc="Premium digital assets and more." href="/for-sale" icon={<TagGlyph />} />
           <CategoryCardMobile title="Website Redevelopment" desc="Modernize. Optimize. Outperform." href="/websites" icon={<ScreenGlyph />} />
           <CategoryCardMobile title="The CLarity Project" desc="Giving back through purpose and impact." href="/clarity-project" icon={<LogoGlyph />} />
        </div>
      </div>
    </section>
  );
}

function CategoryCard({ 
  title, 
  desc, 
  href, 
  top, 
  left, 
  icon 
}: { 
  title: string; 
  desc: string; 
  href: string; 
  top: string; 
  left: string; 
  icon: ReactNode; 
}) {
  return (
    <Link 
      href={href}
      className="absolute flex items-start gap-2 w-[13.5%] p-1.5 xl:py-1.5 xl:px-2 rounded-[11px] bg-[#0a1224]/75 border border-gold/25 text-white shadow-[0_4px_20px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#0a1224]/85 hover:border-gold/45 hover:shadow-[0_8px_28px_rgba(192,136,32,0.18),inset_0_1px_0_rgba(255,255,255,0.1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold group"
      style={{ top, left }}
    >
      <div className="shrink-0 flex items-center justify-center w-6 h-6 xl:w-8 xl:h-8 rounded-full bg-white/10 border border-white/15 text-gold transition-colors duration-300 group-hover:bg-gold/15 group-hover:border-gold/40 group-hover:text-gold-light">
        {icon}
      </div>
      <div className="pt-0.5">
        <h3 className="font-semibold text-white tracking-wide text-[0.62rem] xl:text-[0.75rem] leading-tight mb-0.5">{title}</h3>
        <p className="text-[0.53rem] xl:text-[0.66rem] text-gray-300 font-medium leading-snug">{desc}</p>
      </div>
    </Link>
  );
}

function AmbientNode({ top, left, icon }: { top: string; left: string; icon: ReactNode }) {
  return (
    <div 
      className="absolute flex items-center justify-center w-6 h-6 text-gold/40 pointer-events-none"
      style={{ top, left }}
      aria-hidden="true"
    >
      {icon}
    </div>
  );
}

function CategoryCardMobile({ title, desc, href, icon }: { title: string; desc: string; href: string; icon: ReactNode }) {
  return (
    <Link 
      href={href}
      className="flex items-start gap-4 p-5 rounded-[var(--radius-lg)] bg-[#0c1322] border border-gold/20 text-white shadow-lg active:scale-[0.98] transition-all hover:border-gold/40 group"
    >
      <div className="shrink-0 flex items-center justify-center w-11 h-11 rounded-full bg-white/5 border border-white/10 text-gold transition-colors group-hover:bg-gold/10 group-hover:border-gold/30">
        {icon}
      </div>
      <div className="pt-0.5">
        <h3 className="font-semibold text-white tracking-wide text-[0.95rem] leading-tight mb-1.5">{title}</h3>
        <p className="text-[0.85rem] text-gray-400 font-medium leading-relaxed">{desc}</p>
      </div>
    </Link>
  );
}

// Minimal Glyphs for the cards & buttons
function ArrowGlyph() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
      <path d="M3 8h9.5M8.5 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BrainGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/>
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/>
    </svg>
  );
}

function AppGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

function TagGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
      <line x1="7" y1="7" x2="7.01" y2="7" />
    </svg>
  );
}

function ScreenGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  );
}

function LogoGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}

function ShieldGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 text-gold/80" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function MapleGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 text-gold/80" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L9 9H5l3.5 4.5L7 20l5-3.5 5 3.5-1.5-6.5L19 9h-4L12 2z" />
    </svg>
  );
}

function TargetGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 text-gold/80" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

// Ambient Node Glyphs
function CodeGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
  );
}

function SparkleGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l1.912 5.813a2 2 0 001.275 1.275L21 12l-5.813 1.912a2 2 0 00-1.275 1.275L12 21l-1.912-5.813a2 2 0 00-1.275-1.275L3 12l5.813-1.912a2 2 0 001.275-1.275L12 3z"></path>
    </svg>
  );
}

function GridGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7"></rect>
      <rect x="14" y="3" width="7" height="7"></rect>
      <rect x="14" y="14" width="7" height="7"></rect>
      <rect x="3" y="14" width="7" height="7"></rect>
    </svg>
  );
}

function NodeGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3"></circle>
      <circle cx="6" cy="12" r="3"></circle>
      <circle cx="18" cy="19" r="3"></circle>
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
    </svg>
  );
}
