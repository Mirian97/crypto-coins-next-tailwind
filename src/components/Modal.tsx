import { ICurrentCrypto } from '@/interfaces/currentCripto'
import { previousDateSchema, previousDateSchemaType } from '@/schemas/previousDateSchema'
import { getPriceFromPreviousDate } from '@/services/crypto'
import { formatDate, formatNumberToMoney } from '@/utils/formatters'
import { messageError } from '@/utils/toast'
import { yupResolver } from '@hookform/resolvers/yup'
import { XIcon } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import SparklineChart from './SparklineChart'

interface IModalProps {
  openModal: boolean
  closeModal: () => void
}

const Modal = ({
  id,
  openModal,
  image,
  name,
  currentValue,
  sparklinesIn7Days,
  closeModal
}: ICurrentCrypto & IModalProps) => {
  const [previousDate, setPreviousDate] = useState('')
  const [previousPrice, setPreviousPrice] = useState(0)
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<previousDateSchemaType>({ resolver: yupResolver(previousDateSchema) })

  const onSubmit = async () => {
    const formattedDate = formatDate(previousDate)
    try {
      const searchedPrice = await getPriceFromPreviousDate(id, formattedDate)
      setPreviousPrice(searchedPrice.market_data.current_price.brl)
      reset()
    } catch (error) {
      messageError('It was not possible to find the price for the given date')
    }
  }

  const handleCloseModal = () => {
    closeModal()
    reset()
  }

  useEffect(() => {
    const toggleBodyScroll = (toggle: boolean) => {
      document.body.style.overflow = toggle ? 'hidden' : 'auto'
    }
    if (openModal) toggleBodyScroll(true)
    return () => toggleBodyScroll(false)
  }, [openModal])

  const renderPriceCard = (description: string, price: number) => (
    <div className='bg-blue-200 rounded-lg p-3 mt-1'>
      <h2 className='text-center font-medium text-lg text-gray-800'>{description}</h2>
      <h2 className='text-center font-bold text-2xl'>{formatNumberToMoney(price)}</h2>
    </div>
  )

  return (
    <>
      {openModal && (
        <div className='flex flex-row items-center justify-center bg-gray-900 bg-opacity-70 backdrop-filter backdrop-blur-md min-h-full min-w-full fixed inset-0'>
          <div className='bg-white w-96 rounded-xl px-4 pt-4 pb-6 relative flex flex-col'>
            <XIcon
              className='absolute top-4 right-4 cursor-pointer'
              onClick={handleCloseModal}
              size={30}
            />
            <div className='flex flex-row items-center gap-2'>
              <Image src={image} alt={name} width={50} height={50} />
              <h1 className='text-2xl font-bold'>{name}</h1>
            </div>
            <SparklineChart data={sparklinesIn7Days} />
            {renderPriceCard('Current price:', currentValue)}
            <label className='text-md font-medium flex flex-col mt-4'>
              See the previous prices:
              <input
                className='border-2 border-solid border-blue-400 rounded-lg px-3 py-1'
                type='date'
                {...register('previousDate')}
                onChange={(e) => setPreviousDate(e.target.value)}
              />
            </label>
            {errors.previousDate && (
              <span className='text-sm font-medium text-red-600'>
                {errors.previousDate.message}
              </span>
            )}
            <button
              className='bg-green-600 font-bold uppercase mt-2 mb-4 self-center py-2 px-8 rounded-full text-white hover:bg-green-700 hover:scale-105'
              onClick={handleSubmit(onSubmit)}
            >
              Search
            </button>
            {renderPriceCard('Price on the date consulted:', previousPrice)}
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
