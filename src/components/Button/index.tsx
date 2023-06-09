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
  onPress: () => void
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
  disabled = false,
  ...rest
}) => {
  const [loading, setLoading] = useState(false)



  const handleOnPressDebouncer = useCallback(debounce(() => onPress(), 300), []);

  const handleOnpress = useCallback(() => {
    setLoading(true);
    handleOnPressDebouncer()
    setTimeout(() => {
      setLoading(false);
    }, 500);


  }, [onPress]);


  return (
    <RNPaperButton
      labelStyle={mode === 'text' && { textDecorationLine: 'underline' }}
      mode={mode}
      loading={loading}
      onPress={handleOnpress}

      {...rest}
    >
      {children}
      <SectionText>{title}</SectionText>
    </RNPaperButton>
  )
}

export default Button
