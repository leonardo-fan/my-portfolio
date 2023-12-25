import type { Metadata } from 'next'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Leonardo Fan - Fullstack Software Engineer in Sydney, Australia',
  description: 'Leonardo Fan is a front-end and back-end software engineer based in Sydney, Australia.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="fixed flex flex-col justify-between items-center w-screen h-screen">
          <header className="w-screen px-4 lg:px-6 py-2.5">
            <nav className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
              {/* TODO make interactive scroll to top*/}
              <img src="/icon.png" className="mr-3 h-6 sm:h-9" alt="Portfolio Logo" role="button" />
              <div className="flex items-center">
                <Link href="/#About" className="text-white hover:text-gray-300 font-medium text-sm px-4 lg:px-5 py-2 lg:py-2.5 mx-1">About</Link>
                <Link href="/#Experience" className="text-white hover:text-gray-300 font-medium text-sm px-4 lg:px-5 py-2 lg:py-2.5 mx-1">Experience</Link>
                <Link href="/#Projects" className="text-white hover:text-gray-300 font-medium text-sm px-4 lg:px-5 py-2 lg:py-2.5 mx-1">Projects</Link>
                {/* TODO open resume */}
                <button className="border border-white rounded-full hover:bg-white text-white hover:text-black font-medium text-sm px-4 lg:px-5 py-1 lg:py-1.5 my-1 lg:my-1.5 mx-1">
                  Resume
                </button>
              </div>
            </nav>
          </header>
          <footer className="w-screen px-4 lg:px-6 py-2.5 my-1">
            <div className="flex flex-row-reverse flex-wrap mx-auto max-w-screen-xl">
              {/* TODO pop out contact info */}
              <img src="/bubble.svg" className="h-6 sm:h-9" alt="contact-info" role="button" />
            </div>
          </footer>
        </div>
        {children}
      </body>
    </html>
  )
}
