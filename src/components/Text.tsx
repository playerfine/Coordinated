import React from "react";
import styled from "@emotion/styled";

import color, { Color } from "../theme/colors";
import font, { FontSize, FontWeight } from "../theme/fonts";

interface TextProps {
  fontSize?: FontSize;
  fontWeight?: FontWeight;
  color?: Color;
}

const Text: React.FC<TextProps> = (props) => {
  const StyledText = styled.p((props: TextProps) => ({
    fontSize: font.fontSizes[props.fontSize || "medium"],
    fontWeight: font.fontWeights[props.fontWeight || "medium"],
    color: color.colors[props.color || "regular"],
  }));
  return <StyledText {...props}>{props.children}</StyledText>;
};

export default Text;
