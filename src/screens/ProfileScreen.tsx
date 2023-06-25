import React from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {s, vs} from 'react-native-size-matters';
import {ExploreItem, ListHeaderComponentProfile, Text} from '../components';
import {COLORS, DATAS, SIZES} from '../constants';
import {commonStyles} from '../styles/commonStyles';
import {ExploreItemType} from '../types';

const renderItem = ({item}: {item: ExploreItemType}) => {
  return <ExploreItem item={item} />;
};

const renderMainList = (data: ExploreItemType[], index: number) => {
  return (
    <View
      style={[
        commonStyles.gap,
        commonStyles.bgWhite,
        styles.paddingCommon,
        styles.wrapper,
        !index && styles.mt,
      ]}>
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

const ProfileScreen = () => {
  return (
    <SafeAreaView style={[commonStyles.flex1, commonStyles.bgWhite]}>
      <FlatList
        data={DATAS}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={ListHeaderComponentProfile}
        keyExtractor={item => `list-${item.id}`}
        renderItem={({item, index}) => renderMainList(item.data, index)}
        ListFooterComponent={<View style={[styles.footer]} />}
      />
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  contentWrapper: {
    borderTopRightRadius: s(SIZES.radius),
    borderTopLeftRadius: s(SIZES.radius),
    backgroundColor: COLORS.white,
  },
  textInputContainer: {
    borderRadius: s(SIZES.base * 10),
    paddingHorizontal: s(SIZES.padding),
  },
  footer: {
    marginBottom: vs(SIZES.padding),
  },
  paddingCommon: {
    padding: s(SIZES.padding / 2),
  },
  wrapper: {
    borderTopLeftRadius: s(SIZES.radius),
    borderTopRightRadius: s(SIZES.radius),
  },
  mb: {
    marginBottom: vs(SIZES.padding),
  },
  mt: {
    marginTop: vs(-20),
  },
});
