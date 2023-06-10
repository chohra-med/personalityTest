import React from 'react'
import {
  Provider as PaperProvider,
  useTheme,
  configureFonts
} from 'react-native-paper'
import { MD3Typescale } from 'react-native-paper/lib/typescript/src/types'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components/native'
import appConfigSelectors from '~/redux/appConfig/appConfigSelectors'

import { fontMap } from '~/theme/Typography'
import { lightTheme, darkTheme } from '~/theme/index'



export type AppTheme = typeof lightTheme & MD3Typescale

export const useAppTheme = () => useTheme<AppTheme>();

interface AppThemeProviderProps {
  children: React.ReactNode

}

export const AppThemeProvider: React.FC<AppThemeProviderProps> = ({
  children,
}) => {

  // fonts const, should have the app Fonts
  const fonts = fontMap.ltr
  // isDarkTheme, should be the boolean for dark theme
  const isDarkTheme: boolean = useSelector(appConfigSelectors.isDarkMode)



  const theme = isDarkTheme ? darkTheme : lightTheme
  const AppTheme = { ...theme, fonts }

  return (
    <ThemeProvider theme={AppTheme}>
      <PaperProvider theme={AppTheme}>{children}</PaperProvider>
    </ThemeProvider>
  )
}
