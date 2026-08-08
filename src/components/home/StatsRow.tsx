import { CubeIcon, GlobeIcon, RocketIcon, StarIcon, UsersIcon } from "@/components/icons/StatIcons";

/*
 * Stats band, reproducing the approved reference image's bottom band
 * (container x=90..1579, y=828..920, h=92, fill #FCF7EE, hairline dividers).
 *
 * TWO DISCLOSED DEVIATIONS FROM THE REFERENCE, both required by the brief's
 * rule against fabricating statistics, testimonials or quotes:
 *
 *   1. VALUES ARE PLACEHOLDERS. The reference shows 50K+ / 120+ / 75+ / 4.9
 *      / 2019. None of those are backed by real data anywhere in this project
 *      and none were supplied, so they are not reproduced. Replace the `value`
 *      fields below with real figures and delete this note — the layout,
 *      typography and spacing are already reference-exact and will not need
 *      to change.
 *
 *   2. THE QUOTE CELL IS OMITTED. The reference's sixth cell holds a quote
 *      attributed to James plus a script signature. Inventing words for a
 *      real person is out of scope, so the five stat cells divide the full
 *      width instead. Supply a real quote to restore the sixth cell.
 */
const stats = [
  { value: "—", label: "Users Helped", icon: UsersIcon },
  { value: "—", label: "Products Created", icon: CubeIcon },
  { value: "—", label: "Websites Built", icon: GlobeIcon },
  { value: "—", label: "User Rating", icon: StarIcon },
  { value: "—", label: "Journey Began", icon: RocketIcon },
];

export function StatsRow() {
  return (
    <section
      aria-label="At a glance"
      className="mx-auto mt-8 w-full max-w-[var(--content-frame)] px-6 sm:px-8 lg:mt-[13px] lg:px-[50px]"
    >
      <div className="rounded-[var(--radius-lg)] border border-[var(--border-card)] bg-stats shadow-[var(--shadow-card)]">
        <ul className="grid grid-cols-1 divide-y divide-[var(--border-card)] sm:grid-cols-3 sm:divide-y-0 lg:grid-cols-5">
          {stats.map(({ value, label, icon: Icon }, index) => (
            <li
              key={label}
              className={[
                "flex items-center gap-4 px-7 py-5",
                index > 0 ? "sm:border-l sm:border-[var(--border-card)]" : "",
              ].join(" ")}
            >
              <Icon className="h-8 w-8 shrink-0 text-black/85" />
              <span className="flex flex-col">
                <span className="font-display text-[1.4rem] leading-none font-semibold text-black">
                  {value}
                </span>
                <span className="mt-1.5 text-[0.82rem] leading-none text-body">{label}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
