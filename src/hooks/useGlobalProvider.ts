'use client'
import { ICurrentCrypto } from '@/interfaces/currentCripto'
import { useState } from 'react'

const useGlobalContextProvider = () => {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const handleToggleModal = () => setOpenModal(!openModal)
  const [currentCrypto, setCurrentCrypto] = useState<ICurrentCrypto>({
    id: '',
    name: '',
    image: '',
    currentValue: 0,
    sparklinesIn7Days: []
  })

  return {
    openModal,
    handleToggleModal,
    currentCrypto,
    setCurrentCrypto
  }
}

export default useGlobalContextProvider
