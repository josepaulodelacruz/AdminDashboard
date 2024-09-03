import { useMutation } from "react-query";

import client  from '@/Config/client'
import { AxiosError } from "axios";

interface RegisterResponse {
  data: {
    statusCode: number,
    message: string,
    isError: boolean,
    body: {}
  }
}


const useRegisterMutation = <T>() => {
  return useMutation<RegisterResponse, AxiosError, T>((creds) => {
    return client.post('/api/auth/register', creds)
  })
}

export default useRegisterMutation 
