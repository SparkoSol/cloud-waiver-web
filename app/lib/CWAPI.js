'use client'

import axios from 'axios'
// const baseUrl = 'https://cloudwaiver.sparkosol.com'
const baseUrl = 'http://192.168.1.36:3000'
const cwAPI = axios

// Add a request interceptor
axios.interceptors.request.use(
  config => {
    const token = localStorage.getItem('access_token')
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token
    }
    return config
  },
  error => {
    Promise.reject(error)
  }
)
if (typeof window !== "undefined") {
  window.http = cwAPI
}

export const postRequest = (url, body) => {
  return cwAPI.post(`${baseUrl}${url}`, body)
}

export const getRequest = (url, body) => {
  return cwAPI.get(`${baseUrl}${url}`)
}

export const putRequest = (url, body) => {
  return cwAPI.put(`${baseUrl}${url}`, body)
}

export const deleteRequest = (url, body) => {
  return cwAPI.delete(`${baseUrl}${url}`, body)
}

export default cwAPI
