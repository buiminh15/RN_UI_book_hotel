import {StyleSheet} from 'react-native';
import {s} from 'react-native-size-matters';
import {SIZES} from '../constants';

export const commonStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  justifyAround: {
    justifyContent: 'space-around',
  },
  justifyEvenly: {
    justifyContent: 'space-evenly',
  },
  itemsCenter: {
    alignItems: 'center',
  },
  flex1: {
    flex: 1,
  },
  gap: {
    gap: s(SIZES.font),
  },
  paddingHorizontal: {
    paddingHorizontal: s(SIZES.padding),
  },
  textCenter: {
    textAlign: 'center',
  },
});
