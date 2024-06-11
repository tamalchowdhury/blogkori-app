import React, { Suspense } from "react"
import { fetchSinglePost, sleep } from "../lib/utils"
import LoadingSinglePost from "./loading-single-post"
import SinglePostComponent from "./single-post"
import { Metadata } from "next"
import Link from "next/link"
import MoreButton from "./components/more-button"

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

  const url = `https://blogkori.com/${slug}`
  const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`

  const waUrl = `https://wa.me/?text=${url}`

  // open native share dialog

  return (
    <>
      <Suspense fallback={<LoadingSinglePost />}>
        <SinglePostComponent slug={slug} />
      </Suspense>

      <section className=''>
        <h2 className='text-[24px] font-bold'>Sharing is charing:</h2>
        <div className='buttons flex flex-wrap gap-2 my-4'>
          <Link
            href={fbUrl}
            target='_blank'
            className='fb share-button bg-blue-500/70 hover:bg-blue-500 '
          >
            Facebook
          </Link>
          <Link
            href={waUrl}
            target='_blank'
            className='wa share-button bg-green-700/70 hover:bg-green-700'
          >
            WhatsApp
          </Link>
          <div className='copy share-button bg-orange-600/70 hover:bg-orange-600'>
            Copy Text
          </div>
          <MoreButton url={url} />
        </div>
      </section>
    </>
  )
}
