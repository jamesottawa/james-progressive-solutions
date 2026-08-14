"use client";

import { useState } from "react";

interface WorkshopTopic {
  id: "01" | "02" | "03" | "04";
  fullName: string;
  summary: string;
  focusTerms: readonly string[];
}

const WORKSHOP_TOPICS: readonly WorkshopTopic[] = [
  {
    id: "01",
    fullName: "Planning & Organization",
    summary:
      "Simple tools for organizing projects, deadlines, milestones, and everyday work without bloated software overhead.",
    focusTerms: ["Visual Planning", "Milestones & Deadlines", "Local Storage", "Workspace Export"],
  },
  {
    id: "02",
    fullName: "Browser Tools & Utilities",
    summary:
      "Fast, single-purpose helpers and data formatters that run entirely client-side in the browser with zero server latency.",
    focusTerms: ["Client-Side Processing", "Data Formatting & Cleanup", "Private Local Utilities"],
  },
  {
    id: "03",
    fullName: "AI-Assisted Workflows",
    summary:
      "Focused interfaces that pair generative intelligence with structured UI forms to accelerate repetitive drafting and research tasks.",
    focusTerms: ["Structured Interfaces", "Research Synthesis", "Workflow Scaffolding"],
  },
  {
    id: "04",
    fullName: "Mobile & Progressive Apps",
    summary:
      "Responsive, offline-capable mobile utilities engineered for instant launch on phone home screens with zero app-store friction.",
    focusTerms: ["Offline-First Architecture", "Rapid Task Capture", "Progressive Web Apps"],
  },
];

type TopicIndex = 0 | 1 | 2 | 3;

/**
 * InteractiveWorkshopBrowser
 *
 * A compact, 5-second editorial instrument selector for the workshop's active exploration areas.
 * - Sits on a soft cool-slate ground (#E7E9EC) maintaining the ivory → slate → navy color rhythm.
 * - Operates entirely in place with a stationary viewport.
 * - Features a clean horizontal 4-category selector row with a concise active information area beneath.
 */
export function InteractiveWorkshopBrowser() {
  const [activeIdx, setActiveIdx] = useState<TopicIndex>(0);
  const activeTopic = WORKSHOP_TOPICS[activeIdx];

  const handleKeyDown = (e: React.KeyboardEvent, currentIdx: number) => {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      const nextIdx = ((currentIdx + 1) % WORKSHOP_TOPICS.length) as TopicIndex;
      setActiveIdx(nextIdx);
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      const prevIdx = ((currentIdx - 1 + WORKSHOP_TOPICS.length) % WORKSHOP_TOPICS.length) as TopicIndex;
      setActiveIdx(prevIdx);
    }
  };

  return (
    <section
      id="workshop-browser"
      aria-labelledby="workshop-browser-heading"
      className="rounded-[var(--radius-md)] bg-[#E7E9EC] border border-[#0B132B]/10 p-5 sm:p-6 lg:p-7 space-y-4 sm:space-y-5"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4 pb-2.5 border-b border-[#0B132B]/10">
        <div className="flex items-baseline gap-3">
          <p className="text-eyebrow font-semibold tracking-[0.19em] text-[#875c10] uppercase">
            Active Exploration
          </p>
          <span className="text-[#0B132B]/25 font-mono text-xs hidden sm:inline">·</span>
          <h2
            id="workshop-browser-heading"
            className="font-display text-xl sm:text-2xl font-semibold text-[#0B132B] tracking-tight"
          >
            In the workshop.
          </h2>
        </div>
        <p className="text-[0.75rem] font-mono text-body/70">
          Select a track to inspect research areas in development.
        </p>
      </div>

      {/* ── HORIZONTAL CATEGORY SELECTOR ROW (4 Categories) ────────────────── */}
      <div
        className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5"
        role="tablist"
        aria-label="Workshop exploration tracks"
      >
        {WORKSHOP_TOPICS.map((topic, idx) => {
          const isActive = activeIdx === idx;

          return (
            <button
              key={topic.id}
              type="button"
              role="tab"
              id={`browser-tab-${topic.id}`}
              aria-controls={`browser-panel-${topic.id}`}
              aria-selected={isActive}
              tabIndex={isActive ? 0 : -1}
              onClick={(e) => {
                e.preventDefault();
                setActiveIdx(idx as TopicIndex);
              }}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              className={`text-left p-2.5 sm:p-3 rounded-[var(--radius-sm)] border transition-all duration-200 ease-out cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#0B132B]/50 ${
                isActive
                  ? "bg-[#FAF7F0] border-[#0B132B]/30 shadow-xs translate-y-[-1px]"
                  : "bg-white/40 border-black/[0.04] hover:bg-white/80 hover:border-[#A8761C]/30 text-[#2C2924]"
              }`}
            >
              <div className="flex items-center justify-between gap-1.5">
                <span
                  className={`font-mono text-[0.625rem] font-bold ${
                    isActive ? "text-[#0B132B]" : "text-[#875c10]"
                  }`}
                >
                  {topic.id}.
                </span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A8761C] shrink-0" aria-hidden="true" />
                )}
              </div>
              <h3
                className={`mt-1 text-[0.785rem] sm:text-[0.8125rem] font-semibold tracking-tight leading-tight line-clamp-1 transition-colors ${
                  isActive ? "text-[#0B132B]" : "text-[#2C2924]"
                }`}
              >
                {topic.fullName}
              </h3>
            </button>
          );
        })}
      </div>

      {/* ── ACTIVE INFORMATION AREA (Stationary in-place swap) ──────────────── */}
      <div
        id={`browser-panel-${activeTopic.id}`}
        role="tabpanel"
        aria-labelledby={`browser-tab-${activeTopic.id}`}
        className="p-4 sm:p-5 rounded-[var(--radius-sm)] bg-[#FAF7F0] border border-[#0B132B]/10 space-y-2 shadow-xs transition-all duration-200"
      >
        <div className="flex items-center justify-between">
          <span className="font-mono text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[#875c10]">
            Track {activeTopic.id} &middot; {activeTopic.fullName}
          </span>
          <span className="font-mono text-[0.575rem] px-2 py-0.5 rounded bg-black/[0.05] text-[#2C2924] font-semibold uppercase">
            Active Exploration
          </span>
        </div>

        {/* Short Plain-English Sentence */}
        <p className="text-[0.925rem] sm:text-[1rem] font-medium text-[#0B132B] leading-snug">
          {activeTopic.summary}
        </p>

        {/* Compact Focus Terms (Separated by Middots) */}
        <div className="pt-1 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[0.725rem] text-body/75">
          <span className="text-[#875c10] font-bold uppercase tracking-wider text-[0.625rem]">
            Focus Areas:
          </span>
          {activeTopic.focusTerms.map((term, idx) => (
            <span key={term} className="inline-flex items-center">
              {idx > 0 && <span className="text-black/30 mr-2" aria-hidden="true">·</span>}
              <span className="text-black font-medium">{term}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Workshop Philosophy Footer */}
      <div className="pt-2 border-t border-[#0B132B]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 text-[0.7rem] text-body/70 font-mono">
        <span>Software is published openly once it reaches stable operational utility.</span>
        <span className="text-[#875c10] font-semibold">100% Free &amp; Open Access</span>
      </div>
    </section>
  );
}
