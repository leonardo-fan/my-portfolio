import type { Metadata } from 'next'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import './globals.css'
import LinkButton from './components/Button/LinkButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Leonardo Fan - Fullstack Software Engineer in Sydney, Australia',
  description: 'Leonardo Fan is a front-end and back-end software engineer based in Sydney, Australia.',
}
// todo layout icon matches alignment
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="sticky top-0 px-4 lg:px-6 py-2.5">
          <nav className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            {/* TODO make interactive scroll to top "hero"*/}
            <img src="/icon.png" className="mr-3 h-6 sm:h-9" alt="Portfolio Logo" role="button" />
            <div className="flex items-center">
              <Link href="/#about" className="hover:text-gray-300 font-medium text-sm px-4 lg:px-5 py-2 lg:py-2.5 mx-1">About</Link>
              <Link href="/#experience" className="hover:text-gray-300 font-medium text-sm px-4 lg:px-5 py-2 lg:py-2.5 mx-1">Experience</Link>
              <Link href="/#projects" className="hover:text-gray-300 font-medium text-sm px-4 lg:px-5 py-2 lg:py-2.5 mx-1">Projects</Link>
              <LinkButton text="Resume" className="my-1 lg:my-1.5 mx-1" link="/resume.pdf" />
            </div>
          </nav>
        </header>
        {children}
        <footer className="sticky bottom-4 px-4 lg:px-6 py-2.5">
          <div className="flex flex-row-reverse flex-wrap mx-auto max-w-screen-xl">
            {/* TODO pop out contact info */}
            <img src="/bubble.svg" className="h-6 sm:h-9" alt="contact-info" role="button" />
          </div>
        </footer>
      </body>
    </html>
  )
}
