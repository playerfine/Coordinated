/* eslint-disable react/require-default-props */
import React from 'react';
import styled from '@emotion/styled';

import color, { Color } from '../theme/colors';
import font, { FontSize, FontWeight } from '../theme/fonts';

interface TextProps {
  fontSize?: FontSize;
  fontWeight?: FontWeight;
  color?: Color;
  style?: React.CSSProperties;
}

const Text: React.FC<TextProps> = ({ style, children, ...props }) => {
  const StyledText = styled.span((styleProps: TextProps) => ({
    padding: '0px',
    margin: '0px',
    fontSize: font.fontSizes[styleProps.fontSize || 'medium'],
    fontWeight: font.fontWeights[styleProps.fontWeight || 'medium'],
    color: color[styleProps.color || 'regular'],
  }));
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <StyledText {...props} style={style}>
      {children}
    </StyledText>
  );
};

export default Text;
