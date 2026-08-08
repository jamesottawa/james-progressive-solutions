import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/layout/PageHero";
import { JournalList } from "@/components/collections/JournalList";
import { clarityUpdates } from "@/data/collections";

export const metadata: Metadata = {
  title: "CLarity Project — James Progressive Solutions",
  description: "The build journey behind the platform — purpose, progress, and real impact.",
};

export default function ClarityProjectPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="CLarity Project"
        title="The build journey, in"
        accent="public."
        lead="An ongoing build followed from the first idea onward — purpose, progress, and what actually happened, including the parts that did not work."
      />
      <JournalList
        entries={clarityUpdates}
        emptyHeadline="No updates posted yet."
        emptyBody="Updates are written as the build moves, so this page grows in step with the work rather than ahead of it."
        // Other pages send readers here when empty; this one can't link to
        // itself, so it points back to the homepage instead.
        emptyCtaLabel="Back to the homepage"
        emptyCtaHref="/"
      />
    </PageLayout>
  );
}
