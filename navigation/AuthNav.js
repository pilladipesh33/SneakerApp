import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import ForgotPassword from '../screens/ForgotPassword';
import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createStackNavigator();

export const AuthNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        useNativeDriver: true,
        headerShown: false,
      }}
      initialRouteName={'Signup'}
      detachInactiveScreens={false}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
};
