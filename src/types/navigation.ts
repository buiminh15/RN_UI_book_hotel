import {NearYouItemType} from '.';

export type MainStackParamList = {
  OnBoard: undefined;
  MainScreen: undefined;
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
