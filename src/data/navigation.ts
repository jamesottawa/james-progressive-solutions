export type NavItem = {
  label: string;
  href: string;
};

/*
 * Labels are taken verbatim from the approved reference image's nav bar.
 * Note "Apps" (not "Free Apps") and the absence of an "AI Creations" link —
 * that matches the reference, which surfaces AI Creations as a category card
 * rather than a nav item.
 *
 * The reference draws dropdown carets on For Sale / Apps / Websites. Those are
 * intentionally omitted until real dropdown menus exist, per direction.
 */
export const primaryNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "For Sale", href: "/for-sale" },
  { label: "Apps", href: "/free-apps" },
  { label: "Websites", href: "/websites" },
  { label: "CLarity Project", href: "/clarity-project" },
  { label: "About James", href: "/about" },
];
