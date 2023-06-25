import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {DetailHotelScreen, OnBoardScreen} from '../screens';
import BottomTabNavigator from './BottomTabNavigator';
import {MainStackParamList} from '../types/navigation';

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="OnBoard"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="OnBoard" component={OnBoardScreen} />
      <Stack.Screen name="MainScreen" component={BottomTabNavigator} />
      <Stack.Screen name="DetailHotel" component={DetailHotelScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
