import { clarityUpdates } from "@/data/collections";
import { LogoGlyph } from "@/components/hero/Hero";

/**
 * Flagship Project Page Content for CLarity.
 *
 * Implements the 8 core sections requested for the /clarity-project route:
 * 1. Intro / Flagship Hero
 * 2. The Problem
 * 3. How CLarity Works (Conceptual Workflow)
 * 4. What Has Been Built
 * 5. Current Build Focus
 * 6. Build Journal
 * 7. Project Principles
 * 8. Closing Section
 */
export function ClarityPageContent() {
  return (
    <div className="space-y-0 text-white selection:bg-gold selection:text-black">
      
      {/* ==================================================
          SECTION 1: INTRO / FLAGSHIP HERO
         ================================================== */}
      <section className="relative border-b border-gold/20 bg-[#070D1A] py-16 sm:py-20 lg:py-28 overflow-hidden">
        {/* Subtle Ambient Light Core */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 blur-[140px] rounded-full pointer-events-none" 
          aria-hidden="true" 
        />
        
        <div className="mx-auto max-w-[var(--content-frame)] px-6 sm:px-8 lg:px-[50px] relative z-10">
          <div className="max-w-3xl space-y-6">
            
            {/* Status & Eyebrow */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 border border-gold/35 text-gold-light text-[0.68rem] font-bold tracking-[0.2em] uppercase">
                <span className="w-2 h-2 rounded-full bg-gold animate-pulse" aria-hidden="true" />
                THE CLARITY PROJECT
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/15 text-gray-300 text-[0.65rem] font-bold tracking-[0.18em] uppercase">
                ACTIVE BUILD
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-[2.25rem] sm:text-[3.25rem] lg:text-[3.75rem] font-semibold text-white leading-[1.08] tracking-tight">
              Bringing order to <span className="text-gold">complex situations.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-[1.05rem] sm:text-[1.15rem] text-gray-300 font-normal leading-relaxed max-w-2xl">
              CLarity is an ongoing application being built to help people organize scattered information, understand how events connect, identify missing pieces, and move toward clearer next steps.
            </p>

            {/* Hero CTA Action */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#how-it-works"
                className="group inline-flex h-[48px] items-center justify-center gap-2.5 rounded-md bg-gold px-7 text-[0.9rem] font-bold text-black shadow-md transition-all duration-300 hover:bg-gold-light hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
              >
                <span>Explore the build</span>
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                </svg>
              </a>
              <span className="text-xs text-gray-400 font-mono">
                Flagship R&D Initiative
              </span>
            </div>

          </div>
        </div>
      </section>


      {/* ==================================================
          SECTION 2: THE PROBLEM
         ================================================== */}
      <section id="problem" className="py-16 sm:py-20 lg:py-24 bg-[#0A1224] border-b border-white/10">
        <div className="mx-auto max-w-[var(--content-frame)] px-6 sm:px-8 lg:px-[50px]">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Editorial Narrative Intro (5 Cols) */}
            <div className="lg:col-span-5 space-y-4">
              <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-gold">
                The Problem Space
              </p>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight leading-[1.15]">
                Complex situations rarely arrive in order.
              </h2>
              <p className="text-[0.95rem] text-gray-300 leading-relaxed">
                When people face high-stakes problems—whether legal disputes, insurance claims, structural property issues, or intricate administrative procedures—information arrives out of sequence, fragmented across formats, and heavy with emotion.
              </p>
              <p className="text-[0.9rem] text-gray-400 leading-relaxed">
                Traditional tools treat these situations as simple folder lists. CLarity approaches them as interconnected webs of evidence, timeline events, and unknown variables.
              </p>
            </div>

            {/* 6 Problem Dimensions (7 Cols) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              
              <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
                <span className="text-gold font-bold text-xs font-mono">01 // FRAGMENTATION</span>
                <h3 className="text-base font-semibold text-white">Scattered Documents</h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Contracts, emails, receipts, and hand-written notes spread across multiple folders and devices.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
                <span className="text-gold font-bold text-xs font-mono">02 // CONTRADICTION</span>
                <h3 className="text-base font-semibold text-white">Conflicting Details</h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Differing accounts, vague dates, and contradictory statements that obscure what actually occurred.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
                <span className="text-gold font-bold text-xs font-mono">03 // CHRONOLOGY</span>
                <h3 className="text-base font-semibold text-white">Tangled Timelines</h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Events taking place across months or years without a single clear chronological master sequence.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
                <span className="text-gold font-bold text-xs font-mono">04 // RISK WINDOWS</span>
                <h3 className="text-base font-semibold text-white">Critical Deadlines</h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Time-sensitive statutory windows and response limits that carry high penalties if overlooked.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
                <span className="text-gold font-bold text-xs font-mono">05 // BLIND SPOTS</span>
                <h3 className="text-base font-semibold text-white">Missing Evidence</h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Unidentified gaps in documentation where crucial supporting facts remain uncollected.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
                <span className="text-gold font-bold text-xs font-mono">06 // MULTI-PARTY</span>
                <h3 className="text-base font-semibold text-white">Stakeholder Noise</h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Interactions across multiple organizations, adjusters, counsel, and contractors creating clutter.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ==================================================
          SECTION 3: HOW CLARITY WORKS (Conceptual Workflow)
         ================================================== */}
      <section id="how-it-works" className="py-16 sm:py-20 lg:py-24 bg-[#070D1A] border-b border-gold/20">
        <div className="mx-auto max-w-[var(--content-frame)] px-6 sm:px-8 lg:px-[50px] space-y-12">
          
          {/* Header */}
          <div className="max-w-2xl space-y-3">
            <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-gold">
              Conceptual Architecture
            </p>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight">
              How CLarity works.
            </h2>
            <p className="text-[0.95rem] text-gray-300 leading-relaxed">
              A structured, step-by-step workflow designed to transform chaotic inputs into clear, verifiable understanding.
            </p>
          </div>

          {/* 6-Step Workflow Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Step 1 */}
            <div className="p-6 rounded-xl bg-[#0B1426] border border-gold/30 space-y-3 relative group hover:border-gold/60 transition-colors">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded text-[0.65rem] font-bold tracking-wider bg-gold/20 text-gold-light uppercase border border-gold/30">
                  STEP 01
                </span>
                <span className="text-xs font-mono text-gray-400">INPUT</span>
              </div>
              <h3 className="text-lg font-semibold text-white">INTAKE</h3>
              <p className="text-xs text-gold-light font-medium">Scattered information enters.</p>
              <p className="text-xs text-gray-300 leading-relaxed">
                Raw documents, notes, timelines, and communications are ingested without requiring prior categorization.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-xl bg-[#0B1426] border border-gold/30 space-y-3 relative group hover:border-gold/60 transition-colors">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded text-[0.65rem] font-bold tracking-wider bg-gold/20 text-gold-light uppercase border border-gold/30">
                  STEP 02
                </span>
                <span className="text-xs font-mono text-gray-400">CHRONOLOGY</span>
              </div>
              <h3 className="text-lg font-semibold text-white">TIMELINE</h3>
              <p className="text-xs text-gold-light font-medium">Events are organized chronologically.</p>
              <p className="text-xs text-gray-300 leading-relaxed">
                Individual facts and assertions are positioned automatically on a unified, filterable master timeline.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-xl bg-[#0B1426] border border-gold/30 space-y-3 relative group hover:border-gold/60 transition-colors">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded text-[0.65rem] font-bold tracking-wider bg-gold/20 text-gold-light uppercase border border-gold/30">
                  STEP 03
                </span>
                <span className="text-xs font-mono text-gray-400">VERIFICATION</span>
              </div>
              <h3 className="text-lg font-semibold text-white">EVIDENCE</h3>
              <p className="text-xs text-gold-light font-medium">Documents & facts are grouped by event.</p>
              <p className="text-xs text-gray-300 leading-relaxed">
                Supporting records, quotes, and citations are anchored directly to specific timeline nodes.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-6 rounded-xl bg-[#0B1426] border border-gold/30 space-y-3 relative group hover:border-gold/60 transition-colors">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded text-[0.65rem] font-bold tracking-wider bg-gold/20 text-gold-light uppercase border border-gold/30">
                  STEP 04
                </span>
                <span className="text-xs font-mono text-gray-400">RELATIONSHIPS</span>
              </div>
              <h3 className="text-lg font-semibold text-white">CONNECTIONS</h3>
              <p className="text-xs text-gold-light font-medium">Relationships become clearer.</p>
              <p className="text-xs text-gray-300 leading-relaxed">
                Dependencies, cause-and-effect sequences, and contradictions between facts are highlighted.
              </p>
            </div>

            {/* Step 5 */}
            <div className="p-6 rounded-xl bg-[#0B1426] border border-gold/30 space-y-3 relative group hover:border-gold/60 transition-colors">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded text-[0.65rem] font-bold tracking-wider bg-gold/20 text-gold-light uppercase border border-gold/30">
                  STEP 05
                </span>
                <span className="text-xs font-mono text-gray-400">TRANSPARENCY</span>
              </div>
              <h3 className="text-lg font-semibold text-white">GAPS</h3>
              <p className="text-xs text-gold-light font-medium">Missing information is surfaced.</p>
              <p className="text-xs text-gray-300 leading-relaxed">
                Unsubstantiated claims and missing documentation are flagged explicitly rather than hidden.
              </p>
            </div>

            {/* Step 6 */}
            <div className="p-6 rounded-xl bg-[#0B1426] border border-gold/30 space-y-3 relative group hover:border-gold/60 transition-colors">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded text-[0.65rem] font-bold tracking-wider bg-gold/20 text-gold-light uppercase border border-gold/30">
                  STEP 06
                </span>
                <span className="text-xs font-mono text-gray-400">ACTION</span>
              </div>
              <h3 className="text-lg font-semibold text-white">NEXT STEPS</h3>
              <p className="text-xs text-gold-light font-medium">Clear priorities emerge.</p>
              <p className="text-xs text-gray-300 leading-relaxed">
                The user can see what needs attention next and what evidence remains to be gathered.
              </p>
            </div>

          </div>

          {/* Disclaimer Note */}
          <div className="p-4 rounded-lg bg-white/[0.03] border border-white/10 text-xs text-gray-400 text-center max-w-3xl mx-auto">
            <span className="text-gold font-semibold">Note:</span> CLarity is designed strictly as an information organization tool. It does not provide automated legal advice or guaranteed legal outcomes.
          </div>

        </div>
      </section>


      {/* ==================================================
          SECTION 4: WHAT HAS BEEN BUILT
         ================================================== */}
      <section id="built" className="py-16 sm:py-20 lg:py-24 bg-[#0A1224] border-b border-white/10">
        <div className="mx-auto max-w-[var(--content-frame)] px-6 sm:px-8 lg:px-[50px] space-y-10">
          
          <div className="max-w-2xl space-y-3">
            <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-gold">
              R&D Milestones
            </p>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight">
              What has been built.
            </h2>
            <p className="text-[0.95rem] text-gray-300 leading-relaxed">
              Development areas and functional foundations realized during active build sprints.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            
            <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
              <span className="text-[0.65rem] font-bold text-gold uppercase tracking-wider block">MODULE 01</span>
              <h3 className="text-base font-semibold text-white">Structured Intake</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Parsing raw notes and multi-format text into normalized entity structures.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
              <span className="text-[0.65rem] font-bold text-gold uppercase tracking-wider block">MODULE 02</span>
              <h3 className="text-base font-semibold text-white">Timeline Assembly</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Automatic date extraction and chronological sorting of events.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
              <span className="text-[0.65rem] font-bold text-gold uppercase tracking-wider block">MODULE 03</span>
              <h3 className="text-base font-semibold text-white">Evidence Grouping</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Associating supporting files and quotes directly to specific timeline nodes.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
              <span className="text-[0.65rem] font-bold text-gold uppercase tracking-wider block">MODULE 04</span>
              <h3 className="text-base font-semibold text-white">Gap Detection</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Algorithmic checks to identify unverified claims and missing dates.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
              <span className="text-[0.65rem] font-bold text-gold uppercase tracking-wider block">MODULE 05</span>
              <h3 className="text-base font-semibold text-white">Session Restoration</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Persistence layer allowing complete project state recovery across sessions.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
              <span className="text-[0.65rem] font-bold text-gold uppercase tracking-wider block">MODULE 06</span>
              <h3 className="text-base font-semibold text-white">Handoff Workflow</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Clean onboarding flows linking public context directly to active workspaces.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
              <span className="text-[0.65rem] font-bold text-gold uppercase tracking-wider block">MODULE 07</span>
              <h3 className="text-base font-semibold text-white">Gemini Live Voice</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Voice-driven intake experimentation and verbal narrative clarification trials.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
              <span className="text-[0.65rem] font-bold text-gold uppercase tracking-wider block">MODULE 08</span>
              <h3 className="text-base font-semibold text-white">Multi-Model Architecture</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Combining specialized model prompts for extraction vs. complex reasoning.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ==================================================
          SECTION 5: CURRENT BUILD FOCUS
         ================================================== */}
      <section id="focus" className="py-16 sm:py-20 lg:py-24 bg-[#070D1A] border-b border-gold/20">
        <div className="mx-auto max-w-[var(--content-frame)] px-6 sm:px-8 lg:px-[50px] space-y-10">
          
          <div className="max-w-2xl space-y-3">
            <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-gold">
              Active Roadmap
            </p>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight">
              Current build focus.
            </h2>
            <p className="text-[0.95rem] text-gray-300 leading-relaxed">
              Transparent tracking of ongoing engineering, testing, and interface refinement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Focus 1 */}
            <div className="p-6 rounded-xl bg-[#0B1426] border border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded text-[0.6rem] font-bold tracking-wider bg-yellow-500/20 text-yellow-300 uppercase border border-yellow-500/30">
                  IN PROGRESS
                </span>
                <span className="text-[0.65rem] font-mono text-gray-400">CA / QC ARCHITECTURE</span>
              </div>
              <h3 className="text-base font-semibold text-white">Canadian & Quebec Content Architecture</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Tailoring information structures for local regulatory, municipal, and regional context standards.
              </p>
            </div>

            {/* Focus 2 */}
            <div className="p-6 rounded-xl bg-[#0B1426] border border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded text-[0.6rem] font-bold tracking-wider bg-yellow-500/20 text-yellow-300 uppercase border border-yellow-500/30">
                  IN PROGRESS
                </span>
                <span className="text-[0.65rem] font-mono text-gray-400">PROVENANCE</span>
              </div>
              <h3 className="text-base font-semibold text-white">Provenance & Source Handling</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Ensuring every extracted fact remains tied to its original source document with exact page/line citations.
              </p>
            </div>

            {/* Focus 3 */}
            <div className="p-6 rounded-xl bg-[#0B1426] border border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded text-[0.6rem] font-bold tracking-wider bg-blue-500/20 text-blue-300 uppercase border border-blue-500/30">
                  TESTING
                </span>
                <span className="text-[0.65rem] font-mono text-gray-400">LOGIC</span>
              </div>
              <h3 className="text-base font-semibold text-white">Deadline Logic & Calendar Triggers</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Calculating statutory windows, response deadlines, and alert thresholds accurately.
              </p>
            </div>

            {/* Focus 4 */}
            <div className="p-6 rounded-xl bg-[#0B1426] border border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded text-[0.6rem] font-bold tracking-wider bg-blue-500/20 text-blue-300 uppercase border border-blue-500/30">
                  TESTING
                </span>
                <span className="text-[0.65rem] font-mono text-gray-400">ORCHESTRATION</span>
              </div>
              <h3 className="text-base font-semibold text-white">AI Orchestration Pipeline</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Managing multi-stage prompt flows and fallbacks safely without hallucinated facts.
              </p>
            </div>

            {/* Focus 5 */}
            <div className="p-6 rounded-xl bg-[#0B1426] border border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded text-[0.6rem] font-bold tracking-wider bg-purple-500/20 text-purple-300 uppercase border border-purple-500/30">
                  PROTOTYPE
                </span>
                <span className="text-[0.65rem] font-mono text-gray-400">WORKSPACE UI</span>
              </div>
              <h3 className="text-base font-semibold text-white">Project Workflow & Workspace UI</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Designing responsive workspace views for organizing complex cases seamlessly.
              </p>
            </div>

            {/* Focus 6 */}
            <div className="p-6 rounded-xl bg-[#0B1426] border border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded text-[0.6rem] font-bold tracking-wider bg-gray-500/20 text-gray-300 uppercase border border-gray-500/30">
                  PLANNED
                </span>
                <span className="text-[0.65rem] font-mono text-gray-400">EXPORTS</span>
              </div>
              <h3 className="text-base font-semibold text-white">Interface Refinement & Export Tools</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Clean PDF/Markdown summary exports for sharing structured context with professionals.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ==================================================
          SECTION 6: BUILD JOURNAL
         ================================================== */}
      <section id="journal" className="py-16 sm:py-20 lg:py-24 bg-[#0A1224] border-b border-white/10">
        <div className="mx-auto max-w-[var(--content-frame)] px-6 sm:px-8 lg:px-[50px] space-y-10">
          
          <div className="max-w-2xl space-y-3">
            <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-gold">
              Development Log
            </p>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight">
              Build Journal
            </h2>
            <p className="text-[0.95rem] text-gray-300 leading-relaxed">
              Chronological updates published directly as key R&D milestones are completed.
            </p>
          </div>

          {clarityUpdates && clarityUpdates.length > 0 ? (
            <div className="space-y-6">
              {clarityUpdates.map((entry) => (
                <div key={entry.title} className="p-6 rounded-xl bg-white/[0.03] border border-white/10 space-y-3">
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span className="font-mono text-gold-light">{entry.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">{entry.title}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">{entry.summary}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 sm:p-12 rounded-xl bg-white/[0.02] border border-white/10 text-center max-w-xl mx-auto space-y-4">
              <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center text-gold mx-auto">
                <LogoGlyph />
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-semibold text-white">No public updates logged yet.</h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Updates are published as development milestones are finalized. Real entries will appear here in step with the ongoing build.
                </p>
              </div>
            </div>
          )}

        </div>
      </section>


      {/* ==================================================
          SECTION 7: PROJECT PRINCIPLES
         ================================================== */}
      <section id="principles" className="py-16 sm:py-20 lg:py-24 bg-[#070D1A] border-b border-gold/20">
        <div className="mx-auto max-w-[var(--content-frame)] px-6 sm:px-8 lg:px-[50px] space-y-10">
          
          <div className="max-w-2xl space-y-3">
            <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-gold">
              Core Philosophies
            </p>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight">
              Project principles.
            </h2>
            <p className="text-[0.95rem] text-gray-300 leading-relaxed">
              The non-negotiable architectural guidelines governing CLarity&apos;s engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
            
            <div className="p-5 rounded-xl bg-[#0B1426] border border-gold/30 space-y-3">
              <span className="text-gold font-bold text-xs font-mono">01</span>
              <h3 className="text-sm font-semibold text-white">Gaps Flagged</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Missing facts are surfaced explicitly rather than obscured.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#0B1426] border border-gold/30 space-y-3">
              <span className="text-gold font-bold text-xs font-mono">02</span>
              <h3 className="text-sm font-semibold text-white">Traceable Sources</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Every statement links back to its origin document or note.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#0B1426] border border-gold/30 space-y-3">
              <span className="text-gold font-bold text-xs font-mono">03</span>
              <h3 className="text-sm font-semibold text-white">Visible Uncertainty</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Conflicting details remain visible instead of forced into false alignment.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#0B1426] border border-gold/30 space-y-3">
              <span className="text-gold font-bold text-xs font-mono">04</span>
              <h3 className="text-sm font-semibold text-white">Human Control</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                System organizes context; human judgment retains authority.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#0B1426] border border-gold/30 space-y-3">
              <span className="text-gold font-bold text-xs font-mono">05</span>
              <h3 className="text-sm font-semibold text-white">Assisted Organization</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                AI assists with structure, never pretending false certainty.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ==================================================
          SECTION 8: CLOSING SECTION
         ================================================== */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-[#0A1224] to-[#050914] text-center relative overflow-hidden">
        <div className="mx-auto max-w-2xl px-6 space-y-6 relative z-10">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 border border-gold/35 text-gold-light text-[0.65rem] font-bold tracking-[0.2em] uppercase">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" aria-hidden="true" />
            LIVING BUILD
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white tracking-tight">
            Still being built.
          </h2>

          <p className="text-[0.95rem] sm:text-[1rem] text-gray-300 leading-relaxed">
            CLarity is evolving through research, testing, and real implementation work. This page will continue to change as the project develops.
          </p>

          <div className="pt-4 flex items-center justify-center gap-4">
            <a
              href="#journal"
              className="inline-flex h-[48px] items-center justify-center px-8 rounded-md bg-gold text-black font-bold text-[0.9rem] transition-all hover:bg-gold-light hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
            >
              Follow the project
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}
