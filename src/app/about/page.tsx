import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/layout/PageHero";
import { ContactSection } from "@/components/contact/ContactSection";
import { categories } from "@/data/categories";

export const metadata: Metadata = {
  title: "About James — James Progressive Solutions",
  description:
    "James Progressive Solutions is where James shares the products, apps, websites, and AI experiments he is building, including the ongoing CLarity project.",
};

export default function AboutPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="About James"
        title="Built by James, in"
        accent="public."
        lead="James Progressive Solutions is where James shares the products, apps, websites, and AI experiments he is building, including the ongoing CLarity project. It is a running account of the work as it happens, not a finished portfolio."
      />

      <section className="mx-auto w-full max-w-[var(--content-frame)] px-6 py-16 sm:px-8 lg:px-[50px] lg:py-20">
        <p className="text-eyebrow font-semibold tracking-[0.19em] text-gold uppercase">
          Explore the Work
        </p>
        <h2 className="mt-3 font-display text-section font-semibold text-black">Where to start</h2>
        <p className="mt-4 max-w-[60ch] text-lead text-body">
          The work is organised into five areas. Each one fills up as things are finished rather
          than announced, so some are further along than others.
        </p>

        <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <li key={category.title}>
                <Link
                  href={category.href}
                  className="group flex h-full gap-4 rounded-[var(--radius-lg)] border border-[var(--border-card)] bg-card p-6 shadow-[var(--shadow-card)] transition-all duration-200 ease-out hover:-translate-y-1 hover:border-gold/50 hover:shadow-[var(--shadow-card-hover)] focus-visible:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                >
                  <Icon className="h-[52px] w-[52px] shrink-0" />
                  <span className="flex flex-col gap-1.5">
                    <span className="font-display text-card-title font-semibold text-black">
                      {category.title}
                    </span>
                    <span className="text-card-body text-body">{category.description}</span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <ContactSection />
    </PageLayout>
  );
}
