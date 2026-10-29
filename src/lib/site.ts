export const SITE = {
  name: "James Progressive Solutions",
  url: "https://james-progressive-solutions.vercel.app",
  email: "jamesboucher777@gmail.com",
  location: "Gatineau, QC",
  region: "Gatineau, Quebec, Canada",
} as const;

export function buildMailto(name?: string, message?: string): string {
  const subject = encodeURIComponent(
    name ? `Hello from ${name} (via ${SITE.name})` : `Hello from ${SITE.name}`,
  );
  const body = message ? `&body=${encodeURIComponent(message)}` : "";
  return `mailto:${SITE.email}?subject=${subject}${body}`;
}
