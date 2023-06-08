import React, { useCallback, useMemo } from 'react';
import {
  I18nManager,
  StyleProp,
  TextInputProps as TextInputPropsRN,
  TextInput as TextInputRN,
  View,
  ViewStyle,
} from 'react-native';
import styled from 'styled-components/native';
import { debounce } from 'lodash';

import StyledText from '../Text';

interface TextInputProps extends TextInputPropsRN {
  style?: StyleProp<ViewStyle>;
  label?: string;
  error?: boolean;
  errorMessage?: string;
  icon?: React.ReactNode;
  onIconClick?: () => void;
  isPassword?: boolean;
  placeholder?: string;
  debouncingTime?: number;
}

interface TextInputProps extends TextInputPropsRN {
  style?: StyleProp<ViewStyle>;
  label?: string;
  error?: boolean;
  errorMessage?: string;
  icon?: React.ReactNode;
  onIconClick?: () => void;
  onChangeText: (text: string) => void;
  isPassword?: boolean;
  placeholder?: string;
}

const Container = styled(View)`
  position: relative;
`;

const Row = styled(View)`
  flex-direction: row;
`;

const Label = styled(StyledText) <Pick<TextInputProps, 'error'>>`
  color: ${({ error, theme }) =>
    error ? theme.colors.chCoral : theme.colors.chText};
`;

const StyledInput = styled(TextInputRN) <Pick<TextInputProps, 'error'>>`
  border-bottom-width: 1px;
  border-bottom-color: ${({ error, theme }) =>
    error ? theme.colors.chCoral : theme.colors.onError};
  width: 96%;
  padding-vertical: ${(props) => props.theme.space.s};
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSizeNumbers.s}px;
  font-family: ${(props) => props.theme.fonts.regular};
  text-align: ${I18nManager.isRTL ? 'right' : 'left'};
`;

const Icon = styled.TouchableOpacity``;

const ButtonContainer = styled(View)`
  width: 10%;
  justify-content: center;
  align-items: center;
`;

const ErrorMessage = styled(StyledText)`
  color: ${(props) => props.theme.colors.onError};
  text-align: left;
  margin-top: 28px;
`;

const TextInput = React.forwardRef<TextInputRN, TextInputProps>(
  (
    {
      label,
      error,
      errorMessage,
      icon,
      isPassword,
      onIconClick,
      placeholder,
      onChangeText,
      style = {},
      debouncingTime = 0,
      ...props
    },
    ref,
  ) => {
    const [passwordVisible, setPasswordVisible] = React.useState(false);

    const handleOnChangeTextDebouncer = useCallback(debounce(onChangeText, debouncingTime), []);


    const handleOnChangeText = (text: string) => {
      if (debouncingTime > 0) {
        handleOnChangeTextDebouncer(text);
      } else {
        onChangeText(text)
      }
    }


    const onIconPress = useCallback(() => {
      if (onIconClick) {
        onIconClick();
      }
      if (isPassword) {
        setPasswordVisible((previousValue) => !previousValue);
      }
    }, [setPasswordVisible, onIconClick, isPassword]);



    return (
      <Container style={style}>
        <Label error={error}>{label}</Label>
        <Row>
          <StyledInput
            ref={ref}
            onChangeText={handleOnChangeText}
            error={error}
            autoComplete={isPassword ? 'password' : undefined}
            secureTextEntry={isPassword && !passwordVisible}
            placeholder={placeholder}
            {...props}
            testID={props.testID || 'input.text'} // THis has to be below {...props} because styled-components seems to set testID to undefined by default
          />

        </Row>
        {errorMessage ? (
          <ErrorMessage testID={'text.error'}>{errorMessage}</ErrorMessage>
        ) : null}
      </Container>
    );
  },
);

export default TextInput;
