import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/layout/PageHero";
import { WebsitesCaseStudies } from "@/components/websites/WebsitesCaseStudies";

export const metadata: Metadata = {
  title: "Website Redevelopment — James Progressive Solutions",
  description: "A small collection of client websites designed to make services clearer, improve trust, and give customers an easier path to get in touch.",
};

export default function WebsitesPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="WEBSITE REDEVELOPMENT"
        title="Websites built around"
        accent="the actual business."
        lead="A small collection of client websites designed to make services clearer, improve trust, and give customers an easier path to get in touch."
      />
      <WebsitesCaseStudies />
    </PageLayout>
  );
}
