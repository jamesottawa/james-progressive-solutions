import { freeApps } from "@/data/freeApps";

interface ShelfItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  status: string;
  highlight?: boolean;
}

function getShelfItems(): ShelfItem[] {
  return freeApps.map((app, index) => {
    let title = app.title;
    if (app.slug === "from-chaos-to-clear") title = "From Chaos to Clear";
    else if (app.slug === "for-sale-app") title = "For Sale App";
    else if (app.slug === "ai-loop-review") title = "AI Loop Review";
    else if (app.slug === "project-board") title = "Project Board";
    else if (app.slug === "sitesignal") title = "SiteSignal";

    let status = "Ready";
    let highlight = false;
    if (app.status === "BETA" || app.slug === "project-board") {
      status = "Beta";
      highlight = true;
    } else if (app.slug === "ai-loop-review") {
      status = "Experimental";
    }

    let subtitle = app.shortDescription;
    if (app.slug === "from-chaos-to-clear") subtitle = "Calm guided clarity & next-step workspace";
    else if (app.slug === "for-sale-app") subtitle = "Product catalog & storefront manager";
    else if (app.slug === "ai-loop-review") subtitle = "3-persona sequential critique & synthesis";
    else if (app.slug === "project-board") subtitle = "Visual planner & milestone organizer";
    else if (app.slug === "sitesignal") subtitle = "Website defect & quality diagnostic audit";

    return {
      id: String(index + 1).padStart(2, "0"),
      slug: app.slug,
      title,
      subtitle,
      status,
      highlight,
    };
  });
}

/**
 * FreeAppsToolShelf
 *
 * A status ledger for the /free-apps hero.
 * Summarizes the current release and active development status of the workshop
 * derived directly from the real application inventory in freeApps.ts.
 */
export function FreeAppsToolShelf() {
  const shelfItems = getShelfItems();

  return (
    <div className="relative">
      <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-[#A8761C]/25">
        <span className="font-mono text-[0.625rem] font-bold uppercase tracking-[0.22em] text-[#875c10]">
          Workshop Status Ledger
        </span>
        <span className="font-mono text-[0.6rem] text-body/65 uppercase">
          Current State
        </span>
      </div>

      <ul className="divide-y divide-black/[0.06]" role="list">
        {shelfItems.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between py-2.5 cursor-default select-none"
          >
            {/* Left: ID, Title & Subtitle */}
            <div className="flex items-baseline gap-2.5 min-w-0">
              <span className="font-mono text-[0.65rem] font-bold text-[#875c10]">
                {item.id}.
              </span>
              <div className="min-w-0">
                <h2 className="text-sm font-semibold tracking-tight text-black">
                  {item.title}
                </h2>
                <p className="text-[0.725rem] text-body/70 truncate">
                  {item.subtitle}
                </p>
              </div>
            </div>

            {/* Right: Static Status Pill */}
            <div className="shrink-0 ml-3">
              <span
                className={`font-mono text-[0.625rem] px-2 py-0.5 rounded font-medium ${
                  item.highlight
                    ? "bg-gold/15 text-[#875c10] font-bold border border-gold/35"
                    : "bg-black/[0.04] text-body/65 border border-black/[0.04]"
                }`}
              >
                {item.status}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
