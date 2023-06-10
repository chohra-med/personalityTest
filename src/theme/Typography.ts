import {configureFonts} from 'react-native-paper';
import {MD3Typescale} from 'react-native-paper/lib/typescript/src/types';
import adjustSize from '~/utils/helpers/adjustSize';

const allFonts = {
  regular: 'Roboto-Regular',
  bold: 'Roboto-Bold',
};

type LanguagesWithFonts = 'Arabic' | 'ltr';

const ltrFonts: MD3Typescale = {
  displayLarge: {
    fontFamily: allFonts.bold,
    letterSpacing: 0,
    fontWeight: '400',
    lineHeight: 64,
    fontSize: adjustSize(57),
  },
  displayMedium: {
    fontFamily: allFonts.regular,
    letterSpacing: 0,
    fontWeight: '500',
    lineHeight: 52,
    fontSize: adjustSize(45),
  },
  displaySmall: {
    fontFamily: allFonts.regular,
    letterSpacing: 0,
    fontWeight: '400',
    lineHeight: 44,
    fontSize: adjustSize(36),
  },

  headlineLarge: {
    fontFamily: allFonts.bold,
    letterSpacing: 0,
    fontWeight: '400',
    lineHeight: 40,
    fontSize: adjustSize(32),
  },
  headlineMedium: {
    fontFamily: allFonts.regular,
    letterSpacing: 0,
    fontWeight: '400',
    lineHeight: 36,
    fontSize: adjustSize(28),
  },
  headlineSmall: {
    fontFamily: allFonts.regular,
    letterSpacing: 0,
    fontWeight: '400',
    lineHeight: 32,
    fontSize: adjustSize(24),
  },

  titleLarge: {
    fontFamily: allFonts.bold,
    letterSpacing: 0,
    fontWeight: '400',
    lineHeight: 28,
    fontSize: adjustSize(22),
  },
  titleMedium: {
    fontFamily: allFonts.regular,
    letterSpacing: 0,
    fontWeight: '500',
    lineHeight: 24,
    fontSize: adjustSize(16),
  },
  titleSmall: {
    fontFamily: allFonts.regular,
    fontWeight: '500',
    letterSpacing: 0,
    lineHeight: 20,
    fontSize: adjustSize(14),
  },

  labelLarge: {
    fontFamily: allFonts.bold,
    fontWeight: '500',
    letterSpacing: 0,
    lineHeight: 20,
    fontSize: adjustSize(14),
  },
  labelMedium: {
    fontFamily: allFonts.regular,
    fontWeight: '500',
    letterSpacing: 0,
    lineHeight: 16,
    fontSize: adjustSize(12),
  },
  labelSmall: {
    fontFamily: allFonts.regular,
    fontWeight: '500',
    letterSpacing: 0,
    lineHeight: 16,
    fontSize: adjustSize(11),
  },

  bodyLarge: {
    fontFamily: allFonts.bold,
    letterSpacing: 0,
    fontWeight: '400',
    lineHeight: 24,
    fontSize: adjustSize(16),
  },
  bodyMedium: {
    fontFamily: allFonts.regular,
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: 20,
    fontSize: adjustSize(14),
  },
  bodySmall: {
    fontFamily: allFonts.regular,
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: 16,
    fontSize: adjustSize(12),
  },

  default: {
    fontFamily: allFonts.regular,
    letterSpacing: 0,
    fontWeight: '400',
  },
};

const m3dArabicType = configureFonts({
  config: {
    fontFamily: allFonts.regular,
    letterSpacing: 0,
  },
});

const fontMap: Record<LanguagesWithFonts, MD3Typescale> = {
  ltr: ltrFonts,
  Arabic: m3dArabicType,
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
