import React from 'react';

import { SafeAreaView } from 'react-native';

import MainNavigation from '@app/navigation/MainNavigation';

import { Provider } from 'react-redux';

import Toast, {BaseToast, ErrorToast} from 'react-native-toast-message';

import store from '@app/store';


function App() {
  const toastConfig = {
    success: props => (
      <BaseToast
        {...props}
        text1NumberOfLines={2}
        position="top"
        autoHide= {true}
        visibilityTime= {8000}
        swipeable= {true}
        style={{borderLeftColor: '#882dc9', borderLeftWidth: 0}}
        contentContainerStyle={{
          backgroundColor: '#fff',
          borderRadius: 5,
          borderStyle: 'solid',
          borderColor: 'transparent',
          paddingHorizontal: 8,
          paddingVertical: 8,
        }}
        text1Style={{
          fontSize: 13,
          fontWeight: '400',
          color: '#222',
          fontFamily: 'Rubik-Regular',
        }}
      />
    ),
    error: props => (
      <ErrorToast
        {...props}
        text1NumberOfLines={2}
        position="top"
        autoHide= {true}
        visibilityTime= {8000}
        swipeable= {true}
        style={{borderLeftColor: '#eb445a', borderLeftWidth: 0}}
        contentContainerStyle={{
          backgroundColor: '#eb445a',
          borderRadius: 5,
          borderStyle: 'solid',
          borderColor: 'transparent',
          paddingHorizontal: 8,
          paddingVertical: 8,
        }}
        text1Style={{
          fontSize: 13,
          fontWeight: '400',
          color: '#ffffff',
          fontFamily: 'Rubik-Regular',
        }}
      />
    ),
  };
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1}}>
        <MainNavigation/>
        <Toast position="top" bottomOffset={20} config={toastConfig} />
      </SafeAreaView>
    </Provider>
  );
}


export default App;
