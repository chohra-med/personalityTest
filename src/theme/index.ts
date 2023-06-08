import {colors} from './Colors';
import {space, spaceNumbers} from './Space';
import {fontSizeNumbers} from './Typography';
import {MD3LightTheme, MD3DarkTheme} from 'react-native-paper';

const lightTheme = {
  myOwnProperty: true,
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    ...colors.light,
  },
  space,
  spaceNumbers,
  fontSizeNumbers,
  roundness: 2,
};
const darkTheme = {
  myOwnProperty: true,
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    ...colors.dark,
  },
  space,
  spaceNumbers,
  fontSizeNumbers,
  roundness: 2,
};

export {lightTheme, darkTheme};
