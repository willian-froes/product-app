import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { ThemeProvider } from './src/context/theme/theme.context'
import {
  AuthenticatedStackScreens,
  UnauthenticatedStackScreens,
} from './src/config/stack-navigator/stack-navigator.config'

const ScreensProvider = () => {
  // const { isAuthenticated } = useUserContext()

  const resolveCurrentStack = () =>
    true ? <AuthenticatedStackScreens /> : <UnauthenticatedStackScreens />

  return resolveCurrentStack()
}

const App: () => React.JSX.Element = () => (
  <NavigationContainer>
    <ThemeProvider>
      <ScreensProvider />
    </ThemeProvider>
  </NavigationContainer>
)

export default App
