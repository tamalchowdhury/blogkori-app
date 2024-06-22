import React, { Suspense } from "react"
import LoadingPosts from "../components/loading-posts"
import { Metadata } from "next"
import HomeEnglishLatestPosts from "../components/home-english-latest-posts"
import { EnglishTitle } from "../components/english-title"

export const metadata: Metadata = {
  title: "English Posts of BlogKori",
  description: "English Posts of BlogKori",
}

export default function BanglaPage() {
  return (
    <div>
      <EnglishTitle className='mb-4 md:-ml-4'>English Posts</EnglishTitle>
      <Suspense fallback={<LoadingPosts />}>
        <HomeEnglishLatestPosts all={true} />
      </Suspense>
    </div>
  )
}
