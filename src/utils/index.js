import axios from 'axios'

export const getPageCount = (totalcoun, limit) => {
  return Math.ceil(totalcoun / limit)
}

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_AXIOS_BASE,
})

export default instance
