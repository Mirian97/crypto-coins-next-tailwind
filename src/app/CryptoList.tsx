/* eslint-disable react-hooks/exhaustive-deps */
import Card from '@/components/Card'
import { ICryptoCoins } from '@/interfaces/crypto'
import { getCryptoCoins } from '@/services/crypto'
import { messageError } from '@/utils/toast'
import { useEffect, useState } from 'react'

const CryptoList = () => {
  const [cryptos, setCryptos] = useState<ICryptoCoins[]>([])
  const [search, setSearch] = useState<string>('')

  const handleGetCryptoCoins = async (searchValue: string) => {
    try {
      const data: ICryptoCoins[] = await getCryptoCoins()
      if (searchValue) {
        const filteredCryptos = data.filter((crypto) =>
          crypto.name.toLowerCase().includes(searchValue.toLowerCase())
        )
        return setCryptos(filteredCryptos)
      }
      return setCryptos(data)
    } catch (error) {
      return messageError()
    }
  }

  useEffect(() => {
    handleGetCryptoCoins(search)
  }, [search])

  useEffect(() => {
    handleGetCryptoCoins(search)
  }, [])

  return (
    <div id='view-cryptocurrencies'>
      <div className='w-full flex flex-col justify-center items-center mb-6'>
        <label htmlFor='crypto-name' className='text-white font-bold text-lg w-72'>
          Search by crypto name:
        </label>
        <input
          className='mx-3 p-2 w-72 rounded-xl focus:border-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1'
          id='crypto-name'
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <section className='max-w-7xl flex flex-row items-center justify-center gap-5 flex-wrap m-auto px-2 pt-4 pb-16'>
        {cryptos.length === 0 && search.length ? (
          <p className='text-white text-xl font-bold'>No cryptocurrency was found</p>
        ) : (
          cryptos?.map(
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
          )
        )}
      </section>
    </div>
  )
}

export default CryptoList
