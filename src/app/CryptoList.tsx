'use client'
import Card from '@/components/Card'
import useGlobal from '@/hooks/useGlobal'
import { ICryptoCoins } from '@/interfaces/crypto'

const CryptoList = () => {
  const { cryptos } = useGlobal()
  return (
    <section
      id='view-cryptocurrencies'
      className='max-w-7xl flex flex-row items-center justify-center gap-5 flex-wrap m-auto px-2 pt-4 pb-16'
    >
      {cryptos?.map(
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
  )
}

export default CryptoList
