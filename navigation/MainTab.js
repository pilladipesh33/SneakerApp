import React, {useState, useEffect} from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';
import {StyleSheet} from 'react-native'
import Profile from '../screens/Profile';
import Dashboard from '../screens/Dashboard';

const Tab = createMaterialBottomTabNavigator();

const MainTab = () => {
  const theme = useSelector(state => state.theme);
  const [mode, setMode] = useState(theme.mode);

  useEffect(() => {
    setMode(theme.mode);
  }, [theme]);

  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      activeColor={mode=='light' ? 'black' : 'white'}
      barStyle={mode=='light' ? styles.bgColor_light : styles.bgColor_dark}
      >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <MaterialCommunityIcons name="home" color={'#B9345A'} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="face-man-profile"
              color={'#B9345A'}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTab;

const styles = StyleSheet.create({
  bgColor_light: {
    backgroundColor: 'white',
  },
  bgColor_dark: {
    backgroundColor: '#121212',
  }
})