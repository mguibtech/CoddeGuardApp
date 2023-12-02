import React from 'react';
import {
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
} from 'react-native';

//font-size e lineHeigt

interface TextProps extends RNTextProps {
  preset?: TextVariants;
}

export function Text({
  children,
  preset = 'description',
  style,
  ...rest
}: TextProps) {
  return (
    <RNText style={[style, $fontSizes[preset]]} {...rest}>
      {children}
    </RNText>
  );
}

type TextVariants =
  | 'heading'
  | 'headingLarge'
  | 'titleButton'
  | 'labelText'
  | 'heading'
  | 'description'
  | 'heading'
  | 'information';

const $fontSizes: Record<TextVariants, TextStyle> = {
  heading: {fontSize: 24, lineHeight: 29.05},
  headingLarge: {fontSize: 24.35, lineHeight: 30.68},

  titleButton: {fontSize: 16, lineHeight: 20.16},
  labelText: {fontSize: 14, lineHeight: 16.94},
  description: {fontSize: 14, lineHeight: 12.6},

  information: {fontSize: 13, lineHeight: 16.38},
};
