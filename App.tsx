import React from 'react'
import { SafeAreaView } from 'react-native'
import { ThemeProvider } from './src/context/theme/theme.context'
import { Main } from './src/pages/Main/Main.page'

const App: () => React.JSX.Element = () => (
  <SafeAreaView>
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  </SafeAreaView>
)

export default App
