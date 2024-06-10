import React from "react"
import { merriweather } from "../lib/utils"

type Props = {
  slug: string
}

export default async function SinglePostComponent({ slug }: Props) {
  const response = await fetch(
    `https://blogkori.com/wp-json/wp/v2/posts?slug=${slug}`
  )

  const post = await response.json()

  if (!post.length) {
    return <div>Post not found</div>
  }
  return (
    <div className='space-y-4'>
      <h1
        className={`text-[38px] font-bold leading-tight ${merriweather.className}`}
      >
        {post[0].title.rendered}
      </h1>
      <div
        className='text-[20px]'
        dangerouslySetInnerHTML={{ __html: post[0].content.rendered }}
      />
    </div>
  )
}
