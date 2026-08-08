import Image from "next/image";
import Link from "next/link";
import { HeroArtwork } from "./HeroArtwork";
import heroSceneFinal from "../../../public/images/hero/hero-scene-final.png";

/*
 * Hero reproducing the approved reference image's upper composition.
 *
 * Measured from the reference (1672x941):
 *   eyebrow ink       y=151..161
 *   H1 line tops      y=181 / 253 / 325  (exact 72px rhythm, 92px type)
 *   body 3 lines      y=413 / 438 / 463  (25px rhythm), wraps at x=478
 *   buttons           y=510..562; gold 110..308 (199x53), outline 328..490
 *   text left edge    x=112 (22px inside the 90px content gutter)
 *   section extent    y=95..650 => 555px tall
 *
 * The artwork is a full-bleed background, not a side column — in the
 * reference the scene spans edge to edge and the headline sits over its left
 * third.
 */
export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative isolate overflow-hidden lg:flex-1 lg:min-h-[555px]">
      <HeroArtwork />

      <div className="relative z-10 mx-auto w-full max-w-[var(--content-frame)] px-6 sm:px-8 lg:px-[50px]">
        <div className="max-w-[600px] pt-10 motion-safe:animate-[fade-up-in_700ms_ease-out_both] lg:pt-[50px] lg:pl-[22px]">
          <p className="text-eyebrow font-semibold tracking-[0.19em] text-gold uppercase">
            Building What Matters.
          </p>

          <h1 id="hero-heading" className="mt-4 font-display text-hero font-semibold text-black">
            Progressive Solutions for <span className="text-gold">Everybody.</span>
          </h1>

          <p className="mt-5 max-w-[400px] text-lead text-body">
            Products for sale. Powerfully redesigned websites. AI creations. Free apps that help.
            And the real story behind the CLarity build journey.
          </p>

          <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/work"
              className="inline-flex h-[53px] items-center justify-center gap-2.5 rounded-[var(--radius-sm)] bg-[linear-gradient(180deg,var(--gold-grad-from),var(--gold-grad-to))] px-7 text-[0.95rem] font-semibold text-black shadow-[0_1px_2px_rgba(60,45,20,0.18)] transition-[filter] duration-150 hover:brightness-[1.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-dark"
            >
              Explore Everything
              <ArrowGlyph />
            </Link>
            <Link
              href="/about"
              className="inline-flex h-[53px] items-center justify-center gap-2.5 rounded-[var(--radius-sm)] border border-[var(--border-card)] bg-white/85 px-6 text-[0.95rem] font-semibold text-black transition-colors duration-150 hover:border-gold hover:text-gold-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              <PersonGlyph />
              About James
            </Link>
          </div>
        </div>

        {/*
          Narrow viewports get a tight, intentional crop of the right side 
          of the artwork to hide the baked text and prioritize the vortex and desk.
        */}
        <div className="mt-10 overflow-hidden rounded-[var(--radius-lg)] shadow-[var(--shadow-card)] lg:hidden h-[280px] sm:h-[340px] relative">
          <Image
            src={heroSceneFinal}
            alt="A figure at a multi-monitor desk, surrounded by a swirl of product, website and app cards rising into a golden vortex above a sunlit city."
            placeholder="blur"
            className="absolute top-0 right-0 w-[180%] max-w-none h-auto sm:w-[150%]"
          />
        </div>
      </div>
    </section>
  );
}

function ArrowGlyph() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" aria-hidden="true">
      <path
        d="M3 8h9.5M8.5 4l4 4-4 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PersonGlyph() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="10" cy="7" r="3.1" />
        <path d="M3.8 16.5c0-3.1 2.8-5.2 6.2-5.2s6.2 2.1 6.2 5.2" />
      </g>
    </svg>
  );
}
