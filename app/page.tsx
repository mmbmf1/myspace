import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from './api/auth/[...nextauth]/route'

export default async function Home() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect(`/api/auth/signin`)
  }

  return (
    <main className="">
      <Example></Example>
    </main>
  )
}

export function Example() {
  return (
    <div className="relative bg-white text-center">
      <h1 className="mt-24 text-3xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-3xl mb-10">
        Unleashing Social Media Awesomeness
      </h1>
      <img
        src="https://media.giphy.com/media/Hbio5EgvGtyH7huxbs/giphy.gif"
        alt="fail"
        className="align-center mx-auto"
      />
      <div className="mt-10 flex items-center gap-x-6 justify-center">
        <a
          href="users"
          className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          Get started
        </a>
      </div>
    </div>
  )
}
