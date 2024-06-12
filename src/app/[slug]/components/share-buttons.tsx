import Link from "next/link"
import React from "react"
import CopyButton from "./copy-button"
import MoreButton from "./more-button"
import { merriweather } from "@/app/lib/utils"

export default function ShareButtons({ slug, title, content }) {
  const url = `https://blogkori.com/${slug}`

  const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`
  const waUrl = `https://wa.me/?text=${url}`

  return (
    <section className=''>
      <h2 className={`${merriweather.className} text-[24px] font-bold`}>
        Sharing is Caring:
      </h2>
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
        <CopyButton title={title} content={content} url={url} />
        <MoreButton url={url} />
      </div>
    </section>
  )
}
