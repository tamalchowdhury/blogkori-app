import React, { Suspense } from "react"
import { BanglaTitle, EnglishTitle } from "../[slug]/single-post"
import LoadingPosts from "../components/loading-posts"
import HomeBanglaLatestPosts from "../components/home-bangla-latest-posts"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "English Posts of BlogKori",
  description: "English Posts of BlogKori",
}

export default function BanglaPage() {
  return (
    <div>
      <EnglishTitle className='mb-4 md:-ml-4'>English Posts</EnglishTitle>
      <Suspense fallback={<LoadingPosts />}>
        <HomeBanglaLatestPosts all={true} />
      </Suspense>
    </div>
  )
}
