import React from 'react'
import {
  Header,
  Section,
  SectionTitle,
  UserImage,
  Wrapper,
} from './preferences.style'
import { Button } from '../../components/Button/Button.component'
import { usePreferencesViewModel } from './preferences.view-model'

export const PreferencesView = () => {
  const { toggleTheme, goBack, logout } = usePreferencesViewModel()

  return (
    <Wrapper>
      <Header>
        <Button
          icon="chevron-left"
          variant="outline"
          align="flex-start"
          onPress={goBack}
        />
      </Header>

      <UserImage name="account-circle" />

      <Section>
        <SectionTitle>Preferências</SectionTitle>
        <Button label="Trocar tema" onPress={toggleTheme} />
      </Section>

      <Section>
        <SectionTitle>Conta</SectionTitle>
        <Button
          variant="outline"
          color="danger"
          label="Sair"
          onPress={async () => logout()}
        />
      </Section>
    </Wrapper>
  )
}
