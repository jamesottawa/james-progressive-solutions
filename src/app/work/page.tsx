import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/layout/PageHero";
import { CategoryGrid } from "@/components/home/CategoryGrid";

export const metadata: Metadata = {
  title: "Work",
  description:
    "A directory of products for sale, free apps, websites, AI creations, and the CLarity build journey.",
};

export default function WorkPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="The Work"
        title="Explore"
        accent="everything."
        lead="A complete directory of products for sale, free apps, websites, AI creations, and the CLarity build journey."
      />
      <div className="py-16 lg:py-20">
        <CategoryGrid />
      </div>
    </PageLayout>
  );
}
