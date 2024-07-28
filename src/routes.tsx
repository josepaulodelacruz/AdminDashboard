import { RouteModel } from "./Types"
import DashboardIcon from '@mui/icons-material/Dashboard'
import TablesIcon from '@mui/icons-material/TableRows'
import PeopleIcon from '@mui/icons-material/People'

//Pages
import DashboardPage from '@/Pages/Dashboard'
import TablesPage from "@/Pages/Tables"
import RegisterPage from "@/Pages/Register"
import LoginPage from "@/Pages/Login"
import UsersPage from "./Pages/Users"
import StringRoutes from "./Constants/stringRoutes"

//authRoutes

const stringRoutes = new StringRoutes();

const routes: RouteModel[] = [
  {
    type: 'collapse',
    name: 'Dashboard',
    key: 'dashboard',
    icon: <DashboardIcon fontSize='small' sx={{ marginRight: '10px', color: '#FFF' }}>dashboard</DashboardIcon>,
    route: stringRoutes.dashboard,
    component: <DashboardPage />
  },
  {
    type: 'collapse',
    name: 'Tables',
    key: 'tables',
    icon: <TablesIcon fontSize='small' sx={{ marginRight: '10px', color: "#FFF" }}>Tables</TablesIcon>,
    route: stringRoutes.tables,
    component: <TablesPage />
  },
  {
    type: 'collapse',
    name: 'Users',
    key: 'user',
    icon: <PeopleIcon fontSize='small' sx={{ marginRight: '10px', color: "#FFF" }}>Tables</PeopleIcon>,
    route: stringRoutes.user_home,
    component: <UsersPage />
  },
];

const authRoutes: RouteModel[] = [
  {
    type: 'collapse',
    name: 'Login',
    key: 'login',
    icon: <DashboardIcon fontSize='small' sx={{ marginRight: '10px', color: '#FFF' }}>dashboard</DashboardIcon>,
    route: '/login',
    component: <LoginPage />
  },
  {
    type: 'collapse',
    name: 'Register',
    key: 'register',
    icon: <DashboardIcon fontSize='small' sx={{ marginRight: '10px', color: '#FFF' }}>dashboard</DashboardIcon>,
    route: '/register',
    component: <RegisterPage />
  }
]

export { routes, authRoutes }

