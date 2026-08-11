"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { SVGProps } from "react";
import { primaryNavItems } from "@/data/navigation";

/**
 * A nav item is active on its own route and on anything nested beneath it, so
 * /for-sale/some-product keeps "For Sale" underlined. "/" is matched exactly,
 * otherwise it would be active on every page.
 */
function isActiveRoute(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

/*
 * Header reproducing the approved reference image's nav band (ink y=29..90,
 * logo x=50..418, CTA pill bbox 1451,36 -> 1615,82 = 165x47). Header gutters
 * in the reference are ~50px, wider than the 90px gutters used by the card
 * and stats rows, so it gets its own container width.
 *
 * BRAND MARK: per direction, the reference's heavy "JAMES" wordmark is NOT
 * reproduced or cropped — branding is still evolving, so the lockup is the PS
 * monogram plus "James Progressive Solutions" as live text in the site's own
 * typography. That keeps it restyleable without touching an image asset.
 *
 * The reference draws dropdown carets on For Sale / Apps / Websites; those are
 * omitted until real dropdown menus exist.
 */
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuId = useId();
  const pathname = usePathname();

  useEffect(() => {
    if (!isMenuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  return (
    <header className="absolute top-0 left-0 w-full z-50 transition-colors bg-gradient-to-b from-white/40 to-transparent">
      <div className="mx-auto flex max-w-[1672px] items-center justify-between px-6 py-2 sm:px-8 lg:px-[50px]">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="group flex items-center gap-2.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            onClick={() => setIsMenuOpen(false)}
          >
            <span
              aria-hidden="true"
              className="flex h-6 w-6 shrink-0 items-center justify-center rounded border border-gold/40 bg-gold/5 font-display text-[0.65rem] font-bold tracking-tight text-gold-dark transition-colors duration-200 group-hover:border-gold/70 group-hover:bg-gold/15"
            >
              PS
            </span>
            <span className="flex flex-col justify-center leading-none">
              <span className="font-display text-[1.15rem] font-bold tracking-wider text-black uppercase transition-colors duration-200 group-hover:text-gold-dark">
                JAMES
              </span>
              <span className="mt-1 text-[0.52rem] font-bold tracking-[0.26em] text-gold-dark/90 uppercase">
                PROGRESSIVE SOLUTIONS
              </span>
            </span>
          </Link>

          {/* Desktop Dropdown Trigger */}
          <div className="hidden lg:block relative">
            <button
              type="button"
              className="group flex items-center gap-2 text-[0.85rem] font-bold text-black uppercase tracking-wider transition-colors hover:text-gold-dark focus-visible:outline focus-visible:outline-gold"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-expanded={isMenuOpen}
              aria-controls={menuId}
            >
              Menu
              <svg className={`w-4 h-4 transition-transform duration-200 ${isMenuOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Desktop Dropdown Panel */}
            {isMenuOpen && (
              <div 
                id={menuId}
                className="absolute top-full left-0 mt-4 w-[240px] bg-white border border-[var(--border-card)] shadow-xl rounded-[var(--radius-md)] py-2 motion-safe:animate-[fade-up-in_150ms_ease-out_both]"
              >
                <nav aria-label="Primary">
                  <ul className="flex flex-col">
                    {primaryNavItems.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          aria-current={isActiveRoute(pathname, item.href) ? "page" : undefined}
                          className="flex items-center px-6 py-2.5 text-[0.9rem] font-medium text-black transition-colors hover:bg-gray-50 hover:text-gold-dark aria-[current=page]:text-gold-dark aria-[current=page]:bg-gold/5"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/clarity-project"
            className="hidden lg:inline-flex items-center justify-center gap-2 font-semibold text-black transition-colors duration-150 hover:text-gold-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          >
            Talk to CLarity &rarr;
          </Link>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] border border-[var(--border-card)] text-black transition-colors duration-150 hover:border-gold hover:text-gold-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold lg:hidden"
            aria-expanded={isMenuOpen}
            aria-controls={menuId}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <MenuGlyph isOpen={isMenuOpen} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMenuOpen ? (
        <div id={menuId} className="border-t border-[var(--border-card)] bg-cream lg:hidden">
          <nav
            aria-label="Mobile"
            className="motion-safe:animate-[mobile-nav-in_180ms_ease-out] px-6 py-4 sm:px-8"
          >
            <ul className="flex flex-col gap-1">
              {primaryNavItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActiveRoute(pathname, item.href) ? "page" : undefined}
                    className="flex min-h-11 items-center text-base font-medium text-black transition-colors duration-150 hover:text-gold-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold aria-[current=page]:text-gold-dark"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      ) : null}
    </header>
  );
}



function MenuGlyph({ isOpen, ...props }: { isOpen: boolean } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      {isOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
    </svg>
  );
}
