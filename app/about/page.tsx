import { Metadata } from 'next'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '../api/auth/[...nextauth]/route'

export const metadata: Metadata = {
  title: 'About us',
  description: 'we are a social media company',
}

export default async function About() {
  // const session = await getServerSession(authOptions)

  // if (!session) {
  //   redirect(`/api/auth/signin`)
  // }

  return (
    <main className="p-10">
      <h1 className="text-2xl">About</h1>
      <p>This company is trash, I honestly wouldnt sign up</p>
      <img
        src="https://media.giphy.com/media/5i2OfQ3g9bOSc4XWBG/giphy.gif"
        alt="dumpster fire"
      />
    </main>
  )
}
