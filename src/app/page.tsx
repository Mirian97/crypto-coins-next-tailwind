'use client'
import ArrowUp from '@/components/ArrowUp'
import LoadingCrypto from '@/components/LoadingCrypto'
import Modal from '@/components/Modal'
import useGlobal from '@/hooks/useGlobal'
import { Suspense } from 'react'
import CryptoList from './CryptoList'
import Hero from './Hero'

const Home = async () => {
  const { currentCrypto, openModal, handleToggleModal } = useGlobal()
  return (
    <>
      <Hero />
      <Suspense fallback={<LoadingCrypto />}>
        {/* @ts-ignore */}
        <CryptoList />
      </Suspense>
      <Modal openModal={openModal} {...currentCrypto} closeModal={handleToggleModal} />
      <ArrowUp />
    </>
  )
}

export default Home
