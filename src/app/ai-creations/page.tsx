import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/layout/PageHero";
import { CollectionGrid } from "@/components/collections/CollectionGrid";
import { aiCreationItems } from "@/data/collections";

export const metadata: Metadata = {
  title: "AI Creations — James Progressive Solutions",
  description: "Intelligent solutions designed to automate, generate, and elevate.",
};

export default function AiCreationsPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="AI Creations"
        title="Experiments that"
        accent="elevate."
        lead="Tools built with and around AI — some practical, some exploratory. What works gets kept and refined; what does not gets written up anyway."
      />
      <CollectionGrid
        items={aiCreationItems}
        emptyHeadline="No AI creations published yet."
        emptyBody="Experiments are shared here once there is something concrete to show, rather than at the idea stage."
      />
    </PageLayout>
  );
}
