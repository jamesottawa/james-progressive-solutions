import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { AboutHeroIndex } from "@/components/about/AboutHeroIndex";
import { AboutPageContent } from "@/components/about/AboutPageContent";

export const metadata: Metadata = {
  title: "About",
  description: "James Progressive Solutions is a small, hands-on digital workshop focused on practical websites, web apps, AI experiments, and the ongoing development of CLarity.",
};

/**
 * About page — uses a custom two-column hero in place of the generic PageHero
 * so the full desktop width can be used: headline left, interactive editorial work index right.
 * The PageHero component is intentionally not used here; it remains unchanged for
 * all other routes.
 */
export default function AboutPage() {
  return (
    <PageLayout>
      {/* ── SECTION 1: ABOUT HERO ──────────────────────────────────────────── */}
      <section className="border-b border-[var(--border-card)] bg-[#FAF6EE]">
        <div className="mx-auto w-full max-w-[var(--content-frame)] px-6 py-10 sm:px-8 sm:py-12 lg:px-[50px] lg:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">

            {/* Left: headline block (7 cols) */}
            <div className="lg:col-span-7 space-y-5 motion-safe:animate-[fade-up-in_600ms_ease-out_both]">
              <p className="text-eyebrow font-semibold tracking-[0.19em] text-gold-dark uppercase">
                About
              </p>
              <h1 className="font-display text-[clamp(1.95rem,2.6vw+1rem,3.25rem)] leading-[1.08] font-semibold text-black">
                Built around{" "}
                <span className="text-gold-accent">solving problems.</span>
              </h1>
              <p className="max-w-[520px] text-lead text-body">
                James Progressive Solutions is a small, hands-on digital workshop focused on practical websites, web apps, AI experiments, and the ongoing development of CLarity.
              </p>
            </div>

            {/* Right: interactive editorial work index (5 cols) */}
            <div className="lg:col-span-5 motion-safe:animate-[fade-up-in_700ms_ease-out_200ms_both]">
              <AboutHeroIndex />
            </div>

          </div>
        </div>
      </section>

      <AboutPageContent />
    </PageLayout>
  );
}
