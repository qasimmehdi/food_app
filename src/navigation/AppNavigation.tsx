import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import TabNavigation from './TabNavigation';

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
}
