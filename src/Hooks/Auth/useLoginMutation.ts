import { useMutation } from 'react-query'
import { AxiosError } from 'axios'

import client from '@/Config/client'

interface LoginResponse {
  data: { statusCode: number, message: string, isError: boolean, body: {}}

}

const LoginMutation = <T>() =>
  useMutation<LoginResponse, AxiosError, T>((creds) => {
    console.log(creds);
    return client.post('/api/auth/login', creds)
  })

export default LoginMutation
