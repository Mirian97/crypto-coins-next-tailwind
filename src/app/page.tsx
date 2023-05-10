'use client'
import Card from '@/components/Card'
import useGlobal from '@/hooks/useGlobal'
import Image from 'next/image'
import PeopleBitcoin from '~/svg/person.svg'

const Home = () => {
  const { cryptos } = useGlobal()

  return (
    <main
      className={`bg-[url('/image/bitcoin-background.png')] bg-no-repeat bg-center bg-cover bg-fixed min-h-screen p-10 `}
    >
      <section className='flex flex-col items-center justify-center py-24 relative max-w-4xl m-auto'>
        <h1 className='text-6xl font-extrabold text-center text-white'>
          Being up to date on the main
          <span className='text-blue-700'> cryptocurrencies</span> has never been so
          <span className='text-blue-700 uppercase'> simple</span>.
        </h1>
        <div className='w-full flex flex-row justify-between items-center mt-20 px-16'>
          <Image
            src={PeopleBitcoin}
            width={350}
            height={150}
            alt='two people holding a bitcoin coin'
          />
          <a href='#view-cryptocurrencies'>
            <button className=' text-2xl font-extrabold border-2 border-solid border-white uppercase text-white bg-blue-700 py-3 px-6 rounded-2xl transition-all hover:bg-blue-600'>
              See the Cryptos
            </button>
          </a>
        </div>
      </section>
      <section
        id='view-cryptocurrencies'
        className='max-w-7xl flex flex-row items-center justify-center gap-5 flex-wrap m-auto'
      >
        {cryptos.map(
          ({ id, name, image, symbol, current_price, price_change_percentage_24h }) => (
            <Card
              key={id}
              name={name}
              image={image}
              symbol={symbol}
              currentValue={current_price}
              currentPercentage={price_change_percentage_24h}
            />
          )
        )}
      </section>
    </main>
  )
}

export default Home
