import styled from "styled-components";
import Text from "../../components/shared/text";
import Button from "../../components/shared/button";
import LiveCommunity from "../../components/main/live-community";

const Main = () => {
  return (
    <StyledMain>
      <MainInfo>
        <MainText>
          <Text color="white" type="xl">
            리그 오브 레전드를 팀보이스와 함께하세요
          </Text>
          <Text color="white" type="7xl">
            GATHEROL
          </Text>
          <ButtonOutline>
            <Button size="xl" color="primary">
              팀보이스 들어가기
            </Button>
          </ButtonOutline>
        </MainText>
        <MainImg src="/images/lol.jpeg" />
      </MainInfo>
      <LiveCommunity />
    </StyledMain>
  );
};

const MainInfo = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  height: 40rem;
  justify-content: center;
`;

const ButtonOutline = styled.div`
  padding: 5px;
  border-radius: 0.25rem;
  border: 1px solid white;
`;

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

const MainImg = styled.img`
  position: absolute;
  height: 100%;
  object-fit: cover;
  width: 100%;
  filter: brightness(30%);
`;
export default Main;
