import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import AppNavigation from './src/navigation/AppNavigation';

const App = () => {
  const saferAreaStyle = {
    backgroundColor: '#F2F2F2',
    flex: 1,
  };

  return (
    <SafeAreaView style={saferAreaStyle}>
      <StatusBar barStyle={'dark-content'} backgroundColor="#F2F2F2" />

      <AppNavigation />
    </SafeAreaView>
  );
};

export default App;
