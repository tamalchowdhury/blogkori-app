import { MetadataRoute } from "next"
import { API_URL, BASE_URL } from "./lib/consts"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const response = await fetch(`${API_URL}/posts`)
  const posts = await response.json()

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${BASE_URL}/en`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/bn`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    ...posts.map((p) => ({
      url: `${BASE_URL}/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: "monthly",
      priority: 0.8,
    })),
  ]
}
