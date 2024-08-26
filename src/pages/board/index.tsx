import styled from "styled-components";
import Content from "../../components/board/content";
import Sidebar from "../../components/board/sidebar";
import Comments from "../../components/board/comments";
import { useParams } from "react-router-dom";
import { useBoard } from "../../hooks/useBoard";

const BoardDetail = () => {
  const { id } = useParams();
  const { boardData, commentMutate } = useBoard(id);
  console.log("boardData", boardData);
  return (
    <StyledBoard>
      <Sidebar />
      <ContentLayout>
        <Content {...boardData} />
        <Comments addComment={commentMutate} comments={boardData?.comments} />
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
