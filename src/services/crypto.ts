import api from './api'

export const getCryptoCoins = async () => {
  const { data } = await api.get(
    '/coins/markets?vs_currency=brl&locale=pt&sparkline=true'
  )
  return data
}

export const getPriceFromPreviousDate = async (idCrypto: string, date: string) => {
  const { data } = await api.get(`/coins/${idCrypto}/history?date=${date}`)
  return data
}
