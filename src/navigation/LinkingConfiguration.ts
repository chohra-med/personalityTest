import {LinkingOptions} from '@react-navigation/native';
import AppScreens from './AppNavigation/AppScreens';

const LinkingConfiguration: LinkingOptions<{}> = {
  prefixes: ['ebookList://'],
  config: {
    screens: {
      initialRouteName: 'Home',
      [AppScreens.BOOK_LIST]: {
        path: 'home',
      },
      [AppScreens.BOOK_SCREEN]: {
        path: 'book/:bookId'
      }
    },
  },
};
export default LinkingConfiguration;
