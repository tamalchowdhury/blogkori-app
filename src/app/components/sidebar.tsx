import Link from "next/link"
import React from "react"
import { merriweather } from "../lib/utils"
import { friendsLinks } from "../lib/friends"

export default function Sidebar() {
  return (
    <aside className='p-4 md:p-0 md:mt-[50px]'>
      <SidebarWidget>
        <SidebarHeading>Sponsore</SidebarHeading>
        <Link
          href='https://www.plesk.com/blog/various/free-wordpress-cdn/'
          target='_blank'
          className='border-b border-b-pink-600 border-dashed'
        >
          Free WordPress CDN
        </Link>
      </SidebarWidget>
      <SidebarWidget>
        <SidebarHeading>Friends</SidebarHeading>
        <ul className="space-y-1">
          {friendsLinks.map((friend) => (
            <li className='uppercase text-[14px]' key={friend.name}>
              <Link
                href={friend.link}
                target='_blank'
                className='border-b border-b-pink-600 border-dashed hover:border-solid'
              >
                {friend.name}
              </Link>
            </li>
          ))}
        </ul>
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
