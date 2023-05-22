import { prisma } from '@/lib/prisma'
import { Metadata } from 'next'

interface Props {
  params: {
    id: string
  }
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const user = await prisma.user.findUnique({ where: { id: params.id } })
  return { title: `User profile of ${user?.name}` }
}

export default async function UserProfile({ params }: Props) {
  const user = await prisma.user.findUnique({ where: { id: params.id } })
  const { name, bio, image, age } = user ?? {}

  return (
    <div className="mt-10 flex">
      <img
        src={image ?? '/mememan/webp'}
        alt={`${name}'s profile`}
        className="w-64 h-64"
      />
      <div className="ml-8">
        <h1 className="font-bold text-2xl">{name}</h1>
        <h2>{age}</h2>
        <h3 className="mt-2 font-bold text-xl">Bio</h3>
        <p>{bio ?? 'Unknown'}</p>
      </div>
    </div>
  )
}
