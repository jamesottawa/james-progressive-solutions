import type { MetadataRoute } from "next";
import { freeApps } from "@/data/freeApps";
import { SITE } from "@/lib/site";

const routes = [
  "",
  "/work",
  "/for-sale",
  "/free-apps",
  "/websites",
  "/clarity-project",
  "/ai-creations",
  "/about",
  "/contact",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const appRoutes = freeApps.map((app) => `/free-apps/${app.slug}`);
  return [...routes, ...appRoutes].map((path) => ({
    url: `${SITE.url}${path}`,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
