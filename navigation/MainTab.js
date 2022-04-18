import React, {useState, useEffect, useRef} from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {useSelector} from 'react-redux';
import {StyleSheet, View, Animated, Dimensions} from 'react-native';
import Profile from '../screens/Profile';
import Dashboard from '../screens/Dashboard';
import AntDesign from 'react-native-vector-icons/AntDesign';
import language from '../screens/language';

const Tab = createMaterialBottomTabNavigator();

function getWidth() {
  let width = Dimensions.get('window').width;
  width = width - 40;
  return width / 4;
}

const MainTab = () => {
  const theme = useSelector(state => state.theme);
  const [mode, setMode] = useState(theme.mode);

  useEffect(() => {
    setMode(theme.mode);
  }, [theme]);

  //Animated Tab indicator
  const tabOffsetValue = useRef(new Animated.Value(0)).current;

  return (
    <View style={{flex: 1}}>
      <Tab.Navigator
        initialRouteName="language"
        activeColor={mode == 'light' ? 'black' : 'white'}
        barStyle={mode == 'light' ? styles.bgColor_light : styles.bgColor_dark}>
        <Tab.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: () => (
              <AntDesign name="home" color={'#B9345A'} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: () => (
              <AntDesign name="user" color={'#B9345A'} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="language"
          component={language}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: () => (
              <AntDesign name="user" color={'#B9345A'} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
      <View style={styles.indicator}></View>
    </View>
  );
};
export default MainTab;

const styles = StyleSheet.create({
  bgColor_light: {
    backgroundColor: 'white',
  },
  bgColor_dark: {
    backgroundColor: '#121212',
  },
  indicator: {
    height: 2,
    width: getWidth() - 10,
    backgroundColor: 'red',
    position: 'absolute',
    bottom: 54,
    left: 70,
    borderRadius: 10,
  },
});
