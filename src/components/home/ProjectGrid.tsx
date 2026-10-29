import Link from "next/link";
import type { ComponentType, SVGProps } from "react";
import {
  AiCreationsIcon,
  ClarityIcon,
  ForSaleIcon,
  FreeAppsIcon,
  WebsitesIcon,
} from "@/components/icons/CategoryIcons";
import { freeApps } from "@/data/freeApps";
import { websiteItems } from "@/data/collections";

type Project = {
  title: string;
  status: string;
  tone: "live" | "build" | "soon";
  blurb: string;
  href: string;
  cta: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  chips?: string[];
  span: string;
};

/** "FROM CHAOS TO CLEAR" -> "From Chaos To Clear", keeping AI upper-case. */
function niceName(raw: string) {
  return raw
    .split(" ")
    .map((w) => (w === "AI" ? w : w[0] + w.slice(1).toLowerCase()))
    .join(" ");
}

const projects: Project[] = [
  {
    title: "The CLarity Project",
    status: "Flagship · In development",
    tone: "build",
    blurb:
      "An app that turns scattered facts, dates and notes into a clear timeline, shows what is missing, and points to next steps.",
    href: "/clarity-project",
    cta: "Follow the build",
    icon: ClarityIcon,
    span: "lg:col-span-2",
  },
  {
    title: "Websites",
    status: "Active",
    tone: "live",
    blurb:
      "Websites rebuilt for real businesses, including a three-site suite for Luc Quinn, an Ottawa masonry contractor.",
    href: "/websites",
    cta: "See the sites",
    icon: WebsitesIcon,
    chips: websiteItems.map((w) => w.title),
    span: "lg:col-span-2",
  },
  {
    title: "Free Apps",
    status: `${freeApps.length} apps`,
    tone: "live",
    blurb: "Small, practical tools for everyday tasks, free to use.",
    href: "/free-apps",
    cta: "Browse the apps",
    icon: FreeAppsIcon,
    chips: freeApps.map((a) => niceName(a.title)),
    span: "lg:col-span-2",
  },
  {
    title: "For Sale",
    status: "Nothing listed yet",
    tone: "soon",
    blurb: "Finished products show up here once they are ready, not before.",
    href: "/for-sale",
    cta: "Take a look",
    icon: ForSaleIcon,
    span: "lg:col-span-3",
  },
  {
    title: "AI Creations",
    status: "Coming soon",
    tone: "soon",
    blurb: "Experiments with AI get shared here once there is something concrete to show.",
    href: "/ai-creations",
    cta: "Take a look",
    icon: AiCreationsIcon,
    span: "lg:col-span-3",
  },
];

const toneClass: Record<Project["tone"], string> = {
  live: "border-gold-dark/40 bg-gold/10 text-gold-dark",
  build: "border-navy/30 bg-navy/5 text-navy",
  soon: "border-[var(--border-strong)] bg-black/5 text-body",
};

export function ProjectGrid() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="scroll-mt-24 border-t border-gold/20 bg-cream"
    >
      <div className="mx-auto max-w-[var(--content-frame)] px-6 py-12 sm:px-8 lg:px-[50px] lg:py-16">
        <div className="max-w-[60ch]">
          <p className="text-eyebrow font-semibold uppercase tracking-[0.22em] text-gold-dark">
            Projects
          </p>
          <h2
            id="projects-heading"
            className="mt-2 font-display text-section font-semibold tracking-tight text-black"
          >
            What I&apos;m building.
          </h2>
          <p className="mt-3 text-lead text-body">
            A running log of my work. Finished things sit next to works in progress, and new
            projects show up here as they happen.
          </p>
        </div>

        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:gap-5">
          {projects.map((p) => {
            const Icon = p.icon;
            return (
              <li key={p.title} className={`flex ${p.span}`}>
                <Link
                  href={p.href}
                  className="group flex w-full flex-col rounded-[var(--radius-lg)] border border-[var(--border-card)] bg-card p-6 shadow-[var(--shadow-card)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)]"
                >
                  <div className="flex items-center justify-between gap-3">
                    <Icon className="h-9 w-9 shrink-0" />
                    <span
                      className={`rounded-full border px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.14em] ${toneClass[p.tone]}`}
                    >
                      {p.status}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-card-title font-semibold text-black">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-card-body text-body">{p.blurb}</p>

                  {p.chips ? (
                    <ul className="mt-4 flex flex-wrap gap-1.5" aria-label={`${p.title} included`}>
                      {p.chips.map((c) => (
                        <li
                          key={c}
                          className="rounded border border-[var(--border-card)] bg-white/70 px-2 py-1 text-[0.72rem] font-medium text-black"
                        >
                          {c}
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  <span className="mt-auto pt-5 text-[0.875rem] font-semibold text-gold-dark">
                    {p.cta}
                    <span
                      aria-hidden="true"
                      className="ml-1.5 inline-block transition-transform duration-200 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-[var(--radius-lg)] border border-[var(--border-card)] bg-cream-deep px-6 py-5 sm:flex-row sm:items-center">
          <p className="text-[0.95rem] text-black">
            Curious about something, or want to talk about a project?
          </p>
          <Link
            href="/contact"
            className="inline-flex h-[44px] items-center rounded-[var(--radius-sm)] bg-[linear-gradient(180deg,var(--gold-grad-from),var(--gold-grad-to))] px-5 text-[0.9rem] font-semibold text-black shadow-[0_1px_2px_rgba(60,45,20,0.18)] transition-[filter] duration-150 hover:brightness-[1.06]"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}
