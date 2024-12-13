import { LoginForm } from '../../view/Login/login.model'

export type AuthContextProps = {
  isAuthenticated: boolean
  login: (form: LoginForm) => Promise<void>
  logout: () => Promise<void>
}
