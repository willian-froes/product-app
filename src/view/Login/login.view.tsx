import React from 'react'

import { Input } from '../../components/Input/Input.component'
import { Button } from '../../components/Button/Button.component'
import { LoginFormGroup, Title, Wrapper } from './login.style'
import { useLoginViewModel } from './login.view-model'

export const LoginView = () => {
  const { form, handleChange, handleSubmit } = useLoginViewModel()

  return (
    <Wrapper>
      <Title>Seja bem-vindo!</Title>

      <LoginFormGroup>
        <Input
          type="cpf"
          placeholder="CPF"
          onChangeText={(value: string) => handleChange('cpf', value)}
          value={form.cpf}
        />
        <Input
          type="password"
          placeholder="Senha"
          onChangeText={(value: string) => handleChange('password', value)}
          value={form.password}
        />
      </LoginFormGroup>

      <Button label="Acessar" onPress={handleSubmit} />
    </Wrapper>
  )
}
