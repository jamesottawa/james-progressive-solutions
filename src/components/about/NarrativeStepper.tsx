"use client";

import { useState, useEffect, useRef, useCallback } from "react";

/* ─────────────────────────────────────────────────────────────────────────────
   NarrativeStepper
   An interactive 3-step editorial story navigator for the About page
   "Background & Evolution" section.
   
   Color balance:
   - 70% warm ivory / parchment ground (#F6F1E7, #FAF7F0)
   - 15% black / charcoal typography (font-display headings, body text)
   - 10% muted gold (#A8761C) for section eyebrows, stage markers & hairlines
   - 5% deep navy (#0B132B / #16233E) as a cool counterweight for active accents
───────────────────────────────────────────────────────────────────────────── */

interface Stage {
  id: "01" | "02" | "03";
  title: string;
  subtitle: string;
  thesis: string;
  body: string[];
}

const STAGES: readonly Stage[] = [
  {
    id: "01",
    title: "The Common Thread",
    subtitle: "Practical problem-solving before software",
    thesis: "Problem-solving has always been the common thread.",
    body: [
      "Long before writing software or building digital tools, the focus was hands-on and practical: figuring out why a system or process is failing, stripping away the noise to isolate the core friction, and assembling a straightforward, reliable fix. Solving real-world problems was never about making things complicated; it was about restoring order so people could move forward.",
    ],
  },
  {
    id: "02",
    title: "Technology Became the Tool",
    subtitle: "Execution tools rather than an original identity",
    thesis: "Technology naturally became another set of tools for executing practical solutions.",
    body: [
      "Technology naturally became another set of tools for executing those solutions rather than an original career identity. Early experimentation with websites years ago provided a basic understanding of how the web worked, but that curiosity sat quietly in the background for a long time.",
      "What changed was the evolution of modern development tools and AI-assisted workflows. As those capabilities matured, the barrier between identifying a problem and building a working application shrank in ways that expanded what a single builder could accomplish, turning serious application development into a practical path.",
    ],
  },
  {
    id: "03",
    title: "What It Became",
    subtitle: "The natural umbrella around real projects",
    thesis: "James Progressive Solutions gradually became the natural umbrella.",
    body: [
      "The work evolved organically through real projects rather than a traditional agency or software-career path. Each website, utility tool, and experimental build was created to answer a specific need, test a technical concept, or solve real-world operational friction. As the projects grew in scope and seriousness, it became the umbrella for all of it—practical websites, focused web applications, AI experiments, and the longer-term CLarity project.",
    ],
  },
];

type StageIndex = 0 | 1 | 2;

