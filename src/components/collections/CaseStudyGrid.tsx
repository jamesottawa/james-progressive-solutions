import Link from "next/link";
import type { WebsiteCaseStudy } from "@/data/collections";
import { EmptyState } from "./EmptyState";

/**
 * Website Redevelopment's grid. Same card language as `CollectionGrid`
 * (cream fill, hairline border, soft shadow, gold hover) but shaped for a
 * case study rather than a generic item: two columns instead of three, so
 * each card has room for its summary plus up to two distinct links — a live
 * site to visit, and an optional case-study write-up.
 *
 * `liveUrl` is only ever rendered when an entry supplies it. Nothing here
 * infers or guesses a URL — that stayed unresolved in the destination-pages
 * audit specifically because it needs James's confirmation the site is live
 * and the client is comfortable being linked.
 */
export function CaseStudyGrid({
  items,
  emptyHeadline,
  emptyBody,
}: {
  items: WebsiteCaseStudy[];
  emptyHeadline: string;
  emptyBody: string;
}) {
  return (
    <section className="mx-auto w-full max-w-[var(--content-frame)] px-6 py-16 sm:px-8 lg:px-[50px] lg:py-20">
      {items.length === 0 ? (
        <EmptyState headline={emptyHeadline} body={emptyBody} />
      ) : (
        <ul className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {items.map((item) => (
            <CaseStudyCard key={item.title} item={item} />
          ))}
        </ul>
      )}
    </section>
  );
}

function CaseStudyCard({ item }: { item: WebsiteCaseStudy }) {
  return (
    <li className="flex h-full flex-col rounded-[var(--radius-lg)] border border-[var(--border-card)] bg-card p-6 shadow-[var(--shadow-card)] sm:p-7">
      <span className="font-display text-card-title font-semibold text-black">{item.title}</span>
      <span className="mt-3 block flex-1 text-lead text-body">{item.summary}</span>

      {item.tags?.length ? (
        <span className="mt-5 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-[var(--radius-sm)] bg-cream-deep px-2.5 py-1 text-[0.75rem] text-body"
            >
              {tag}
            </span>
          ))}
        </span>
      ) : null}

      {item.liveUrl || item.href ? (
        <span className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
          {item.liveUrl ? (
            <a
              href={item.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-gold-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              Visit live site
              <ExternalGlyph />
            </a>
          ) : null}
          {item.href ? (
            <Link
              href={item.href}
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-gold-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              Read case study
              <ArrowGlyph />
            </Link>
          ) : null}
        </span>
      ) : null}
    </li>
  );
}

function ArrowGlyph() {
  return (
    <svg
      viewBox="0 0 16 16"
      className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
      aria-hidden="true"
    >
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

function ExternalGlyph() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" aria-hidden="true">
      <path
        d="M6.5 4H4.5A1.5 1.5 0 0 0 3 5.5v6A1.5 1.5 0 0 0 4.5 13h6a1.5 1.5 0 0 0 1.5-1.5v-2M9 3h4v4M12.5 3.5 7 9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
