'use client'

import { useSession } from 'next-auth/react'

type Props = {
  children: React.ReactNode
}

export default function AuthCheck({ children }: Props) {
  const { data: session, status } = useSession()
  console.log('👀 🔍 ~ file: AuthCheck.tsx:11 ~ AuthCheck ~ status:', status)
  console.log('👀 🔍 ~ file: AuthCheck.tsx:11 ~ AuthCheck ~ session:', session)

  if (status === 'authenticated') {
    return <>{children}</>
  } else {
    return <></>
  }
}
