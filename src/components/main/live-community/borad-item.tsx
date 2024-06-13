import styled from "styled-components";
import color from "../../../design-token/color";
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
        <Text color={color.white}>{title}</Text>
      </ItemMenu>
      <ItemMenu>
        <Text color={color.white}>{author}</Text>
        <Text color={color.primary}>
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
  border-bottom: 1px solid ${color.white};
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
  ${({ isLive }) => `background-color : ${isLive ? color.primary : color.white}`}
`;

export default BoardItem;
