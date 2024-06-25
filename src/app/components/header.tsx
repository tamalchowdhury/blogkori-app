"use client"

import Image from "next/image"
import Link from "next/link"
import React from "react"
import { merriweather } from "../lib/utils"
import { SITE_NAME, SITE_TAGLINE } from "../lib/consts"
import { usePathname } from "next/navigation"
import { twMerge } from "tailwind-merge"
import { menuPaths } from "../lib/menuPaths"

export default function Header() {
  const path = usePathname()
  return (
    <header className='p-2 md:p-4 bg-[#1c2023] text-white'>
      <div className='max-w-[1200px] space-y-4 md:space-y-0 mx-auto md:flex  items-center'>
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
        <nav className='ml-auto'>
          <ul className='flex gap-2 md:gap-8'>
            {menuPaths.map((page) => (
              <li key={page.url}>
                <Link
                  className={twMerge(
                    "text-white/70 hover:text-white transition px-2 py-1",
                    path === page.url && "text-white font-bold"
                  )}
                  href={page.url}
                >
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
