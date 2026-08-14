
/**
 * Case Studies Section for the /websites route.
 *
 * Features three substantial case-study blocks (Brick Solid Masonry, House Lifting, Foundation Repair)
 * with asymmetric layouts, alternating visual previews, client context, what was built, and 3-5 implementation highlights.
 */
export function WebsitesCaseStudies() {
  return (
    <section className="py-12 sm:py-16 lg:py-20" aria-label="Featured Website Redevelopment Case Studies">
      <div className="mx-auto max-w-[var(--content-frame)] px-6 sm:px-8 lg:px-[50px] space-y-16 sm:space-y-20 lg:space-y-24">
        
        {/* ==================================================
            PROJECT 1 — BRICK SOLID MASONRY
           ================================================== */}
        <article 
          id="brick-solid-masonry"
          className="group relative rounded-[var(--radius-lg)] bg-[#0B132B] border border-gold/30 shadow-[0_12px_40px_rgba(11,19,43,0.35)] overflow-hidden transition-all duration-300 hover:border-gold/60"
        >
          {/* Subtle Ambient Background Light */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-6 sm:p-8 lg:p-12 items-center">
            
            {/* Left / Info Column (7 Cols on Desktop) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Badges & Meta */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-[0.65rem] font-bold uppercase tracking-[0.2em] bg-gold/15 border border-gold/40 text-gold-light">
                  Client Case Study
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-[0.65rem] font-bold uppercase tracking-[0.18em] bg-white/5 border border-white/15 text-gray-300">
                  Bilingual Platform
                </span>
                <span className="text-[0.75rem] text-gold/80 font-medium">
                  Client: Luc Quinn
                </span>
              </div>

              {/* Title & Context */}
              <div>
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight leading-[1.15]">
                  Brick Solid Masonry
                </h2>
                <p className="mt-3 text-[0.95rem] sm:text-[1rem] text-gray-300 leading-relaxed max-w-2xl">
                  Luc Quinn needed a direct, professional digital platform for Brick Solid Masonry that clearly communicates specialized masonry services across both English and French speaking clients, while creating a seamless quote request flow.
                </p>
              </div>

              {/* What Was Built */}
              <div className="p-4 sm:p-5 rounded-lg bg-white/[0.03] border border-white/10 space-y-2">
                <h3 className="text-[0.75rem] font-bold uppercase tracking-[0.18em] text-gold-light">
                  What Was Built
                </h3>
                <p className="text-[0.875rem] text-gray-300 leading-relaxed">
                  A high-performance bilingual marketing website showcasing real masonry capabilities, structured service breakdowns, and clear pathways to request quotes—cross-linked directly to specialized partner services in House Lifting and Foundation Repair.
                </p>
              </div>

              {/* Implementation Highlights */}
              <div className="space-y-3 pt-2">
                <h3 className="text-[0.75rem] font-bold uppercase tracking-[0.18em] text-gray-400">
                  Key Implementation Highlights
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-[0.85rem] text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-gold font-bold shrink-0">✓</span>
                    <span><strong>Bilingual EN / FR</strong> architecture for Ottawa-Gatineau</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold font-bold shrink-0">✓</span>
                    <span><strong>Full Service Matrix</strong> covering brick, stone, block & repointing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold font-bold shrink-0">✓</span>
                    <span><strong>Frictionless Quote Flow</strong> optimized for mobile requests</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold font-bold shrink-0">✓</span>
                    <span><strong>Cross-Service Links</strong> to House Lifting & Foundation divisions</span>
                  </li>
                  <li className="flex items-start gap-2 sm:col-span-2">
                    <span className="text-gold font-bold shrink-0">✓</span>
                    <span><strong>High-Speed Architecture</strong> designed for fast mobile loading and local search visibility</span>
                  </li>
                </ul>
              </div>

              {/* CTA Action Bar */}
              <div className="pt-4 flex flex-wrap items-center gap-4 border-t border-white/10">
                <a
                  href="https://brick-solid-masonry-preview.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-gold text-black font-semibold text-[0.875rem] transition-all hover:bg-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
                >
                  <span>Visit Live Site</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
                <span className="text-[0.8rem] text-gray-400 font-mono">
                  bricksolidmasonry.ca (preview)
                </span>
              </div>

            </div>

            {/* Right / Visual Preview Column (5 Cols on Desktop) */}
            <div className="lg:col-span-5">
              <div className="rounded-xl bg-[#070D1C] border border-gold/30 overflow-hidden shadow-2xl">
                
                {/* Browser Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#0e172c] border-b border-white/10 text-xs text-gray-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded bg-black/40 text-[0.7rem] text-gold-light font-mono truncate max-w-[200px]">
                    <svg className="w-3 h-3 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span>bricksolidmasonry.ca</span>
                  </div>
                  <span className="text-[0.65rem] font-bold text-gold/80 uppercase">EN | FR</span>
                </div>

                {/* Simulated UI Content */}
                <div className="p-6 space-y-5 bg-gradient-to-b from-[#0a1224] to-[#060b17] text-left">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <div className="space-y-0.5">
                      <span className="text-[0.6rem] font-bold tracking-[0.2em] text-gold uppercase">BRICK SOLID MASONRY</span>
                      <p className="text-[0.8rem] font-semibold text-white">Luc Quinn • Ottawa / Gatineau</p>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[0.6rem] font-bold bg-gold/20 text-gold-light border border-gold/30">
                      BILINGUAL
                    </span>
                  </div>

                  {/* Hero Wireframe Preview */}
                  <div className="p-4 rounded-lg bg-white/[0.04] border border-white/10 space-y-3">
                    <span className="inline-block px-2 py-0.5 text-[0.6rem] uppercase tracking-wider bg-gold/20 text-gold-light rounded font-semibold">
                      MASONRY SERVICES
                    </span>
                    <p className="text-sm font-semibold text-white leading-tight">
                      Quality Brickwork, Stone Veneer, Block & Structural Repointing
                    </p>
                    <div className="grid grid-cols-2 gap-2 pt-1 text-[0.7rem] text-gray-300">
                      <div className="p-2 rounded bg-black/40 border border-white/5">
                        <span className="font-semibold text-gold block">Brick & Stone</span>
                        <span className="text-[0.65rem] text-gray-400">Installs & repairs</span>
                      </div>
                      <div className="p-2 rounded bg-black/40 border border-white/5">
                        <span className="font-semibold text-gold block">Tuckpointing</span>
                        <span className="text-[0.65rem] text-gray-400">Mortar restoration</span>
                      </div>
                    </div>
                  </div>

                  {/* Cross Links Badge */}
                  <div className="p-3 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-between text-[0.725rem]">
                    <span className="text-gray-300 font-medium">Specialized Trade Partners</span>
                    <span className="text-gold font-bold">House Lifting →</span>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </article>


        {/* ==================================================
            PROJECT 2 — HOUSE LIFTING
           ================================================== */}
        <article 
          id="house-lifting"
          className="group relative rounded-[var(--radius-lg)] bg-[#FDFBF7] border border-[#0F172A]/15 shadow-[0_12px_40px_rgba(15,23,42,0.06)] overflow-hidden transition-all duration-300 hover:border-gold/60"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-6 sm:p-8 lg:p-12 items-center">
            
            {/* Visual Column on Left for Desktop (5 Cols) */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="rounded-xl bg-[#0F172A] border border-[#0F172A]/20 overflow-hidden shadow-2xl text-white">
                
                {/* Browser Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#0B132B] border-b border-white/10 text-xs text-gray-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded bg-black/40 text-[0.7rem] text-gold-light font-mono truncate max-w-[200px]">
                    <svg className="w-3 h-3 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span>houselifting.ca</span>
                  </div>
                  <span className="text-[0.65rem] font-bold text-gold/80 uppercase">QC / ON</span>
                </div>

                {/* Simulated Reassuring UI Content */}
                <div className="p-6 space-y-4 bg-gradient-to-b from-[#0F172A] to-[#0A101D]">
                  
                  <div className="space-y-1">
                    <span className="text-[0.6rem] font-bold tracking-[0.2em] text-gold uppercase">HOMEOWNER RESOURCE</span>
                    <h4 className="text-base font-semibold text-white">Understanding Structural House Lifting</h4>
                    <p className="text-[0.75rem] text-gray-300">Calm, clear guidance for elevation & foundation replacement</p>
                  </div>

                  {/* 4-Step Process Visualizer */}
                  <div className="p-3.5 rounded-lg bg-white/[0.04] border border-white/10 space-y-2.5">
                    <span className="text-[0.65rem] font-bold uppercase tracking-wider text-gold-light">
                      The 4-Stage Lift Process
                    </span>
                    <div className="grid grid-cols-4 gap-1.5 text-center text-[0.625rem]">
                      <div className="p-1.5 rounded bg-black/40 border border-white/10 text-gray-300 font-medium">1. Prep</div>
                      <div className="p-1.5 rounded bg-gold/20 border border-gold/40 text-gold-light font-bold">2. Lift</div>
                      <div className="p-1.5 rounded bg-black/40 border border-white/10 text-gray-300 font-medium">3. Build</div>
                      <div className="p-1.5 rounded bg-black/40 border border-white/10 text-gray-300 font-medium">4. Lower</div>
                    </div>
                  </div>

                  {/* Key Motives Cards */}
                  <div className="space-y-1.5 text-[0.725rem]">
                    <div className="p-2.5 rounded bg-white/[0.03] border border-white/5 flex items-center justify-between">
                      <span className="text-gray-200">Foundation Replacement</span>
                      <span className="text-gold font-bold">Details →</span>
                    </div>
                    <div className="p-2.5 rounded bg-white/[0.03] border border-white/5 flex items-center justify-between">
                      <span className="text-gray-200">Expand Basement Height</span>
                      <span className="text-gold font-bold">Details →</span>
                    </div>
                  </div>

                </div>

              </div>
            </div>

            {/* Info Column on Right for Desktop (7 Cols) */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              
              {/* Badges & Meta */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-[0.65rem] font-bold uppercase tracking-[0.2em] bg-black/5 border border-black/15 text-black">
                  Specialized Trade
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-[0.65rem] font-bold uppercase tracking-[0.18em] bg-gold/15 border border-gold/40 text-gold-dark font-semibold">
                  Structural Elevation
                </span>
                <span className="text-[0.75rem] text-body/80 font-medium">
                  Quebec / Ottawa-Gatineau
                </span>
              </div>

              {/* Title & Context */}
              <div>
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-black tracking-tight leading-[1.15]">
                  House Lifting Services
                </h2>
                <p className="mt-3 text-[0.95rem] sm:text-[1rem] text-body leading-relaxed max-w-2xl">
                  House lifting is a major structural decision. Homeowners are often overwhelmed by complex engineering terms or aggressive sales tactics. This platform was designed to provide a calm, reassuring, educational resource.
                </p>
              </div>

              {/* What Was Built */}
              <div className="p-4 sm:p-5 rounded-lg bg-black/[0.03] border border-black/10 space-y-2">
                <h3 className="text-[0.75rem] font-bold uppercase tracking-[0.18em] text-gold-dark">
                  What Was Built
                </h3>
                <p className="text-[0.875rem] text-body leading-relaxed">
                  An authoritative, homeowner-focused web experience that demystifies structural elevation. It explains why houses are lifted (flood mitigation, foundation replacement, expanding living space) and details what happens underneath during each phase.
                </p>
              </div>

              {/* Implementation Highlights */}
              <div className="space-y-3 pt-2">
                <h3 className="text-[0.75rem] font-bold uppercase tracking-[0.18em] text-body/70">
                  Key Implementation Highlights
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-[0.85rem] text-body">
                  <li className="flex items-start gap-2">
                    <span className="text-gold-dark font-bold shrink-0">✓</span>
                    <span><strong>Calm Homeowner Aesthetic</strong> avoiding fear-based copy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold-dark font-bold shrink-0">✓</span>
                    <span><strong>4-Step Process Breakdown</strong> detailing excavation to lowering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold-dark font-bold shrink-0">✓</span>
                    <span><strong>Structural Motives Guide</strong> for height, floods & repairs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold-dark font-bold shrink-0">✓</span>
                    <span><strong>Stress-Free Consultation Pathway</strong> for property evaluations</span>
                  </li>
                  <li className="flex items-start gap-2 sm:col-span-2">
                    <span className="text-gold-dark font-bold shrink-0">✓</span>
                    <span><strong>Bilingual Support (EN / FR)</strong> tailored for regional property owners</span>
                  </li>
                </ul>
              </div>

              {/* Details Tag Bar & CTA */}
              <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-black/10">
                <a
                  href="https://brick-solid-house-lifting-preview.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#0F172A] text-white font-semibold text-[0.875rem] transition-all hover:bg-gold-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
                >
                  <span>Visit Live Site</span>
                  <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
                <div className="flex flex-wrap items-center gap-2 text-xs text-body/80 font-medium">
                  <span className="px-2.5 py-1 rounded bg-black/5">Hydraulic Jacking</span>
                  <span className="px-2.5 py-1 rounded bg-black/5">Foundation Replacement</span>
                  <span className="px-2.5 py-1 rounded bg-black/5">Basement Height Extension</span>
                </div>
              </div>

            </div>

          </div>
        </article>


        {/* ==================================================
            PROJECT 3 — FOUNDATION REPAIR
           ================================================== */}
        <article 
          id="foundation-repair"
          className="group relative rounded-[var(--radius-lg)] bg-[#080F1E] border border-gold/25 shadow-[0_12px_40px_rgba(8,15,30,0.4)] overflow-hidden transition-all duration-300 hover:border-gold/60"
        >
          {/* Ambient Light Accent */}
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-6 sm:p-8 lg:p-12 items-center">
            
            {/* Info Column (7 Cols on Desktop) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Badges & Meta */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-[0.65rem] font-bold uppercase tracking-[0.2em] bg-gold/15 border border-gold/40 text-gold-light">
                  Structural Diagnostics
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-[0.65rem] font-bold uppercase tracking-[0.18em] bg-white/5 border border-white/15 text-gray-300">
                  Homeowner Portal
                </span>
                <span className="text-[0.75rem] text-gold/80 font-medium">
                  Bilingual Support
                </span>
              </div>

              {/* Title & Context */}
              <div>
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight leading-[1.15]">
                  Foundation Repair Specialist
                </h2>
                <p className="mt-3 text-[0.95rem] sm:text-[1rem] text-gray-300 leading-relaxed max-w-2xl">
                  Property owners encountering foundation issues need immediate clarity on warning signs and structural risk. This platform was created to categorize diverse repair services logically and guide users toward appropriate solutions.
                </p>
              </div>

              {/* What Was Built */}
              <div className="p-4 sm:p-5 rounded-lg bg-white/[0.03] border border-white/10 space-y-2">
                <h3 className="text-[0.75rem] font-bold uppercase tracking-[0.18em] text-gold-light">
                  What Was Built
                </h3>
                <p className="text-[0.875rem] text-gray-300 leading-relaxed">
                  An organized structural repair resource featuring an interactive warning-sign diagnostic guide, grouped repair pathways (crack injection, waterproofing, excavation, block rebuilding), technical process illustrations, and a detailed FAQ.
                </p>
              </div>

              {/* Implementation Highlights */}
              <div className="space-y-3 pt-2">
                <h3 className="text-[0.75rem] font-bold uppercase tracking-[0.18em] text-gray-400">
                  Key Implementation Highlights
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-[0.85rem] text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-gold font-bold shrink-0">✓</span>
                    <span><strong>Warning Signs Index</strong> for cracks, seepage & bowing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold font-bold shrink-0">✓</span>
                    <span><strong>Grouped Repair Pathways</strong> for injection, waterproofing & rebuilding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold font-bold shrink-0">✓</span>
                    <span><strong>Technical Process Illustration</strong> from excavation to sealing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold font-bold shrink-0">✓</span>
                    <span><strong>Homeowner FAQ Section</strong> addressing timelines & warranties</span>
                  </li>
                  <li className="flex items-start gap-2 sm:col-span-2">
                    <span className="text-gold font-bold shrink-0">✓</span>
                    <span><strong>Responsive Contact Funnel</strong> with symptom reporting and photo upload capabilities</span>
                  </li>
                </ul>
              </div>

              {/* CTA Action Bar & Tags */}
              <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-white/10">
                <a
                  href="https://foundation-repair-preview.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-gold text-black font-semibold text-[0.875rem] transition-all hover:bg-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
                >
                  <span>Visit Live Site</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
                <div className="flex flex-wrap items-center gap-2 text-xs text-gray-400">
                  <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">Crack Repair</span>
                  <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">Parging</span>
                  <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">Waterproofing</span>
                  <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">Excavation</span>
                </div>
              </div>

            </div>

            {/* Visual Preview Column (5 Cols) */}
            <div className="lg:col-span-5">
              <div className="rounded-xl bg-[#060B16] border border-gold/30 overflow-hidden shadow-2xl">
                
                {/* Browser Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#0d162a] border-b border-white/10 text-xs text-gray-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded bg-black/40 text-[0.7rem] text-gold-light font-mono truncate max-w-[200px]">
                    <svg className="w-3 h-3 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span>foundationrepair.ca</span>
                  </div>
                  <span className="text-[0.65rem] font-bold text-gold/80 uppercase">DIAGNOSTIC</span>
                </div>

                {/* Simulated Diagnostic UI Content */}
                <div className="p-6 space-y-4 bg-gradient-to-b from-[#0a1224] to-[#040812]">
                  
                  <div className="space-y-1">
                    <span className="text-[0.6rem] font-bold tracking-[0.2em] text-gold uppercase">DIAGNOSTIC INDEX</span>
                    <h4 className="text-base font-semibold text-white">Identify Your Foundation Warning Signs</h4>
                    <p className="text-[0.75rem] text-gray-300">Symptom evaluation & recommended repair pathways</p>
                  </div>

                  {/* Warning Signs Grid */}
                  <div className="grid grid-cols-2 gap-2 text-[0.7rem]">
                    <div className="p-2.5 rounded bg-white/[0.04] border border-white/10">
                      <span className="font-semibold text-gold block mb-0.5">Vertical Cracks</span>
                      <span className="text-[0.65rem] text-gray-400">High-pressure injection</span>
                    </div>
                    <div className="p-2.5 rounded bg-white/[0.04] border border-white/10">
                      <span className="font-semibold text-gold block mb-0.5">Water Seepage</span>
                      <span className="text-[0.65rem] text-gray-400">Exterior membrane</span>
                    </div>
                    <div className="p-2.5 rounded bg-white/[0.04] border border-white/10">
                      <span className="font-semibold text-gold block mb-0.5">Bowing Walls</span>
                      <span className="text-[0.65rem] text-gray-400">Structural reinforcement</span>
                    </div>
                    <div className="p-2.5 rounded bg-white/[0.04] border border-white/10">
                      <span className="font-semibold text-gold block mb-0.5">Flaking Parging</span>
                      <span className="text-[0.65rem] text-gray-400">Surface restoration</span>
                    </div>
                  </div>

                  {/* Process Step Pill */}
                  <div className="p-3 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-between text-[0.725rem]">
                    <span className="text-gray-300">Technical Process Walkthrough</span>
                    <span className="text-gold font-bold">View FAQ →</span>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </article>

      </div>
    </section>
  );
}
