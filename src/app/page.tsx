'use client'
import ArrowUp from '@/components/ArrowUp'
import Modal from '@/components/Modal'
import useGlobal from '@/hooks/useGlobal'
import { Suspense } from 'react'
import CryptoList from './CryptoList'
import Hero from './Hero'
import Loading from './loading'

const Home = async () => {
  const { currentCrypto, openModal, handleToggleModal } = useGlobal()
  return (
    <>
      <Hero />
      <Suspense fallback={<Loading />}>
        <CryptoList />
      </Suspense>
      <Modal openModal={openModal} {...currentCrypto} closeModal={handleToggleModal} />
      <ArrowUp />
    </>
  )
}

export default Home
