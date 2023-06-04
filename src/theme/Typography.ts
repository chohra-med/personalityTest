import adjustSize from "~/utils/helpers/adjustSize";

const allFonts = {
  ROBOTO_REGULAR: 'Roboto-Regular',
  ROBOTO_BOLD: 'Roboto-SemiBold',
};

export interface IFontGroup {
  regular: string;
  bold: string;
}
type LanguagesWithFonts = 'Arabic' | 'ltr';

const fontMap: Record<LanguagesWithFonts, IFontGroup> = {
  ltr: {
    regular: allFonts.ROBOTO_REGULAR,
    bold: allFonts.ROBOTO_BOLD,
  },
  Arabic: {
    regular: 'standard',
    bold: 'standard',
  },
};

type ValidSpaceKeys = number | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';

const fontSizeNumbers: {[K in ValidSpaceKeys]: number} = {
  xs: adjustSize(11),
  s: adjustSize(14),
  m: adjustSize(16),
  l: adjustSize(18),
  xl: adjustSize(22),
  xxl: adjustSize(30),
};

export {allFonts, fontSizeNumbers, fontMap};