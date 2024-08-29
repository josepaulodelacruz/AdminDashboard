
import { Outlet, Navigate  } from 'react-router-dom'
import useAuth from '@/Hooks/Auth/useAuth'
import StringRoutes from '@/Constants/stringRoutes'

const PrivateRoutes = () => {
  const { token } = useAuth()

  if(!token) return <Navigate to={StringRoutes.login}/>

 
  return <Outlet />
}

export default PrivateRoutes
