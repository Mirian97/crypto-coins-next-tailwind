import { messageError } from '@/utils/toast'
import api from './api'

export const getCryptoCoins = async () => {
  try {
    const { data } = await api.get(
      '/coins/markets?vs_currency=brl&locale=pt&sparkline=true'
    )
    return data
  } catch (error) {
    messageError()
  }
}

export const getPriceFromPreviousDate = async (idCrypto: string, date: string) => {
  const { data } = await api.get(`/coins/${idCrypto}/history?date=${date}`)
  return data
}