export function NarrativeStepper() {
  const [activeStage, setActiveStage] = useState<StageIndex>(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const containerRef = useRef<HTMLElement>(null);
  const touchStartX = useRef<number | null>(null);

  const switchStage = useCallback((targetIndex: StageIndex) => {
    if (targetIndex === activeStage) return;
    setDirection(targetIndex > activeStage ? "next" : "prev");
    setIsTransitioning(true);
    setActiveStage(targetIndex);
    const timer = setTimeout(() => setIsTransitioning(false), 280);
    return () => clearTimeout(timer);
  }, [activeStage]);

  const goPrev = useCallback(() => {
    if (activeStage > 0) {
      switchStage((activeStage - 1) as StageIndex);
    }
  }, [activeStage, switchStage]);

  const goNext = useCallback(() => {
    if (activeStage < STAGES.length - 1) {
      switchStage((activeStage + 1) as StageIndex);
    }
  }, [activeStage, switchStage]);

  // Keyboard navigation for arrow keys when section is in viewport
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA") {
        return;
      }
      
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;

      if (isInViewport) {
        if (e.key === "ArrowRight") {
          e.preventDefault();
          goNext();
        } else if (e.key === "ArrowLeft") {
          e.preventDefault();
          goPrev();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goNext, goPrev]);

  // Touch gesture handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diffX = touchStartX.current - e.changedTouches[0].clientX;
    const threshold = 40;

    if (diffX > threshold) {
      goNext();
    } else if (diffX < -threshold) {
      goPrev();
    }
    touchStartX.current = null;
  };

  const current = STAGES[activeStage];

  return (
    <section
      ref={containerRef}
      aria-label="Background and Evolution Story"
      className="bg-[#F6F1E7] border-b border-[#0F172A]/10 select-none sm:select-text"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Gold hairline at top closes the seam with the hero */}
      <div className="border-t border-[#A8761C]/20" />

      <div className="mx-auto max-w-[var(--content-frame)] px-6 sm:px-8 lg:px-[50px] py-10 sm:py-12 lg:py-14">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-6 sm:mb-8 lg:mb-9">
          <p className="text-eyebrow font-semibold tracking-[0.19em] text-[#A8761C] uppercase mb-1.5">
            Background &amp; Evolution
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-black tracking-tight">
            How the work came together.
          </h2>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          
          {/* Left Column: 3-Stage Progression Spine & Controls (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-5 lg:space-y-6">
            
            {/* Step Selection Rail */}
            <div className="space-y-1.5 sm:space-y-2" role="tablist" aria-label="Story stages">
              {STAGES.map((stage, idx) => {
                const isActive = activeStage === idx;
                const isPast = activeStage > idx;

                return (
                  <button
                    key={stage.id}
                    role="tab"
                    id={`story-tab-${stage.id}`}
                    aria-controls={`story-panel-${stage.id}`}
                    aria-selected={isActive}
                    tabIndex={0}
                    onClick={() => switchStage(idx as StageIndex)}
                    className={`group w-full text-left p-2.5 sm:p-3 rounded-[var(--radius-sm)] border transition-all duration-200 ease-out outline-none focus-visible:ring-2 focus-visible:ring-[#0B132B]/50 flex items-start gap-3 cursor-pointer ${
                      isActive
                        ? "bg-[#FAF7F0] border-[#0B132B]/20 shadow-xs"
                        : "bg-transparent border-transparent hover:bg-[#FAF7F0]/60 hover:border-black/[0.05]"
                    }`}
                  >
                    {/* Stage number badge */}
                    <span
                      className={`inline-flex items-center justify-center w-6 h-6 rounded-full font-mono text-[0.65rem] font-bold shrink-0 transition-colors duration-200 ${
                        isActive
                          ? "bg-[#0B132B] text-[#FAF6EE]"
                          : isPast
                          ? "bg-[#0B132B]/10 text-[#0B132B] border border-[#0B132B]/20"
                          : "bg-black/[0.05] text-[#A8761C] border border-[#A8761C]/25 group-hover:bg-[#0B132B]/10 group-hover:text-[#0B132B] group-hover:border-[#0B132B]/30"
                      }`}
                    >
                      {stage.id}
                    </span>

                    {/* Stage Title & Subtitle */}
                    <div className="space-y-0.5 min-w-0">
                      <div className="flex items-center gap-2">
                        <span
                          className={`font-mono text-[0.7rem] font-bold uppercase tracking-[0.16em] transition-colors duration-200 ${
                            isActive ? "text-[#0B132B]" : "text-[#2C2924] group-hover:text-[#0B132B]"
                          }`}
                        >
                          {stage.title}
                        </span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0B132B] shrink-0" aria-hidden="true" />
                        )}
                      </div>
                      <p
                        className={`text-xs leading-snug line-clamp-1 transition-colors duration-200 ${
                          isActive ? "text-body/90" : "text-body/75"
                        }`}
                      >
                        {stage.subtitle}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Prev / Next Controls & Counter */}
            <div className="pt-3.5 border-t border-black/[0.07] flex items-center justify-between">
              {/* Previous Button */}
              <button
                type="button"
                onClick={goPrev}
                disabled={activeStage === 0}
                aria-label="Previous story stage"
                className={`inline-flex items-center gap-1.5 font-mono text-[0.6875rem] font-bold uppercase tracking-[0.18em] transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[#0B132B]/50 focus-visible:rounded px-2 py-1 -mx-2 ${
                  activeStage === 0
                    ? "text-black/20 cursor-not-allowed"
                    : "text-[#0B132B]/80 hover:text-[#0B132B] cursor-pointer"
                }`}
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                <span>Prev</span>
              </button>

              {/* Progress Count & Keyboard Hint */}
              <div className="text-center">
                <span className="font-mono text-[0.6875rem] font-bold tracking-[0.2em] tabular-nums">
                  <span className="text-[#0B132B]">0{activeStage + 1}</span>
                  <span className="text-[#A8761C]/70"> / 03</span>
                </span>
                <span className="hidden lg:block text-[0.625rem] font-mono text-body/40 tracking-wider">
                  [ ← / → keys ]
                </span>
              </div>

              {/* Next Button */}
              <button
                type="button"
                onClick={goNext}
                disabled={activeStage === STAGES.length - 1}
                aria-label="Next story stage"
                className={`inline-flex items-center gap-1.5 font-mono text-[0.6875rem] font-bold uppercase tracking-[0.18em] transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[#0B132B]/50 focus-visible:rounded px-2 py-1 -mx-2 ${
                  activeStage === STAGES.length - 1
                    ? "text-black/20 cursor-not-allowed"
                    : "text-[#0B132B]/80 hover:text-[#0B132B] cursor-pointer"
                }`}
              >
                <span>Next</span>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

          </div>

          {/* Right Column: Active Narrative Story Panel (lg:col-span-8) */}
          <div className="lg:col-span-8">
            <div
              id={`story-panel-${current.id}`}
              role="tabpanel"
              aria-labelledby={`story-tab-${current.id}`}
              className={`p-5 sm:p-6 lg:p-7 rounded-[var(--radius-sm)] bg-[#FAF7F0]/90 border border-[#0F172A]/[0.08] shadow-none transition-all duration-300 ease-out motion-reduce:transition-none ${
                isTransitioning
                  ? direction === "next"
                    ? "opacity-40 translate-x-2"
                    : "opacity-40 -translate-x-2"
                  : "opacity-100 translate-x-0"
              }`}
            >
              {/* Header Label inside active panel */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-black/[0.06]">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[0.625rem] font-bold uppercase tracking-[0.22em] text-[#A8761C]">
                    Stage {current.id} of 03
                  </span>
                  <span className="text-black/20">·</span>
                  <span className="font-mono text-[0.625rem] font-bold uppercase tracking-[0.16em] text-body/75">
                    {current.title}
                  </span>
                </div>
                <span className="font-mono text-[0.625rem] font-bold uppercase tracking-[0.2em] text-[#0B132B]/75">
                  NARRATIVE
                </span>
              </div>

              {/* Serif Thesis Headline */}
              <h3 className="font-display text-xl sm:text-2xl lg:text-[1.5rem] leading-[1.28] font-semibold text-black tracking-tight mb-4">
                {current.thesis}
              </h3>

              {/* Supporting Narrative Paragraphs */}
              <div className="space-y-3.5 text-body text-[0.9375rem] sm:text-[0.9625rem] leading-relaxed">
                {current.body.map((paragraph, pIdx) => (
                  <p key={pIdx} className={pIdx === 0 ? "text-body/90" : "text-body/80"}>
                    {paragraph}
                  </p>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
