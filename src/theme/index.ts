import {colors} from './Colors';
import {space, spaceNumbers} from './Space';
import {fontSizeNumbers} from './Typography';
import {DefaultTheme} from 'react-native-paper';

const lightTheme = {
  myOwnProperty: true,
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...colors.light,
  },
  space,
  spaceNumbers,
  fontSizeNumbers,
  roundness: 2,
};
const darkTheme = {
  myOwnProperty: true,
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...colors.dark,
  },

  space,
  spaceNumbers,
  fontSizeNumbers,
};

export {lightTheme, darkTheme};
