import {} from 'styled-components';

import theme from './index';
import {IFontGroup} from './Typography';
import {AppTheme} from 'containers/AppThemeProvider';

declare module 'styled-components' {
  type Theme = AppTheme & {fonts: IFontGroup};
  export interface DefaultTheme extends Theme {}
}
