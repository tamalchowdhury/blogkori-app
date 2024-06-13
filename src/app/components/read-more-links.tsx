import { banglaHfont } from "@/fonts/fonts"
import Link from "next/link"

export function ReadMoreLinkBn({ slug }) {
  return (
    <Link
      className={`text-[14px] py-[5px] px-4 bg-slate-200 inline-block rounded-md ${banglaHfont.className} hover:bg-slate-300 hover:underline`}
      href={`/${slug}`}
    >
      বাকিটা পড়ুন
    </Link>
  )
}

export function ReadMoreLinkEn({ slug }) {
  return (
    <Link
      className={`text-[12px] py-[5px] px-4 bg-slate-200 inline-block rounded-md uppercase hover:bg-slate-300 hover:underline font-bold`}
      href={`/${slug}`}
    >
      Read More
    </Link>
  )
}
