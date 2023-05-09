import Link from 'next/link'
import Image from 'next/image'

const linkStyles = 'flex items-center pr-1 hover:underline'

export default function NavMenu() {
  return (
    <nav className="flex justify-between items-center bg-blue-700 px-10 py-5 rounded-md">
      <Link href="/">
        <Image src="/logo.svg" alt="Nextspace logo" width={216} height={30} />
      </Link>
      <ul className="flex mr-1 text-white">
        <NavItem href="/about">About</NavItem>
        <NavItem href="/blog">Blog</NavItem>
        <NavItem href="/users">Users</NavItem>
      </ul>
    </nav>
  )
}

type NavItemProps = {
  href: string
  children: React.ReactNode
}

function NavItem({ href, children }: NavItemProps) {
  return (
    <li className={linkStyles}>
      <Link href={href}>{children}</Link>
    </li>
  )
}
