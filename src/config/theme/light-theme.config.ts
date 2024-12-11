import { DefaultTheme } from 'styled-components/native'

import { spacing, font, color } from './theme.config'
import { ThemeMode } from '../../context/theme/theme.context.types'

const dark: DefaultTheme = {
  color: {
    ...color,
    background: {
      dark: '#D9D9D9',
      normal: '#FFFFFF',
      light: '#FFFFFF',
    },
    text: {
      dark: '#000000',
      normal: '#021125',
      light: '#0F2A4D',
    },
  },
  spacing,
  font,
  activeTheme: ThemeMode.LIGHT,
  barStyle: 'dark-content',
}

export default dark
