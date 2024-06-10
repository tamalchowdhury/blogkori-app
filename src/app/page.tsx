export default async function Home() {
  // get posts from wordpress upto 5
  const response = await fetch(
    `https://blogkori.com/wp-json/wp/v2/posts?per_page=5`
  )

  const post = await response.json()

  return (
    <main>
      {post.map((p) => (
        <div key={p.id}>
          <h1>{p.title.rendered}</h1>
          <div dangerouslySetInnerHTML={{ __html: p.excerpt.rendered }} />
        </div>
      ))}
    </main>
  )
}
