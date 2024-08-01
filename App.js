/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import MainNavigation from '@app/navigation/MainNavigation';

import { Provider } from 'react-redux';

import store from '@app/store';


function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <MainNavigation/>
      </SafeAreaView>
    </Provider>
  );
}


export default App;
