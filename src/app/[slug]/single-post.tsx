import React from "react"
import { fetchSinglePost, merriweather } from "../lib/utils"
import { BANGLA_CATEGORY } from "../lib/consts"
import { banglaHfont } from "@/fonts/fonts"
import { Share } from "next/font/google"
import ShareButtons from "./components/share-buttons"
import Image from "next/image"

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

        <div className='flex gap-[10px] items-center text-[14px] text-[#333]/70'>
          <div>
            <Image
              src='/img/author.jpg'
              alt='Tamal Chowdhury'
              width={48}
              height={48}
              className='rounded-full object-cover'
            />
          </div>
          <div>
            <div className="italic">by Tamal Chowdhury</div>
            <div className='uppercase text-[12px]'>
              Published on:{" "}
              {
                // convert the date to a readable format: eg 12th August 2021
                new Date(post.date).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })
              }
            </div>
          </div>
        </div>

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

export function BanglaTitle({ children, className = "" }) {
  return (
    <h1
      className={`text-[28px] md:text-[38px] font-bold leading-tight ${banglaHfont.className} ${className}`}
    >
      {children}
    </h1>
  )
}
