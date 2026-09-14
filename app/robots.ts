import type { MetadataRoute } from "next";

const siteUrl =
  "https://hasnain-javed-analytics-git-main-hasnain-ab08.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}