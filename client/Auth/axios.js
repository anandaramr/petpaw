import axios from 'axios'

const baseURL = 'https://localhost:3000'
export const axiosJwt = axios.create({ baseURL })

// axiosJwt.interceptors.request.use(async config => {

// })

export default function useAxios() {
    return axios.create({ baseURL })
}