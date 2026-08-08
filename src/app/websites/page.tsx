import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/layout/PageHero";
import { CaseStudyGrid } from "@/components/collections/CaseStudyGrid";
import { websiteItems } from "@/data/collections";

export const metadata: Metadata = {
  title: "Website Redevelopment — James Progressive Solutions",
  description: "Modern websites that perform, convert, and represent your brand.",
};

export default function WebsitesPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Website Redevelopment"
        title="Modern websites that"
        accent="convert."
        lead="Rebuilds and redesigns for existing business websites — faster, clearer, and built to represent the business properly."
      />
      <CaseStudyGrid
        items={websiteItems}
        emptyHeadline="No redevelopment work published yet."
        emptyBody="Completed rebuilds are added here with the client's agreement, so this page fills up more slowly than the work actually happens."
      />
    </PageLayout>
  );
}
