import {MD3Typescale} from 'react-native-paper/lib/typescript/src/types';
import adjustSize from '~/utils/helpers/adjustSize';

const allFonts = {
  regular: 'Roboto-Regular',
  bold: 'Roboto-Bold',
};

export interface IFontGroup {
  regular: string;
  bold: string;
}
type LanguagesWithFonts = 'Arabic' | 'ltr';
const fontConfig = {
  regular: {
    fontFamily: allFonts.regular,
    fontWeight: 'normal',
  },
  medium: {
    fontFamily: allFonts.bold,
    fontWeight: 'normal',
  },
  light: {
    fontFamily: allFonts.regular,
    fontWeight: 'normal',
  },
  thin: {
    fontFamily: allFonts.regular,
    fontWeight: 'normal',
  },
};

const fontMap: Record<LanguagesWithFonts, IFontGroup> = {
  ltr: {
    regular: allFonts.regular,
    bold: allFonts.bold,
  },
  Arabic: {
    regular: 'standard',
    bold: 'standard',
  },
};

type ValidSpaceKeys = number | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
const fontSizes: {[K in ValidSpaceKeys]: string} = {
  xs: '11px',
  s: '14px',
  m: '16px',
  l: '18px',
  xl: '22px',
  xxl: '30px',
};
const fontSizeNumbers: {[K in ValidSpaceKeys]: number} = {
  xs: adjustSize(11),
  s: adjustSize(14),
  m: adjustSize(16),
  l: adjustSize(18),
  xl: adjustSize(22),
  xxl: adjustSize(30),
};

export {allFonts, fontSizes, fontConfig, fontSizeNumbers, fontMap};
