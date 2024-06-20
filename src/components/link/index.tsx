import { AnchorHTMLAttributes } from "react";
import styled, { CSSProperties } from "styled-components";
import font from "../../design-token/font";
import Text from "../shared/text";
type Font = keyof typeof font;
interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  type: Font;
  color?: CSSProperties["color"];
}
const LinkText = ({ children, ...props }: LinkProps) => {
  return (
    <StyledLink {...props}>
      <Text {...props}>{children}</Text>
    </StyledLink>
  );
};

const StyledLink = styled.a`
  text-decoration: none;
  transition: 0.2s;
  &:hover {
    opacity: 80%;
  }
`;

export default LinkText;
