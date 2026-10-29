import Link from "next/link";
import { ContactSection } from "@/components/contact/ContactSection";
import { NarrativeStepper } from "@/components/about/NarrativeStepper";

/**
 * About Page Content for James Progressive Solutions.
 *
 * Implements the 6 core sections requested:
 * 1. Intro (PageHero)
 * 2. Where This Started / Background & Evolution (Interactive editorial narrative stepper)
 * 3. What I Build Now (Asymmetric editorial layout)
 * 4. The Approach ("Useful first")
 * 5. Building in Public
 * 6. Contact (reusing ContactSection with requested copy)
 */
export function AboutPageContent() {
  return (
    <div className="space-y-0">
      
      {/* ==================================================
          SECTION 2: BACKGROUND & EVOLUTION — 3-step editorial narrative stepper
         ================================================== */}
      <NarrativeStepper />


      {/* ==================================================
          SECTION 3: WHAT I BUILD NOW
         ================================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#0B132B] text-white border-b border-gold/20">
        <div className="mx-auto max-w-[var(--content-frame)] px-6 sm:px-8 lg:px-[50px] space-y-12">
          
          {/* Header */}
          <div className="max-w-2xl space-y-3">
            <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-gold">
              Focus Areas
            </p>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight">
              What I build now.
            </h2>
            <p className="text-[0.95rem] text-gray-300 leading-relaxed">
              Four focused areas of work, ranging from local client websites to experimental software and long-term R&D.
            </p>
          </div>

          {/* Asymmetric 12-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            
            {/* Left Flagship Block: CLarity (7 Cols) */}
            <div className="lg:col-span-7 p-8 sm:p-10 rounded-[var(--radius-lg)] bg-[#070D1A] border border-gold/40 shadow-xl flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-[0.65rem] font-bold uppercase tracking-[0.2em] bg-gold/15 border border-gold/40 text-gold-light">
                    Flagship R&D Project
                  </span>
                  <span className="text-xs font-mono text-gray-400">ACTIVE BUILD</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                  CLarity
                </h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  The larger ongoing project focused on organizing complex information, structuring timelines, and helping people understand what matters next. Built to bring order to chaotic, high-stakes situations without fear-based copy or false certainty.
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <Link
                  href="/clarity-project"
                  className="inline-flex items-center gap-2 text-sm font-bold text-gold-light hover:underline"
                >
                  <span>Explore the CLarity Project</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right Stacked Blocks: Websites, Web Apps, AI Creations (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col gap-5 justify-between">
              
              {/* Websites */}
              <div className="p-6 rounded-[var(--radius-lg)] bg-[#0A1224] border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-gold">WEBSITES</span>
                  <Link href="/websites" className="text-xs text-gold-light hover:underline font-semibold">View Work →</Link>
                </div>
                <h4 className="text-lg font-semibold text-white">Website Redevelopment</h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Practical, responsive websites for local businesses designed to make services clearer, improve trust, and streamline quote requests.
                </p>
              </div>

              {/* Web Apps */}
              <div className="p-6 rounded-[var(--radius-lg)] bg-[#0A1224] border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-gray-400">WEB APPS</span>
                  <Link href="/free-apps" className="text-xs text-gray-300 hover:underline font-semibold">View Apps →</Link>
                </div>
                <h4 className="text-lg font-semibold text-white">Tools & Applications</h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Small tools and focused applications designed to solve specific operational, productivity, and organizational challenges.
                </p>
              </div>

              {/* AI Creations */}
              <div className="p-6 rounded-[var(--radius-lg)] bg-[#0A1224] border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-gray-400">AI CREATIONS</span>
                  <Link href="/ai-creations" className="text-xs text-gray-300 hover:underline font-semibold">View Experiments →</Link>
                </div>
                <h4 className="text-lg font-semibold text-white">AI Experiments</h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Practical trials using modern AI tools for design, research, image generation, video, and rapid software development.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ==================================================
          SECTION 4: THE APPROACH
         ================================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#F9F6F0] border-b border-[#0F172A]/10">
        <div className="mx-auto max-w-[var(--content-frame)] px-6 sm:px-8 lg:px-[50px] space-y-10">
          
          <div className="max-w-2xl space-y-3">
            <p className="text-eyebrow font-semibold tracking-[0.19em] text-gold-dark uppercase">
              Core Principles
            </p>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-black tracking-tight">
              Useful first.
            </h2>
            <p className="text-[0.95rem] text-body/85 leading-relaxed">
              Simple guidelines that shape every project, product, and client interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-xl bg-white border border-[#0F172A]/10 shadow-sm space-y-2">
              <span className="text-gold-dark font-bold text-xs font-mono">01 // FOCUS</span>
              <h3 className="text-base font-semibold text-black">Solve the Actual Problem</h3>
              <p className="text-xs text-body/80 leading-relaxed">
                Identify the true underlying friction rather than building superficial features or chasing design trends.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-[#0F172A]/10 shadow-sm space-y-2">
              <span className="text-gold-dark font-bold text-xs font-mono">02 // CLARITY</span>
              <h3 className="text-base font-semibold text-black">Keep Systems Understandable</h3>
              <p className="text-xs text-body/80 leading-relaxed">
                Build clean architecture and straightforward logic so the work remains maintainable and clear over time.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-[#0F172A]/10 shadow-sm space-y-2">
              <span className="text-gold-dark font-bold text-xs font-mono">03 // SIMPLICITY</span>
              <h3 className="text-base font-semibold text-black">Avoid Unnecessary Complexity</h3>
              <p className="text-xs text-body/80 leading-relaxed">
                Prefer simple, robust solutions over convoluted frameworks or over-engineered setups.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-[#0F172A]/10 shadow-sm space-y-2">
              <span className="text-gold-dark font-bold text-xs font-mono">04 // HONESTY</span>
              <h3 className="text-base font-semibold text-black">Be Honest About Status</h3>
              <p className="text-xs text-body/80 leading-relaxed">
                State clearly what is finished, active, or experimental without exaggerating outcomes or progress.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-[#0F172A]/10 shadow-sm space-y-2">
              <span className="text-gold-dark font-bold text-xs font-mono">05 // AI INTEGRATION</span>
              <h3 className="text-base font-semibold text-black">AI as a Tool, Not Judgment</h3>
              <p className="text-xs text-body/80 leading-relaxed">
                Use AI for speed, synthesis, and prototyping, but maintain human judgment and oversight throughout.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-[#0F172A]/10 shadow-sm space-y-2">
              <span className="text-gold-dark font-bold text-xs font-mono">06 // ITERATION</span>
              <h3 className="text-base font-semibold text-black">Improve Through Testing</h3>
              <p className="text-xs text-body/80 leading-relaxed">
                Refine products through practical use and feedback rather than relying on unvalidated assumptions.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ==================================================
          SECTION 5: BUILDING IN PUBLIC
         ================================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#070D1A] text-white border-b border-gold/20">
        <div className="mx-auto max-w-[var(--content-frame)] px-6 sm:px-8 lg:px-[50px] space-y-8">
          
          <div className="max-w-2xl space-y-3">
            <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-gold">
              Public Development
            </p>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight">
              Building in public.
            </h2>
            <p className="text-[0.95rem] text-gray-300 leading-relaxed">
              This site documents work as it develops. Projects are not forced to look artificially complete before they are ready.
            </p>
          </div>

          {/* Status Breakdown Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 pt-2">
            
            <div className="p-4 rounded-lg bg-white/[0.03] border border-white/10 text-center space-y-1.5">
              <span className="px-2 py-0.5 rounded text-[0.65rem] font-bold bg-gold/20 text-gold-light border border-gold/30">
                ACTIVE
              </span>
              <p className="text-xs text-gray-300 pt-1">In daily development or active client use</p>
            </div>

            <div className="p-4 rounded-lg bg-white/[0.03] border border-white/10 text-center space-y-1.5">
              <span className="px-2 py-0.5 rounded text-[0.65rem] font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                EXPERIMENTAL
              </span>
              <p className="text-xs text-gray-300 pt-1">Research trials testing new tools & models</p>
            </div>

            <div className="p-4 rounded-lg bg-white/[0.03] border border-white/10 text-center space-y-1.5">
              <span className="px-2 py-0.5 rounded text-[0.65rem] font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                EVOLVING
              </span>
              <p className="text-xs text-gray-300 pt-1">Growing in scope as milestones are met</p>
            </div>

            <div className="p-4 rounded-lg bg-white/[0.03] border border-white/10 text-center space-y-1.5">
              <span className="px-2 py-0.5 rounded text-[0.65rem] font-bold bg-green-500/20 text-green-300 border border-green-500/30">
                FREE TO USE
              </span>
              <p className="text-xs text-gray-300 pt-1">Tools released publicly for anyone</p>
            </div>

            <div className="p-4 rounded-lg bg-white/[0.03] border border-white/10 text-center space-y-1.5 col-span-2 sm:col-span-1">
              <span className="px-2 py-0.5 rounded text-[0.65rem] font-bold bg-yellow-500/20 text-yellow-300 border border-yellow-500/30">
                FOR SALE
              </span>
              <p className="text-xs text-gray-300 pt-1">Production software & templates</p>
            </div>

          </div>

        </div>
      </section>


      {/* ==================================================
          SECTION 6: CONTACT
         ================================================== */}
      <ContactSection 
        heading="Have something in mind?"
        lead="If you need a website, have a project idea, or want to talk about something being built here, get in touch."
      />

    </div>
  );
}
