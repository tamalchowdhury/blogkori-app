import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.blogkori.com",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
  ]
}
