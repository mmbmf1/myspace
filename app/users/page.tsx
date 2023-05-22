import { prisma } from '@/lib/prisma'
import UserCard from '@/components/UserCard'

export default async function Users() {
  const users = await prisma.user.findMany()

  return (
    <div className="grid grid-cols-4 gap-20 mt-10 px-auto place-items-center">
      {users.map((user) => (
        <UserCard key={user.id} {...user}></UserCard>
      ))}
    </div>
  )
}
