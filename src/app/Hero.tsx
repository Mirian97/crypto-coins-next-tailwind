import { BadgeDollarSign } from 'lucide-react'
import Image from 'next/image'
import PeopleBitcoin from '~/svg/person.svg'

const Hero = () => (
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
)

export default Hero
