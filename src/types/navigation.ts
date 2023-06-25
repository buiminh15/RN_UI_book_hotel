import {NavigatorScreenParams} from '@react-navigation/native';
import {NearYouItemType} from '.';

export type MainStackParamList = {
  OnBoard: undefined;
  MainScreen: NavigatorScreenParams<BottomTabNavigatorParamList>;
  DetailHotel: {
    item: NearYouItemType;
  };
};

export type BottomTabNavigatorParamList = {
  Home: undefined;
  Booking: undefined;
  WatchList: undefined;
  Profile: undefined;
};
