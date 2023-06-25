import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {s, vs} from 'react-native-size-matters';
import {Button, ImageC, Text} from '../components';
import {SIZES} from '../constants';
import images from '../constants/images';
import {commonStyles} from '../styles/commonStyles';
import {MainStackParamList} from '../types/navigation';

const OnBoardScreen = ({
  navigation,
}: NativeStackScreenProps<MainStackParamList, 'MainScreen'>) => {
  return (
    <SafeAreaView style={[commonStyles.flex1]}>
      <View style={[styles.rotate, commonStyles.gap]}>
        <View
          style={[
            commonStyles.row,
            commonStyles.justifyCenter,
            commonStyles.gap,
          ]}>
          <ImageC source={images.plant1} />
          <ImageC source={images.plant5} />
        </View>
        <View
          style={[
            commonStyles.row,
            commonStyles.justifyCenter,
            commonStyles.gap,
          ]}>
          <ImageC source={images.plant1} />
          <ImageC source={images.plant6} />
          <ImageC source={images.plant5} />
        </View>
        <View
          style={[
            commonStyles.row,
            commonStyles.justifyCenter,
            commonStyles.gap,
          ]}>
          <ImageC source={images.plant1} />
          <ImageC source={images.plant5} />
        </View>
      </View>

      <View
        style={[
          commonStyles.flex1,
          styles.container,
          commonStyles.justifyBetween,
        ]}>
        <View style={[commonStyles.gap, commonStyles.paddingHorizontal]}>
          <Text textBaseColorType="black" textBaseType="headingLg" textCenter>
            Let’s Find Your Sweet & Dream Place
          </Text>
          <Text textBaseColorType="gray" textBaseType="sm" textCenter>
            Get the opportunity to stay that you dream of at an affordable price
          </Text>
        </View>
        <Button
          title="Let's go"
          textBaseType="lg"
          onPress={() => {
            navigation.navigate('MainScreen');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default OnBoardScreen;

const styles = StyleSheet.create({
  rotate: {
    transform: [{rotate: '-45deg'}],
    top: vs(60),
  },
  container: {
    marginTop: vs(100),
    paddingHorizontal: s(SIZES.padding),
    paddingVertical: vs(SIZES.padding),
  },
});
