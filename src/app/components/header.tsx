import Image from "next/image"
import Link from "next/link"
import React from "react"
import { merriweather } from "../lib/utils"
import { SITE_NAME, SITE_TAGLINE } from "../lib/consts"

export default function Header() {
  return (
    <header className='p-2 md:p-4 bg-[#1c2023] text-white'>
      <div className='max-w-[1200px] mx-auto'>
        <div className='logo flex gap-2 md:gap-4 items-center'>
          <div className=''>
            <Link href='/'>
              <Image
                src='icon.svg'
                width={48}
                height={48}
                alt='blogkori logo'
                className='w-[30px] h-[30px] md:w-[48px] md:h-[48px] rounded-md object-cover '
              />
            </Link>
          </div>
          <div className=''>
            <h1
              className={`${merriweather.className} text-[14px] md:text-[22px]`}
            >
              <Link href='/'>{SITE_NAME}</Link>
            </h1>
            <div className='uppercase text-[10px] md:text-[14px] tracking-wide'>
              {SITE_TAGLINE}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
