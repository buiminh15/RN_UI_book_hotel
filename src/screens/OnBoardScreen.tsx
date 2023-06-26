import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, View, Animated} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {s, vs} from 'react-native-size-matters';
import {Button, ImageC, Text} from '../components';
import {COLORS, SIZES} from '../constants';
import images from '../constants/images';
import {commonStyles} from '../styles/commonStyles';
import {MainStackParamList} from '../types/navigation';

const ONBOARDING = [
  {
    id: 111,
    name: 'test 1',
  },
  {
    id: 222,
    name: 'test 2',
  },
  {
    id: 333,
    name: 'test 3',
  },
];

const OnBoardScreen = ({
  navigation,
}: NativeStackScreenProps<MainStackParamList>) => {
  const scrollX = new Animated.Value(0);

  const dotPosition = Animated.divide(scrollX, SIZES.width);

  return (
    <SafeAreaView style={[commonStyles.flex1]}>
      <Animated.ScrollView
        contentContainerStyle={[commonStyles.paddingHorizontal]}
        horizontal
        bounces
        decelerationRate={0}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToAlignment={'center'}
        scrollEnabled
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}>
        {ONBOARDING.map(el => (
          <View
            key={`onboard-${el.id}`}
            style={[commonStyles.paddingHorizontal]}>
            <View style={[styles.rotate, commonStyles.gap, styles.mb]}>
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
                commonStyles.gap,
                commonStyles.paddingHorizontal,
                styles.container,
              ]}>
              <Text
                textBaseColorType="black"
                textBaseType="headingLg"
                textCenter>
                Let’s Find Your Sweet & Dream Place {el.name}
              </Text>
              <Text textBaseColorType="gray" textBaseType="sm" textCenter>
                Get the opportunity to stay that you dream of at an affordable
                price
              </Text>
            </View>
          </View>
        ))}
      </Animated.ScrollView>

      <View
        style={[
          commonStyles.row,
          commonStyles.itemsCenter,
          commonStyles.justifyCenter,
          commonStyles.gap,
        ]}>
        {ONBOARDING.map((el, index) => {
          const dotSize = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [s(SIZES.base), s(SIZES.padding * 3), s(SIZES.base)],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={`dot-${el.id}`}
              style={[styles.dot, {width: dotSize, height: s(SIZES.base)}]}
            />
          );
        })}
      </View>
      <View style={[commonStyles.flex1, commonStyles.justifyEnd, styles.btn]}>
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
    marginTop: vs(200),
    paddingHorizontal: s(SIZES.padding),
    paddingVertical: vs(SIZES.padding),
    position: 'absolute',
    left: 40,
    right: 40,
    bottom: 0,
  },
  btn: {
    paddingHorizontal: s(SIZES.padding),
    paddingBottom: vs(SIZES.padding),
  },
  mb: {
    marginBottom: vs(100),
  },
  dot: {
    borderRadius: s(10),
    backgroundColor: COLORS.primary,
  },
});
