import 'react-native-gesture-handler'
import { Provider } from 'react-redux'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider as PaperProvider } from 'react-native-paper'
import { PersistGate } from 'redux-persist/integration/react'
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'

import { AppThemeProvider } from './src/containers/AppThemeProvider'
import Navigation from './src/navigation'
import { store, persistor } from './src/redux/store'
import LanguageHelper from './src/containers/LanguageHelper'
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <AppThemeProvider>
            <PaperProvider>
              <LanguageHelper />
              <Navigation />
            </PaperProvider>
          </AppThemeProvider>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  )
  // }
}

export default gestureHandlerRootHOC(App)
