import Image from 'next/image'
import ArrowUpIcon from '~/svg/arrow-up.svg'

const ArrowUp = () => {
  return (
    <a href='#' className='fixed bottom-8 right-8 cursor-pointer animate-bounce'>
      <button>
        <Image src={ArrowUpIcon} alt='Arrow up' width={60} height={60} />
      </button>
    </a>
  )
}

export default ArrowUp
