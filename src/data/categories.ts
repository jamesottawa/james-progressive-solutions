import type { ComponentType, SVGProps } from "react";
import {
  AiCreationsIcon,
  ClarityIcon,
  ForSaleIcon,
  FreeAppsIcon,
  WebsitesIcon,
} from "@/components/icons/CategoryIcons";

export type Category = {
  title: string;
  description: string;
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

/*
 * Order, titles and descriptions are transcribed verbatim from the approved
 * reference image's card row (x=90..1579, y=650..815).
 */
export const categories: Category[] = [
  {
    title: "For Sale",
    description: "Premium digital products built to save time, scale faster, and deliver results.",
    href: "/for-sale",
    icon: ForSaleIcon,
  },
  {
    title: "Free Apps",
    description: "Helpful tools and utilities created to make everyday tasks easier.",
    href: "/free-apps",
    icon: FreeAppsIcon,
  },
  {
    title: "Website Redevelopment",
    description: "Modern websites that perform, convert, and represent your brand.",
    href: "/websites",
    icon: WebsitesIcon,
  },
  {
    title: "CLarity Project",
    description: "The build journey behind the platform — purpose, progress, and real impact.",
    href: "/clarity-project",
    icon: ClarityIcon,
  },
  {
    title: "AI Creations",
    description: "Intelligent solutions designed to automate, generate, and elevate.",
    href: "/ai-creations",
    icon: AiCreationsIcon,
  },
];
