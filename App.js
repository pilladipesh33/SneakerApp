import React,{useState} from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import configureStore from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import { RootNavigation } from './navigation/Route';

const {store, persistor} = configureStore();

const App = () => {
  return (
    <NavigationContainer >
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <RootNavigation/>
          </PersistGate>
        </Provider>
      </NavigationContainer>
  );
};

export default App;