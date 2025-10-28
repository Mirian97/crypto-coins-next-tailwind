'use client'
import Image from 'next/image'
import Spinner from '~/svg/spinner.svg'

const LoadingCrypto = () => (
  <div className='max-w-full flex flex-row justify-center py-5'>
    <Image src={Spinner} width={100} height={100} alt='loading icon' />
  </div>
)

export default LoadingCrypto
