import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/layout/PageHero";
import { FreeAppsCatalog } from "@/components/free-apps/FreeAppsCatalog";
import { getFreeApps } from "@/data/freeApps";

export const metadata: Metadata = {
  title: "Free Apps & Tools",
  description: "Small, practical software tools and focused utilities built in the workshop and released freely.",
};

export default async function FreeAppsPage() {
  const apps = await getFreeApps();

  return (
    <PageLayout>
      <PageHero
        eyebrow="Digital Workshop & Tools"
        title="Small, focused tools made for"
        accent="practical work."
        lead="A small collection of lightweight web utilities, single-purpose tools, and software experiments built to solve daily friction and released freely for anyone to use."
      />
      <section className="mx-auto w-full max-w-[var(--content-frame)] px-6 py-8 sm:px-8 lg:px-[50px] lg:py-11">
        <FreeAppsCatalog apps={apps} />
      </section>
    </PageLayout>
  );
}
