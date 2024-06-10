import React, { Suspense } from "react"
import { fetchSinglePost, sleep } from "../lib/utils"
import LoadingSinglePost from "./loading-single-post"
import SinglePostComponent from "./single-post"
import { Metadata } from "next"

type Props = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }): Promise<Metadata> {
  const { slug } = params
  const post = await fetchSinglePost(slug)

  return {
    title: post.title.rendered,
    description: post.excerpt.rendered,
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
