import { DefaultTheme } from 'styled-components/native'

import { spacing, font, color } from './theme.config'
import { ThemeMode } from '../../context/theme/theme.context.types'

const dark: DefaultTheme = {
  color,
  spacing,
  font,
  activeTheme: ThemeMode.DARK,
  barStyle: 'light-content',
}

export default dark
