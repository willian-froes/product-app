import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { ThemeProvider } from './src/context/theme/theme.context'
import {
  AuthenticatedStackScreens,
  UnauthenticatedStackScreens,
} from './src/config/stack-navigator/stack-navigator.config'
import { AuthProvider, useAuthContext } from './src/context/auth/auth.context'

const ScreensProvider = () => {
  const { isAuthenticated } = useAuthContext()

  const resolveCurrentStack = () =>
    isAuthenticated ? (
      <AuthenticatedStackScreens />
    ) : (
      <UnauthenticatedStackScreens />
    )

  return resolveCurrentStack()
}

const App: () => React.JSX.Element = () => (
  <NavigationContainer>
    <ThemeProvider>
      <AuthProvider>
        <ScreensProvider />
      </AuthProvider>
    </ThemeProvider>
  </NavigationContainer>
)

export default App
