import React, { useCallback, useState } from 'react'
import { ButtonProps, Button as RNPaperButton } from 'react-native-paper'
import { SectionText } from '../Text'
import { debounce } from 'lodash'

export type ButtonMode =
  | 'text'
  | 'outlined'
  | 'contained'
  | 'elevated'
  | 'contained-tonal'

export type StyledButtonProps = {
  onPress?: () => void
  title?: string
  disabled?: boolean
  mode?: ButtonMode
}

//@TODO:  fix icon type in Button

const Button: React.FC<StyledButtonProps & Partial<Omit<ButtonProps, 'onPress' & 'mode' & 'disabled'>>> = ({
  title = '',
  onPress,
  mode = 'text',
  children,
  disabled,
  ...rest
}) => {
  const [loading, setLoading] = useState(false)




  const handleOnpress = useCallback(() => {
    if (onPress) {
      setLoading(true);
      debounce(onPress, 300)
      setLoading(false);
    }
  }, [onPress]);


  return (
    <RNPaperButton
      labelStyle={mode === 'text' && { textDecorationLine: 'underline' }}
      mode={mode}
      loading={loading}
      onPress={disabled || loading ? () => { } : handleOnpress}

      {...rest}
    >
      {children}
      <SectionText>{title}</SectionText>
    </RNPaperButton>
  )
}

export default Button
