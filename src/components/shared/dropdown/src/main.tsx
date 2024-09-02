import { ReactNode, useState } from "react";
import styled from "styled-components";
import { DropdownSize } from "./type";
import { getDropdownSize } from "./style";
import { IoMdArrowDropdown } from "react-icons/io";
import Text from "../../text";
interface DropdownProps {
  children: ReactNode;
  size?: DropdownSize;
  title: string;
}

const DropDownMain = ({ size = "md", title, children }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledDropdown isOpen={isOpen} size={size} onClick={() => setIsOpen((prev) => !prev)}>
      <Text whiteSpace="nowrap">{title}</Text>
      <IoMdArrowDropdown />
      <ItemLayout style={{ opacity: +isOpen }}>{children}</ItemLayout>
    </StyledDropdown>
  );
};

const StyledDropdown = styled.div<{ size: DropdownSize; isOpen: boolean; full?: boolean }>`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid ${({ theme }) => theme.gray200};
  border-radius: 0.25rem;
  ${({ size }) => getDropdownSize[size]};
  & svg {
    color: ${({ theme }) => theme.text};
    transition: 0.3s;
    transform: rotate(${({ isOpen }) => (isOpen ? 180 : 0)}deg);
  }
`;

const ItemLayout = styled.div`
  top: 120%;
  left: 0;
  min-width: 100%;
  transition: 0.3s;
  position: absolute;
  display: flex;
  flex-direction: column;
  z-index: 2;
  background-color: ${({ theme }) => theme.background};
  border-radius: 0.25rem;
  border: 1px solid ${({ theme }) => theme.gray200};
`;
export default DropDownMain;
