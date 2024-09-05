import styled, { css } from "styled-components";
import Text from "../../shared/text";

interface BoradItemProps {
  isLive: boolean;
  title: string;
  maxPeople?: number;
  currentPeople?: number;
  author: string;
  id: number;
}

const BoardItem = ({ isLive, title, author, maxPeople, currentPeople, id }: BoradItemProps) => {
  return (
    <StyledBoardItem href={`/board/detail/${id}`}>
      <ItemMenu>
        <OnAir isLive={isLive} />
        <Text>{title}</Text>
      </ItemMenu>
      <ItemMenu>
        <Text type="sm">
          {"전체"} | {"10분 전"} | {author}
        </Text>
        <Text color="primary">
          {currentPeople} / {maxPeople}
        </Text>
      </ItemMenu>
    </StyledBoardItem>
  );
};

const StyledBoardItem = styled.a`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.gray200};
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.gray50};
  }
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
  background-color: ${({ theme, isLive }) => (isLive ? theme.danger : theme.gray200)};
`;

export default BoardItem;
