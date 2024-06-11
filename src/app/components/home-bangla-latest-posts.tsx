import Link from "next/link"
import React from "react"
import { merriweather } from "../lib/utils"
import { API_URL } from "../lib/consts"
import { alinurFont, shamimFont } from "@/fonts/fonts"

export default async function HomeBanglaLatestPosts() {
  const response = await fetch(`${API_URL}/posts?categories=3&per_page=3`, {
    next: {
      revalidate: 60,
    },
  })

  const post = await response.json()

  return (
    <div className='space-y-[30px]'>
      {post.map((p) => (
        <div className='space-y-[20px]' key={p.id}>
          <Link href={`/${p.slug}`}>
            <h2
              className={`${alinurFont.className} text-[28px] leading-tight font-bold hover:underline`}
            >
              {p.title.rendered}
            </h2>
          </Link>
          <div
            className={` text-[16px] md:text-[20px]`}
            dangerouslySetInnerHTML={{ __html: p.excerpt.rendered }}
          />
          <span>
            <Link href={`/${p.slug}`}>Read More</Link>
          </span>
        </div>
      ))}
    </div>
  )
}
