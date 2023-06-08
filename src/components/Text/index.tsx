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
import { useTheme } from 'styled-components'

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
  const theme = useTheme()
  return (
    <StyledText
      textAlign="left"
      fontFamily={theme?.fonts.bold}
      fontSize={theme?.fontSizeNumbers.s}
      color={theme?.colors.tertiary}
      marginLeft="l"
      marginBottom="m"
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
  const theme = useTheme()
  return (
    <StyledText
      textAlign="left"
      fontFamily={theme?.fonts.bold}
      fontWeight={600}
      fontSize={theme?.fontSizeNumbers.s}
      color={theme?.colors.tertiary}
      marginLeft="l"
      marginBottom="m"
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
  const theme = useTheme()
  return (
    <StyledText
      textAlign="left"
      fontFamily={theme?.fonts.regular}
      fontSize={theme?.fontSizeNumbers.xs}
      color={theme?.colors.tertiary}
      marginLeft="l"
      marginBottom="m"
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
  const theme = useTheme()
  return (
    <StyledText
      textAlign="left"
      fontFamily={theme?.fonts.bold}
      fontSize={theme?.fontSizeNumbers.xs}
      color={theme?.colors.tertiary}
      {...props}
    >
      {children}
    </StyledText>
  )
}
