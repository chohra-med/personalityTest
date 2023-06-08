import React, { useCallback } from 'react'
import { ButtonProps, Button as RNPaperButton, Text } from 'react-native-paper'
import { SectionText } from '../Text'

export type ButtonMode =
  | 'text'
  | 'outlined'
  | 'contained'
  | 'elevated'
  | 'contained-tonal'

export type StyledButtonProps = {
  onPress?: () => void
  title?: string
  mode?: ButtonMode


}

//@TODO:  fix icon type in Button

const Button: React.FC<StyledButtonProps & Partial<Omit<ButtonProps, 'onPress' & 'mode'>>> = ({
  title = '',
  onPress,
  mode = 'text',
  children,
  ...rest
}) => {
  const onButtonPress = useCallback(() => {
    if (onPress) {
      onPress()
    }
  }, [onPress])

  return (
    <RNPaperButton
      labelStyle={mode === 'text' && { textDecorationLine: 'underline' }}
      mode={mode}
      onPress={onButtonPress}
      {...rest}
    >
      {children}
      <Text>{title}</Text>
    </RNPaperButton>
  )
}

export default Button
