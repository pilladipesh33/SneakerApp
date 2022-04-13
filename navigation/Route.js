import React from 'react';
import {StatusBar, View} from 'react-native';
import {useSelector} from 'react-redux';
import { AuthNav } from './AuthNav';
import HomeNav from './HomeNav';


export const RootNavigation = () => {
  const accessToken = useSelector(state => state?.auth?.accessToken);
  console.log(accessToken);

  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <StatusBar translucent backgroundColor="transparent" />
      {accessToken == null || accessToken == undefined || accessToken == '' ? (
        <AuthNav />
      ) : (
        <HomeNav />
      )}
    </View>
  );
};
