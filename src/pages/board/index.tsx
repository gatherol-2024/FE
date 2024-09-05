import styled from "styled-components";
import Content from "../../components/board/content";
import Comments from "../../components/board/comments";
import { useParams } from "react-router-dom";
import { useBoard } from "../../hooks/useBoard";

const BoardDetail = () => {
  const { id } = useParams();
  const { boardData, commentMutate } = useBoard(id);
  return (
    <StyledBoard>
      <ContentLayout>
        <Content {...boardData} />
        <Comments addComment={commentMutate} comments={boardData?.comments} />
      </ContentLayout>
    </StyledBoard>
  );
};

const StyledBoard = styled.div`
  height: 100%;
`;

const ContentLayout = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export default BoardDetail;
