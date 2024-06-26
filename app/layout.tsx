import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: ' Next ',
  description: 'Generated by create next app',
}
type Props = {
  children: React.ReactNode
  team: React.ReactNode
  analytics: React.ReactNode
  modal: React.ReactNode
}

export default function RootLayout({ children, team, analytics, modal }: Readonly<Props>) {
  return (
    <html>
      <body className="p-6">
        <nav className="flex items-center justify-center gap-10 text-blue-600 mb-6">
          <Link href="/">Home</Link>
          <Link href="/page-views">Page Views</Link>
          <Link href="/visitors">Visitors</Link>
        </nav>
        <div className="flex gap-6">
          {team}
          {analytics}
        </div>
        <div>
          <span>{children}</span>
          <span>{modal}</span>
        </div>
      </body>
    </html>
  )
}
