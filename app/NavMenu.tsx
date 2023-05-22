import Link from 'next/link'
import Image from 'next/image'
import { SignInButton, SignOutButton } from '@/components/buttons'
import AuthCheck from '@/components/AuthCheck'

const linkStyles = 'flex items-center pr-6 hover:underline'

export default function NavMenu() {
  return (
    <nav className="flex justify-between items-center bg-blue-700 px-1 py-5 rounded-md">
      <Link className="p-2" href="/">
        <Image src="/logo.svg" alt="Nextspace logo" width={216} height={30} />
      </Link>
      <ul className="flex mr-1 text-white">
        <NavItem href="/about">About</NavItem>
        <NavItem href="/blog">Blog</NavItem>
        <NavItem href="/users">Users</NavItem>
        <li>
          <SignInButton />
        </li>
        <li>
          <AuthCheck>
            <SignOutButton />
          </AuthCheck>
        </li>
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
