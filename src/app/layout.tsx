import '@/styles/global.css'
import { Exo } from 'next/font/google'

const exo = Exo({ subsets: ['latin'] })

export const metadata = {
  title: 'Crypto Coins',
  description: 'Website for you to stay updated about cryptocurrencies'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='pt-br'>
      <body className={exo.className}>{children}</body>
    </html>
  )
}
