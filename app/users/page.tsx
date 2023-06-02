import { getServerSession } from 'next-auth'
import { prisma } from '@/lib/prisma'
import { authOptions } from '../api/auth/[...nextauth]/route'
import UserCard from '@/components/UserCard'

export default async function Users() {
  const session = await getServerSession(authOptions)
  const users = await prisma.user.findMany({
    include: {
      _count: {
        select: {
          followedBy: true,
          following: true,
        },
      },
    },
  })

  await prisma.$disconnect()

  return (
    <div className="grid grid-cols-4 gap-20 mt-10 px-auto place-items-center">
      {users.map((user) =>
        session?.user?.email! !== user.email ? (
          <UserCard key={user.id} {...user}></UserCard>
        ) : null
      )}
    </div>
  )
}
