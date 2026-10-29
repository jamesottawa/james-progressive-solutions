import { ContactForm } from "./ContactForm";

/**
 * Real contact section for the About page — replaces the footer's disabled
 * "Contact (coming soon)" link as the way to actually reach out.
 */
export function ContactSection({
  heading = "Send a message.",
  lead = "A name, an email to reply to, and what's on your mind — that's all this needs.",
}: {
  heading?: string;
  lead?: string;
} = {}) {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-24 border-t border-[var(--border-card)] bg-cream-deep"
    >
      <div className="mx-auto w-full max-w-[var(--content-frame)] px-6 py-16 sm:px-8 lg:px-[50px] lg:py-20">
        <p className="text-eyebrow font-semibold tracking-[0.19em] text-gold-dark uppercase">
          Get in Touch
        </p>
        <h2 id="contact-heading" className="mt-3 font-display text-section font-semibold text-black">
          {heading}
        </h2>
        <p className="mt-4 max-w-[52ch] text-lead text-body">
          {lead}
        </p>

        <ContactForm />
      </div>
    </section>
  );
}
