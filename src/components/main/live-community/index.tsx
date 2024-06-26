import styled from "styled-components";
import Text from "../../shared/text";
import BoardItem from "./borad-item";
import Dropdown from "../../shared/dropdown";

const LiveCommunity = () => {
  return (
    <StyledCommunity>
      <Text type="3xl">라이브 커뮤니티</Text>
      <CommunityMenu>
        <Dropdown title="전체">
          <Dropdown.Item selected>전체</Dropdown.Item>
          <Dropdown.Item>팀 구하기</Dropdown.Item>
          <Dropdown.Item>잡담</Dropdown.Item>
        </Dropdown>
      </CommunityMenu>
      <LiveBoard>
        <BoardItem isLive={true} title="게임 같이 하실분 구해요" author="PodoLove#LOVE" />
        <BoardItem isLive={false} title="게임 같이 하실분 구해요" author="PodoLove#LOVE" />
        <BoardItem isLive={false} title="게임 같이 하실분 구해요" author="PodoLove#LOVE" />
        <BoardItem isLive={false} title="게임 같이 하실분 구해요" author="PodoLove#LOVE" />
        <BoardItem isLive={false} title="게임 같이 하실분 구해요" author="PodoLove#LOVE" />
        <BoardItem isLive={false} title="게임 같이 하실분 구해요" author="PodoLove#LOVE" />
        <BoardItem isLive={false} title="게임 같이 하실분 구해요" author="PodoLove#LOVE" />
        <BoardItem isLive={false} title="게임 같이 하실분 구해요" author="PodoLove#LOVE" />
      </LiveBoard>
    </StyledCommunity>
  );
};

const StyledCommunity = styled.div`
  padding: 5rem 15rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
`;
const CommunityMenu = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const LiveBoard = styled.div`
  display: flex;
  border-top: 1px solid ${({ theme }) => theme.gray200};
  width: 100%;
  flex-direction: column;
`;

export default LiveCommunity;
