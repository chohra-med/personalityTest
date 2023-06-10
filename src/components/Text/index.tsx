import styled from 'styled-components/native'
import * as React from 'react'
import { TextProps } from 'react-native'
import {
  ColorProps,
  LayoutProps,
  SpaceProps,
  TypographyProps,
  color,
  layout,
  space,
  typography,
} from 'styled-system'
import { useAppTheme } from '../../containers/AppThemeProvider'

export interface StyledTextProps
  extends ColorProps,
  TextProps,
  SpaceProps,
  TypographyProps,
  LayoutProps {
  children: React.ReactNode
  testID?: string
}
export const StyledText = styled.Text<StyledTextProps>`
  ${typography}
  ${space}
  ${color}
  ${layout}
`

export const ScreenTitle: React.FC<StyledTextProps> = ({
  children,
  ...props
}) => {
  const theme = useAppTheme()
  console.log({ bodyLarge: theme?.fonts.bodyMedium })
  return (
    <StyledText
      textAlign="left"
      color={theme?.colors.tertiary}
      marginLeft="l"
      marginBottom="m"
      {...theme?.fonts.headlineLarge}

      {...props}
    >
      {children}
    </StyledText>
  )
}

export const SectionTitle: React.FC<StyledTextProps> = ({
  children,
  ...props
}) => {
  const theme = useAppTheme()

  return (
    <StyledText
      textAlign="left"
      color={theme?.colors.onBackground}
      marginLeft="l"
      marginBottom="m"
      {...theme?.fonts.titleMedium}
      {...props}
    >
      {children}
    </StyledText>
  )
}

export const SectionText: React.FC<StyledTextProps> = ({
  children,
  ...props
}) => {
  const theme = useAppTheme()
  return (
    <StyledText
      textAlign="left"
      color={theme?.colors.onPrimary}
      marginLeft="l"
      marginBottom="m"
      {...theme?.fonts.labelMedium}
      {...props}
    >
      {children}
    </StyledText>
  )
}

export const ToastTitle: React.FC<StyledTextProps> = ({
  children,
  ...props
}) => {
  const theme = useAppTheme()
  return (
    <StyledText
      textAlign="left"
      color={theme?.colors.tertiary}
      {...theme?.fonts.titleMedium}

      {...props}
    >
      {children}
    </StyledText>
  )
}
