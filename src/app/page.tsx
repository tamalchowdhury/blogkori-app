import { Suspense } from "react"
import HomeLatestPosts from "./components/home-latest-posts"
import LoadingPosts from "./components/loading-posts"
import { merriweather } from "./lib/utils"

export default async function Home() {
  return (
    <>
      <h3
        className={`${merriweather.className} uppercase -ml-[10px] mb-2 tracking-wider text-[14px]`}
      >
        Latest Blog Posts
      </h3>
      <Suspense fallback={<LoadingPosts />}>
        <HomeLatestPosts />
      </Suspense>
    </>
  )
}
