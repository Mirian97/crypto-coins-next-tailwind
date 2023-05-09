import '@/styles/global.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Crypto Coins',
  description: 'Website for you to stay updated about cryptocurrencies'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='pt-br'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
