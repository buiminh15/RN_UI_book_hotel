import {
  View,
  TextInput as DefaultTextInput,
  TextInputProps,
  ViewStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../constants';
import {commonStyles} from '../../styles/commonStyles';
type CustomTextInputProps = TouchableOpacityProps &
  TextInputProps & {
    containerStyle?: ViewStyle;
    iconName?: string;
    iconColor?: string;
    iconSize?: number;
  };

const TextInput = (props: CustomTextInputProps) => {
  const {containerStyle, iconName, iconColor, iconSize, ...otherProps} = props;
  return (
    <View
      style={[
        commonStyles.row,
        commonStyles.itemsCenter,
        commonStyles.justifyBetween,
        commonStyles.bgWhite,
        containerStyle,
      ]}>
      <DefaultTextInput {...otherProps} />
      {iconName && (
        <TouchableOpacity {...otherProps}>
          <MaterialCommunityIcons
            name={iconName}
            color={iconColor || COLORS.white}
            size={iconSize || 24}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TextInput;
