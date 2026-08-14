/**
 * Free Apps Data Model & Local Static Data Source.
 *
 * Designed with a data-retrieval layer (getFreeApps, getFreeAppBySlug) so that
 * this local static data source can later be replaced with a database/API
 * (Supabase, Firebase, etc.) without rebuilding presentation components.
 */

export type AppType = "WEB" | "ANDROID" | "EXPERIMENT";

export type AppStatus = "AVAILABLE" | "BETA" | "EXPERIMENTAL" | "COMING_SOON";

export type FreeApp = {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  category: "USEFUL" | "FUN" | string;
  type: AppType;
  status: AppStatus;
  version?: string;
  image?: string;
  images?: string[];
  launchUrl?: string;
  downloadUrl?: string;
  platform?: string;
  published: boolean;
  featured?: boolean;
  features?: string[];
};

/** Local static database of free apps & tools. */
export const freeApps: FreeApp[] = [
  {
    id: "from-chaos-to-clear",
    slug: "from-chaos-to-clear",
    title: "FROM CHAOS TO CLEAR",
    shortDescription: "A calm guided workspace for turning rough thoughts, notes, and half-formed plans into one clear next path.",
    description: "A calm, guided workspace designed to transform scattered ideas, rough notes, and emotional or mental friction into structured clarity and actionable next steps. Features multi-stage guided clarity processes, structured thought breakdown, and exportable action plans.",
    category: "USEFUL",
    type: "WEB",
    status: "AVAILABLE",
    version: "v1.0.0",
    platform: "Web Browser (Client-Side)",
    published: true,
    featured: false,
    features: [
      "guided clarity workflow",
      "thought & friction breakdown",
      "actionable next steps synthesis",
      "calm responsive interface",
      "local browser privacy",
    ],
    launchUrl: "https://from-chaos-to-clear.vercel.app",
  },
  {
    id: "for-sale-app",
    slug: "for-sale-app",
    title: "FOR SALE APP",
    shortDescription: "A clean, fast catalog and storefront application for listing and managing items for sale with local data persistence.",
    description: "A streamlined, responsive product showcase and catalog management application built for private sellers and small businesses. Includes rich item cards, detail modal views, local catalog storage, and an administrative editor.",
    category: "USEFUL",
    type: "WEB",
    status: "AVAILABLE",
    version: "v1.0.0",
    platform: "Web Browser (Local Storage)",
    published: true,
    featured: false,
    features: [
      "product catalog display",
      "item detail inspection",
      "admin product editor modal",
      "local storage persistence",
      "responsive mobile layout",
    ],
    launchUrl: "https://james-ps-for-sale-app.vercel.app",
  },
  {
    id: "ai-loop-review",
    slug: "ai-loop-review",
    title: "AI LOOP REVIEW",
    shortDescription: "A three-persona sequential review, critique, and synthesis tool for analyzing ideas, documents, and code.",
    description: "A structured multi-perspective review environment that evaluates text, drafts, and strategies through three distinct review persona loops. Features sequential analysis stages, local simulation demo mode, PDF and markdown export, and session history management.",
    category: "USEFUL",
    type: "WEB",
    status: "AVAILABLE",
    version: "v1.0.0",
    platform: "Web Browser (Local Demo & AI Proxy)",
    published: true,
    featured: false,
    features: [
      "3-stage persona review loop",
      "offline demo simulation mode",
      "PDF & markdown export",
      "saved session history",
      "structured synthesis reports",
    ],
    launchUrl: "https://ai-loop-review.vercel.app",
  },
  {
    id: "project-board",
    slug: "project-board",
    title: "PROJECT BOARD",
    shortDescription: "A lightweight visual project planner for organizing projects, tasks, milestones, and deadlines.",
    description: "A lightweight visual project planner built to help organize projects, tasks, milestones, and deadlines. Features multiple view modes including calendar/timeline and list views, task status tracking, local browser storage, and project import/export capabilities.",
    category: "USEFUL",
    type: "WEB",
    status: "BETA",
    version: "v0.9.0-beta",
    platform: "Web Browser (Local Storage)",
    published: true,
    featured: true,
    features: [
      "create projects",
      "tasks and milestones",
      "calendar/timeline view",
      "list view",
      "task status tracking",
      "local browser storage",
      "project import/export",
    ],
    launchUrl: "https://project-board-nu.vercel.app",
  },
  {
    id: "sitesignal",
    slug: "sitesignal",
    title: "SITESIGNAL",
    shortDescription: "A website quality, accessibility, and performance audit tool for detecting defects, broken elements, and layout flaws.",
    description: "A diagnostic auditing tool designed to inspect web properties for structural defects, visual inconsistencies, mobile responsiveness issues, and accessibility gaps. Includes interactive demonstration audit reports and structured finding breakdowns.",
    category: "USEFUL",
    type: "WEB",
    status: "AVAILABLE",
    version: "v1.0.0",
    platform: "Web Browser",
    published: true,
    featured: false,
    features: [
      "website defect diagnostic view",
      "interactive audit demonstration report",
      "score & category breakdown",
      "performance & accessibility checks",
      "exportable findings",
    ],
    launchUrl: "https://sitesignal-rho.vercel.app",
  },
];

/** Abstraction: Data retrieval helper functions for UI decoupling */

export async function getFreeApps(): Promise<FreeApp[]> {
  return freeApps.filter((app) => app.published);
}

export async function getFreeAppBySlug(slug: string): Promise<FreeApp | undefined> {
  return freeApps.find((app) => app.slug === slug && app.published);
}

export async function getFeaturedFreeApps(): Promise<FreeApp[]> {
  return freeApps.filter((app) => app.published && app.featured);
}
