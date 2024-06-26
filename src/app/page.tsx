import { Suspense } from "react"
import HomeEnglishLatestPosts from "./components/home-english-latest-posts"
import LoadingPosts from "./components/loading-posts"
import { merriweather } from "./lib/utils"
import HomeBanglaLatestPosts from "./components/home-bangla-latest-posts"
import { banglaHfont } from "@/fonts/fonts"
import Link from "next/link"

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
          <ReadAllPosts href='/en'>Read All English Posts</ReadAllPosts>
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

          <ReadAllPosts href='/bn'>সবগুলো বাংলা পোস্ট দেখুন</ReadAllPosts>
        </Suspense>
      </section>
    </div>
  )
}

function ReadAllPosts({ children, href }) {
  return (
    <Link
      href={href}
      className='block text-center bg-accent/10 p-4 rounded-md my-8 hover:bg-accent/40 transition hover:font-bold hover:shadow-md'
    >
      {children}
    </Link>
  )
}
