import React, { createContext, useState, useEffect, useCallback } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { LoginForm } from '../../view/Login/login.model'
import { AuthService } from '../../services/auth.service'
import { AuthContextProps } from './auth.context.types'

const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  login: async () => {},
  logout: async () => {},
})

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const checkAuthentication = useCallback(async () => {
    const token = await AsyncStorage.getItem('token')
    setIsAuthenticated(!!token)
  }, [])

  useEffect(() => {
    checkAuthentication()
  }, [checkAuthentication])

  const login = async (form: LoginForm): Promise<void> => {
    await AuthService.login(form)
    await checkAuthentication()
  }

  const logout = async (): Promise<void> => {
    await AuthService.logout()
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => React.useContext(AuthContext)
