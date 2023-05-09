import api from './api'

const getCryptoCoins = async () => {
  const { data } = await api.get('/coins/markets?vs_currency=brl&locale=pt')
  return data
}
