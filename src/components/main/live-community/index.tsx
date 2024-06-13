import styled from "styled-components";
import color from "../../../design-token/color";
import Text from "../../shared/text";
import BoardItem from "./borad-item";

const LiveCommunity = () => {
  return (
    <StyledCommunity>
      <Text color={color.white} type="3xl">
        라이브 커뮤니티
      </Text>
      <LiveBoard>
        <BoardItem isLive={true} title="게임 같이 하실분 구해요" author="PodoLove#LOVE" />
        <BoardItem isLive={false} title="게임 같이 하실분 구해요" author="PodoLove#LOVE" />
      </LiveBoard>
    </StyledCommunity>
  );
};

const StyledCommunity = styled.div`
  background-color: ${color.dark};
  padding: 5rem 15rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
`;

const LiveBoard = styled.div`
  display: flex;
  border-top: 1px solid ${color.white};
  width: 100%;
  flex-direction: column;
`;

export default LiveCommunity;
