import type { MetadataRoute } from "next";
import { seoEntries } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
    return seoEntries().map((e) => ({
        url: e.url,
        changeFrequency: "monthly",
        priority: e.path === "" ? 1 : 0.7,
    }));
}
