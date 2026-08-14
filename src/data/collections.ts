/**
 * Content for the destination pages.
 *
 * Every collection below is intentionally EMPTY. Nothing on this site invents
 * products, apps, client work, prices, dates or outcomes — the same rule that
 * kept fabricated statistics off the homepage applies here. Each page renders
 * an honest "nothing published yet" state until real entries are added.
 *
 * To publish, add objects to the relevant array. No component or page changes
 * needed — each page's grid and empty state switch over automatically.
 */

/** For Sale, Free Apps, AI Creations — a simple card: what it is, plus an optional link. */
export type CollectionItem = {
  /** Name shown as the card heading. */
  title: string;
  /** One or two sentences describing it. */
  summary: string;
  /** Where the card links to. Omit for an unlinked card. */
  href?: string;
  /** Short status pill, e.g. "Available", "In progress", "Free". */
  status?: string;
  /** Up to ~4 short tags. */
  tags?: string[];
};

/**
 * Website Redevelopment — a case study, not a generic card. Shaped around the
 * two things this page's audit flagged as missing: a live URL to visit, and
 * room for an optional write-up.
 */
export type WebsiteCaseStudy = {
  /** Project or business name shown as the card heading. */
  title: string;
  /** One or two sentences on the rebuild — what changed and why. */
  summary: string;
  /**
   * The live site, if James has confirmed it's public and the client is
   * comfortable being linked. Rendered as an explicit "Visit live site" link
   * that opens in a new tab — never inferred or guessed.
   */
  liveUrl?: string;
  /** Optional internal case-study page with more detail (before/after, process). */
  href?: string;
  /** Up to ~4 short tags, e.g. platform or scope ("Next.js", "Full rebuild"). */
  tags?: string[];
};

/**
 * CLarity Project — a dated build-journal entry, not a card. The audit found
 * the journal doesn't fit the card-grid shape the other pages use, so this is
 * deliberately its own type with a required date.
 */
export type JournalEntry = {
  /** Entry heading. */
  title: string;
  /** ISO date string, e.g. "2026-03-14". Entries render newest first. */
  date: string;
  /** The update itself. */
  summary: string;
  /** Optional link to a full post, if this entry has one. */
  href?: string;
};

/** Finished products and tools available to buy. */
export const forSaleItems: CollectionItem[] = [];

/** Apps released free for anyone to use. */
export const freeAppItems: CollectionItem[] = [];

/** Website rebuilds and redesigns, newest first. */
export const websiteItems: WebsiteCaseStudy[] = [
  {
    title: "Brick Solid Masonry",
    summary: "Bilingual service platform for Luc Quinn featuring straightforward masonry service presentations, mobile quote requests, and cross-links to specialized structural divisions.",
    liveUrl: "https://brick-solid-masonry-preview.vercel.app",
    href: "#brick-solid-masonry",
    tags: ["Client: Luc Quinn", "Bilingual EN/FR", "Masonry Services", "Quote Funnel"],
  },
  {
    title: "House Lifting Services",
    summary: "Reassuring, homeowner-focused structural lifting platform explaining technical excavation, hydraulic elevation, and foundation extension without high-pressure sales.",
    liveUrl: "https://brick-solid-house-lifting-preview.vercel.app",
    href: "#house-lifting",
    tags: ["Structural Elevation", "Homeowner Guide", "Process Breakdown", "Bilingual Support"],
  },
  {
    title: "Foundation Repair Specialist",
    summary: "Structural diagnostic and repair portal featuring a warning-sign index, technical process walkthroughs, grouped repair pathways, and responsive quote request flow.",
    liveUrl: "https://foundation-repair-preview.vercel.app",
    href: "#foundation-repair",
    tags: ["Warning Signs Index", "Waterproofing & Crack Repair", "Technical Process", "Bilingual EN/FR"],
  },
];

/** Experiments and tools built with and around AI. */
export const aiCreationItems: CollectionItem[] = [];

/** Updates from the ongoing CLarity build, newest first. */
export const clarityUpdates: JournalEntry[] = [];
