import { useState } from 'react'

import { LoginForm, LoginViewModel } from './login.model'
import { loginFormInitialState } from './login.constants'
import { useAuthContext } from '../../context/auth/auth.context'

export const useLoginViewModel = (): LoginViewModel => {
  const { login } = useAuthContext()

  const [form, setForm] = useState<LoginForm>(loginFormInitialState)

  const handleChange = (field: string, value: string) => {
    setForm(previousForm => ({ ...previousForm, [field]: value }))
  }

  const handleSubmit = async () => {
    try {
      await login(form)
      clearForm()
    } catch {
      console.error('[ERROR]: Failed to login')
    }
  }

  const clearForm = () => {
    setForm(loginFormInitialState)
  }

  return {
    form,
    clearForm,
    handleChange,
    handleSubmit,
  }
}
