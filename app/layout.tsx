import NavMenu from './NavMenu'
import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nextspace',
  description: 'an application for the next available space',
  authors: [{ name: 'mmbmf1' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="p-8">
        <NavMenu />
        {children}
      </body>
    </html>
  )
}
