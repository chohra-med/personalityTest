import React from 'react'
import {
  MD3Theme as NavigationDefaultTheme,
  Provider as PaperProvider
} from 'react-native-paper'
import { useSelector } from 'react-redux'
import { ThemeProvider, DefaultTheme as StyledDefaultTheme, } from 'styled-components/native'
import appConfigSelectors from '~/redux/appConfig/appConfigSelectors'

// import merge from 'deepmerge';

// const CombinedDefaultTheme = merge(StyledDefaultTheme, NavigationDefaultTheme);



import { fontMap } from '~/theme/Typography'
import { lightTheme, darkTheme } from '~/theme/index'


type Theme = StyledDefaultTheme


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
  const fonts = fontMap.ltr;
  // isDarkTheme, should be the boolean for dark theme
  const isDarkTheme: boolean = useSelector(appConfigSelectors.isDarkMode)



  const themeColor = isDarkTheme ? darkTheme : lightTheme
  const colorAppTheme: Theme = { ...themeColor, fonts }

  return (
    <ThemeProvider theme={colorAppTheme}>
      <PaperProvider theme={colorAppTheme}>{children}</PaperProvider>
    </ThemeProvider>
  )
}
