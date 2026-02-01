import Link from "next/link"
import React from "react"
import { merriweather } from "../lib/utils"
import { friendsLinks } from "../lib/friends"
import { sponsorLinks } from "../lib/sponsors"

export default function Sidebar() {
  return (
    <aside className='p-4 md:p-0 md:mt-[50px]'>
      <SidebarWidget>
        <SidebarHeading>Sponsors</SidebarHeading>
        <LinksWidget links={sponsorLinks}>
          <SponsorMeLink />
        </LinksWidget>
      </SidebarWidget>
      <SidebarWidget>
        <SidebarHeading>Creator Friends</SidebarHeading>
        <LinksWidget links={friendsLinks} />
      </SidebarWidget>
    </aside>
  )
}

function SidebarHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className={`${merriweather.className} font-bold mb-2`}>{children}</h3>
  )
}

function SidebarWidget({ children }: { children: React.ReactNode }) {
  return <div className='mb-8'>{children}</div>
}

function LinksWidget({
  links,
  children,
}: {
  links: any[]
  children?: React.ReactNode
}) {
  return (
    <ul className='space-y-1'>
      {links.map((link) => (
        <li className='uppercase text-[14px]' key={link.name}>
          <Link
            href={link.link}
            target='_blank'
            className='border-b border-b-pink-600 border-dashed hover:border-solid'
          >
            {link.name}
          </Link>
        </li>
      ))}
      {children}
    </ul>
  )
}

function SponsorMeLink() {
  return (
    <li className='uppercase text-[14px]' key='sponsore-me'>
      <Link
        href='/sponsor'
        className='border-b border-b-pink-600 border-dashed hover:border-solid'
      >
        Become a sponsor ⭐
      </Link>
    </li>
  )
}
