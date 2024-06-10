import { Merriweather } from "next/font/google"

export async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const merriweather = Merriweather({ weight: "900", subsets: ["latin"] })
