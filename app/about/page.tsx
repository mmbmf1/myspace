import { Metadata } from 'next'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '../api/auth/[...nextauth]/route'

export const metadata: Metadata = {
  title: 'About us',
  description: 'we are a social media company',
}

export default async function About() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect(`/api/auth/signin`)
  }

  return (
    <main className="p-10">
      <h1>About</h1>
      <p>We are a social media company that is bring people together</p>
    </main>
  )
}
