import React, { Suspense } from "react"
import { BanglaTitle } from "../[slug]/single-post"
import LoadingPosts from "../components/loading-posts"
import HomeBanglaLatestPosts from "../components/home-bangla-latest-posts"

export default function BanglaPage() {
  return (
    <div>
      <BanglaTitle className="mb-4 -ml-4" >বাংলা পোস্টগুলো</BanglaTitle>
      <Suspense fallback={<LoadingPosts />}>
        <HomeBanglaLatestPosts all={true} />
      </Suspense>
    </div>
  )
}
