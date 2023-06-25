import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import MainStack from './MainStack';

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default RootNavigator;
