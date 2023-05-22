import Link from 'next/link'

export default async function Blog() {
  const posts = await fetch('http://localhost:3000/api/content').then((res) =>
    res.json()
  )
  return (
    <div className="mt-10">
      <h1 className="text-xl w-full text-center">Welcome to our Blog!</h1>
      <ul className="text-center">
        {posts.map((post: any) => (
          <li key={post.slug} className="my-4">
            <Link
              href={`/blog/${post.slug}`}
              className="text-blue-900 underline hover:text-blue-500"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
