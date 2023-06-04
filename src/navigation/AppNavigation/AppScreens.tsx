import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';


export enum AppScreens {
    HOME_SCREEN = 'Home_Screen',
}

export type AppScreensParamList = {
    [AppScreens.HOME_SCREEN]: undefined;
};

export type AppScreenProps<T extends AppScreens> = {
    navigation: StackNavigationProp<AppScreensParamList, T>;
    route: RouteProp<AppScreensParamList, T>;
};
export default AppScreens;
