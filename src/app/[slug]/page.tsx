import React from "react"

type Props = {
  params: {
    slug: string
  }
}

export default async function SinglePost({ params }: Props) {
  const { slug } = params
  
  const response = await fetch(
    `https://blogkori.com/wp-json/wp/v2/posts?slug=${slug}`
  )

  const post = await response.json()

  if (!post.length) {
    return <div>Post not found</div>
  }

  return (
    <div>
      <h1>{post[0].title.rendered}</h1>
      <div dangerouslySetInnerHTML={{ __html: post[0].content.rendered }} />
    </div>
  )
}
