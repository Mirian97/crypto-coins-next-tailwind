'use client'
import useGlobal from '@/hooks/useGlobal'
import { formatNumberToMoney, formatNumberToPercentage } from '@/utils/formatters'
import Image from 'next/image'
import DecreaseIcon from '~/svg/decrease-icon.svg'
import IncreaseIcon from '~/svg/increase-icon.svg'

interface CardProps {
  id: string
  name: string
  image: string
  symbol: string
  currentValue: number
  currentPercentage: number
  sparklinesIn7Days: number[]
}

const Card = ({
  id,
  name,
  image,
  currentValue,
  currentPercentage,
  symbol,
  sparklinesIn7Days
}: CardProps) => {
  const { handleToggleModal, setCurrentCrypto } = useGlobal()

  const handleOpenModal = () => {
    setCurrentCrypto({ id, name, image, currentValue, sparklinesIn7Days })
    handleToggleModal()
  }

  return (
    <div
      role='button'
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleOpenModal()}
      className={`w-56 rounded-2xl p-4 flex-column cursor-pointer transition duration-200
        hover:scale-105 hover:-translate-y-1.5 shadow-lg border border-white/10
        bg-gray-800/90 backdrop-blur-sm`}
      onClick={handleOpenModal}
    >
      <div className='flex flex-row gap-3 mb-2 items-center'>
        <Image
          src={image}
          alt={name}
          width={50}
          height={50}
          className='rounded-full ring-1 ring-white/10'
        />
        <div>
          <h2 className='text-lg uppercase font-bold text-slate-100'>{symbol}</h2>
          <h1 className='text-sm text-slate-300 line-clamp-1'>{name}</h1>
        </div>
      </div>
      <h2 className='font-bold text-2xl ml-4 text-slate-100'>
        {formatNumberToMoney(currentValue)}
      </h2>
      <div className='flex flex-row justify-end items-center gap-2'>
        <h3
          className={`text-lg font-bold ${
            currentPercentage > 0 ? 'text-emerald-400' : 'text-rose-400'
          }`}
        >
          {formatNumberToPercentage(currentPercentage)}
        </h3>
        <Image
          src={currentPercentage > 0 ? IncreaseIcon : DecreaseIcon}
          alt='graph'
          width={24}
          height={12}
        />
      </div>
      <h3 className='text-xs ml-auto text-slate-400 font-medium w-32 text-right mt-1'>
        Price change in % in the last 24 hours
      </h3>
    </div>
  )
}

export default Card
