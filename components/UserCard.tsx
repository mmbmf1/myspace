import Link from 'next/link'

interface Props {
  id: string
  name: string | null
  age: number | null
  image: string | null
  _count: { followedBy: number } | null
}

export default function UserCard({ id, name, age, image, _count }: Props) {
  return (
    <div className="">
      <img
        src={image ?? '/mememan.webp</div'}
        alt={`${name}'s profile`}
        className="w-48 h-48 bg-cover mb-2"
      />
      <div className="py-2">
        <h3 className="font-bold text-blue-700 hover:text-blue-300">
          <Link href={`/users/${id}`}>{name}</Link>
        </h3>
        <p className="text-xs">
          <strong>Age: </strong>
          {age ?? 'Unknown'}
        </p>
        <p className="text-xs">
          <strong>Followers:</strong> {_count!.followedBy}
        </p>
      </div>
    </div>
  )
}
