import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import AppScreens, { AppScreensParamList } from './AppScreens';
import BookList from '~/screens/BookList';
import BookScreen from '~/screens/BookScreen';

const Stack = createStackNavigator<AppScreensParamList>();
const options = {
    animationEnabled: true,
    headerShown: false,
};

const AppNavigation = () => {
    return (
        <Stack.Navigator initialRouteName={AppScreens.BOOK_LIST}>
            <Stack.Screen
                name={AppScreens.BOOK_LIST}
                component={BookList}
                options={options}
            />
            <Stack.Screen
                name={AppScreens.BOOK_SCREEN}
                component={BookScreen}
                options={options}
            />
        </Stack.Navigator>
    );
};

export default AppNavigation;
