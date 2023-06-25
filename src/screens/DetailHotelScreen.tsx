import {
  View,
  ImageBackground,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {commonStyles} from '../styles/commonStyles';
import images from '../constants/images';
import {s, vs} from 'react-native-size-matters';
import {COLORS, SIZES} from '../constants';
import {Button, ImageC, OverlayIcon, Text} from '../components';
import ServiceC from '../components/ServiceC';
import {useNavigation} from '@react-navigation/native';

const DetailHotelScreen = () => {
  const navigation = useNavigation();
  const handleReserve = () => {
    Alert.alert('Reserve Successfully');
  };
  return (
    <SafeAreaView style={[commonStyles.flex1]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={images.bannerBg}
          style={[
            styles.imageContainer,
            styles.paddingCommon,
            commonStyles.justifyBetween,
          ]}
          imageStyle={[styles.radius]}>
          <View
            style={[
              commonStyles.row,
              commonStyles.itemsCenter,
              commonStyles.justifyBetween,
            ]}>
            <OverlayIcon
              iconName="chevron-left"
              size={32}
              onPress={() => navigation.goBack()}
            />
            <OverlayIcon iconName="cards-heart" color="red" />
          </View>
          <View style={[commonStyles.row, commonStyles.itemsEnd]}>
            <View style={[styles.textContainer, commonStyles.gap]}>
              <Text textBaseType="headingLg" style={[commonStyles.textShadow]}>
                Paradise Resort
              </Text>
              <Text
                textBaseColorType="lightGray"
                textBaseType="sm"
                style={[commonStyles.textShadow]}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam obcaecati ipsam sit pariatur repudiandae earum
              </Text>
            </View>
            <View style={[commonStyles.flex1]} />
            <View style={[commonStyles.flex1, commonStyles.gap]}>
              <ImageC
                source={images.plant1}
                sizeType="sm"
                roundedType="md"
                style={[styles.imgItem]}
              />
              <ImageC
                source={images.plant7}
                sizeType="sm"
                roundedType="md"
                style={[styles.imgItem]}
              />
              <ImageC
                source={images.plant5}
                sizeType="sm"
                roundedType="md"
                style={[styles.imgItem]}
              />
            </View>
          </View>
        </ImageBackground>
        <View
          style={[commonStyles.flex1, styles.paddingCommon, commonStyles.gap]}>
          <View>
            <Text textBaseColorType="black" textBaseType="headingMd">
              About Us
            </Text>
            <Text textBaseColorType="black" textBaseType="sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              laboriosam ea nisi sequi? Quidem accusantium, hic enim earum vel
              sapiente eum vero sint quas quia soluta laboriosam beatae ipsa
              necessitatibus?
            </Text>
          </View>

          <View style={[commonStyles.gap]}>
            <Text textBaseColorType="black" textBaseType="headingMd">
              Service & Facilities
            </Text>
            <View style={[commonStyles.gapSm]}>
              <ServiceC
                textName1="Swimming Pool"
                textName2="4 Rooms"
                textBaseColorType="gray"
                textBaseType="sm"
              />
              <ServiceC
                textName1="Parking Area"
                textName2="Bars"
                textBaseColorType="gray"
                textBaseType="sm"
              />
              <ServiceC
                textName1="Swimming Pool"
                textName2="4 Rooms"
                textBaseColorType="gray"
                textBaseType="sm"
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        style={[
          styles.footer,
          commonStyles.row,
          commonStyles.itemsCenter,
          commonStyles.justifyBetween,
        ]}>
        <View>
          <Text textBaseColorType="gray" textBaseType="sm">
            Price estimate
          </Text>
          <Text textBaseColorType="black" textBaseType="headingMd">
            $480/night
          </Text>
        </View>
        <Button
          btnStyles={[styles.btn]}
          title="Reserve Now"
          onPress={handleReserve}
        />
      </View>
    </SafeAreaView>
  );
};

export default DetailHotelScreen;

const styles = StyleSheet.create({
  imageContainer: {
    height: vs(SIZES.height * 0.5),
  },
  radius: {
    borderBottomLeftRadius: s(SIZES.radius),
    borderBottomRightRadius: s(SIZES.radius),
  },
  textContainer: {
    flex: 3,
  },
  imgItem: {
    borderColor: COLORS.white,
    borderWidth: s(2),
  },
  paddingCommon: {
    paddingHorizontal: vs(SIZES.padding / 2),
    paddingVertical: vs(SIZES.padding),
  },
  footer: {
    height: vs(SIZES.font * 5),
    paddingHorizontal: vs(SIZES.padding / 2),
    paddingTop: vs(SIZES.base),
    shadowColor: '#ccc',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  btn: {
    paddingHorizontal: s(SIZES.padding),
    paddingVertical: s(SIZES.base),
  },
});
