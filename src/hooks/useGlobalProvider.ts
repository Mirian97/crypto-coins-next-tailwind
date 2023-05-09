'use client'
import { ICryptoCoins } from '@/interfaces/crypto'
import { getCryptoCoins } from '@/services/crypto'
import { useEffect, useState } from 'react'

const useGlobalContextProvider = () => {
  const [cryptos, setCryptos] = useState<ICryptoCoins[]>([])
  const [openModal, setOpenModal] = useState<boolean>(false)
  const handleToggleModal = () => setOpenModal(!openModal)
  // const [currentCrypto, setCurrentCrypto] = useState<ICryptoCoins>({})

  useEffect(() => {
    const handleGetCryptoCoins = async () => {
      const response = await getCryptoCoins()
      setCryptos(response)
    }
    handleGetCryptoCoins()
  }, [])

  return {
    openModal,
    handleToggleModal,
    cryptos
  }
}

export default useGlobalContextProvider
