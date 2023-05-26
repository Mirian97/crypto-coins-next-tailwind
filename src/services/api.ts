import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.coingecko.com/api/v3',
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-store'
  }
})
