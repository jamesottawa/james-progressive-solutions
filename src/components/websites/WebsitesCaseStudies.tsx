import { websiteItems } from "@/data/collections";

/**
 * Case studies for the /websites route, one compact card per site, driven by
 * `websiteItems` so the copy lives in one place. The earlier layout drew a
 * mock browser window per site; those were illustrations, not screenshots, so
 * they are gone. A real screenshot can be added per site later.
 */
export function WebsitesCaseStudies() {
  return (
    <section className="py-10 sm:py-12 lg:py-14" aria-label="Featured website redevelopment case studies">
      <div className="mx-auto max-w-[var(--content-frame)] px-6 sm:px-8 lg:px-[50px]">
        <p className="mb-6 max-w-2xl text-[0.9rem] text-body">
          Three sites built for Luc Quinn, an Ottawa-area masonry and structural contractor. They
          are bilingual (English and French) and cross-link to one another.
        </p>

        <ul className="grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-6">
          {websiteItems.map((site) => (
            <li key={site.title} id={site.href?.replace("#", "")} className="flex scroll-mt-24">
              <article className="flex w-full flex-col rounded-[var(--radius-lg)] border border-gold/30 bg-[#0B132B] p-6 shadow-[0_12px_40px_rgba(11,19,43,0.25)] transition-colors duration-300 hover:border-gold/60">
                <span className="w-fit rounded-full border border-gold/40 bg-gold/15 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-gold-light">
                  Client case study
                </span>

                <h2 className="mt-4 font-display text-2xl font-semibold leading-tight tracking-tight text-white">
                  {site.title}
                </h2>
                <p className="mt-3 text-[0.9rem] leading-relaxed text-gray-300">{site.summary}</p>

                {site.tags && site.tags.length > 0 ? (
                  <ul className="mt-4 flex flex-wrap gap-1.5" aria-label={`${site.title} details`}>
                    {site.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded border border-white/15 bg-white/5 px-2 py-1 text-[0.72rem] font-medium text-gray-200"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                ) : null}

                {site.liveUrl ? (
                  <div className="mt-auto pt-6">
                    <a
                      href={site.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-md bg-gold px-5 py-2.5 text-[0.875rem] font-semibold text-black transition-colors hover:bg-gold-light"
                    >
                      Visit live site
                      <span className="sr-only"> (opens in a new tab)</span>
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </a>
                  </div>
                ) : null}
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
