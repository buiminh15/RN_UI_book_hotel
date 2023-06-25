import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import {s} from 'react-native-size-matters';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS, SIZES} from '../constants';
import {commonStyles} from '../styles/commonStyles';

type OverlayIconProps = TouchableOpacityProps & {
  iconName: string;
  size?: number;
  color?: string;
};

const OverlayIcon = (props: OverlayIconProps) => {
  const {iconName, size, color, ...otherProps} = props;
  return (
    <View style={[]}>
      <View style={[styles.bellContainer]} />
      <TouchableOpacity
        style={[
          styles.iconContainer,
          commonStyles.justifyCenter,
          commonStyles.itemsCenter,
        ]}
        {...otherProps}>
        <MaterialCommunityIcons
          name={iconName}
          color={color || COLORS.white}
          size={size || 24}
        />
      </TouchableOpacity>
    </View>
  );
};

export default OverlayIcon;

const styles = StyleSheet.create({
  bellContainer: {
    height: s(40),
    width: s(40),
    backgroundColor: 'white',
    opacity: 0.4,
    borderRadius: s(SIZES.base),
  },
  iconContainer: {
    ...StyleSheet.absoluteFillObject,
  },
});
