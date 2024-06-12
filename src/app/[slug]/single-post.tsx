import React from "react"
import { fetchSinglePost, merriweather } from "../lib/utils"
import { BANGLA_CATEGORY } from "../lib/consts"
import { banglaHfont } from "@/fonts/fonts"
import { Share } from "next/font/google"
import ShareButtons from "./components/share-buttons"

type Props = {
  slug: string
}

export default async function SinglePostComponent({ slug }: Props) {
  const post = await fetchSinglePost(slug)

  if (!post) {
    return <div>Post not found</div>
  }

  // needs to implement a better solution here
  const isBangla = post.categories.includes(BANGLA_CATEGORY)

  return (
    <>
      <div className='space-y-4'>
        {isBangla ? (
          <BanglaTitle>{post.title.rendered}</BanglaTitle>
        ) : (
          <EnglishTitle>{post.title.rendered}</EnglishTitle>
        )}

        <div
          className='post__body text-[16px] md:text-[20px]'
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      </div>
      <ShareButtons
        slug={slug}
        title={post.title.rendered}
        content={post.content.rendered}
      />
    </>
  )
}

export function EnglishTitle({ children }) {
  return (
    <h1
      className={`text-[28px] md:text-[38px] font-bold leading-tight ${merriweather.className}`}
    >
      {children}
    </h1>
  )
}

export function BanglaTitle({ children }) {
  return (
    <h1
      className={`text-[28px] md:text-[38px] font-bold leading-tight ${banglaHfont.className}`}
    >
      {children}
    </h1>
  )
}
