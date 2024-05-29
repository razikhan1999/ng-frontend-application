import axios, { AxiosInstance } from 'axios'

const baseURL = typeof window !== 'undefined' ? `${window.location.origin}/api` : ''

const instance: AxiosInstance = axios.create({
	baseURL: baseURL as string
})

export default instance
