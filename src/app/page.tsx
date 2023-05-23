'use client'
import ArrowUp from '@/components/ArrowUp'
import Card from '@/components/Card'
import Modal from '@/components/Modal'
import useGlobal from '@/hooks/useGlobal'
import { ICryptoCoins } from '@/interfaces/crypto'
import { BadgeDollarSign } from 'lucide-react'
import Image from 'next/image'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import PeopleBitcoin from '~/svg/person.svg'

const Home = () => {
  const { cryptos, currentCrypto, openModal, handleToggleModal } = useGlobal()
  return (
    <>
      <ToastContainer />
      <main
        className={`min-h-screen bg-[url('/image/bitcoin-background.png')] bg-no-repeat bg-center bg-cover bg-fixed`}
      >
        <div className='bg-black bg-opacity-50 w-full'>
          <section className='flex flex-col items-center justify-center py-24 relative max-w-4xl m-auto'>
            <h1 className='sm:text-5xl font-extrabold text-center text-white text-3xl px-2'>
              Being up to date on the main
              <span className='text-blue-700'> cryptocurrencies</span> has never been so
              <span className='text-blue-700 uppercase'> simple</span>.
            </h1>
            <div className='md:justify-between w-full flex flex-row justify-center items-center mt-20 px-16'>
              <Image
                src={PeopleBitcoin}
                width={350}
                height={150}
                alt='two people holding a bitcoin coin'
                className='md:flex hidden'
              />
              <a href='#view-cryptocurrencies'>
                <button className='bg-gradient-to-br from-blue-950 to-blue-500 duration-500 text-lg md:text-xl flex flex-row gap-2 items-center border-2 font-medium border-solid border-white text-white py-2 px-6 uppercase rounded-full hover:opacity-90'>
                  <BadgeDollarSign size={32} />
                  See the cryptos
                </button>
              </a>
            </div>
          </section>
          <section
            id='view-cryptocurrencies'
            className='max-w-7xl flex flex-row items-center justify-center gap-5 flex-wrap m-auto px-2'
          >
            {cryptos.map(
              ({
                id,
                name,
                image,
                symbol,
                current_price,
                price_change_percentage_24h,
                sparkline_in_7d
              }: ICryptoCoins) => (
                <Card
                  key={id}
                  id={id}
                  name={name}
                  image={image}
                  symbol={symbol}
                  currentValue={current_price}
                  currentPercentage={price_change_percentage_24h}
                  sparklinesIn7Days={sparkline_in_7d.price}
                />
              )
            )}
          </section>
        </div>
        <ArrowUp />
        <Modal openModal={openModal} {...currentCrypto} closeModal={handleToggleModal} />
      </main>
    </>
  )
}

export default Home
