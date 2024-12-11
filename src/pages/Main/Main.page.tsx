import React from 'react'
import { Button } from 'react-native'

import { Wrapper } from './Main.styles'
import { useThemeContext } from '../../context/theme/theme.context'

export const Main = () => {
  const { toggleTheme } = useThemeContext()

  return (
    <Wrapper>
      <Button title="Trocar tema" onPress={() => toggleTheme()} />
    </Wrapper>
  )
}
