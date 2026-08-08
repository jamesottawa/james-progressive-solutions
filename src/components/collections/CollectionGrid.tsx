import Link from "next/link";
import type { CollectionItem } from "@/data/collections";
import { EmptyState } from "./EmptyState";

/**
 * Renders a collection of items as cards, or an honest empty state when the
 * collection has nothing in it yet. Card styling follows the approved
 * homepage card language — cream fill, hairline warm border, soft shadow,
 * gold hover.
 */
export function CollectionGrid({
  items,
  emptyHeadline,
  emptyBody,
  emptyCtaLabel,
  emptyCtaHref,
}: {
  items: CollectionItem[];
  emptyHeadline: string;
  emptyBody: string;
  /** Overrides the empty state's default "Follow the CLarity build" link. */
  emptyCtaLabel?: string;
  emptyCtaHref?: string;
}) {
  return (
    <section className="mx-auto w-full max-w-[var(--content-frame)] px-6 py-16 sm:px-8 lg:px-[50px] lg:py-20">
      {items.length === 0 ? (
        <EmptyState
          headline={emptyHeadline}
          body={emptyBody}
          ctaLabel={emptyCtaLabel}
          ctaHref={emptyCtaHref}
        />
      ) : (
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <ItemCard key={item.title} item={item} />
          ))}
        </ul>
      )}
    </section>
  );
}

function ItemCard({ item }: { item: CollectionItem }) {
  const body = (
    <>
      <span className="flex items-start justify-between gap-4">
        <span className="font-display text-card-title font-semibold text-black">{item.title}</span>
        {item.status ? (
          <span className="shrink-0 rounded-full border border-gold/40 px-2.5 py-1 text-[0.7rem] font-medium tracking-wide text-gold-dark uppercase">
            {item.status}
          </span>
        ) : null}
      </span>

      <span className="mt-3 block text-lead text-body">{item.summary}</span>

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
    </>
  );

  const shared =
    "flex h-full flex-col rounded-[var(--radius-lg)] border border-[var(--border-card)] bg-card p-6 shadow-[var(--shadow-card)] sm:p-7";

  return (
    <li>
      {item.href ? (
        <Link
          href={item.href}
          className={`${shared} group transition-all duration-200 ease-out hover:-translate-y-1 hover:border-gold/50 hover:shadow-[var(--shadow-card-hover)] focus-visible:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold`}
        >
          {body}
          <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-dark">
            View
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
          </span>
        </Link>
      ) : (
        <div className={shared}>{body}</div>
      )}
    </li>
  );
}
