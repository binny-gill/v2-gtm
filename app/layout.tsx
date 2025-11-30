import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FinanceOS - GTM Materials',
  description: 'Finance automation platform marketing materials',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

