import useAuth from '@/Hooks/Auth/useAuth';
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

const client: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL as string,
  headers: {
    'Content-Type': 'application/json',
  }
})

client.interceptors.request.use(
  (config: InternalAxiosRequestConfig<AxiosRequestConfig>) => {
    const { token } = useAuth.getState();
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)

)

client.interceptors.response.use(
    (config: AxiosResponse) => config,
    (error: AxiosError) => {
        const invalidStatus = [403, 401];
        if (
            error.response?.status &&
            invalidStatus.includes(error.response?.status)
        )
            useAuth.getState().onRemoveUser();

        return Promise.reject(error);
    }
);

export default client


