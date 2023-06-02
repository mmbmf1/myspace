'use client'
import { useRouter } from 'next/navigation'
import { useState, useTransition } from 'react'

interface Props {
  targetUserId: string
  isFollowing: boolean
}

export default function FollowClient({ targetUserId, isFollowing }: Props) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [isFetching, setIsFetching] = useState(false)
  const isMutating = isFetching || isPending

  const buttonClasses =
    'mt-2 p-1 text-xs text-white border rounded-md bg-blue-400'

  const follow = async () => {
    setIsFetching(true)

    const res = await fetch('/api/follow', {
      method: 'POST',
      body: JSON.stringify({ targetUserId }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    setIsFetching(false)

    console.log(await res.json())

    startTransition(() => {
      // Refresh the current route:
      // - Makes a new request to the server for the route
      // - Re-fetches data requests and re-renders Server Components
      // - Sends the updated React Server Component payload to the client
      // - The client merges the payload without losing unaffected
      //   client-side React state or browser state
      router.refresh()
    })
  }

  const unfollow = async () => {
    setIsFetching(true)

    const res = await fetch(`/api/follow?targetUserId=${targetUserId}`, {
      method: 'DELETE',
    })

    setIsFetching(false)

    console.log(await res.json())

    startTransition(() => {
      router.refresh()
    })
  }

  if (isFollowing) {
    return (
      <button className={buttonClasses} onClick={unfollow}>
        {!isMutating ? 'Unfollow' : '...'}
      </button>
    )
  } else {
    return (
      <button className={buttonClasses} onClick={follow}>
        {!isMutating ? 'Follow' : '...'}
      </button>
    )
  }
}
