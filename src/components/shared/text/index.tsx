import { HTMLAttributes } from "react";
import font from "../../../design-token/font";
import { CSSProperties } from "styled-components";
import styled from "styled-components";
type Font = keyof typeof font;
interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  type?: Font;
  whiteSpace?: CSSProperties["whiteSpace"];
  color?: CSSProperties["color"];
}
const Text = ({ color = "black", children, whiteSpace = "wrap", type = "base" }: TextProps) => {
  return (
    <StyledText style={{ color, whiteSpace }} type={type}>
      {children}
    </StyledText>
  );
};

const StyledText = styled.span<{ type: Font }>`
  ${({ type }) => font[type]}
`;

export default Text;
