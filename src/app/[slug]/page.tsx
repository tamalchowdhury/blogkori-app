import React, { Suspense } from "react"
import { merriweather } from "../layout"
import { sleep } from "../lib/utils"
import LoadingSinglePost from "./loading-single-post"
import SinglePostComponent from "./single-post"

type Props = {
  params: {
    slug: string
  }
}

export default async function SinglePostPage({ params }: Props) {
  const { slug } = params

  return (
    <Suspense fallback={<LoadingSinglePost />}>
      <SinglePostComponent slug={slug} />
    </Suspense>
  )
}
