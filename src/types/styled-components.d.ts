import { StatusBarStyle } from 'react-native'
import 'styled-components/native'

type Color = {
  dark: string
  normal: string
  light: string
}

type Colors = {
  background: Color
  primary: Color
  secondary: Color
  gray: Color
  danger: Color
  success: Color
  info: Color
  text: Color
}

type FontSize = {
  mobile: string
  tablet: string
}

export type Spacing = {
  xxs: string
  xs: string
  s: string
  m: string
  l: string
  xl: string
  xxl: string
}

export type Font = {
  size: {
    display: {
      normal: FontSize
    }
    heading: {
      normal: {
        h1: FontSize
        h2: FontSize
        h3: FontSize
      }
      h4: FontSize
      h5: FontSize
      h6: FontSize
    }
    body: {
      p: FontSize
      sub: FontSize
      c1: FontSize
      c2: FontSize
    }
  }
  weight: {
    regular: number
    medium: number
    bold: number
    extra: number
  }
}

declare module 'styled-components/native' {
  export interface DefaultTheme {
    color: Colors
    spacing: Spacing
    font: Font
    activeTheme: string
    barStyle: StatusBarStyle
  }
}
