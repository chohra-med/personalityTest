import {colors} from './Colors';
import screen from './Screens';
import {space, spaceNumbers} from './Space';
import {fontSizeNumbers} from './Typography';

const lightTheme = {
  space,
  spaceNumbers,
  fontSizeNumbers,
  colors: colors.light,
  screen,
};
const darkTheme = {
  space,
  spaceNumbers,
  fontSizeNumbers,
  colors: colors.dark,
  screen,
};


export  {lightTheme, darkTheme};;
