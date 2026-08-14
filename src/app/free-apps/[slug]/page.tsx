import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageLayout } from "@/components/layout/PageLayout";
import { getFreeApps, getFreeAppBySlug } from "@/data/freeApps";

type PageProps = {
  params: Promise<{ slug: string }>;
};

/** Pre-render static paths for all published free apps */
export async function generateStaticParams() {
  const apps = await getFreeApps();
  return apps.map((app) => ({ slug: app.slug }));
}

/** Dynamic SEO Metadata */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const app = await getFreeAppBySlug(slug);

  if (!app) {
    return {
      title: "App Not Found — James Progressive Solutions",
    };
  }

  return {
    title: `${app.title} — Free Apps — James Progressive Solutions`,
    description: app.shortDescription,
  };
}

export default async function FreeAppDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const app = await getFreeAppBySlug(slug);

  if (!app) {
    notFound();
  }

  return (
    <PageLayout>
      
      {/* Header / Breadcrumb Hero */}
      <section className="border-b border-[var(--border-card)] bg-[#070D1A] text-white py-12 sm:py-16">
        <div className="mx-auto w-full max-w-[var(--content-frame)] px-6 sm:px-8 lg:px-[50px] space-y-6">
          
          {/* Back Navigation */}
          <Link
            href="/free-apps"
            className="inline-flex items-center gap-2 text-xs font-bold text-gold-light hover:underline uppercase tracking-wider"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            <span>Back to Free Apps</span>
          </Link>

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3 py-1 rounded text-xs font-bold uppercase tracking-widest bg-gold/20 text-gold-light border border-gold/30">
              {app.type} APP
            </span>
            <span className="px-3 py-1 rounded text-xs font-bold uppercase tracking-widest bg-white/10 text-gray-300 border border-white/20">
              {app.status}
            </span>
            {app.version && (
              <span className="text-xs font-mono text-gold-light/80">
                {app.version}
              </span>
            )}
          </div>

          {/* Title & Short Description */}
          <div className="space-y-3 max-w-3xl">
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight">
              {app.title}
            </h1>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              {app.shortDescription}
            </p>
          </div>

        </div>
      </section>

      {/* Main Detail Body */}
      <section className="mx-auto w-full max-w-[var(--content-frame)] px-6 py-12 sm:px-8 lg:px-[50px] lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Full Description & Features (7 Cols) */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Full Description */}
            <div className="space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-gold-dark">
                About The Project
              </h2>
              <div className="text-body text-base leading-relaxed space-y-4">
                <p>{app.description}</p>
              </div>
            </div>

            {/* Feature List */}
            {app.features && app.features.length > 0 && (
              <div className="p-6 sm:p-8 rounded-[var(--radius-lg)] bg-[#FDFBF7] border border-[#0F172A]/15 space-y-4 shadow-sm">
                <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-black">
                  Key Features & Capabilities
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-body">
                  {app.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5">
                      <span className="text-gold-dark font-bold shrink-0 mt-0.5">✓</span>
                      <span className="capitalize font-medium">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Future Feedback / Comments Placeholder Area */}
            <div className="p-6 sm:p-8 rounded-[var(--radius-lg)] bg-white border border-[#0F172A]/10 space-y-3 shadow-sm">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-gold animate-pulse" />
                <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-black">
                  Feedback & Discussions
                </h3>
              </div>
              <p className="text-sm text-body/80 italic">
                Feedback will be available here soon.
              </p>
            </div>

          </div>

          {/* Right Column: Platform Details & Action Bar (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Visual UI Preview Frame */}
            <div className="rounded-xl bg-[#0B132B] border border-gold/30 overflow-hidden shadow-xl text-white">
              
              {/* Window Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#070D1A] border-b border-white/10 text-xs text-gray-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                </div>
                <span className="text-[0.65rem] font-mono text-gold-light uppercase">{app.slug}</span>
              </div>

              {/* Action Box */}
              <div className="p-6 space-y-5 bg-gradient-to-b from-[#0B132B] to-[#070D1A]">
                <div className="space-y-2">
                  <span className="text-[0.65rem] font-bold text-gold uppercase tracking-wider block">ENVIRONMENT</span>
                  <h4 className="text-sm font-semibold text-white">{app.title}</h4>
                  {app.platform && (
                    <p className="text-xs text-gray-300">{app.platform}</p>
                  )}
                </div>

                {/* Primary Action Button */}
                <div className="pt-2">
                  {app.launchUrl ? (
                    <a
                      href={app.launchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-gold text-black font-bold text-sm transition-all hover:bg-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
                    >
                      <span>Launch App</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </a>
                  ) : (
                    <div className="p-4 rounded bg-white/10 border border-white/20 text-center space-y-1">
                      <span className="text-xs font-bold text-gold-light tracking-wider uppercase block">
                        PUBLIC VERSION COMING SOON
                      </span>
                      <span className="text-[0.7rem] text-gray-400 block">
                        Public deployment URL is currently being finalized.
                      </span>
                    </div>
                  )}

                  {app.downloadUrl && (
                    <a
                      href={app.downloadUrl}
                      download
                      className="w-full mt-3 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-white/10 border border-white/20 text-white font-semibold text-sm transition-all hover:bg-white/20"
                    >
                      <span>Download Package</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                      </svg>
                    </a>
                  )}
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[0.7rem] text-gray-400 font-mono">
                  <span>Category: {app.category}</span>
                  <span>Type: {app.type}</span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

    </PageLayout>
  );
}
