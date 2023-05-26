'use client'
import { FallingLines } from 'react-loader-spinner'

const LoadingCrypto = () => (
  <div className='max-w-full flex flex-row justify-center py-5'>
    <FallingLines color='#FFF' width='100' visible={true} />
  </div>
)

export default LoadingCrypto
