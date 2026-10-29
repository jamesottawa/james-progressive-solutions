import Image from "next/image";
import Link from "next/link";
import { HeroArtwork } from "./HeroArtwork";
import { CategoryRibbon } from "@/components/home/CategoryRibbon";
import { CategoryRibbonMobile } from "@/components/home/CategoryRibbonMobile";
import sceneWireframesFilled from "../../../public/images/hero/james-hero-wireframes-filled.png";
import psEmblem from "../../../public/images/hero/ps-emblem-clean.png";
import { ReactNode } from "react";

/*
 * Hero reproducing the approved reference image composition.
 *
 * Desktop uses an aspect-ratio wrapper (1672x941) so the absolute coordinates
 * of the text and 5 category cards scale perfectly in sync with the artwork.
 * Capped at 1672px max-width to prevent absurd upscaling on ultrawides.
 */
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
                href="/contact"
                className="inline-flex h-[48px] whitespace-nowrap items-center justify-center gap-2 rounded-[var(--radius-md)] border border-[var(--border-card)] bg-white/50 backdrop-blur-sm px-6 text-[0.875rem] font-semibold text-black/90 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/85 hover:border-gold hover:text-gold-dark hover:shadow-[0_6px_16px_rgba(192,136,32,0.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                Get in touch
              </Link>
            </div>
            
            {/* Trust Badge */}
            <div className="mt-6 flex flex-row items-center text-[0.75rem] font-semibold text-slate-900 drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)] whitespace-nowrap">
              <span className="flex items-center gap-1.5">
                <MapleGlyph /> Canadian Based
              </span>
            </div>
          </div>

        {/* Continuous Category Navigation Ribbon */}
        <CategoryRibbon />
      </div>
    </section>
  );
}

export function HeroMobile() {
  return (
    <section aria-labelledby="hero-heading-mobile" className="relative isolate lg:hidden pt-16 sm:pt-20">
      {/* Mobile/Tablet Fallback Stack */}
      <div className="mx-auto max-w-[var(--content-frame)] px-6 sm:px-8">
        <div className="pt-4 pb-6 motion-safe:animate-[fade-up-in_700ms_ease-out_both]">
          <p className="text-eyebrow font-semibold tracking-[0.2em] text-gold uppercase">
            From Chaos Comes Clarity.
          </p>
          <h1 id="hero-heading-mobile" className="mt-3.5 font-display text-[2.2rem] sm:text-[2.75rem] font-semibold text-black leading-[1.05] tracking-tight">
            Clarity reveals.<br/>
            <span className="relative inline-block text-gold mt-1">
              <span className="absolute inset-0 bg-gold/10 blur-xl rounded-full -z-10 mix-blend-multiply" aria-hidden="true" />
              Progress begins.
            </span>
          </h1>
          <p className="mt-4 max-w-[420px] text-[0.9375rem] text-body/90 leading-[1.5]">
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
              href="/contact"
              className="inline-flex h-[48px] whitespace-nowrap items-center justify-center gap-2 rounded-[var(--radius-md)] border border-[var(--border-card)] bg-white/50 backdrop-blur-sm px-6 text-[0.875rem] font-semibold text-black/90 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/85 hover:border-gold hover:text-gold-dark hover:shadow-[0_6px_16px_rgba(192,136,32,0.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              Get in touch
            </Link>
          </div>

          {/* Trust Badge */}
          <div className="mt-5 flex items-center text-[0.725rem] font-semibold text-slate-900 drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]">
            <span className="flex items-center gap-1.5">
              <MapleGlyph /> Canadian Based
            </span>
          </div>
        </div>

        {/* Artwork Card with final composite treatment */}
        <div className="overflow-hidden rounded-[var(--radius-lg)] border border-gold/30 shadow-[var(--shadow-card)] h-[240px] sm:h-[320px] relative bg-[#070D1A]">
          <Image
            src={sceneWireframesFilled}
            alt="A figure at a multi-monitor desk, surrounded by product, website and app cards rising into a golden vortex above a sunlit city."
            placeholder="blur"
            fill
            className="object-cover object-[70%_25%]"
          />
          {/* PS Emblem Core Overlay with radial bloom */}
          <div className="absolute top-[10%] right-[10%] w-[24%] sm:w-[18%] aspect-square pointer-events-none" aria-hidden="true">
            <div className="absolute -inset-[35%] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,225,160,0.45)_0%,rgba(224,180,92,0.2)_50%,transparent_75%)] blur-xl" />
            <Image
              src={psEmblem}
              alt=""
              fill
              className="object-contain relative z-10 drop-shadow-[0_0_15px_rgba(255,220,130,0.5)]"
            />
          </div>
        </div>
        
        {/* Mobile Horizontal Snap Category Navigation */}
        <CategoryRibbonMobile />
      </div>
    </section>
  );
}

export function CategoryCard({ 
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

export function AmbientNode({ top, left, icon }: { top: string; left: string; icon: ReactNode }) {
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

export function CategoryCardMobile({ title, desc, href, icon }: { title: string; desc: string; href: string; icon: ReactNode }) {
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

export function BrainGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/>
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0-14.5 2Z"/>
    </svg>
  );
}

export function AppGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

export function TagGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
      <line x1="7" y1="7" x2="7.01" y2="7" />
    </svg>
  );
}

export function ScreenGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  );
}

export function LogoGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
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

// Ambient Node Glyphs
export function CodeGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
  );
}

export function SparkleGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l1.912 5.813a2 2 0 001.275 1.275L21 12l-5.813 1.912a2 2 0 00-1.275 1.275L12 21l-1.912-5.813a2 2 0 00-1.275-1.275L3 12l5.813-1.912a2 2 0 001.275-1.275L12 3z"></path>
    </svg>
  );
}

export function GridGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7"></rect>
      <rect x="14" y="3" width="7" height="7"></rect>
      <rect x="14" y="14" width="7" height="7"></rect>
      <rect x="3" y="14" width="7" height="7"></rect>
    </svg>
  );
}

export function NodeGlyph() {
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
