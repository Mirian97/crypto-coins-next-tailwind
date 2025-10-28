'use client'
import Image from 'next/image'
import Spinner from '~/svg/spinner.svg'

const Loading = () => (
  <div className='min-h-screen max-w-full flex flex-col items-center justify-center'>
    <Image src={Spinner} width={80} height={80} alt='loading icon' />
  </div>
)

export default Loading
