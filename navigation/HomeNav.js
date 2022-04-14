import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainTab from './MainTab';
import Setting from '../screens/Setting';
import Details from '../screens/Details';
import EditProfile from '../components/EditProfile';

const Stack = createStackNavigator();

const HomeNav = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
          }}
        >
            <Stack.Screen name='MainTab' component={MainTab} />
            <Stack.Screen name='Setting' component={Setting} />
            <Stack.Screen name='Details' component={Details} />
            <Stack.Screen name='EditProfile' component={EditProfile} />
        </Stack.Navigator>
    );
};

export default HomeNav;
