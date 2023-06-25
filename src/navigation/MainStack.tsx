import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {OnBoardScreen} from '../screens';
import BottomTabNavigator from './BottomTabNavigator';
import {MainStackParamList} from '../types/navigation';

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="OnBoard" component={OnBoardScreen} />
      <Stack.Screen name="MainScreen" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
};

export default MainStack;
