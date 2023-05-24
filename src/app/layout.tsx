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

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <GlobalProvider>
      <html lang='pt-br'>
        <body className={exo.className}>
          <div
            className={`min-h-screen bg-[url('/image/bitcoin-background.png')] bg-no-repeat bg-center bg-cover bg-fixed`}
          >
            {children}
          </div>
          <ToastContainer />
        </body>
      </html>
    </GlobalProvider>
  )
}

export default RootLayout
