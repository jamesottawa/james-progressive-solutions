/**
 * Page-level hero band for destination pages.
 *
 * Uses the same typographic system the approved homepage design establishes —
 * gold letterspaced eyebrow, display-serif headline with a gold accent word,
 * body lead — at a reduced scale, so an interior page reads as the same site
 * without competing with the homepage hero.
 */
export function PageHero({
  eyebrow,
  title,
  accent,
  lead,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  lead: string;
}) {
  return (
    <section className="border-b border-[var(--border-card)]">
      <div className="mx-auto w-full max-w-[var(--content-frame)] px-6 py-16 sm:px-8 lg:px-[50px] lg:py-20">
        <div className="max-w-[700px] motion-safe:animate-[fade-up-in_600ms_ease-out_both]">
          <p className="text-eyebrow font-semibold tracking-[0.19em] text-gold uppercase">
            {eyebrow}
          </p>
          <h1 className="mt-4 font-display text-[clamp(2.25rem,3vw+1.2rem,3.75rem)] leading-[1.05] font-semibold text-black">
            {title}
            {accent ? <span className="text-gold"> {accent}</span> : null}
          </h1>
          <p className="mt-6 max-w-[560px] text-lead text-body">{lead}</p>
        </div>
      </div>
    </section>
  );
}
