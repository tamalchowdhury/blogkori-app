import React, { Suspense } from "react"
import { fetchSinglePost, sleep } from "../lib/utils"
import LoadingSinglePost from "./loading-single-post"
import SinglePostComponent from "./single-post"
import { Metadata } from "next"
import Link from "next/link"
import MoreButton from "./components/more-button"
import CopyButton from "./components/copy-button"

type Props = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }): Promise<Metadata> {
  const { slug } = params
  const post = await fetchSinglePost(slug)

  if (!post) {
    return {
      title: "Post not found",
      description: "Post not found",
    }
  }

  return {
    title: post.title.rendered + " | BlogKori",
    description: post.excerpt.rendered,
  }
}

export default async function SinglePostPage({ params }: Props) {
  const { slug } = params

  

  return (
    <>
      <Suspense fallback={<LoadingSinglePost />}>
        <SinglePostComponent slug={slug} />
      </Suspense>

      
    </>
  )
}
