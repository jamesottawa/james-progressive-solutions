import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/layout/PageHero";
import { CollectionGrid } from "@/components/collections/CollectionGrid";
import { forSaleItems } from "@/data/collections";

export const metadata: Metadata = {
  title: "For Sale — James Progressive Solutions",
  description: "Premium digital products built to save time, scale faster, and deliver results.",
};

export default function ForSalePage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="For Sale"
        title="Premium digital"
        accent="products."
        lead="Finished products and tools built to save time, scale faster, and deliver results. Everything listed here is something already built and in use, not a concept."
      />
      <CollectionGrid
        items={forSaleItems}
        emptyHeadline="Nothing listed for sale yet."
        emptyBody="Products are added here as they are finished rather than announced early. The CLarity build journey is where works in progress are shared first."
      />
    </PageLayout>
  );
}
