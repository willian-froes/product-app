import React from 'react'
import { SafeAreaView } from 'react-native'

import { ThemeProvider } from './src/context/theme/theme.context'

const App: () => React.JSX.Element = () => (
  <SafeAreaView>
    <ThemeProvider />
  </SafeAreaView>
)

export default App
