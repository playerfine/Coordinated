import React from "react";
import styled from "@emotion/styled";

import color, { Color } from "../theme/colors";
import font, { FontSize, FontWeight } from "../theme/fonts";

interface TextProps {
  fontSize?: FontSize;
  fontWeight?: FontWeight;
  color?: Color;
  style?: React.CSSProperties;
}

const Text: React.FC<TextProps> = (props) => {
  console.log(props.style);
  const StyledText = styled.span((props: TextProps) => ({
    padding: "0px",
    margin: "0px",
    fontSize: font.fontSizes[props.fontSize || "medium"],
    fontWeight: font.fontWeights[props.fontWeight || "medium"],
    color: color[props.color || "regular"],
  }));
  return (
    <StyledText {...props} style={props.style}>
      {props.children}
    </StyledText>
  );
};

export default Text;
