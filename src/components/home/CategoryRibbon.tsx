import Link from "next/link";
import type { ReactNode } from "react";
import { 
  AppGlyph, 
  BrainGlyph, 
  LogoGlyph, 
  ScreenGlyph, 
  TagGlyph 
} from "@/components/hero/Hero";

type RibbonZone = {
  title: string;
  tagline: string;
  href: string;
  icon: ReactNode;
  isFlagship?: boolean;
};

const ribbonZones: RibbonZone[] = [
  {
    title: "For Sale",
    tagline: "Digital Assets",
    href: "/for-sale",
    icon: <TagGlyph />,
  },
  {
    title: "Free Apps",
    tagline: "Productivity",
    href: "/free-apps",
    icon: <AppGlyph />,
  },
  {
    title: "Website Redevelopment",
    tagline: "Redesign & Optimize",
    href: "/websites",
    icon: <ScreenGlyph />,
  },
  {
    title: "The CLarity Project",
    tagline: "Build Journey",
    href: "/clarity-project",
    icon: <LogoGlyph />,
    isFlagship: true,
  },
  {
    title: "AI Creations",
    tagline: "Workflows",
    href: "/ai-creations",
    icon: <BrainGlyph />,
  },
];

export function CategoryRibbon() {
  return (
    <div className="absolute bottom-[13%] left-0 right-0 z-20 w-full max-w-[1480px] mx-auto px-6 sm:px-8 lg:px-[50px] pointer-events-auto">
      <nav aria-label="Category Navigation Ribbon">
        <div className="overflow-hidden rounded-full border border-gold/35 bg-[#080d1a]/85 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,215,0,0.28)]">
          <ul className="grid grid-cols-5 divide-x divide-gold/20">
            {ribbonZones.map((zone) => (
              <li key={zone.title}>
                <Link
                  href={zone.href}
                  className={`group relative flex items-center justify-between h-[52px] px-3.5 xl:px-4.5 transition-all duration-300 ${
                    zone.isFlagship
                      ? "bg-gold/15 hover:bg-gold/22"
                      : "hover:bg-white/8"
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div 
                      className={`shrink-0 flex items-center justify-center w-5 h-5 xl:w-6 xl:h-6 rounded-full transition-colors duration-300 ${
                        zone.isFlagship
                          ? "text-gold-light bg-gold/25"
                          : "text-gold group-hover:text-gold-light"
                      }`}
                    >
                      {zone.icon}
                    </div>

                    <div className="flex items-center gap-2 min-w-0">
                      <span className="font-semibold text-white tracking-wide text-[0.725rem] xl:text-[0.8125rem] leading-none truncate group-hover:text-gold-light transition-colors">
                        {zone.title}
                      </span>

                      {zone.isFlagship ? (
                        <span className="hidden min-[1440px]:inline-flex items-center px-1.5 py-0.5 rounded-full bg-gold/30 border border-gold/50 text-[0.48rem] font-bold tracking-[0.16em] text-gold-light uppercase shrink-0">
                          Flagship
                        </span>
                      ) : (
                        <span className="hidden min-[1440px]:inline-block text-[0.625rem] text-gray-400 font-medium leading-none truncate shrink-0">
                          &bull; {zone.tagline}
                        </span>
                      )}
                    </div>
                  </div>

                  <svg 
                    className={`w-3.5 h-3.5 shrink-0 transition-transform duration-300 ${
                      zone.isFlagship
                        ? "text-gold-light group-hover:translate-x-1"
                        : "text-gold/50 group-hover:text-gold-light group-hover:translate-x-1"
                    }`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}
