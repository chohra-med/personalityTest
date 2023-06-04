import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import AppScreens, { AppScreensParamList } from './AppScreens';
import HomeScreen from '~/screens/App/HomeScreen';
import PersonalityTestScreen from '~/screens/App/PersonalityTestScreen';

const Stack = createStackNavigator<AppScreensParamList>();
const options = {
    animationEnabled: true,
    headerShown: false,
};

const AppNavigation = () => {
    return (
        <Stack.Navigator initialRouteName={AppScreens.HOME_SCREEN}>
            <Stack.Screen
                name={AppScreens.HOME_SCREEN}
                component={HomeScreen}
                options={options}
            />
            <Stack.Screen
                name={AppScreens.PERSONALITY_TEST_SCREEN}
                component={PersonalityTestScreen}
                options={options}
            />

        </Stack.Navigator>
    );
};

export default AppNavigation;
