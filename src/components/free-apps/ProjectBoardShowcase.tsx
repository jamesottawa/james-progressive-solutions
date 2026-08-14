"use client";

import { useState } from "react";
import Link from "next/link";
import { FreeApp } from "@/data/freeApps";

/**
 * ProjectBoardShowcase
 *
 * The primary featured showcase on /free-apps.
 * Designed for instant 5-second product comprehension:
 * - Clear plain-language explanation of what Project Board does
 * - Human-centered "What You Can Do" capability list
 * - Real, recognizable product preview with an interactive Timeline / List toggle
 * - Demoted, compact technical supporting facts
 */
export function ProjectBoardShowcase({ app }: { app: FreeApp }) {
  const [viewMode, setViewMode] = useState<"timeline" | "list">("timeline");

  return (
    <section aria-labelledby="featured-build-heading">
      {/* Section Header */}
      <div className="flex items-center justify-between pb-3.5 mb-6 border-b border-black/[0.08]">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[0.625rem] font-bold uppercase tracking-[0.22em] text-[#A8761C]">
            01 — Featured Tool
          </span>
          <span className="text-black/20">·</span>
          <span className="font-mono text-[0.625rem] font-bold uppercase tracking-[0.16em] text-body/75">
            Web Utility
          </span>
        </div>
        <span className="hidden sm:inline-flex items-center gap-1.5 font-mono text-[0.625rem] font-bold uppercase tracking-[0.18em] text-[#0B132B]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#A8761C]" aria-hidden="true" />
          Active Beta {app.version ? `(${app.version})` : ""}
        </span>
      </div>

      {/* Primary Deep Navy Showcase Frame */}
      <article className="group relative rounded-[var(--radius-lg)] bg-[#0B132B] border border-gold/30 shadow-[0_16px_48px_rgba(11,19,43,0.35)] overflow-hidden transition-all duration-300">
        {/* Ambient Warm Glow */}
        <div
          className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 bg-gold/10 rounded-full blur-3xl"
          aria-hidden="true"
        />

        <div className="p-6 sm:p-8 lg:p-12 space-y-8">
          
          {/* Main 2-Column Product Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* ── LEFT COLUMN: PLAIN-LANGUAGE PRODUCT STORY (6 Cols) ── */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Product Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[0.65rem] font-bold uppercase tracking-[0.18em] bg-gold/15 border border-gold/40 text-gold-light">
                  Web Application
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[0.65rem] font-bold uppercase tracking-[0.16em] bg-white/10 border border-white/20 text-gray-200">
                  {app.status} {app.version ? `// ${app.version}` : ""}
                </span>
                <span className="text-[0.725rem] font-mono text-gold-light/80">
                  Browser-Based
                </span>
              </div>

              {/* Title & Clear Value Statement */}
              <div>
                <h2
                  id="featured-build-heading"
                  className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight leading-[1.15]"
                >
                  <Link
                    href={`/free-apps/${app.slug}`}
                    className="hover:text-gold-light transition-colors"
                  >
                    {app.title}
                  </Link>
                </h2>
                <p className="mt-3 text-[1rem] sm:text-[1.05rem] text-gray-200 leading-relaxed max-w-xl font-medium">
                  A simple visual planner for organizing projects, tasks, milestones, and deadlines.
                </p>
              </div>

              {/* What You Can Do (Human-Centered Actions) */}
              <div className="space-y-2.5 pt-1">
                <h3 className="text-[0.7rem] font-mono font-bold uppercase tracking-[0.18em] text-gold-light">
                  What You Can Do
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[0.85rem] text-gray-200">
                  <li className="flex items-start gap-2">
                    <span className="text-gold-light font-bold shrink-0">✓</span>
                    <span>Create projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold-light font-bold shrink-0">✓</span>
                    <span>Add tasks and milestones</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold-light font-bold shrink-0">✓</span>
                    <span>Track deadlines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold-light font-bold shrink-0">✓</span>
                    <span>View work on a timeline</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold-light font-bold shrink-0">✓</span>
                    <span>Switch to a structured list</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold-light font-bold shrink-0">✓</span>
                    <span>Track task status</span>
                  </li>
                  <li className="flex items-start gap-2 sm:col-span-2">
                    <span className="text-gold-light font-bold shrink-0">✓</span>
                    <span>Import and export your workspace</span>
                  </li>
                </ul>
              </div>

              {/* Built to Stay Simple (Secondary human-centered note) */}
              <div className="p-3.5 sm:p-4 rounded-lg bg-white/[0.04] border border-white/10 space-y-1">
                <h3 className="text-[0.675rem] font-mono font-bold uppercase tracking-[0.18em] text-gray-300">
                  Built to stay simple
                </h3>
                <p className="text-[0.8rem] text-gray-300 leading-relaxed">
                  Everything is stored locally in your browser. No mandatory account, no tracking, and workspace data can be imported or exported anytime.
                </p>
              </div>

              {/* Primary Action Row */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                {app.launchUrl ? (
                  <a
                    href={app.launchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-gold text-black font-semibold text-[0.875rem] transition-all hover:bg-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
                  >
                    <span>Launch App</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-white/10 border border-white/20 text-gold-light font-mono font-bold text-xs tracking-wider uppercase">
                    <span className="w-2 h-2 rounded-full bg-gold animate-pulse" aria-hidden="true" />
                    Public Version Coming Soon
                  </span>
                )}

                <Link
                  href={`/free-apps/${app.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gold-light hover:text-white transition-colors py-2 outline-none focus-visible:ring-1 focus-visible:ring-gold"
                >
                  <span>View Details</span>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>

            </div>

            {/* ── RIGHT COLUMN: REALISTIC PRODUCT PREVIEW (6 Cols) ── */}
            <div className="lg:col-span-6">
              <div className="rounded-lg bg-[#070D1A] border border-gold/25 overflow-hidden shadow-2xl">
                
                {/* Workspace Window Header with Interactive View Switcher */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-[#0B132B] border-b border-white/10 text-xs">
                  {/* Real Project Identifier */}
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="w-2 h-2 rounded-full bg-gold shrink-0" aria-hidden="true" />
                    <span className="font-mono text-[0.7rem] font-bold text-white uppercase tracking-wider truncate">
                      Project: Website Redesign
                    </span>
                  </div>
                  
                  {/* Interactive View Toggle */}
                  <div className="flex items-center gap-1 bg-[#070D1A] p-0.5 rounded border border-white/10 shrink-0">
                    <button
                      type="button"
                      onClick={() => setViewMode("timeline")}
                      className={`px-2.5 py-1 rounded text-[0.625rem] font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                        viewMode === "timeline"
                          ? "bg-gold text-black font-bold shadow-xs"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      Timeline View
                    </button>
                    <button
                      type="button"
                      onClick={() => setViewMode("list")}
                      className={`px-2.5 py-1 rounded text-[0.625rem] font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                        viewMode === "list"
                          ? "bg-gold text-black font-bold shadow-xs"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      List View
                    </button>
                  </div>
                </div>

                {/* Workspace View Canvas */}
                <div className="p-4 sm:p-5 space-y-4 text-left min-h-[270px] flex flex-col justify-between">
                  
                  {viewMode === "timeline" ? (
                    /* ── TIMELINE VIEW: Visual tasks & milestones across time ── */
                    <div className="space-y-3 animate-[fade-in_200ms_ease-out] motion-reduce:animate-none">
                      
                      {/* Timeline Time Columns Header */}
                      <div className="grid grid-cols-4 gap-1 border-b border-white/10 pb-2 text-[0.65rem] font-mono text-gray-400 text-center">
                        <span className="text-gold-light font-semibold">Week 1</span>
                        <span>Week 2</span>
                        <span className="text-gold-light font-semibold">Week 3</span>
                        <span>Week 4</span>
                      </div>

                      {/* Timeline Task Bars */}
                      <div className="space-y-2.5 text-[0.725rem]">
                        
                        {/* Task 1: Homepage Layout (Spans W1 - W2, Done) */}
                        <div className="space-y-1">
                          <div className="flex justify-between items-center text-[0.7rem]">
                            <span className="text-gray-200 font-medium">Homepage Layout</span>
                            <span className="text-gold-light font-mono text-[0.6rem]">Done</span>
                          </div>
                          <div className="grid grid-cols-4 gap-1 h-5 bg-white/[0.03] rounded p-0.5">
                            <div className="col-span-2 bg-gold/80 rounded flex items-center px-2 text-[0.6rem] font-bold text-black truncate">
                              ✓ Completed
                            </div>
                          </div>
                        </div>

                        {/* Task 2: Mobile Review (Spans W2 - W3, In Progress) */}
                        <div className="space-y-1">
                          <div className="flex justify-between items-center text-[0.7rem]">
                            <span className="text-gray-200 font-medium">Mobile Review</span>
                            <span className="text-gold font-mono text-[0.6rem]">In Progress</span>
                          </div>
                          <div className="grid grid-cols-4 gap-1 h-5 bg-white/[0.03] rounded p-0.5">
                            <div className="col-start-2 col-span-2 bg-white/20 border border-gold/40 rounded flex items-center px-2 text-[0.6rem] font-semibold text-white truncate">
                              ● In Progress
                            </div>
                          </div>
                        </div>

                        {/* Task 3: Contact Form (Spans W3, Milestone) */}
                        <div className="space-y-1">
                          <div className="flex justify-between items-center text-[0.7rem]">
                            <span className="text-gray-200 font-medium flex items-center gap-1.5">
                              <span className="text-gold">◆</span> Contact Form
                            </span>
                            <span className="text-gold-light font-mono text-[0.6rem]">Milestone</span>
                          </div>
                          <div className="grid grid-cols-4 gap-1 h-5 bg-white/[0.03] rounded p-0.5">
                            <div className="col-start-3 col-span-1 bg-gold/30 border border-gold rounded flex items-center justify-center text-[0.6rem] font-bold text-gold-light">
                              ◆ Milestone
                            </div>
                          </div>
                        </div>

                        {/* Task 4: Launch (Week 4, Planned) */}
                        <div className="space-y-1">
                          <div className="flex justify-between items-center text-[0.7rem]">
                            <span className="text-gray-400">Launch</span>
                            <span className="text-gray-500 font-mono text-[0.6rem]">Planned</span>
                          </div>
                          <div className="grid grid-cols-4 gap-1 h-5 bg-white/[0.03] rounded p-0.5">
                            <div className="col-start-4 col-span-1 bg-white/10 rounded flex items-center px-2 text-[0.6rem] text-gray-400 truncate">
                              ○ Planned
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  ) : (
                    /* ── LIST VIEW: The exact same tasks in a clean structured list ── */
                    <div className="space-y-2.5 animate-[fade-in_200ms_ease-out] motion-reduce:animate-none">
                      
                      {/* List Header */}
                      <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[0.65rem] font-mono text-gray-400">
                        <span>TASK / MILESTONE</span>
                        <span>STATUS</span>
                      </div>

                      {/* Structured Task List Rows */}
                      <div className="space-y-1.5 text-[0.75rem]">
                        
                        <div className="p-2 rounded bg-white/[0.04] border border-white/10 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-gold font-bold">✓</span>
                            <span className="text-white font-medium">Homepage Layout</span>
                          </div>
                          <span className="text-[0.625rem] font-mono font-semibold text-black bg-gold px-2 py-0.5 rounded">
                            Done
                          </span>
                        </div>

                        <div className="p-2 rounded bg-white/[0.04] border border-white/10 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-gold animate-pulse">●</span>
                            <span className="text-white font-medium">Mobile Review</span>
                          </div>
                          <span className="text-[0.625rem] font-mono font-semibold text-gold-light bg-gold/20 border border-gold/40 px-2 py-0.5 rounded">
                            In Progress
                          </span>
                        </div>

                        <div className="p-2 rounded bg-white/[0.04] border border-white/10 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-gold">◆</span>
                            <span className="text-white font-medium">Contact Form</span>
                          </div>
                          <span className="text-[0.625rem] font-mono font-semibold text-gold-light bg-gold/15 px-2 py-0.5 rounded">
                            Milestone
                          </span>
                        </div>

                        <div className="p-2 rounded bg-white/[0.02] border border-white/5 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-gray-500">○</span>
                            <span className="text-gray-400">Launch</span>
                          </div>
                          <span className="text-[0.625rem] font-mono text-gray-400 bg-white/5 px-2 py-0.5 rounded">
                            Planned
                          </span>
                        </div>

                      </div>
                    </div>
                  )}

                  {/* Preview Footer Guide */}
                  <div className="pt-2 border-t border-white/10 flex items-center justify-between font-mono text-[0.65rem] text-gray-400">
                    <span>View: Interactive Workspace</span>
                    <span className="text-gold-light font-medium">Click tabs to switch views</span>
                  </div>

                </div>

              </div>
            </div>

          </div>

          {/* ── DEMOTED TECHNICAL SUPPORTING FACTS (Compact 3-Item Ledger) ── */}
          <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            <div className="space-y-0.5">
              <span className="font-mono text-[0.65rem] font-bold text-gold-light uppercase tracking-wider block">
                Local-First
              </span>
              <p className="text-xs text-gray-300">
                No required account.
              </p>
            </div>

            <div className="space-y-0.5">
              <span className="font-mono text-[0.65rem] font-bold text-gold-light uppercase tracking-wider block">
                Private by Default
              </span>
              <p className="text-xs text-gray-300">
                Stored in your browser.
              </p>
            </div>

            <div className="space-y-0.5">
              <span className="font-mono text-[0.65rem] font-bold text-gold-light uppercase tracking-wider block">
                Portable
              </span>
              <p className="text-xs text-gray-300">
                JSON import/export.
              </p>
            </div>
          </div>

        </div>
      </article>
    </section>
  );
}
