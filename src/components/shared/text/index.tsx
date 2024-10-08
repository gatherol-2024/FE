import { HTMLAttributes } from "react";
import font from "../../../design-token/font";
import { CSSProperties } from "styled-components";
import styled from "styled-components";
type Font = keyof typeof font;
interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  type?: Font;
  whiteSpace?: CSSProperties["whiteSpace"];
  color?: string;
  fontWeight?: CSSProperties["fontWeight"];
}
const Text = ({ color = "text", fontWeight, children, whiteSpace = "wrap", type = "base", ...props }: TextProps) => {
  return (
    <StyledText {...props} style={{ whiteSpace, fontWeight }} color={color} type={type}>
      {children}
    </StyledText>
  );
};

const StyledText = styled.span<{ type: Font; color: string }>`
  ${({ type }) => font[type]}
  word-break: break-all;
  color: ${(props) => props.theme[props.color]};
`;

export default Text;
