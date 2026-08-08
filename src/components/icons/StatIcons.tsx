import type { SVGProps } from "react";

/*
 * Outline icons for the stats bar, transcribed from the approved reference
 * image's bottom band (y=828..920): people, cube, globe, star, rocket.
 * All are thin-stroke monochrome and inherit colour from the parent.
 */
const outline = {
  viewBox: "0 0 32 32",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true as const,
};

export function UsersIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...outline} {...props}>
      <circle cx="13" cy="12" r="4.4" />
      <path d="M5 25.5c0-4.1 3.6-6.9 8-6.9s8 2.8 8 6.9" />
      <path d="M22 9.4a3.9 3.9 0 0 1 0 7.6M23.5 19.4c2.4.8 4.1 2.9 4.1 5.6" />
    </svg>
  );
}

export function CubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...outline} {...props}>
      <path d="M16 3.6 27.5 9.6v12.8L16 28.4 4.5 22.4V9.6Z" />
      <path d="M4.5 9.6 16 15.6l11.5-6M16 15.6v12.8" />
    </svg>
  );
}

export function GlobeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...outline} {...props}>
      <circle cx="16" cy="16" r="12.4" />
      <ellipse cx="16" cy="16" rx="5.3" ry="12.4" />
      <path d="M3.9 12.2h24.2M3.9 19.8h24.2" />
    </svg>
  );
}

export function StarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...outline} {...props}>
      <path d="m16 3.8 3.9 7.9 8.7 1.3-6.3 6.1 1.5 8.7L16 23.7l-7.8 4.1 1.5-8.7-6.3-6.1 8.7-1.3Z" />
    </svg>
  );
}

export function RocketIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...outline} {...props}>
      <path d="M16 3.2c4.2 3.3 6.6 8 6.6 13.3l-2.9 6.2h-7.4l-2.9-6.2C9.4 11.2 11.8 6.5 16 3.2Z" />
      <circle cx="16" cy="13.4" r="2.9" />
      <path d="M12.4 20.6c-2.2 1.3-3.4 3.6-3.5 6.4 2.6-.5 4.4-1.5 5.4-3M19.6 20.6c2.2 1.3 3.4 3.6 3.5 6.4-2.6-.5-4.4-1.5-5.4-3" />
    </svg>
  );
}
