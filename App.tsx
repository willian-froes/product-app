import React from 'react'
import { SafeAreaView } from 'react-native'

import { ThemeProvider } from './src/context/theme/theme.context'
import { ProductsView } from './src/view/Products/products.view'

const App: () => React.JSX.Element = () => (
  <SafeAreaView>
    <ThemeProvider>
      <ProductsView />
    </ThemeProvider>
  </SafeAreaView>
)

export default App
