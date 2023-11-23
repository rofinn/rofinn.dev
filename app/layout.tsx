import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'Rory Finnegan | Software Developer',
  description: 'Software Developer with experience building data pipelines and ML platforms',
  openGraph: {
    title: 'Rory Finnegan',
    description: 'Software Developer with experience building data pipelines and ML platforms',
    images: 'url/wave.png',
    locale: 'en-CA',
    type: 'website',
  }
}

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
