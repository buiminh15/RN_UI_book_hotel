import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {commonStyles} from '../styles/commonStyles';
import images from '../constants/images';
import ImageC from './common/ImageC';
import Text from './common/Text';
import {ExploreItemType} from '../types';
import {SIZES} from '../constants';
import {s} from 'react-native-size-matters';

const ExploreItem = ({item}: {item: ExploreItemType}) => {
  return (
    <TouchableOpacity style={[commonStyles.hidden]}>
      <ImageC sizeType="md" source={images.bannerBg} />
      <View
        style={[
          styles.cardNearYou,
          commonStyles.justifyCenter,
          commonStyles.itemsCenter,
        ]}>
        <Text
          style={[commonStyles.textShadow]}
          numberOfLines={1}
          textBaseColorType="white"
          textBaseType="headingMd">
          {item.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ExploreItem;

const styles = StyleSheet.create({
  cardNearYou: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '50%',
    padding: s(SIZES.padding / 2),
  },
});
