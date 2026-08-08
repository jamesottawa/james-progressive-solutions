import type { SVGProps } from "react";

/*
 * Category icons transcribed from the approved reference image's card row.
 *
 * Each icon in the reference is a DISTINCT shape and colour — a solid gold
 * price tag, a blue gradient app-tile, a lavender circle, a navy hexagon, an
 * amber circle. They are deliberately not a uniform set; that variety is what
 * gives the card row its character, so it is reproduced rather than
 * normalised. Colours are sampled from the reference (see globals.css).
 *
 * Rendered as inline SVG so they stay crisp at any density and can be sized
 * and recoloured from CSS. All are 60x60 to match the reference's icon box.
 */

const box = {
  viewBox: "0 0 60 60",
  "aria-hidden": true as const,
};

/** Solid gold price tag, tilted, with a punched hole. Sampled #CE9936. */
export function ForSaleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...box} {...props}>
      <path
        fill="var(--icon-tag)"
        d="M25.5 4.5H49a6.5 6.5 0 0 1 6.5 6.5v23.5a6.5 6.5 0 0 1-1.9 4.6L38.1 54.6a6.5 6.5 0 0 1-9.2 0L5.4 31.1a6.5 6.5 0 0 1 0-9.2L20.9 6.4a6.5 6.5 0 0 1 4.6-1.9Z"
      />
      <circle cx="42.5" cy="17.5" r="4.4" fill="#fdf8ee" />
    </svg>
  );
}

/** Blue gradient app tile with four white keys. Sampled #52BEDC -> #2275CC. */
export function FreeAppsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...box} {...props}>
      <defs>
        <linearGradient id="jps-app-tile" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--icon-app-from)" />
          <stop offset="100%" stopColor="var(--icon-app-to)" />
        </linearGradient>
      </defs>
      <rect x="3" y="3" width="54" height="54" rx="14" fill="url(#jps-app-tile)" />
      <rect x="15" y="17" width="11.5" height="11.5" rx="3" fill="#fff" />
      <rect x="31" y="14.5" width="14" height="14" rx="4" fill="#fff" />
      <rect x="15" y="32" width="11.5" height="11.5" rx="3" fill="#fff" />
      <rect x="31" y="32.5" width="12.5" height="12.5" rx="3.5" fill="#fff" />
    </svg>
  );
}

/** Lavender disc with a white globe. Sampled #A287D1. */
export function WebsitesIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...box} {...props}>
      <circle cx="30" cy="30" r="27" fill="var(--icon-globe)" />
      <g fill="none" stroke="#fff" strokeWidth="2.1" strokeLinecap="round">
        <circle cx="30" cy="30" r="14.5" />
        <ellipse cx="30" cy="30" rx="6.2" ry="14.5" />
        <path d="M15.9 25.6h28.2M15.9 34.4h28.2M30 15.5v29" />
      </g>
    </svg>
  );
}

/** Navy hexagon with a white C. Sampled #021F44. */
export function ClarityIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...box} {...props}>
      <path
        fill="var(--icon-hex)"
        strokeLinejoin="round"
        stroke="var(--icon-hex)"
        strokeWidth="4"
        d="M30 4.6 53 17.8v26.4L30 57.4 7 44.2V17.8Z"
      />
      <path
        d="M39.9 21.6A13 13 0 1 0 39.9 38.4"
        fill="none"
        stroke="#fff"
        strokeWidth="6.6"
        strokeLinecap="butt"
      />
    </svg>
  );
}

/** Amber disc with a white brain. Sampled #C08826. */
export function AiCreationsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...box} {...props}>
      <circle cx="30" cy="30" r="27" fill="var(--icon-brain)" />
      <g fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M30 16.4c-2.4-2.8-7.6-2.6-9.4 1-3.9.3-6.2 4.2-4.7 7.5-2.9 1.9-2.9 6.6 0 8.5-1.2 3.4 1.1 7 4.7 7.4 1.3 3.6 6.5 4.4 9.4 1.6Z" />
        <path d="M30 16.4c2.4-2.8 7.6-2.6 9.4 1 3.9.3 6.2 4.2 4.7 7.5 2.9 1.9 2.9 6.6 0 8.5 1.2 3.4-1.1 7-4.7 7.4-1.3 3.6-6.5 4.4-9.4 1.6Z" />
        <path d="M30 16.4v26.5M23.4 22.6c1.9.3 3.4 1.6 3.9 3.4M23.1 34.9c1.9-.4 3.6-.1 4.6 1.3M36.6 22.6c-1.9.3-3.4 1.6-3.9 3.4M36.9 34.9c-1.9-.4-3.6-.1-4.6 1.3" />
      </g>
    </svg>
  );
}
