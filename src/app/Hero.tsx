import { BadgeDollarSign } from 'lucide-react'
import Image from 'next/image'
import PeopleBitcoin from '~/svg/person.svg'

const Hero = () => (
  <section className='flex flex-col items-center justify-center py-32 relative max-w-4xl m-auto'>
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
        <button
          aria-label='See cryptocurrencies'
          className='inline-flex items-center gap-3 px-6 py-3 rounded-xl text-lg font-semibold text-white bg-gradient-to-r from-indigo-950 via-blue-900 to-blue-900 shadow-lg hover:shadow-xl transform transition-all duration-200 hover:scale-105 active:scale-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-300 border-white border'
        >
          <span className='leading-none'>See Cryptos</span>
          <BadgeDollarSign size={24} />
        </button>
      </a>
    </div>
  </section>
)

export default Hero
