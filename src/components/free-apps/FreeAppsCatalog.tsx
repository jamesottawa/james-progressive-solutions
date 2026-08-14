import Link from "next/link";
import { FreeApp } from "@/data/freeApps";
import { ProjectBoardShowcase } from "@/components/free-apps/ProjectBoardShowcase";
import { InteractiveWorkshopBrowser } from "@/components/free-apps/InteractiveWorkshopBrowser";

function formatAppDisplayTitle(slug: string, rawTitle: string): string {
  if (slug === "from-chaos-to-clear") return "From Chaos to Clear";
  if (slug === "for-sale-app") return "For Sale App";
  if (slug === "ai-loop-review") return "AI Loop Review";
  if (slug === "project-board") return "Project Board";
  if (slug === "sitesignal") return "SiteSignal";
  return rawTitle;
}

function getAppStatusBadge(app: FreeApp): { label: string; style: string } {
  if (app.slug === "project-board" || app.status === "BETA") {
    return {
      label: `Beta ${app.version ? `(${app.version})` : ""}`,
      style: "bg-gold/15 text-[#875c10] border-gold/40 font-bold",
    };
  }
  if (app.slug === "ai-loop-review") {
    return {
      label: `Experimental ${app.version ? `(${app.version})` : ""}`,
      style: "bg-purple-500/10 text-purple-900 border-purple-300 font-medium",
    };
  }
  return {
    label: `Ready ${app.version ? `(${app.version})` : ""}`,
    style: "bg-emerald-500/10 text-emerald-900 border-emerald-300 font-medium",
  };
}

/**
 * FreeAppsCatalog
 *
 * Authored digital workshop showcase for /free-apps:
 * 1. Application Directory: Exposes all 5 real tools with live launch links and detail views
 * 2. Primary Featured Artifact: Deep-dive showcase of Project Board with interactive preview
 * 3. Active Exploration Tracks: Interactive workshop browser for ongoing research areas
 */
export function FreeAppsCatalog({ apps }: { apps: FreeApp[] }) {
  const projectBoard = apps.find((app) => app.slug === "project-board") || apps[0];

  return (
    <div className="space-y-14 sm:space-y-18 lg:space-y-20">
      {/* ── ACT 1: COMPLETE FIVE-APP WORKSHOP DIRECTORY ───────────────────────── */}
      <section aria-labelledby="apps-directory-heading" className="space-y-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-black/[0.08]">
          <div>
            <span className="font-mono text-[0.625rem] font-bold uppercase tracking-[0.22em] text-[#A8761C]">
              01 — Application Directory
            </span>
            <h2 id="apps-directory-heading" className="mt-1 font-display text-2xl sm:text-3xl font-semibold text-black tracking-tight">
              All Available Tools & Utilities
            </h2>
          </div>
          <p className="max-w-md text-[0.875rem] text-body/80 leading-relaxed">
            Free, browser-based applications built to solve everyday friction. No accounts, sign-ups, or fees required.
          </p>
        </div>

        {/* 5-App Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app) => {
            const displayTitle = formatAppDisplayTitle(app.slug, app.title);
            const statusBadge = getAppStatusBadge(app);

            return (
              <article
                key={app.id}
                className="group flex flex-col justify-between rounded-[var(--radius-lg)] bg-white border border-black/[0.08] p-6 sm:p-7 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-[0_8px_24px_rgba(192,136,32,0.12)]"
              >
                <div className="space-y-4">
                  {/* Card Top: Platform & Status */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[0.65rem] font-medium uppercase tracking-[0.14em] text-body/65">
                      {app.platform || "Web Browser"}
                    </span>
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded text-[0.65rem] font-mono border ${statusBadge.style}`}
                    >
                      {statusBadge.label}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="font-display text-xl font-semibold text-black group-hover:text-[#875c10] transition-colors">
                      <Link href={`/free-apps/${app.slug}`}>
                        {displayTitle}
                      </Link>
                    </h3>
                    <p className="mt-2.5 text-[0.875rem] text-body/85 leading-relaxed">
                      {app.shortDescription}
                    </p>
                  </div>

                  {/* Feature Tags */}
                  {app.features && app.features.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {app.features.slice(0, 3).map((feat, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center px-2 py-0.5 rounded bg-black/[0.04] text-[0.7rem] text-body/75 font-mono"
                        >
                          {feat}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Card Actions Footer */}
                <div className="mt-6 pt-4 border-t border-black/[0.06] flex items-center justify-between gap-3">
                  {app.launchUrl ? (
                    <a
                      href={app.launchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-[#0B132B] text-white text-[0.8125rem] font-semibold transition-all hover:bg-gold-dark hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold shadow-sm"
                    >
                      <span>Launch App</span>
                      <svg className="w-3.5 h-3.5 text-gold group-hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </a>
                  ) : (
                    <span className="text-[0.75rem] font-mono text-body/50">Local Only</span>
                  )}

                  <Link
                    href={`/free-apps/${app.slug}`}
                    className="inline-flex items-center gap-1 text-[0.8125rem] font-semibold text-black/80 hover:text-gold-dark transition-colors"
                  >
                    <span>Details</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ── ACT 2: PRIMARY FEATURED ARTIFACT (PROJECT BOARD DEEP-DIVE) ─────────── */}
      <div id="featured-project-board" className="pt-4">
        {projectBoard && <ProjectBoardShowcase app={projectBoard} />}
      </div>

      {/* ── ACT 3: ACTIVE WORKSHOP EXPLORATION TRACKS ────────────────────────── */}
      <div className="pt-4">
        <InteractiveWorkshopBrowser />
      </div>
    </div>
  );
}
