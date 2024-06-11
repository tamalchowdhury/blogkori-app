import { Suspense } from "react"
import HomeEnglishLatestPosts from "./components/home-english-latest-posts"
import LoadingPosts from "./components/loading-posts"
import { merriweather } from "./lib/utils"
import HomeBanglaLatestPosts from "./components/home-bangla-latest-posts"

export default async function Home() {
  return (
    <div className='space-y-[40px]'>
      <section>
        <h3
          className={`${merriweather.className} uppercase -ml-[10px] mb-2 tracking-wider text-[14px]`}
        >
          Latest Blog Posts
        </h3>
        <Suspense fallback={<LoadingPosts />}>
          <HomeEnglishLatestPosts />
        </Suspense>
      </section>
      <section>
        <h3
          className={`${merriweather.className} uppercase -ml-[10px] mb-2 tracking-wider text-[14px]`}
        >
          Latest Bangla Posts
        </h3>
        <Suspense fallback={<LoadingPosts />}>
          <HomeBanglaLatestPosts />
        </Suspense>
      </section>
    </div>
  )
}
