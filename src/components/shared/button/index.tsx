import { HTMLAttributes } from "react";
import { ButtonSize, ButtonState, ButtonType } from "./type";
import styled, { CSSProperties } from "styled-components";
import { getButtonSize, getButtonType } from "./style";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  type?: ButtonType;
  color: CSSProperties["color"];
  state?: ButtonState;
}

const Button = ({
  size = "md",
  type = "primary",
  state = "default",
  onClick,
  children,
  color,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton color={color} size={size} type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<{ type: ButtonType; size: ButtonSize; color: CSSProperties["color"] }>`
  outline: none;
  display: flex;
  border-radius: 0.25rem;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  cursor: pointer;
  ${({ type, color }) => getButtonType(type, color)};
  ${({ size }) => getButtonSize[size]};
`;

export default Button;
