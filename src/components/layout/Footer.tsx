import Link from "next/link";
import type { SVGProps } from "react";
import { primaryNavItems } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border-subtle)] bg-cream-deep">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-14 sm:px-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-xs">
          <p className="font-display text-lg font-semibold text-black">
            James Progressive <span className="text-gold-dark">Solutions</span>
          </p>
          <p className="mt-3 text-sm leading-relaxed text-navy-soft">
            Products, apps, websites, and AI creations, built and improved in public.
          </p>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-x-10 gap-y-3 sm:grid-cols-3">
          {primaryNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-navy transition-colors duration-150 hover:text-gold-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-3">
          <a
            href="#"
            aria-disabled="true"
            className="inline-flex cursor-default items-center gap-2 text-sm font-medium text-navy-soft/70"
          >
            <CodeGlyph className="h-4 w-4" />
            GitHub
            <span className="sr-only">(coming soon)</span>
          </a>
          <Link
            href="/about#contact"
            className="text-sm font-medium text-navy transition-colors duration-150 hover:text-gold-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          >
            Contact
          </Link>
        </div>
      </div>

      <div className="border-t border-[var(--border-subtle)] px-6 py-6 sm:px-8">
        <p className="mx-auto max-w-6xl text-xs text-navy-soft">
          © {new Date().getFullYear()} James Progressive Solutions.
        </p>
      </div>
    </footer>
  );
}

function CodeGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M9 18 4 12l5-6M15 6l5 6-5 6" />
    </svg>
  );
}
