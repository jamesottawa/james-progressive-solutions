import Link from "next/link";
import type { Category } from "@/data/categories";

/*
 * Category card reproducing the approved reference image's card
 * (measured ~285x165, fill #FEF8ED, radius ~15px, hairline warm border,
 * soft shadow). Internal layout in the reference is a 60px icon on the left
 * with the title and body stacked to its right, and a circular arrow button
 * pinned to the bottom-right corner.
 */
export function CategoryCard({ category }: { category: Category }) {
  const Icon = category.icon;

  return (
    <li>
      <Link
        href={category.href}
        className="group relative flex h-full gap-3 rounded-[var(--radius-lg)] border border-[var(--border-card)] bg-card p-4 pb-10 shadow-[var(--shadow-card)] transition-all duration-200 ease-out hover:-translate-y-1 hover:border-gold/50 hover:shadow-[var(--shadow-card-hover)] focus-visible:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
      >
        <Icon className="h-[60px] w-[60px] shrink-0" />

        <span className="flex flex-col gap-1.5">
          <span className="font-display text-card-title font-semibold text-black">
            {category.title}
          </span>
          <span className="text-card-body text-body">{category.description}</span>
        </span>

        <span
          aria-hidden="true"
          className="absolute right-5 bottom-5 flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border-card)] text-black/70 transition-colors duration-200 group-hover:border-gold group-hover:text-gold-dark"
        >
          <svg viewBox="0 0 16 16" className="h-3.5 w-3.5">
            <path
              d="M3 8h9.5M8.5 4l4 4-4 4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </Link>
    </li>
  );
}
