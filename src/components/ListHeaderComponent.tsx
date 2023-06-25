import React from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {s} from 'react-native-size-matters';
import {HOTEL_NEAR_YOU, SIZES} from '../constants';
import {commonStyles} from '../styles/commonStyles';
import {NearYouItemType} from '../types';
import NearYouItem from './NearYouItem';
import Text from './common/Text';

const renderNearYou = ({item}: {item: NearYouItemType}) => (
  <NearYouItem item={item} />
);

const ListHeaderComponent = () => {
  return (
    <View style={[commonStyles.gap]}>
      <View
        style={[
          commonStyles.row,
          commonStyles.justifyBetween,
          commonStyles.itemsCenter,
        ]}>
        <Text textBaseColorType="black" textBaseType="headingLg">
          Hotel Near You
        </Text>
        <TouchableOpacity>
          <Text textBaseColorType="primary" textBaseType="sm">
            View All
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        contentContainerStyle={{gap: s(SIZES.padding)}}
        showsHorizontalScrollIndicator={false}
        data={HOTEL_NEAR_YOU}
        renderItem={renderNearYou}
      />
    </View>
  );
};

export default ListHeaderComponent;
