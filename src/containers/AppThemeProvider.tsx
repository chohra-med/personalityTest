import React from 'react';
import { ThemeProvider } from 'styled-components/native';

import { fontMap } from '../theme/Typography';
import { lightTheme, darkTheme } from '~/theme/index';
import { useSelector } from 'react-redux';
import appConfigSelectors from '~/redux/appConfig/appConfigSelectors';
import { Provider as PaperProvider } from 'react-native-paper'

interface AppThemeProviderProps {
  children: React.ReactNode;
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


  const themeColor = isDarkTheme ? darkTheme : lightTheme;
  const colorAppTheme = { ...themeColor, fonts };

  return <ThemeProvider theme={colorAppTheme}>
    <PaperProvider theme={colorAppTheme}>{children}</PaperProvider>
  </ThemeProvider>

};
