import Link from "next/link";
import type { JournalEntry } from "@/data/collections";
import { EmptyState } from "./EmptyState";

/**
 * CLarity Project's journal. The destination-pages audit found the 3-column
 * card grid used elsewhere is the wrong shape for a build log — a journal is
 * chronological and reads better as a single dated column — so this is a
 * dedicated component rather than a reuse of `CollectionGrid`.
 *
 * Entries render newest first regardless of array order, off `date`, so a
 * future entry added anywhere in `clarityUpdates` still lands in the right
 * place.
 */
export function JournalList({
  entries,
  emptyHeadline,
  emptyBody,
  emptyCtaLabel,
  emptyCtaHref,
}: {
  entries: JournalEntry[];
  emptyHeadline: string;
  emptyBody: string;
  emptyCtaLabel?: string;
  emptyCtaHref?: string;
}) {
  const sorted = [...entries].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

  return (
    <section className="mx-auto w-full max-w-[var(--content-frame)] px-6 py-16 sm:px-8 lg:px-[50px] lg:py-20">
      {sorted.length === 0 ? (
        <EmptyState
          headline={emptyHeadline}
          body={emptyBody}
          ctaLabel={emptyCtaLabel}
          ctaHref={emptyCtaHref}
        />
      ) : (
        <ol className="mx-auto max-w-[46rem] divide-y divide-[var(--border-card)] border-y border-[var(--border-card)]">
          {sorted.map((entry) => (
            <JournalRow key={`${entry.date}-${entry.title}`} entry={entry} />
          ))}
        </ol>
      )}
    </section>
  );
}

function JournalRow({ entry }: { entry: JournalEntry }) {
  const formattedDate = formatEntryDate(entry.date);

  const heading = (
    <span className="font-display text-card-title font-semibold text-black">{entry.title}</span>
  );

  return (
    <li className="flex flex-col gap-1.5 py-7 sm:flex-row sm:gap-8">
      <time dateTime={entry.date} className="shrink-0 text-sm font-medium text-gold-dark sm:w-32">
        {formattedDate}
      </time>
      <div className="flex-1">
        {entry.href ? (
          <Link
            href={entry.href}
            className="inline-block transition-colors duration-150 hover:text-gold-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            {heading}
          </Link>
        ) : (
          heading
        )}
        <p className="mt-2 text-lead text-body">{entry.summary}</p>
      </div>
    </li>
  );
}

function formatEntryDate(iso: string) {
  const parsed = new Date(`${iso}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) return iso;
  return new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric" }).format(
    parsed,
  );
}
