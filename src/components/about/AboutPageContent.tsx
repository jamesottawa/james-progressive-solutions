import { ContactSection } from "@/components/contact/ContactSection";

/**
 * About page body, kept short: the three-part background story laid out side
 * by side, the six working principles as a plain list, a one-line status
 * legend, and the contact form. The copy is the original wording. The clickable
 * story stepper and the "What I build now" block were dropped because the
 * homepage project grid and the page header already cover that ground.
 */

const story = [
  {
    title: "The common thread",
    thesis: "Problem-solving has always been the common thread.",
    body: "Long before writing software or building digital tools, the focus was hands-on and practical: figuring out why a system or process is failing, stripping away the noise to isolate the core friction, and assembling a straightforward, reliable fix. Solving real-world problems was never about making things complicated; it was about restoring order so people could move forward.",
  },
  {
    title: "Technology became the tool",
    thesis: "Technology naturally became another set of tools for executing practical solutions.",
    body: "Technology naturally became another set of tools for executing those solutions rather than an original career identity. Early experimentation with websites years ago provided a basic understanding of how the web worked, but that curiosity sat quietly in the background for a long time. What changed was the evolution of modern development tools and AI-assisted workflows. As those capabilities matured, the barrier between identifying a problem and building a working application shrank, turning serious application development into a practical path.",
  },
  {
    title: "What it became",
    thesis: "James Progressive Solutions gradually became the natural umbrella.",
    body: "The work evolved organically through real projects rather than a traditional agency or software-career path. Each website, utility tool, and experimental build was created to answer a specific need, test a technical concept, or solve real-world operational friction. As the projects grew in scope and seriousness, it became the umbrella for all of it: practical websites, focused web applications, AI experiments, and the longer-term CLarity project.",
  },
];

const principles = [
  { name: "Solve the actual problem", desc: "Identify the true underlying friction rather than building superficial features or chasing design trends." },
  { name: "Keep systems understandable", desc: "Build clean architecture and straightforward logic so the work remains maintainable and clear over time." },
  { name: "Avoid unnecessary complexity", desc: "Prefer simple, robust solutions over convoluted frameworks or over-engineered setups." },
  { name: "Be honest about status", desc: "State clearly what is finished, active, or experimental without exaggerating outcomes or progress." },
  { name: "AI as a tool, not judgment", desc: "Use AI for speed, synthesis, and prototyping, but maintain human judgment and oversight throughout." },
  { name: "Improve through testing", desc: "Refine products through practical use and feedback rather than relying on unvalidated assumptions." },
];

const statuses = [
  { label: "Active", note: "In daily development or active client use", tone: "bg-gold/20 text-gold-light border-gold/30" },
  { label: "Experimental", note: "Research trials testing new tools & models", tone: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
  { label: "Evolving", note: "Growing in scope as milestones are met", tone: "bg-purple-500/20 text-purple-300 border-purple-500/30" },
  { label: "Free to use", note: "Tools released publicly for anyone", tone: "bg-green-500/20 text-green-300 border-green-500/30" },
  { label: "For sale", note: "Production software & templates", tone: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30" },
];

const frame = "mx-auto max-w-[var(--content-frame)] px-6 sm:px-8 lg:px-[50px]";

export function AboutPageContent() {
  return (
    <div>
      {/* Background story */}
      <section
        aria-labelledby="story-heading"
        className="border-b border-[#0F172A]/10 bg-[#F6F1E7] py-10 sm:py-12"
      >
        <div className={frame}>
          <p className="text-eyebrow font-semibold uppercase tracking-[0.19em] text-gold-dark">
            Background &amp; evolution
          </p>
          <h2
            id="story-heading"
            className="mt-1.5 font-display text-2xl font-semibold tracking-tight text-black sm:text-3xl"
          >
            How the work came together.
          </h2>

          <ol className="mt-8 grid gap-8 lg:grid-cols-3 lg:gap-10">
            {story.map((s, i) => (
              <li key={s.title} className="lg:border-l lg:border-gold/30 lg:pl-6 lg:first:border-l-0 lg:first:pl-0">
                <span className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.18em] text-gold-dark">
                  0{i + 1} · {s.title}
                </span>
                <h3 className="mt-2 font-display text-xl font-semibold leading-snug tracking-tight text-black">
                  {s.thesis}
                </h3>
                <p className="mt-3 text-[0.9rem] leading-relaxed text-body">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Principles */}
      <section aria-labelledby="principles-heading" className="border-b border-[#0F172A]/10 bg-[#F9F6F0] py-10 sm:py-12">
        <div className={frame}>
          <p className="text-eyebrow font-semibold uppercase tracking-[0.19em] text-gold-dark">
            Core principles
          </p>
          <h2
            id="principles-heading"
            className="mt-1.5 font-display text-2xl font-semibold tracking-tight text-black sm:text-3xl"
          >
            Useful first.
          </h2>
          <ul className="mt-6 grid gap-x-10 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((p) => (
              <li key={p.name}>
                <h3 className="text-[0.95rem] font-semibold text-black">{p.name}</h3>
                <p className="mt-1 text-[0.85rem] leading-relaxed text-body">{p.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Building in public */}
      <section aria-labelledby="public-heading" className="border-b border-gold/20 bg-[#070D1A] py-10 text-white sm:py-12">
        <div className={frame}>
          <h2 id="public-heading" className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Building in public.
          </h2>
          <p className="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-gray-300">
            This site documents work as it develops. Projects are not forced to look artificially
            complete before they are ready. Labels you will see:
          </p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {statuses.map((s) => (
              <li key={s.label} className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
                <span className={`rounded border px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider ${s.tone}`}>
                  {s.label}
                </span>
                <p className="mt-2 text-xs text-gray-300">{s.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactSection
        heading="Have something in mind?"
        lead="If you need a website, have a project idea, or want to talk about something being built here, get in touch."
      />
    </div>
  );
}
