import {View} from 'react-native';
import React from 'react';
import {commonStyles} from '../styles/commonStyles';
import Text, {TextBaseProps} from './common/Text';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../constants';

type IconTextProps = TextBaseProps & {
  iconName: string;
  textName: string;
  color?: string;
  size?: number;
};

const IconText = (props: IconTextProps) => {
  const {iconName, color, size, textName, ...otherProps} = props;
  return (
    <View
      style={[
        commonStyles.row,
        commonStyles.itemsCenter,
        commonStyles.gapSm,
        commonStyles.flex1,
      ]}>
      <MaterialCommunityIcons
        name={iconName}
        color={color || COLORS.primary}
        size={size || 24}
      />
      <Text {...otherProps}>{textName}</Text>
    </View>
  );
};

type ServiceCProps = TextBaseProps & {
  textName1: string;
  textName2: string;
  iconName?: string;
};

const ServiceC = (props: ServiceCProps) => {
  const {
    iconName = 'check-circle',
    textName1,
    textName2,
    ...otherProps
  } = props;
  return (
    <View style={[commonStyles.row, commonStyles.itemsCenter]}>
      <IconText iconName={iconName} textName={textName1} {...otherProps} />
      <IconText iconName={iconName} textName={textName2} {...otherProps} />
    </View>
  );
};

export default ServiceC;
