import styled from "styled-components";
import Content from "../../components/board/content";
import Sidebar from "../../components/board/sidebar";
import Comments from "../../components/board/comments";

const BoardDetail = () => {
  return (
    <StyledBoard>
      <Sidebar />
      <ContentLayout>
        <Content title="같이 게임 하실분" author="DoHi#0512" date="2분 전" category="전체" />
        <Comments />
      </ContentLayout>
    </StyledBoard>
  );
};

const StyledBoard = styled.div`
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  gap: 1rem;
  padding: 0 4rem 6rem;
`;

const ContentLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export default BoardDetail;
