import Link from "next/link"
import { merriweather } from "./layout"

export default async function Home() {
  // get posts from wordpress upto 5
  const response = await fetch(
    `https://blogkori.com/wp-json/wp/v2/posts?per_page=5`
  )

  const post = await response.json()

  return (
    <div className='space-y-[30px]'>
      {post.map((p) => (
        <div className='space-y-[20px]' key={p.id}>
          <Link href={`/${p.slug}`}>
            <h1
              className={`${merriweather.className} text-[28px] leading-tight font-bold hover:underline`}
            >
              {p.title.rendered}
            </h1>
          </Link>
          <div
            className='text-[20px]'
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
