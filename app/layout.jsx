import { Poppins, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/sections/navbar'
import { cn } from '@/lib/utils'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair'
})

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
      <body className={cn(" grid ", poppins.className, playfair.variable)}>
          <Navbar/>
          <div >
            {children}
          </div>
      </body>
    </html>
  )
}
