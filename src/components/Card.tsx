import { formatNumberToMoney, formatNumberToPercentage } from '@/utils/formatters'
import Image from 'next/image'
import DecreaseIcon from '~/svg/decrease-icon.svg'
import IncreaseIcon from '~/svg/increase-icon.svg'

interface CardProps {
  name: string
  image: string
  symbol: string
  currentValue: number
  currentPercentage: number
}

const Card = ({ name, image, currentValue, currentPercentage, symbol }: CardProps) => (
  <div className='w-56 bg-white rounded-2xl p-4 flex-column cursor-pointer transition duration-500 hover:-translate-y-1.5'>
    <div className='flex flex-row gap-3 mb-2'>
      <Image src={image} alt={name} width={50} height={50} />
      <div>
        <h2 className='text-lg uppercase font-bold'>{symbol}</h2>
        <h1 className='text-sm text-gray-800'>{name}</h1>
      </div>
    </div>
    <h2 className='font-bold text-2xl ml-4'>{formatNumberToMoney(currentValue)}</h2>
    <div className='flex flex-row justify-end items-center gap-2'>
      <h3 className='text-md text-gray-400 font-bold'>
        {formatNumberToPercentage(currentPercentage)}
      </h3>
      <Image
        src={currentPercentage > 0 ? IncreaseIcon : DecreaseIcon}
        alt='graph'
        width={24}
        height={12}
      />
    </div>
  </div>
)

export default Card
