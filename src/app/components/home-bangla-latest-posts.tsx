import Link from "next/link"
import React from "react"
import { API_URL, BANGLA_CATEGORY, HOME_POST_LIMIT } from "../lib/consts"
import { banglaHfont } from "@/fonts/fonts"

export default async function HomeBanglaLatestPosts({ all = false }) {
  let perPostQuery = `&per_page=${HOME_POST_LIMIT}`

  if (all) {
    perPostQuery = ""
  }

  const response = await fetch(
    `${API_URL}/posts?categories=${BANGLA_CATEGORY}${perPostQuery}`,
    {
      next: {
        revalidate: 60,
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
          <ReadMoreLink slug={p.slug} />
        </div>
      ))}
    </div>
  )
}

function ReadMoreLink({ slug }) {
  return (
    <Link
      className={`text-[14px] py-[5px] px-4 bg-slate-200 inline-block rounded-md ${banglaHfont.className} hover:bg-slate-300 hover:underline`}
      href={`/${slug}`}
    >
      বাকিটা পড়ুন
    </Link>
  )
}
