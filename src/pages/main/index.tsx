import styled from "styled-components";
import LiveCommunity from "../../components/main/live-community";
import useInGame from "../../hooks/useInGame";

const Main = () => {
  const { champSelect, gameSession } = useInGame();
  return (
    <StyledMain>
      <LiveCommunity />
    </StyledMain>
  );
};

const StyledMain = styled.div`
  width: 100%;
`;

const MainText = styled.div`
  z-index: 10;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export default Main;
