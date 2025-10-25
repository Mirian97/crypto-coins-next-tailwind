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
      className='w-56 bg-white rounded-2xl p-4 flex-column cursor-pointer transition duration-500 hover:scale-105 hover:-translate-y-1.5'
      onClick={handleOpenModal}
    >
      <div className='flex flex-row gap-3 mb-2'>
        <Image src={image} alt={name} width={50} height={50} />
        <div>
          <h2 className='text-lg uppercase font-bold'>{symbol}</h2>
          <h1 className='text-sm text-gray-800 line-clamp-1'>{name}</h1>
        </div>
      </div>
      <h2 className='font-bold text-2xl ml-4'>{formatNumberToMoney(currentValue)}</h2>
      <div className='flex flex-row justify-end items-center gap-2'>
        <h3 className='text-lg text-gray-500 font-bold'>
          {formatNumberToPercentage(currentPercentage)}
        </h3>
        <Image
          src={currentPercentage > 0 ? IncreaseIcon : DecreaseIcon}
          alt='graph'
          width={24}
          height={12}
        />
      </div>
      <h3 className='text-xs ml-auto text-gray-500 font-medium w-32 text-right mt-1'>
        Price change in % in the last 24 hours
      </h3>
    </div>
  )
}

export default Card
