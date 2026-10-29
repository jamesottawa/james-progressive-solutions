/**
 * Testimonial block. Renders nothing until a real quote is supplied, so no
 * placeholder text ever reaches the live site.
 *
 * To turn it on, fill in `testimonial` below with a real quote, the person's
 * name, and (optionally) their role or business. Only use quotes that person
 * has agreed to share.
 */
type TestimonialData = {
  quote: string;
  name: string;
  role?: string;
};

const testimonial: TestimonialData | null = null;

export function Testimonial() {
  if (!testimonial) return null;

  return (
    <section
      aria-label="Testimonial"
      className="border-t border-gold/20 bg-cream py-14 sm:py-16"
    >
      <figure className="mx-auto max-w-[var(--content-frame)] px-6 sm:px-8 lg:px-[50px]">
        <blockquote className="max-w-[60ch] font-display text-[1.4rem] leading-snug text-black sm:text-[1.65rem]">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
        <figcaption className="mt-4 text-[0.9rem] text-body">
          {testimonial.name}
          {testimonial.role ? `, ${testimonial.role}` : null}
        </figcaption>
      </figure>
    </section>
  );
}
