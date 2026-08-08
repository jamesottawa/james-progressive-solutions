import Link from "next/link";

/**
 * Shown when a collection has no published entries.
 *
 * Deliberately honest rather than filled with placeholder products: an empty
 * shelf that says so reads better than invented listings, and it cannot
 * mislead anyone who lands here early.
 */
export function EmptyState({
  headline,
  body,
  ctaLabel = "Follow the CLarity build",
  ctaHref = "/clarity-project",
}: {
  headline: string;
  body: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <div className="rounded-[var(--radius-lg)] border border-dashed border-[var(--border-card)] bg-card/60 px-8 py-14 text-center">
      <p className="font-display text-[1.35rem] font-semibold text-black">{headline}</p>
      <p className="mx-auto mt-3 max-w-[52ch] text-lead text-body">{body}</p>
      <Link
        href={ctaHref}
        className="mt-7 inline-flex h-[47px] items-center gap-2.5 rounded-[var(--radius-sm)] bg-[linear-gradient(180deg,var(--gold-grad-from),var(--gold-grad-to))] px-6 text-[0.95rem] font-semibold text-black shadow-[0_1px_2px_rgba(60,45,20,0.18)] transition-[filter] duration-150 hover:brightness-[1.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-dark"
      >
        {ctaLabel}
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
      </Link>
    </div>
  );
}
