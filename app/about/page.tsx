import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About us',
  description: 'we are a social media company',
}

export default async function About() {
  return (
    <main className="p-10">
      <h1>About</h1>
      <p>We are a social media company that is bring people together</p>
    </main>
  )
}
