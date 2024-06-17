import Link from "next/link"
import React from "react"
import { API_URL, BANGLA_CATEGORY, HOME_POST_LIMIT } from "../lib/consts"
import { banglaHfont } from "@/fonts/fonts"
import { ReadMoreLinkBn } from "./read-more-links"

export default async function HomeBanglaLatestPosts({ all = false }) {
  let perPostQuery = `&per_page=${HOME_POST_LIMIT}`

  if (all) {
    perPostQuery = ""
  }

  const response = await fetch(
    `${API_URL}/posts?categories=${BANGLA_CATEGORY}${perPostQuery}`,
    {
      next: {
        revalidate: 120,
      },
    }
  )

  const post = await response.json()

  return (
    <div className='space-y-[30px]'>
      {post.map((p) => (
        <div className='space-y-[20px]' key={p.id}>
          <Link href={`/${p.slug}`}>
            <h2
              className={`${banglaHfont.className} text-[28px] leading-tight font-bold hover:underline`}
            >
              {p.title.rendered}
            </h2>
          </Link>
          <div
            className={` text-[16px] md:text-[20px]`}
            dangerouslySetInnerHTML={{ __html: p.excerpt.rendered }}
          />
          <ReadMoreLinkBn slug={p.slug} />
        </div>
      ))}
    </div>
  )
}
