import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';


export enum AppScreens {
    TABBED_APP = 'TabbedApp',
    BOOK_LIST = 'BookList',
    BOOK_SCREEN = 'BookScreen',
}

export type AppScreensParamList = {
    [AppScreens.TABBED_APP]: undefined;
    [AppScreens.BOOK_LIST]: undefined;
    [AppScreens.BOOK_SCREEN]: { bookId: string };
};

export type AppScreenProps<T extends AppScreens> = {
    navigation: StackNavigationProp<AppScreensParamList, T>;
    route: RouteProp<AppScreensParamList, T>;
};
export default AppScreens;
