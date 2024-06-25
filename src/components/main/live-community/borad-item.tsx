import styled, { css, keyframes } from "styled-components";
import Text from "../../shared/text";

interface BoradItemProps {
  isLive: boolean;
  title: string;
  maxPeople?: number;
  currentPeople?: number;
  author: string;
}

const BoardItem = ({ isLive, title, author, ...props }: BoradItemProps) => {
  return (
    <StyledBoardItem>
      <ItemMenu>
        <OnAir isLive={isLive} />
        <Text>{title}</Text>
      </ItemMenu>
      <ItemMenu>
        <Text type="sm">{author}</Text>
        <Text>
          {4} / {5}
        </Text>
      </ItemMenu>
    </StyledBoardItem>
  );
};

const StyledBoardItem = styled.a`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.gray300};
  transition: 0.2s;
`;

const ItemMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const OnAir = styled.div<{ isLive: boolean }>`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 9999px;
  ${({ isLive }) =>
    isLive
      ? css`
          animation: ${OnAirAnimation} 2s ease-in-out infinite;
        `
      : css`
          background-color: white;
        `};
`;

const OnAirAnimation = keyframes`
    0% {
        background-color: ${({ theme }) => theme.gray300};
    }
    50% {
        background-color: white;
    }
    100% {
        background-color: ${({ theme }) => theme.primary};
    }
`;

export default BoardItem;
