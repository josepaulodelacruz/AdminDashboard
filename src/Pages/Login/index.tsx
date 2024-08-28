import linearGradient from "@/assets/theme/functions/linearGradient"
import { useTheme } from "@mui/material/styles"
import IconButton from '@/Components/Button/IconButton'
import GoogleIcon from '@mui/icons-material/Google'
import FacebookIcon from '@mui/icons-material/FacebookOutlined'
import InputTextField from "@/Components/InputTextField"
import PrimaryButton from "@/Components/Button/PrimaryButton"
import { Link, useNavigate } from 'react-router-dom'
import { MainSpan, SubSpan } from "@/Components/Labels/Spans"
import { useEffect, useState } from 'react'
import CircularProgress from "@mui/material/CircularProgress"
import LoadingHud from "@/Components/Modal/LoadingHud"
import StringRoutes from "@/Constants/stringRoutes"
import useLoginMutation from '@/Hooks/Auth/useLoginMutation'
import Box from '@mui/material/Box'
import { isAxiosError } from "axios"
import ErrorLabel from "@/Components/Labels/ErrorLabel"
import { ErrorResponse, GenericResponse } from "@/Types/Response"

const LoginPage = () => {
  const theme = useTheme()
  const { gradients } = theme.palette as { gradients?: any, badgeColors?: { error?: any } }
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<ErrorResponse>({isError: false})
  const { mutateAsync: login } = useLoginMutation()
  const navigate = useNavigate()

  let backgroundValue = linearGradient(gradients.info.main, gradients.info.state);

  useEffect(() => {
    if(error.isError) {
      setTimeout(() => {
        setError({isError: false})
      }, 3500)
    }

  }, [error])

  const _handleLogin = async (e: React.FormEvent<HTMLInputElement>) => {
    const form = e.target as HTMLFormElement;
    const username = (form[0] as HTMLInputElement).value
    const password = (form[1] as HTMLInputElement).value
    e.preventDefault()

    try {
      setIsLoading(true)
      const { data } = await login({ email: username, password: password })

      if (!data.isError) {
        navigate(StringRoutes.dashboard)
      }

    } catch (error: unknown) {
      if (isAxiosError<GenericResponse>(error)) {
        let errorMessage = error.response?.data.title ?? error.response?.data.message
        setError({isError: true, message: errorMessage})
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>

      <div style={{ background: backgroundValue }} className="flex flex-col justify-center top-[-130px] items-center w-[320px] rounded-lg shadow-lg mx-auto h-[100px] z-10 relative" >
        <h3 className="text-lg font-semibold text-white">Login in with</h3>

        <div className="flex flex-row">
          <IconButton color='inherit' style={{ color: 'white' }}>
            <GoogleIcon />
          </IconButton>
          <IconButton color='inherit' style={{ color: 'white' }}>
            <FacebookIcon />
          </IconButton>
        </div>

      </div>

      <Box
        onSubmit={_handleLogin}
        component="form"
        className="absolute top-[-100%]  w-full bg-white rounded-xl shadow-xl pt-20 py-4 px-4 flex flex-col " >


        <div className="">
          <div className="py-2">
            <InputTextField name="username" placeholder="Email" label='Username' />
          </div>
          <div className="py-2">
            <InputTextField name="password" placeholder="Enter Password" label="Password" />
          </div>
        </div>

        <ErrorLabel isError={error.isError}>{error.message!}.</ErrorLabel>

        <PrimaryButton
          type="submit"
          disabled={isLoading}
          backgroundValue={backgroundValue}
          style={{ marginTop: '1rem', marginBottom: '1rem', padding: '0.55rem' }}
        >
          {isLoading ?
            <CircularProgress size={20} color='inherit' />
            : "Login"
          }
        </PrimaryButton>

        <div className="self-center flex-row flex items-center ">
          <SubSpan style={{ paddingRight: '5px' }}>Don't have an account? </SubSpan>
          <Link to={StringRoutes.register}>
            <MainSpan style={{ color: backgroundValue, textDecoration: 'underline', fontSize: '0.70rem' }}>Register Here</MainSpan>
          </Link>
        </div>


      </Box>
      <LoadingHud isLoading={isLoading} />
    </>
  )
}

export default LoginPage
