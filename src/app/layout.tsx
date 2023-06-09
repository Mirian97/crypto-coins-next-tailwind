import { GlobalProvider } from '@/contexts/GlobalContext'
import '@/styles/global.css'
import { Exo } from 'next/font/google'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const exo = Exo({ subsets: ['latin'] })

export const metadata = {
  title: 'Crypto Coins',
  description: 'Website for you to stay updated about cryptocurrencies'
}

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang='pt-br'>
    <body className={exo.className} suppressHydrationWarning={true}>
      <GlobalProvider>
        {children}
        <ToastContainer />
      </GlobalProvider>
    </body>
  </html>
)

export default RootLayout
