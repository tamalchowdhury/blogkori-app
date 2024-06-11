import { Suspense } from "react"
import HomeEnglishLatestPosts from "./components/home-english-latest-posts"
import LoadingPosts from "./components/loading-posts"
import { merriweather } from "./lib/utils"
import HomeBanglaLatestPosts from "./components/home-bangla-latest-posts"
import { banglaHfont } from "@/fonts/fonts"

export default async function Home() {
  return (
    <div className='space-y-[40px]'>
      <section>
        <h3
          className={`${merriweather.className} uppercase -ml-[10px] mb-2 tracking-wider text-[14px]`}
        >
          Latest English Posts
        </h3>
        <Suspense fallback={<LoadingPosts />}>
          <HomeEnglishLatestPosts />
        </Suspense>
      </section>
      <section>
        <h3
          className={`${banglaHfont.className} uppercase -ml-[10px] mb-2 tracking-wider text-[18px]`}
        >
          বাংলা পোস্টগুলো
        </h3>
        <Suspense fallback={<LoadingPosts />}>
          <HomeBanglaLatestPosts />
        </Suspense>
      </section>
    </div>
  )
}
