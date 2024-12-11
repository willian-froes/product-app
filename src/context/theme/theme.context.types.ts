import React from 'react'
import { DefaultTheme } from 'styled-components/native'

export enum ThemeMode {
  DARK = 'dark',
  LIGHT = 'light',
}

export type StatusBarStyle = 'light-content' | 'dark-content'

export type ThemeContextProps = {
  theme: ThemeMode
  defaultTheme: DefaultTheme
  toggleTheme: () => Promise<void>
}

export interface ThemeProviderProps {
  children?: React.JSX.Element
}
