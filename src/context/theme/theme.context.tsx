import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  DefaultTheme,
  ThemeProvider as StyledThemeProvider,
} from 'styled-components/native'
import { StatusBar } from 'react-native'

import {
  ThemeMode,
  ThemeContextProps,
  ThemeProviderProps,
} from './theme.context.types'
import darkTheme from '../../config/theme/dark-theme.config'
import lightTheme from '../../config/theme/light-theme.config'

const ThemeContext = createContext<ThemeContextProps>({
  theme: ThemeMode.DARK,
  defaultTheme: darkTheme,
  toggleTheme: async () => {},
})

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ThemeMode>(ThemeMode.DARK)

  const toggleTheme = useCallback(async () => {
    const updatedTheme: ThemeMode =
      theme === ThemeMode.DARK ? ThemeMode.LIGHT : ThemeMode.DARK

    try {
      await AsyncStorage.setItem('theme', updatedTheme)
      setTheme(updatedTheme)
    } catch {
      console.error('[ERROR]: Failed to update theme')
    }
  }, [theme])

  const getCurrentTheme = useCallback(async () => {
    try {
      const storedTheme: string | null = await AsyncStorage.getItem('theme')

      if (storedTheme) {
        setTheme(storedTheme as ThemeMode)
      }
    } catch (error) {
      console.error('[ERROR]: Failed to get current theme')
    }
  }, [])

  const defaultTheme: DefaultTheme = useMemo(
    () => (theme === ThemeMode.DARK ? darkTheme : lightTheme),
    [theme],
  )

  useEffect(() => {
    getCurrentTheme()
  }, [getCurrentTheme])

  return (
    <ThemeContext.Provider value={{ theme, defaultTheme, toggleTheme }}>
      <StyledThemeProvider theme={defaultTheme}>
        <StatusBar
          barStyle={defaultTheme.barStyle}
          backgroundColor={defaultTheme.color.background.normal}
        />
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => React.useContext(ThemeContext)
