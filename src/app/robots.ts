import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: "https://portfolio-kappa-teal-36.vercel.app/sitemap.xml" };
}
