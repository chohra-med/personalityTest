import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';


export enum AppScreens {
    HOME_SCREEN = 'Home_Screen',
    PERSONALITY_TEST_SCREEN = 'Personality_Test_Screen',
}

export type AppScreensParamList = {
    [AppScreens.HOME_SCREEN]: undefined;
    [AppScreens.PERSONALITY_TEST_SCREEN]: undefined;
};

export type AppScreenProps<T extends AppScreens> = {
    navigation: StackNavigationProp<AppScreensParamList, T>;
    route: RouteProp<AppScreensParamList, T>;
};
export default AppScreens;
