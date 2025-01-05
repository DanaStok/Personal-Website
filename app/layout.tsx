import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Dana Stok",
  description: "Welcome to Dana Stok's personal site!",
  icons: {
    icon: [
      { url: '/favicon.ico' },  
      { url: '/favicon.svg', type: 'image/svg+xml' },  
    ],
    apple: [
      { url: '/phone_favicon.png' }
    ]
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
