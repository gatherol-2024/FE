import { ReactNode } from "react";
import styled from "styled-components";
import font from "../../../../design-token/font";

interface DropItemProps {
  children: ReactNode;
  selected?: boolean;
}

const DropdownItem = ({ selected = false, children }: DropItemProps) => {
  return <StyledItem selected={selected}>{children}</StyledItem>;
};

const StyledItem = styled.div<{ selected: boolean }>`
  display: flex;
  ${font.base};
  align-items: center;
  cursor: pointer;
  padding: 0.75rem 1rem;
  color: ${({ theme, selected }) => (selected ? theme.primary : theme.text)};
  &:hover {
    background-color: ${({ theme }) => theme.gray50};
  }
`;

export default DropdownItem;
