import React from 'react';
import {Pressable, PressableProps, StyleSheet, TextStyle} from 'react-native';

import Text, {TextBaseProps} from './Text';
import {s, vs} from 'react-native-size-matters';
import {COLORS, SIZES} from '../../constants';

export type ButtonProps = TextBaseProps &
  PressableProps & {
    title: string;
    btnStyles?: PressableProps['style'];
    textStyle?: TextStyle;
    buttonType?: 'primary' | 'outline' | 'disabled';
  };

const Button = (props: ButtonProps) => {
  const {
    title,
    buttonType = 'primary',
    textStyle,
    textBaseType,
    textBaseColorType,
    ...pressableProps
  } = props;

  const container = [
    styles.baseButton,
    buttonType === 'primary' && styles.primaryButton,
    buttonType === 'outline' && styles.outlineButton,
    buttonType === 'disabled' && styles.disableButton,
  ];

  return (
    <Pressable {...pressableProps} style={container}>
      <Text
        textBaseType={textBaseType}
        textBaseColorType={textBaseColorType}
        style={[textStyle]}>
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  baseButton: {
    flexDirection: 'row',
    paddingVertical: vs(SIZES.body4 / 2),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.radius,
  },

  primaryButton: {
    backgroundColor: COLORS.primary,
  },
  disableButton: {
    backgroundColor: COLORS.gray,
  },
  outlineButton: {
    borderWidth: s(0.5),
    borderColor: COLORS.primary,
  },
});

export default Button;
