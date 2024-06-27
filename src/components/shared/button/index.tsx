import { HTMLAttributes } from "react";
import { ButtonSize, ButtonState, ButtonType } from "./type";
import styled, { CSSProperties } from "styled-components";
import { getButtonSize, getButtonType } from "./style";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  type?: ButtonType;
  color?: string;
  state?: ButtonState;
  href?: string;
}

const Button = ({
  size = "md",
  type = "primary",
  state = "default",
  onClick,
  children,
  color = "white",
  href,
  ...props
}: ButtonProps) => {
  return (
    <ButtonLink href={href}>
      <StyledButton color={color} size={size} type={type} onClick={onClick}>
        {children}
      </StyledButton>
    </ButtonLink>
  );
};

const ButtonLink = styled.a`
  text-decoration: none;
`;

const StyledButton = styled.button<{ type: ButtonType; size: ButtonSize; color: string }>`
  outline: none;
  display: flex;
  border-radius: 0.25rem;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  gap: 0.5rem;
  cursor: pointer;
  ${({ size }) => getButtonSize[size]};
  ${({ type, color }) => getButtonType(type, color)};
`;

export default Button;
