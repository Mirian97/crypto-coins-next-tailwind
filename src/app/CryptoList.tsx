/* eslint-disable react-hooks/exhaustive-deps */
import Card from '@/components/Card'
import { ICryptoCoins } from '@/interfaces/crypto'
import { getCryptoCoins } from '@/services/crypto'
import { messageError } from '@/utils/toast'
import { useEffect, useState } from 'react'

const CryptoList = () => {
  const [cryptos, setCryptos] = useState<ICryptoCoins[]>([])
  const [search, setSearch] = useState<string>('')

  const handleGetCryptoCoins = async () => {
    try {
      const data: ICryptoCoins[] = await getCryptoCoins()
      setCryptos(data)
    } catch (error) {
      return messageError()
    }
  }

  useEffect(() => {
    handleGetCryptoCoins()
  }, [])

  const handleSearch = (searchValue: string) => {
    setSearch(searchValue)
  }

  const filteredCryptos = cryptos.filter((crypto) =>
    crypto.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div id='view-cryptocurrencies'>
      <div className='w-full flex flex-col justify-center items-center mb-6'>
        <label htmlFor='crypto-name' className='text-white font-bold text-lg w-72'>
          Search by crypto name:
        </label>
        <input
          className='mx-3 p-2 w-72 rounded-xl border-2 outline-none ring-blue-900 border-blue-900 focus:border-sky-500 focus:ring-sky-500 ring-1'
          id='crypto-name'
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      <section className='max-w-7xl flex flex-row items-center justify-center gap-5 flex-wrap m-auto px-2 pt-4 pb-16'>
        {filteredCryptos.length === 0 && search.length ? (
          <p className='text-white text-xl font-bold'>No cryptocurrency was found</p>
        ) : (
          filteredCryptos.map(
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
