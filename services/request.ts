import axios from 'axios'

export const request = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 5000,
})

request.interceptors.request.use(
  (config) => {
    if (config.method !== 'POST') {
      return config
    }

    if (!Object.keys(config.data).length) {
      throw new Error(`POST Request parameters are missing! ${config.url}`)
    }
  },
  (error) => Promise.reject(error)
)

request.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
)

export default request
