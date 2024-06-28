import styled from "styled-components";
import Detail from "../../components/board/detail";
import Sidebar from "../../components/board/sidebar";

const BoardDetail = () => {
  return (
    <StyledBoard>
      <Sidebar />
      <Detail />
    </StyledBoard>
  );
};

const StyledBoard = styled.div`
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  gap: 5rem;
  padding: 0 4rem 6rem;
`;
export default BoardDetail;
