import styled from 'styled-components/native';
import {
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  border,
  color,
  compose,
  flexbox,
  layout,
  position,
  space,
} from 'styled-system';

export interface WrapperProps
  extends ColorProps,
    SpaceProps,
    LayoutProps,
    FlexboxProps,
    PositionProps,
    BorderProps {}

const Wrapper = styled.View<WrapperProps>`
  ${compose(color, space, flexbox, border, layout, position)}
`;

export default Wrapper;
