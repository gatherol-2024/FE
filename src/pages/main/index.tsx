import styled from "styled-components";
import Text from "../../components/shared/text";
import color from "../../design-token/color";
import Button from "../../components/shared/button";

const Main = () => {
  return (
    <StyledMain>
      <MainText>
        <Text color={color.white} type="xl">
          리그 오브 레전드를 팀보이스와 함께하세요
        </Text>
        <Text color={color.white} type="7xl">
          GATHEROL
        </Text>
        <ButtonOutline>
          <Button size="xl" color={color.primary}>
            팀보이스 들어가기
          </Button>
        </ButtonOutline>
      </MainText>
      <MainImg src="/images/lol.jpeg" />
    </StyledMain>
  );
};

const ButtonOutline = styled.div`
  padding: 5px;
  border-radius: 0.25rem;
  border: 1px solid white;
`;

const StyledMain = styled.div`
  position: relative;
  height: 40rem;
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
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
