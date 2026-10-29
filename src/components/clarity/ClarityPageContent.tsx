import { clarityUpdates } from "@/data/collections";

/**
 * Flagship project page for CLarity, kept short: a hero, the problem and the
 * six-step workflow, what is built and what is in progress side by side, the
 * principles, and the build journal. All copy is the original wording; only the
 * layout was compacted from one-card-per-item sections into lists.
 */

const problems = [
  "Scattered Documents",
  "Conflicting Details",
  "Tangled Timelines",
  "Critical Deadlines",
  "Missing Evidence",
  "Stakeholder Noise",
];

const steps = [
  { name: "Intake", line: "Scattered information enters.", desc: "Raw documents, notes, timelines, and communications are ingested without requiring prior categorization." },
  { name: "Timeline", line: "Events are organized chronologically.", desc: "Individual facts and assertions are positioned automatically on a unified, filterable master timeline." },
  { name: "Evidence", line: "Documents & facts are grouped by event.", desc: "Supporting records, quotes, and citations are anchored directly to specific timeline nodes." },
  { name: "Connections", line: "Relationships become clearer.", desc: "Dependencies, cause-and-effect sequences, and contradictions between facts are highlighted." },
  { name: "Gaps", line: "Missing information is surfaced.", desc: "Unsubstantiated claims and missing documentation are flagged explicitly rather than hidden." },
  { name: "Next steps", line: "Clear priorities emerge.", desc: "The user can see what needs attention next and what evidence remains to be gathered." },
];

const built = [
  { name: "Structured Intake", desc: "Parsing raw notes and multi-format text into normalized entity structures." },
  { name: "Timeline Assembly", desc: "Automatic date extraction and chronological sorting of events." },
  { name: "Evidence Grouping", desc: "Associating supporting files and quotes directly to specific timeline nodes." },
  { name: "Gap Detection", desc: "Algorithmic checks to identify unverified claims and missing dates." },
  { name: "Session Restoration", desc: "Persistence layer allowing complete project state recovery across sessions." },
  { name: "Handoff Workflow", desc: "Clean onboarding flows linking public context directly to active workspaces." },
  { name: "Gemini Live Voice", desc: "Voice-driven intake experimentation and verbal narrative clarification trials." },
  { name: "Multi-Model Architecture", desc: "Combining specialized model prompts for extraction vs. complex reasoning." },
];

const focus = [
  { status: "In progress", tone: "text-yellow-300 border-yellow-500/30 bg-yellow-500/15", name: "Canadian & Quebec Content Architecture", desc: "Tailoring information structures for local regulatory, municipal, and regional context standards." },
  { status: "In progress", tone: "text-yellow-300 border-yellow-500/30 bg-yellow-500/15", name: "Provenance & Source Handling", desc: "Ensuring every extracted fact remains tied to its original source document with exact page/line citations." },
  { status: "Testing", tone: "text-blue-300 border-blue-500/30 bg-blue-500/15", name: "Deadline Logic & Calendar Triggers", desc: "Calculating statutory windows, response deadlines, and alert thresholds accurately." },
  { status: "Testing", tone: "text-blue-300 border-blue-500/30 bg-blue-500/15", name: "AI Orchestration Pipeline", desc: "Managing multi-stage prompt flows and fallbacks safely without hallucinated facts." },
  { status: "Prototype", tone: "text-purple-300 border-purple-500/30 bg-purple-500/15", name: "Project Workflow & Workspace UI", desc: "Designing responsive workspace views for organizing complex cases seamlessly." },
  { status: "Planned", tone: "text-gray-300 border-gray-500/30 bg-gray-500/15", name: "Interface Refinement & Export Tools", desc: "Clean PDF/Markdown summary exports for sharing structured context with professionals." },
];

const principles = [
  { name: "Gaps flagged", desc: "Missing facts are surfaced explicitly rather than obscured." },
  { name: "Traceable sources", desc: "Every statement links back to its origin document or note." },
  { name: "Visible uncertainty", desc: "Conflicting details remain visible instead of forced into false alignment." },
  { name: "Human control", desc: "System organizes context; human judgment retains authority." },
  { name: "Assisted organization", desc: "AI assists with structure, never pretending false certainty." },
];

const eyebrow = "text-[0.7rem] font-bold uppercase tracking-[0.2em] text-gold";
const h2 = "mt-2 font-display text-2xl sm:text-3xl font-semibold text-white tracking-tight";
const frame = "mx-auto max-w-[var(--content-frame)] px-6 sm:px-8 lg:px-[50px]";

