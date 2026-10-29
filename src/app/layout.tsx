import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SITE } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const DESCRIPTION =
  "Products, apps, websites, and AI creations built by James in Gatineau, QC, including the CLarity project, shared as an ongoing build journey.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "James Progressive Solutions | Websites, Apps & AI Tools, Gatineau QC",
    template: "%s | James Progressive Solutions",
  },
  description: DESCRIPTION,
  alternates: { canonical: "./" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: "en_CA",
    title: "James Progressive Solutions | Websites, Apps & AI Tools",
    description: DESCRIPTION,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "James Progressive Solutions | Websites, Apps & AI Tools",
    description: DESCRIPTION,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: SITE.url,
  email: SITE.email,
  founder: { "@type": "Person", name: "James" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gatineau",
    addressRegion: "QC",
    addressCountry: "CA",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream text-navy"><script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\u003c") }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
