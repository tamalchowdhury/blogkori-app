import { Merriweather } from "next/font/google"
import { API_URL } from "./consts"

export async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const merriweather = Merriweather({ weight: "900", subsets: ["latin"] })

export async function fetchSinglePost(slug: string) {
  const response = await fetch(`${API_URL}/posts?slug=${slug}`)
  const post = await response.json()
  if (post.length === 0) return null
  return post[0]
}
