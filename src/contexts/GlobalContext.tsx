'use client'
import useGlobalProvider from '@/hooks/useGlobalProvider'
import { ICurrentCrypto } from '@/interfaces/currentCripto'
import { Dispatch, SetStateAction, createContext } from 'react'

interface IGlobalContextData {
  openModal: boolean
  handleToggleModal: () => void
  currentCrypto: ICurrentCrypto
  setCurrentCrypto: Dispatch<SetStateAction<ICurrentCrypto>>
}

const GlobalContext = createContext<IGlobalContextData>({} as IGlobalContextData)

type Props = {
  children: React.ReactNode
}

export const GlobalProvider = (props: Props) => {
  const globalProvider = useGlobalProvider()
  return (
    <GlobalContext.Provider value={globalProvider}>
      {props.children}
    </GlobalContext.Provider>
  )
}

export default GlobalContext
