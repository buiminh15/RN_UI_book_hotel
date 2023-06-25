import React, {useState} from 'react';
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {s, vs} from 'react-native-size-matters';
import {
  ExploreItem,
  ListHeaderComponent,
  OverlayIcon,
  Text,
  TextInput,
} from '../components';
import {COLORS, DATAS, SIZES} from '../constants';
import images from '../constants/images';
import {commonStyles} from '../styles/commonStyles';
import {ExploreItemType} from '../types';

const renderItem = ({item}: {item: ExploreItemType}) => {
  return <ExploreItem item={item} />;
};

const renderMainList = (data: ExploreItemType[]) => {
  return (
    <View style={[commonStyles.gap]}>
      <View
        style={[
          commonStyles.row,
          commonStyles.justifyBetween,
          commonStyles.itemsCenter,
        ]}>
        <Text textBaseColorType="black" textBaseType="headingLg">
          Explore Place
        </Text>
        <TouchableOpacity>
          <Text textBaseColorType="primary" textBaseType="sm">
            View All
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        horizontal
        contentContainerStyle={{gap: s(SIZES.padding)}}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
      />
    </View>
  );
};

const HomeScreen = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <SafeAreaView style={[commonStyles.flex1]}>
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

      <View style={[styles.contentWrapper]}>
        <FlatList
          data={DATAS}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={ListHeaderComponent}
          keyExtractor={item => `list-${item.id}`}
          contentContainerStyle={{gap: s(SIZES.padding)}}
          renderItem={({item}) => renderMainList(item.data)}
          ListFooterComponent={<View style={[styles.footer]} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  banner: {
    height: vs(SIZES.height / 3),
    width: SIZES.width,
    borderRadius: 0,
    paddingHorizontal: s(SIZES.padding / 2),
    paddingTop: vs(SIZES.padding),
    paddingBottom: vs(85),
  },
  contentWrapper: {
    borderTopRightRadius: s(SIZES.radius),
    borderTopLeftRadius: s(SIZES.radius),
    backgroundColor: COLORS.white,
    ...StyleSheet.absoluteFillObject,
    top: vs(SIZES.height / 4),
    paddingHorizontal: s(SIZES.padding / 2),
    paddingTop: s(SIZES.padding),
  },
  textInputContainer: {
    borderRadius: s(SIZES.base * 10),
    paddingHorizontal: s(SIZES.padding),
  },
  footer: {
    marginBottom: vs(SIZES.padding),
  },
});
