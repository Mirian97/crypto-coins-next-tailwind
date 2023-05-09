'use client'
import Card from '@/components/Card'
import useGlobal from '@/hooks/useGlobal'

const Home = () => {
  const { cryptos } = useGlobal()

  return (
    <div
      className={`bg-[url('/image/bitcoin-background.png')] bg-no-repeat bg-center bg-cover bg-fixed min-h-screen p-10`}
    >
      <div className='w-full flex flex-row items-center justify-center gap-5 flex-wrap'>
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
      </div>
    </div>
  )
}

export default Home
