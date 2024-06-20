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

export function prettyDate(date: string) {
  return new Date().toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

export function cleanUpText(text) {
  return text.replace(/<[^>]*>/g, "").replace(/\n\n+/g, "\n\n")
}
