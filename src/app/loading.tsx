'use client'
import { ThreeDots } from 'react-loader-spinner'

const Loading = () => (
  <div className='min-h-screen max-w-full flex flex-col items-center justify-center'>
    <ThreeDots
      height='80'
      width='80'
      radius='9'
      color='#FFF'
      ariaLabel='three-dots-loading'
      visible={true}
    />
  </div>
)

export default Loading
