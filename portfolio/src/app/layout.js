import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Sutheera's Portfolio",
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='bg-secondary'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
