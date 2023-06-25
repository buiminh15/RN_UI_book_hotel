import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {s} from 'react-native-size-matters';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS, SIZES} from '../constants';
import images from '../constants/images';
import {commonStyles} from '../styles/commonStyles';
import {NearYouItemType} from '../types';
import ImageC from './common/ImageC';
import Text from './common/Text';

const NearYouItem = ({item}: {item: NearYouItemType}) => {
  return (
    <TouchableOpacity style={[commonStyles.hidden]}>
      <ImageC sizeType="rect" source={images.plant1} />
      <View style={[styles.cardNearYou]}>
        <Text
          style={[commonStyles.textShadow]}
          numberOfLines={1}
          textBaseColorType="white"
          textBaseType="headingMd">
          {item.resortName}
        </Text>
        <Text
          numberOfLines={1}
          textBaseColorType="white"
          textBaseType="sm"
          style={[commonStyles.textShadow]}>
          {item.location}
        </Text>
        <View
          style={[
            commonStyles.row,
            commonStyles.itemsCenter,
            commonStyles.justifyBetween,
          ]}>
          <Text
            numberOfLines={1}
            textBaseColorType="white"
            textBaseType="sm"
            style={[commonStyles.textShadow]}>
            ${item.pricePerNight}/night
          </Text>
          <View
            style={[
              commonStyles.row,
              commonStyles.itemsCenter,
              commonStyles.gapSm,
            ]}>
            <MaterialCommunityIcons
              name="star"
              color={COLORS.primary}
              size={22}
            />
            <Text
              style={[commonStyles.textShadow]}
              numberOfLines={1}
              textBaseColorType="white"
              textBaseType="sm">
              {item.star}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default NearYouItem;

const styles = StyleSheet.create({
  cardNearYou: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '40%',
    padding: s(SIZES.padding / 2),
  },
});
