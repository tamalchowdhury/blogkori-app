import { Merriweather } from "next/font/google"

export async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const merriweather = Merriweather({ weight: "900", subsets: ["latin"] })

export async function fetchSinglePost(slug: string) {
  const response = await fetch(
    `https://blogkori.com/wp-json/wp/v2/posts?slug=${slug}`
  )
  const post = await response.json()
  return post[0]
}
