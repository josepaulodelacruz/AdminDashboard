import { useMutation } from 'react-query'
import { AxiosError } from 'axios'

import client from '@/Config/client'

interface LoginResponse {
  data: { statusCode: number, message: string, isError: boolean, body: {}}
}

const LoginMutation = <T>() =>
  //<DataResponseAPI, APIERROR, UIRequest>
  useMutation<LoginResponse, AxiosError, T>((creds) => {
    return client.post('/api/auth/login', creds)
  })

export default LoginMutation
