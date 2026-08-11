import Link from "next/link";
import type { ReactNode } from "react";
import { 
  AppGlyph, 
  BrainGlyph, 
  LogoGlyph, 
  ScreenGlyph, 
  TagGlyph 
} from "@/components/hero/Hero";

type MobileZone = {
  title: string;
  href: string;
  icon: ReactNode;
  isFlagship?: boolean;
};

const mobileZones: MobileZone[] = [
  {
    title: "For Sale",
    href: "/for-sale",
    icon: <TagGlyph />,
  },
  {
    title: "Free Apps",
    href: "/free-apps",
    icon: <AppGlyph />,
  },
  {
    title: "Website Redevelopment",
    href: "/websites",
    icon: <ScreenGlyph />,
  },
  {
    title: "The CLarity Project",
    href: "/clarity-project",
    icon: <LogoGlyph />,
    isFlagship: true,
  },
  {
    title: "AI Creations",
    href: "/ai-creations",
    icon: <BrainGlyph />,
  },
];

export function CategoryRibbonMobile() {
  return (
    <nav 
      aria-label="Mobile Category Navigation" 
      className="relative w-full my-6 pointer-events-auto"
    >
      {/* Edge gradient fade indicator for horizontal scroll */}
      <div 
        className="absolute right-0 top-0 bottom-0 w-8 z-10 pointer-events-none bg-gradient-to-l from-cream to-transparent" 
        aria-hidden="true" 
      />

      <div className="flex items-center gap-2.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-6 py-1 scroll-smooth snap-x snap-mandatory">
        {mobileZones.map((zone) => (
          <Link
            key={zone.title}
            href={zone.href}
            className={`group shrink-0 snap-start flex items-center gap-2.5 h-[46px] min-h-[44px] px-4 rounded-full border transition-all duration-200 active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${
              zone.isFlagship
                ? "bg-[#0c1322] border-gold/60 text-gold-light shadow-[0_2px_12px_rgba(192,136,32,0.2)]"
                : "bg-[#080d1a] border-gold/30 text-white hover:border-gold/50 shadow-sm"
            }`}
          >
            <div 
              className={`shrink-0 flex items-center justify-center w-5 h-5 rounded-full ${
                zone.isFlagship
                  ? "text-gold-light bg-gold/25"
                  : "text-gold"
              }`}
            >
              {zone.icon}
            </div>

            <span className="font-semibold text-[0.825rem] whitespace-nowrap tracking-wide leading-none">
              {zone.title}
            </span>

            {zone.isFlagship && (
              <span className="px-1.5 py-0.5 rounded-full bg-gold/30 border border-gold/50 text-[0.5rem] font-bold tracking-widest text-gold-light uppercase leading-none">
                Flagship
              </span>
            )}
          </Link>
        ))}
      </div>
    </nav>
  );
}
