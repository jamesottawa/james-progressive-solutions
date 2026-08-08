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
    <header className="sticky top-0 z-50 bg-cream/92 backdrop-blur">
      <div className="mx-auto flex max-w-[1672px] items-center justify-between px-6 py-5 sm:px-8 lg:px-[50px] lg:py-6">
        <Link
          href="/"
          className="group flex items-center gap-3.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          onClick={() => setIsMenuOpen(false)}
        >
          <span
            aria-hidden="true"
            className="font-display text-[1.9rem] leading-none font-semibold tracking-tight text-gold"
          >
            PS
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-[1.22rem] leading-none font-semibold tracking-tight text-black">
              James
            </span>
            <span className="mt-1.5 text-[0.6rem] leading-none font-medium tracking-[0.26em] text-body uppercase">
              Progressive Solutions
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {primaryNavItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActiveRoute(pathname, item.href) ? "page" : undefined}
                  className="relative inline-flex py-1.5 text-[0.95rem] font-medium text-black transition-colors duration-150 hover:text-gold-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold aria-[current=page]:after:absolute aria-[current=page]:after:inset-x-0 aria-[current=page]:after:-bottom-0.5 aria-[current=page]:after:h-[2px] aria-[current=page]:after:rounded-full aria-[current=page]:after:bg-gold aria-[current=page]:after:content-['']"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-sm)] border border-[var(--border-card)] text-black transition-colors duration-150 hover:border-gold hover:text-gold-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold lg:hidden"
            aria-expanded={isMenuOpen}
            aria-controls={menuId}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <MenuGlyph isOpen={isMenuOpen} />
          </button>
        </div>
      </div>

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
