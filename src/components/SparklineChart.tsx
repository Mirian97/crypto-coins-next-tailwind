import { Sparklines, SparklinesLine } from 'react-sparklines'

interface ISparklineChart {
  data: number[]
}

const SparklineChart = ({ data }: ISparklineChart) => {
  return (
    <div className='my-5'>
      <h3 className='text-center font-medium text-gray-800 text-lg'>
        Preview chart this week:
      </h3>
      <Sparklines data={data}>
        <SparklinesLine color='orange' />
      </Sparklines>
      <div className='flex flex-row justify-between text-gray-800 text-xs'>
        <span>7 days ago</span>
        <span>Current date</span>
      </div>
    </div>
  )
}

export default SparklineChart
