import Link from 'next/link'
import Image from 'next/image'

export default function NavMenu() {
  return (
    <nav className="flex justify-between items-center">
      <Link href="/">
        <Image src="/next.svg" alt="Nextspace logo" width={216} height={30} />
      </Link>
      <ul className="flex mr-1">
        <li className="flex items-center pr-1">
          <Link href={'/about'}>About</Link>
        </li>
        <li className="flex items-center pr-1">
          <Link href={'/blog'}>Blog</Link>
        </li>
        <li className="flex items-center pr-1">
          <Link href={'/users'}>Users</Link>
        </li>
      </ul>
    </nav>
  )
}
