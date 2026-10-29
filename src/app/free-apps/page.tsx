import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { FreeAppsToolShelf } from "@/components/free-apps/FreeAppsToolShelf";
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
      {/* ── WORKSHOP HERO: STATEMENT & TOOL SHELF ──────────────────────────── */}
      <section className="relative border-b border-[var(--border-card)] bg-[#FAF6EE] overflow-hidden">
        {/* Subtle Faded JPS LAB Typographic Watermark */}
        <div
          className="pointer-events-none absolute -right-8 -bottom-10 select-none font-display font-black text-[clamp(6rem,14vw,13rem)] leading-none text-black/[0.025] tracking-tight -z-0"
          aria-hidden="true"
        >
          JPS LAB
        </div>

        <div className="relative mx-auto w-full max-w-[var(--content-frame)] px-6 py-8 sm:px-8 sm:py-9 lg:px-[50px] lg:py-10 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Editorial Manifesto (7 Cols) */}
            <div className="lg:col-span-7 space-y-3.5 motion-safe:animate-[fade-up-in_600ms_ease-out_both]">
              <p className="text-eyebrow font-semibold tracking-[0.19em] text-[#875c10] uppercase">
                Digital Workshop &amp; Tools
              </p>
              <h1 className="font-display text-[clamp(1.95rem,2.5vw+1rem,3.15rem)] leading-[1.08] font-semibold text-black">
                Small, focused tools made for{" "}
                <span className="text-gold">practical work.</span>
              </h1>
              <p className="max-w-[520px] text-lead text-body">
                A small collection of lightweight web utilities, single-purpose tools, and software experiments built to solve daily friction and released freely for anyone to use.
              </p>
            </div>

            {/* Right: Static Tool Shelf Index (5 Cols) */}
            <div className="lg:col-span-5 motion-safe:animate-[fade-up-in_700ms_ease-out_200ms_both]">
              <div className="p-4 sm:p-4.5 rounded-[var(--radius-md)] bg-[#FAF7F0] border border-black/[0.06] shadow-xs">
                <FreeAppsToolShelf />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SHOWCASE BODY ───────────────────────────────────────────────────── */}
      <section className="mx-auto w-full max-w-[var(--content-frame)] px-6 py-8 sm:px-8 lg:px-[50px] lg:py-11">
        <FreeAppsCatalog apps={apps} />
      </section>
    </PageLayout>
  );
}
