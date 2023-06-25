import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  BookingScreen,
  HomeScreen,
  ProfileScreen,
  WatchListScreen,
} from '../screens';

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Booking" component={BookingScreen} />
      <Tab.Screen name="WatchList" component={WatchListScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
