"use client";

import { useState } from "react";

const WORK_ITEMS = [
  { slug: "WEBSITES", label: "Local business web redevelopment" },
  { slug: "APPLICATIONS", label: "Focused tools & utilities" },
  { slug: "AI", label: "Experimental & generative work" },
  { slug: "CLARITY", label: "Ongoing flagship R&D" },
] as const;

/**
 * AboutHeroIndex
 *
 * An interactive editorial index for "THE WORK" on the About page hero.
 * Features a subtle deep-navy tinted wash on hover/focus, darkened legible descriptions,
 * muted gold category slugs, and a background JPS watermark with a restrained cool navy tone.
 */
export function AboutHeroIndex() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="relative">
      {/* Faint JPS typographic watermark — restrained cool navy undertone */}
      <span
        aria-hidden="true"
        className={`pointer-events-none select-none absolute -top-8 right-0 font-display text-[7.5rem] sm:text-[8.5rem] lg:text-[9.5rem] font-semibold leading-none tracking-tight transition-all duration-500 ease-out motion-reduce:transition-none ${
          activeIndex !== null
            ? "text-[#16233E]/[0.085] -translate-y-0.5"
            : "text-[#16233E]/[0.05] translate-y-0"
        }`}
      >
        JPS
      </span>

      <div className="relative">
        <p className="text-[0.6rem] font-bold uppercase tracking-[0.25em] text-[#A8761C]/75 mb-3">
          The Work
        </p>

        {/* Gold hairline spanning full list width */}
        <div className="border-t border-[#A8761C]/25 mb-0" />

        <ul className="divide-y divide-black/[0.05]" role="list">
          {WORK_ITEMS.map((item, i) => {
            const isHighlighted = activeIndex === i;

            return (
              <li
                key={item.slug}
                tabIndex={0}
                role="listitem"
                onMouseEnter={() => setActiveIndex(i)}
                onMouseLeave={() => setActiveIndex(null)}
                onFocus={() => setActiveIndex(i)}
                onBlur={() => setActiveIndex(null)}
                className={`group flex items-baseline py-[0.55rem] px-2.5 -mx-2.5 rounded-[var(--radius-sm)] transition-all duration-200 ease-out cursor-default outline-none focus-visible:ring-1 focus-visible:ring-[#0B132B]/30 motion-reduce:transition-none ${
                  isHighlighted ? "bg-[#0B132B]/[0.035]" : "bg-transparent"
                }`}
              >
                {/* Category Slug (Muted Gold) */}
                <span
                  className={`shrink-0 font-mono text-[0.625rem] font-bold uppercase tracking-[0.2em] w-[7.5rem] transition-colors duration-200 ${
                    isHighlighted ? "text-[#875c10]" : "text-[#A8761C]"
                  }`}
                >
                  {item.slug}
                </span>

                {/* Separator Guide */}
                <span
                  className={`font-mono text-[0.625rem] mr-3 transition-all duration-200 ${
                    isHighlighted
                      ? "text-[#0B132B] opacity-100 scale-110"
                      : "text-[#A8761C]/40 opacity-75"
                  }`}
                >
                  ·
                </span>

                {/* Description (Darkened & Crisp) */}
                <span
                  className={`text-[0.78rem] leading-snug transition-colors duration-200 ${
                    isHighlighted
                      ? "text-[#0B132B] font-medium"
                      : "text-body/80 font-normal"
                  }`}
                >
                  {item.label}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
