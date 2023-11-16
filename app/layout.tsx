import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.scss'

const jetbrains_mono = JetBrains_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "lndev",
  description:
    "Leonel Ngoya aka LN - Freelance Frontend Developer - Build Sharuco x World Portfolios x LNUI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lndev.me/",
    siteName: "lndev",
    images: [
      {
        url: "https://lndev.me/lndev.png",
        width: 500,
        height: 500,
        alt: "lndev",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ln_dev7",
    creator: "@ln_dev7",
    images: [
      {
        url: "https://lndev.me/lndev.png",
        width: 500,
        height: 500,
        alt: "lndev",
      },
    ],
  },
  authors: [{ name: "Leonel NGOYA", url: "https://lndev.me/" }],
  keywords: "portfolio, cameroon, frontend, freelance",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-2222017759396595" />
      </head>
      <body className={`${jetbrains_mono.className} antialiased`}>{children}</body>
    </html>
  )
}
