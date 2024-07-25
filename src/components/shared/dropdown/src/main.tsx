import { Children, ReactElement, ReactNode, cloneElement, isValidElement, useState } from "react";
import styled from "styled-components";
import { DropdownType, DropdownSize } from "./type";
import { getDropdownSize } from "./style";
import { IoMdArrowDropdown } from "react-icons/io";
import Text from "../../text";
interface DropdownProps {
  children: ReactNode;
  size?: DropdownSize;
  type?: DropdownType;
  title: string;
  onSelect: (v: string) => void;
}

const DropDownMain = ({ size = "md", type = "primary", title, onSelect, children }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (e: any, value: string) => {
    e.stopPropagation();
    onSelect(value);
    setIsOpen(false);
  };
  const childrenWithProps = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child as ReactElement<any>, {
        onClick: (e: any) => handleSelect(e, child.props.children),
        selected: child.props.children === title,
      });
    }
  });
  return (
    <StyledDropdown isOpen={isOpen} size={size} onClick={() => setIsOpen((prev) => !prev)}>
      <Text>{title}</Text>
      <IoMdArrowDropdown />
      <ItemLayout style={{ opacity: +isOpen }}>{childrenWithProps}</ItemLayout>
    </StyledDropdown>
  );
};

const StyledDropdown = styled.div<{ size: DropdownSize; isOpen: boolean }>`
  position: relative;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.gray200};
  border-radius: 0.25rem;
  ${({ size }) => getDropdownSize[size]};

  & svg {
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
