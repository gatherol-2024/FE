import styled from "styled-components";

interface SideItemProps {
  title: string;
}

const SideItem = ({ title }: SideItemProps) => {
  return <StyledItem>{title}</StyledItem>;
};

const StyledItem = styled.div`
  padding: 0.75rem 1rem;
  border-top: 1px solid;
  border-color: ${({ theme }) => theme.gray200};
  &:hover {
    background-color: ${({ theme }) => theme.gray100};
  }
  transition: 0.2s;
  cursor: pointer;
`;

export default SideItem;
