export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-24 border-t border-[var(--border-subtle)] bg-cream-deep"
    >
      <div className="mx-auto max-w-3xl px-6 py-20 text-center sm:px-8 lg:py-24">
        <p className="text-eyebrow font-semibold uppercase tracking-[0.2em] text-gold-dark">
          About James
        </p>
        <h2 id="about-heading" className="mt-3 font-display text-section font-medium text-black">
          Built by James, in public.
        </h2>
        <p className="mt-5 text-lead text-navy-soft">
          James Progressive Solutions is where James shares the products, apps, websites, and AI
          experiments he is building, including the ongoing CLarity project. It is a running
          account of the work as it happens, not a finished portfolio.
        </p>
      </div>
    </section>
  );
}
