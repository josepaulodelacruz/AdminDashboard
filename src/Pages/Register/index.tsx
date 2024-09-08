import linearGradient from "@/assets/theme/functions/linearGradient"
import { useTheme } from "@mui/material/styles"
import IconButton from '@/Components/Button/IconButton'
import GoogleIcon from '@mui/icons-material/Google'
import FacebookIcon from '@mui/icons-material/FacebookOutlined'
import InputTextField from "@/Components/InputTextField"
import PrimaryButton from "@/Components/Button/PrimaryButton"
import { Link, useNavigate } from 'react-router-dom'
import { ArrowBackIos } from "@mui/icons-material"
import StringRoutes from '@/Constants/stringRoutes'
import Box from '@mui/material/Box'
import { useState, useEffect } from "react"
import useRegisterMutation from "@/Hooks/Auth/useRegisterMutation"
import ErrorLabel from "@/Components/Labels/ErrorLabel"
import { ErrorResponse, AxiosGenericResponse } from "@/Types/Response"
import { isAxiosError } from "axios"
import LoadingHud from "@/Components/Modal/LoadingHud"
import AutohideSnackbar from "@/Components/Snackbar"

const RegisterPage = () => {
  const theme = useTheme()
  const { gradients } = theme.palette as { gradients?: any }
  const [isCheck, setIsCheck] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { mutateAsync: register } = useRegisterMutation()
  const [error, setError] = useState<ErrorResponse>({ isError: false })
  const [showSnackbar, setShowSnackbar] = useState<{ isShow: boolean, message?: string }>({ isShow: false, message: '' })
  const navigate = useNavigate()


  let backgroundValue = linearGradient(gradients.info.main, gradients.info.state)
  let snackbarBackgroundColor = linearGradient(gradients.success.main, gradients.success.state)

  useEffect(() => {
    if (error.isError) {
      setTimeout(() => {
        setError(prevState => {
          return {
            message: prevState.message,
            isError: !prevState.isError
          }
        })

      }, 3000)
    }

  }, [error])



  const _handleSubmit = async (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    try {
      const form = e.target as HTMLFormElement;
      const email = (form[0] as HTMLInputElement).value
      const password = (form[1] as HTMLInputElement).value
      const confirmPassword = (form[2] as HTMLInputElement).value

      if (!confirmPassword || password !== confirmPassword) {
        setError({ isError: true, message: 'Password not matched.' })
        return
      }

      setIsLoading(true)
      const { data } = await register({ email: email, password: password })

      if (!data.isError) {
        setShowSnackbar({ isShow: true, message: 'Registered Successfully. Please wait for a moment' });
        setTimeout(() => {
          setShowSnackbar({ isShow: false, message: '' });
          navigate(StringRoutes.login);
        }, 3000);
      }

    } catch (error: unknown) {
      if (isAxiosError<AxiosGenericResponse>(error)) {

        let errorMessage = error.response?.data.title ?? error.response?.data.message
        errorMessage = errorMessage ?? error.message;

        setError({ isError: true, message: errorMessage })
        setIsLoading(false)
      }
    } 
  }

  return (
    <>
      <div style={{ background: backgroundValue }} className="flex flex-col top-[-130px] justify-center items-center w-[320px] rounded-lg shadow-lg mx-auto h-[100px] z-10 relative" >
        <h3 className="text-lg font-semibold text-white">Sign up with</h3>

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
        onSubmit={_handleSubmit}
        component="form" className="absolute top-[-100%] w-full bg-white rounded-xl shadow-xl pt-20 px-4 flex flex-col " >

        <div className="flex-grow">
          <InputTextField name="email" placeholder="Email" label='Email' />
          <InputTextField type='password' name="password" placeholder="Enter Password" label="Password" />
          <InputTextField type='confirm_password' name="confirmPassword" placeholder="Enter Confirm Password" label='Confirm Password' />

          <span className="flex items-center text-[0.75rem] text-gray-500 mt-2">
            <input onClick={() => setIsCheck(prevState => !prevState)} type='checkbox' style={{ marginRight: '0.40rem' }} />
            You agree to the terms and condition
          </span>
        </div>

        <ErrorLabel isError={error.isError} >{error.message!}</ErrorLabel>

        <div className="flex flex-row justify-between">
          <Link to={StringRoutes.login} className="items-center flex text-sm underline " >
            <ArrowBackIos sx={{ fontSize: '12px' }} />
            Back to Login
          </Link>

          <PrimaryButton
            type='submit'
            disabled={!isCheck}
            backgroundValue={backgroundValue}

            style={{ marginTop: '0.5rem', marginBottom: '1rem', padding: '0.55rem' }}
          >
            SIGN UP
          </PrimaryButton>

        </div>

        <LoadingHud isLoading={isLoading} />

        <AutohideSnackbar
          isOpen={showSnackbar.isShow}
          message={showSnackbar.message!}
          onEvent={() => setShowSnackbar({ isShow: false })}
          backgroundColor={snackbarBackgroundColor}

        />

      </Box>
    </>
  )
}

export default RegisterPage
