import type { Metadata } from 'next'
import { Oswald, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const oswald = Oswald({ 
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: '--font-oswald',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ["latin", "cyrillic"],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Padel Energy — Падел-корты в Казахстане',
  description: 'Компания в Казахстане по поставке падел-кортов любой сложности: от открытых до крытых решений под ключ.',
  metadataBase: new URL('https://padelenergy.kz'),
  alternates: {
    canonical: 'https://padelenergy.kz',
  },
  openGraph: {
    title: 'Padel Energy — Падел-корты в Казахстане',
    description: 'Компания в Казахстане по поставке падел-кортов любой сложности: от открытых до крытых решений под ключ.',
    url: 'https://padelenergy.kz',
    siteName: 'Padel Energy',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Padel Energy — Падел-корты в Казахстане',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Padel Energy — Падел-корты в Казахстане',
    description: 'Компания в Казахстане по поставке падел-кортов любой сложности: от открытых до крытых решений под ключ.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={`${oswald.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
