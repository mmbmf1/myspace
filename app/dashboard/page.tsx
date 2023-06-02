import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import { prisma } from '@/lib/prisma'
// import { SignOutButton } from '@/components/buttons'
import { ProfileForm } from './ProfileForm'

export default async function Dashboard() {
  const session = await getServerSession(authOptions)
  if (!session) {
    redirect('/api/auth/signin')
  }

  const currentUserEmail = session?.user?.email!
  const user = await prisma.user.findUnique({
    where: {
      email: currentUserEmail,
    },
  })

  await prisma.$disconnect()

  return (
    <>
      <h1 className="text-3xl mt-4">Dashboard</h1>
      {/* <SignOutButton /> */}
      <ProfileForm user={user} />
    </>
  )
}
