import type { MetadataRoute } from "next";
import { site } from "@/data/site";
const routes = ["", "/about", "/work", "/interests", "/writing", "/contact"];
export default function sitemap(): MetadataRoute.Sitemap { return routes.map((route) => ({ url: `${site.url}${route}`, lastModified: new Date(), changeFrequency: route === "" ? "weekly" : "monthly", priority: route === "" ? 1 : 0.8 })); }
