import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://portfolio-kappa-teal-36.vercel.app";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/projects/flowboard`, lastModified: new Date(), changeFrequency: "monthly", priority: .8 },
  ];
}
