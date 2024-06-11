import React from "react"
import { fetchSinglePost, merriweather } from "../lib/utils"

type Props = {
  slug: string
}

export default async function SinglePostComponent({ slug }: Props) {
  const post = await fetchSinglePost(slug)

  if (!post) {
    return <div>Post not found</div>
  }
  return (
    <div className='space-y-4'>
      <h1
        className={`text-[28px] md:text-[38px] font-bold leading-tight ${merriweather.className}`}
      >
        {post.title.rendered}
      </h1>
      <div
        className='post__body text-[16px] md:text-[20px]'
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
    </div>
  )
}
