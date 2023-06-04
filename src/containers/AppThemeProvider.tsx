import React from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components/native'
import appConfigSelectors from '~/redux/appConfig/appConfigSelectors'

import { fontMap } from '~/theme/Typography'
import { lightTheme, darkTheme } from '~/theme/index'

interface AppThemeProviderProps {
  children: React.ReactNode
}
/*
  This wrapper around our theme provider is very useful for dynamically updating our theme
  based on user interactions (e.g. changing language or dark-mode).
  This Stack Overflow answer provides a good example of how this component can be extended with React Context:
  https://stackoverflow.com/questions/65882833/styled-components-change-theme-dynamically
*/
export const AppThemeProvider: React.FC<AppThemeProviderProps> = ({
  children,
}) => {

  // fonts const, should have the app Fonts
  const allFonts = fontMap.ltr;
  // isDarkTheme, should be the boolean for dark theme
  const isDarkTheme: boolean = useSelector(appConfigSelectors.isDarkMode)



  const themeColor = isDarkTheme ? darkTheme : lightTheme
  const colorAppTheme = { ...themeColor, allFonts }

  return (
    <ThemeProvider theme={colorAppTheme}>
      <PaperProvider theme={colorAppTheme}>{children}</PaperProvider>
    </ThemeProvider>
  )
}
