import React from 'react'

import { Input } from '../../components/Input/Input.component'
import { Button } from '../../components/Button/Button.component'
import { LoginFormGroup, Title, Wrapper } from './login.style'

export const LoginView = () => {
  return (
    <Wrapper>
      <Title>Seja bem-vindo!</Title>

      <LoginFormGroup>
        <Input type="cpf" placeholder="CPF" />
        <Input type="password" placeholder="Senha" />
      </LoginFormGroup>

      <Button label="Acessar" />
    </Wrapper>
  )
}
