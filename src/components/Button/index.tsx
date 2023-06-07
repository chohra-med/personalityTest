import React, { useCallback } from 'react'
import { Button as RNPaperButton } from 'react-native-paper'

export type ButtonMode =
  | 'text'
  | 'outlined'
  | 'contained'
  | 'elevated'
  | 'contained-tonal'

export type ButtonProps = {
  onPress?: () => void
  title?: string
  mode?: ButtonMode
}

//@TODO:  fix icon type in Button

const Button: React.FC<ButtonProps> = ({
  title = '',
  onPress,
  mode = 'text',
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
      {title}
    </RNPaperButton>
  )
}

export default Button
