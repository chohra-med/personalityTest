import { Dimensions } from 'react-native'

import adjustSize from '~/utils/helpers/adjustSize'
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')

type SpaceAlias =
  | 'none'
  | 'xxxs'
  | 'xxs'
  | 'xs'
  | 's'
  | 'm'
  | 'l'
  | 'xl'
  | 'xxl'
  | 'xxxl'
  | 'xxxxl'
  | 'xxxxxl'
  | 'screenWidth'
  | 'screenHeight'
type ValidSpaceKeys = number | SpaceAlias

const space: { [K in ValidSpaceKeys]: string } = {
  none: '0px',
  xxxs: `${adjustSize(2)}px`,
  xxs: `${adjustSize(4)}px`,
  xs: `${adjustSize(6)}px`,
  s: `${adjustSize(8)}px`,
  m: `${adjustSize(10)}px`,
  l: `${adjustSize(16)}px`,
  xl: `${adjustSize(20)}px`,
  xxl: `${adjustSize(24)}px`,
  xxxl: `${adjustSize(32)}px`,
  xxxxl: `${adjustSize(40)}px`,
  xxxxxl: `${adjustSize(44)}px`,
  screenWidth: `${SCREEN_WIDTH}px`,
  screenHeight: `${SCREEN_HEIGHT}px`,
}

const spaceNumbers: { [K in ValidSpaceKeys]: number } = {
  none: 0,
  xxxs: 2,
  xxs: adjustSize(4),
  xs: adjustSize(6),
  s: adjustSize(8),
  m: adjustSize(10),
  l: adjustSize(16),
  xl: adjustSize(20),
  xxl: adjustSize(24),
  xxxl: adjustSize(32),
  xxxxl: adjustSize(40),
  xxxxxl: adjustSize(44),
  screenWidth: SCREEN_WIDTH,
  screenHeight: SCREEN_HEIGHT,
}

export { space, spaceNumbers }
