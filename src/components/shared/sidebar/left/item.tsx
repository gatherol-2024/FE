import { ReactNode } from "react";
import styled from "styled-components";

interface ItemProps {
  children: ReactNode;
  text: string;
  active?: boolean;
}
const LeftItem = ({ children, text, active = false }: ItemProps) => {
  return (
    <StyledItem active={active}>
      {children}
      {text}
    </StyledItem>
  );
};

const StyledItem = styled.div<{ active: boolean }>`
  border-radius: 0.25rem;
  align-items: center;
  padding: 0.5rem;
  background-color: ${({ theme, active }) => (active ? theme.success : "inherit")};
  display: flex;
  gap: 0.5rem;
  color: ${({ theme }) => theme.text};
`;

export default LeftItem;
