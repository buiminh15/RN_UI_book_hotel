import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type MainStackParamList = {
  OnBoard: undefined;
  MainScreen: undefined;
};

export type OnBoardScreenNavigationProp = NativeStackNavigationProp<
  MainStackParamList,
  'MainScreen'
>;
