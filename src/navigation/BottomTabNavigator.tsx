import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {vs} from 'react-native-size-matters';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {SIZES} from '../constants';
import {
  BookingScreen,
  HomeScreen,
  ProfileScreen,
  WatchListScreen,
} from '../screens';
import {BottomTabNavigatorParamList} from '../types/navigation';

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

const BOTTOM_NAVS = [
  {
    id: 1,
    name: 'Home',
    component: HomeScreen,
    icon: ({color, size}: {color: string; size: number}) => (
      <MaterialCommunityIcons name="home" color={color} size={size} />
    ),
  },
  {
    id: 2,
    name: 'Booking',
    component: BookingScreen,
    icon: ({color, size}: {color: string; size: number}) => (
      <EntypoIcons name="location" color={color} size={size} />
    ),
  },
  {
    id: 3,
    name: 'WatchList',
    component: WatchListScreen,
    icon: ({color, size}: {color: string; size: number}) => (
      <MaterialCommunityIcons
        name="cards-heart-outline"
        color={color}
        size={size}
      />
    ),
  },
  {
    id: 4,
    name: 'Profile',
    component: ProfileScreen,
    icon: ({color, size}: {color: string; size: number}) => (
      <MaterialCommunityIcons name="account" color={color} size={size} />
    ),
  },
];

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: vs(SIZES.font * 5),
        },
        tabBarLabelStyle: {
          position: 'absolute',
          bottom: 10,
        },
        tabBarIconStyle: {
          color: 'red',
        },
      }}>
      {BOTTOM_NAVS.map(nav => (
        <Tab.Screen
          key={`bottom-nav-${nav.id}`}
          name={nav.name as any}
          component={nav.component}
          options={{
            tabBarLabel: nav.name,
            tabBarIcon: nav.icon,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
