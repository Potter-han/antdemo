import axios from "axios"
import { serviceStore } from "@/store/module/service.js"

const instance = axios.create({
	baseURL: import.meta.env.VITE_IM_API,
	timeout: 2000
})
const usersData = { limit: 100 }
instance.interceptors.request.use(
	config => {
			if (config.params && Object.keys(config.params)[0] === 'limit') {
				config.headers.Authorization = `Bearer ${serviceStore().adminToken}`
		}
		return config
	},
	error => {
		return Promise.reject(error)
	}
)
instance.interceptors.response.use(
	response => {
		return response.data
	},
	error => {
		return Promise.reject(error)
	}
)

export default instance