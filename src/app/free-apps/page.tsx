import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/layout/PageHero";
import { CollectionGrid } from "@/components/collections/CollectionGrid";
import { freeAppItems } from "@/data/collections";

export const metadata: Metadata = {
  title: "Free Apps — James Progressive Solutions",
  description: "Helpful tools and utilities created to make everyday tasks easier.",
};

export default function FreeAppsPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Free Apps"
        title="Helpful tools, released"
        accent="free."
        lead="Small, useful apps and utilities made to take a bit of friction out of everyday tasks. No account required, no cost."
      />
      <CollectionGrid
        items={freeAppItems}
        emptyHeadline="No free apps published yet."
        emptyBody="Apps show up here once they are stable enough to be genuinely useful to someone other than their author."
      />
    </PageLayout>
  );
}
