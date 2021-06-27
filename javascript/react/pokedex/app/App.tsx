/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { ReactNode } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigator from './navigation/HomeNavigation';

const App: () => ReactNode = () => { // tenho que me aprofundar nesse bando de atribuição kkkk
  return (
    <NavigationContainer>
      <HomeNavigator/>
    </NavigationContainer>
  )
} 

export default App