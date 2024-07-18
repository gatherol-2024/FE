import styled from "styled-components";
import Content from "../../components/board/content";
import Sidebar from "../../components/board/sidebar";
import Comments from "../../components/board/comments";
import { getBoardById } from "../../services/board/api";
import { useParams } from "react-router-dom";
import { useBoard } from "../../services/board/queries";

const BoardDetail = () => {
  const { id } = useParams();
  const { data, commentMutate } = useBoard(id);
  return (
    <StyledBoard>
      <Sidebar />
      <ContentLayout>
        <Content {...data} />
        <Comments addComment={commentMutate} comments={data?.comments} />
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
