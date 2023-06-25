import {View, ImageBackground, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import images from '../constants/images';
import {commonStyles} from '../styles/commonStyles';
import Text from './common/Text';
import OverlayIcon from './OverlayIcon';
import TextInput from './common/TextInput';
import {COLORS, SIZES} from '../constants';
import {s, vs} from 'react-native-size-matters';

const ListHeaderComponentProfile = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <ImageBackground source={images.bannerBg} style={[styles.banner]}>
      <View style={[commonStyles.flex1, commonStyles.justifyBetween]}>
        <View
          style={[
            commonStyles.row,
            commonStyles.itemsCenter,
            commonStyles.justifyBetween,
          ]}>
          <View>
            <Text textBaseType="sm">Current Location</Text>
            <Text textBaseType="headingMd">Labuan Bajo, INA</Text>
          </View>
          <OverlayIcon iconName="bell" />
        </View>
        <TextInput
          containerStyle={styles.textInputContainer}
          placeholder="Look for homestay"
          iconName="text-search"
          defaultValue={searchText}
          onChangeText={setSearchText}
          iconColor={COLORS.gray}
        />
      </View>
    </ImageBackground>
  );
};

export default ListHeaderComponentProfile;

const styles = StyleSheet.create({
  banner: {
    height: vs(SIZES.height * 0.25),
    width: SIZES.width,
    borderRadius: 0,
    paddingHorizontal: s(SIZES.padding / 2),
    paddingTop: vs(SIZES.padding),
    paddingBottom: vs(SIZES.padding * 2),
  },
  textInputContainer: {
    borderRadius: s(SIZES.base * 10),
    paddingHorizontal: s(SIZES.padding),
  },
});
