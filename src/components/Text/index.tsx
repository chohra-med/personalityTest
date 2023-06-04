import * as React from 'react';
import { ColorValue, StyleProp, Text, TextStyle } from 'react-native';
import { allFonts } from '~/theme/Typography';
import adjustSize from '~/utils/helpers/adjustSize';
import styled from 'styled-components/native';



interface StyledTextProps {
  h1?: boolean,
  h2?: boolean,
  h3?: boolean,
  h4?: boolean,
  h5?: boolean,
  p?: boolean,
  small?: boolean,
  bold?: boolean,
  italic?: boolean,
  title?: string,
  primary?: boolean,
  secondary?: boolean,
  primaryBold?: boolean,
  textColor?: ColorValue,
  style?: StyleProp<TextStyle>
}

const ThemedText = styled.Text`
color: ${({ theme }) =>
    theme.colors.text};
`;

const StyledText: React.FC<StyledTextProps> = ({
  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  bold,
  italic,
  title = '',
  style,
  primary,
  secondary,
  primaryBold,
  textColor,
  small,
  ...props
}) => (
  <ThemedText
    style={[
      h1 && { fontSize: adjustSize(48) },
      h2 && { fontSize: adjustSize(32) },
      h3 && { fontSize: adjustSize(20) },
      h4 && { fontSize: adjustSize(18) },
      h5 && { fontSize: adjustSize(16) },
      p && { fontSize: adjustSize(12) },
      small && { fontSize: adjustSize(10) },
      bold && { fontWeight: 'bold' },
      italic && { fontStyle: 'italic' },
      primary && { fontFamily: allFonts.ROBOTO_REGULAR },
      primaryBold && { fontFamily: allFonts.ROBOTO_BOLD },
      secondary && { fontFamily: allFonts.ROBOTO_REGULAR },
      !!textColor && { color: textColor },
      style,
    ]}
    {...props}>
    {title}
  </ThemedText>
);

export default StyledText;
