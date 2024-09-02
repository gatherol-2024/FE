import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

interface ItemProps {
  children: ReactNode;
  text: string;
  link: string;
}
const LeftItem = ({ children, text, link }: ItemProps) => {
  const { pathname } = useLocation();
  return (
    <StyledItem href={link} active={pathname == link}>
      {children}
      {text}
    </StyledItem>
  );
};

const StyledItem = styled.a<{ active: boolean }>`
  border-radius: 0.25rem;
  align-items: center;
  padding: 0.5rem;
  background-color: ${({ theme, active }) => (active ? theme.success : "inherit")};
  display: flex;
  gap: 0.5rem;
  color: ${({ theme }) => theme.text};
`;

export default LeftItem;
