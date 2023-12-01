import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/sections/navbar'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Shristi Gupta Portfolio',
  description: 'Portfolio of Shristi Gupta',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
            <link rel="shortcut icon" href="/utils/favicon.ico" />
          </head>
      <body className={cn(" grid gap-24", inter.className)}>
          <Navbar/>
          {children}
      </body>
    </html>
  )
}
