import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import AppScreens, { AppScreensParamList } from './AppScreens';
import HomeScreen from '~/screens/App/HomeScreen';

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

        </Stack.Navigator>
    );
};

export default AppNavigation;
