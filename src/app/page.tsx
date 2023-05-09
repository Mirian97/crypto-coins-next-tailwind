import Card from '@/components/Card'

const Home = () => (
  <div
    className={`bg-[url('/image/bitcoin-background.png')] bg-no-repeat bg-center bg-cover min-h-screen p-10`}
  >
    <div className='w-full flex flex-row items-center justify-center gap-5 flex-wrap'>
      <Card
        name='Bitcoin'
        image='https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg'
        symbol='btc'
        currentValue={12398493}
        currentPercentage={-0.24}
      />
    </div>
  </div>
)

export default Home