export function ClarityPageContent() {
  return (
    <div className="text-white selection:bg-gold selection:text-black">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-gold/20 bg-[#070D1A] py-12 sm:py-16 lg:py-20">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-[140px]"
          aria-hidden="true"
        />
        <div className={`${frame} relative z-10`}>
          <div className="max-w-3xl space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/35 bg-gold/15 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-gold-light">
              <span className="h-2 w-2 animate-pulse rounded-full bg-gold" aria-hidden="true" />
              The CLarity Project · Active build
            </span>
            <h1 className="font-display text-[2.25rem] font-semibold leading-[1.08] tracking-tight text-white sm:text-[3.25rem]">
              Bringing order to <span className="text-gold">complex situations.</span>
            </h1>
            <p className="max-w-2xl text-[1.05rem] leading-relaxed text-gray-300 sm:text-[1.15rem]">
              CLarity is an ongoing application being built to help people organize scattered
              information, understand how events connect, identify missing pieces, and move toward
              clearer next steps.
            </p>
          </div>
        </div>
      </section>

      {/* Problem + how it works */}
      <section id="how-it-works" className="border-b border-white/10 bg-[#0A1224] py-12 sm:py-14">
        <div className={`${frame} space-y-10`}>
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-14">
            <div className="space-y-3 lg:col-span-6">
              <p className={eyebrow}>The problem</p>
              <h2 className={h2}>Complex situations rarely arrive in order.</h2>
              <p className="text-[0.95rem] leading-relaxed text-gray-300">
                When people face high-stakes problems—whether legal disputes, insurance claims,
                structural property issues, or intricate administrative procedures—information
                arrives out of sequence, fragmented across formats, and heavy with emotion.
              </p>
              <p className="text-[0.9rem] leading-relaxed text-gray-400">
                Traditional tools treat these situations as simple folder lists. CLarity approaches
                them as interconnected webs of evidence, timeline events, and unknown variables.
              </p>
            </div>
            <div className="lg:col-span-6 lg:pt-8">
              <ul className="flex flex-wrap gap-2" aria-label="Common problems">
                {problems.map((p) => (
                  <li
                    key={p}
                    className="rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5 text-[0.8rem] font-medium text-gray-200"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <p className={eyebrow}>How CLarity works</p>
            <ol className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {steps.map((s, i) => (
                <li
                  key={s.name}
                  className="rounded-xl border border-gold/30 bg-[#0B1426] p-5 transition-colors hover:border-gold/60"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-sm font-bold text-gold">0{i + 1}</span>
                    <h3 className="text-base font-semibold text-white">{s.name}</h3>
                  </div>
                  <p className="mt-2 text-[0.8rem] font-medium text-gold-light">{s.line}</p>
                  <p className="mt-1 text-[0.8rem] leading-relaxed text-gray-300">{s.desc}</p>
                </li>
              ))}
            </ol>
            <p className="mt-5 max-w-3xl text-xs text-gray-400">
              <span className="font-semibold text-gold">Note:</span> CLarity is designed strictly as
              an information organization tool. It does not provide automated legal advice or
              guaranteed legal outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Built + current focus */}
      <section id="built" className="border-b border-gold/20 bg-[#070D1A] py-12 sm:py-14">
        <div className={`${frame} grid gap-10 lg:grid-cols-2 lg:gap-14`}>
          <div>
            <p className={eyebrow}>R&amp;D milestones</p>
            <h2 className={h2}>What has been built.</h2>
            <ul className="mt-5 divide-y divide-white/10 border-y border-white/10">
              {built.map((b) => (
                <li key={b.name} className="py-3">
                  <h3 className="text-[0.95rem] font-semibold text-white">{b.name}</h3>
                  <p className="mt-0.5 text-[0.8rem] leading-relaxed text-gray-300">{b.desc}</p>
                </li>
              ))}
            </ul>
          </div>

          <div id="focus">
            <p className={eyebrow}>Active roadmap</p>
            <h2 className={h2}>Current build focus.</h2>
            <ul className="mt-5 divide-y divide-white/10 border-y border-white/10">
              {focus.map((f) => (
                <li key={f.name} className="py-3">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-[0.95rem] font-semibold text-white">{f.name}</h3>
                    <span
                      className={`shrink-0 rounded border px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider ${f.tone}`}
                    >
                      {f.status}
                    </span>
                  </div>
                  <p className="mt-0.5 text-[0.8rem] leading-relaxed text-gray-300">{f.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Principles + journal */}
      <section id="journal" className="bg-[#0A1224] py-12 sm:py-14">
        <div className={`${frame} space-y-10`}>
          <div>
            <p className={eyebrow}>Project principles</p>
            <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {principles.map((p, i) => (
                <li key={p.name} className="rounded-xl border border-gold/30 bg-[#0B1426] p-4">
                  <span className="font-mono text-xs font-bold text-gold">0{i + 1}</span>
                  <h3 className="mt-1 text-sm font-semibold text-white">{p.name}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-gray-300">{p.desc}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className={eyebrow}>Build journal</p>
            {clarityUpdates && clarityUpdates.length > 0 ? (
              <div className="mt-4 space-y-4">
                {clarityUpdates.map((entry) => (
                  <div key={entry.title} className="space-y-2 rounded-xl border border-white/10 bg-white/[0.03] p-5">
                    <span className="font-mono text-xs text-gold-light">{entry.date}</span>
                    <h3 className="text-lg font-semibold text-white">{entry.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-300">{entry.summary}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="mt-3 max-w-2xl text-[0.9rem] leading-relaxed text-gray-300">
                No public updates logged yet. Entries will appear here as development milestones
                are finalized, and this page will keep changing as the project develops.
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
