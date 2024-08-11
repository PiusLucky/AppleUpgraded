import type { Metadata } from 'next'
import './globals.css'
import localFont from 'next/font/local'


export const metadata: Metadata = {
  title: 'Apple Website',
  description: 'Welcome to the era of spatial computing.',
}

const sfProFont = localFont({
  src: [
    {
      path: '../../public/font/regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/font/medium.otf',
      weight: '500',
      style: 'medium',
    },
    {
      path: '../../public/font/bold.otf',
      weight: '700',
      style: 'bold',
    },

  ],
})



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (   
    <html lang="en">
      <body  className={sfProFont.className} >{children}</body>
    </html>
  )
}
