import styled from "styled-components";
import Text from "../../shared/text";
import Account from "./item";
import { SiRiotgames } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
const AccountList = () => {
  return (
    <StyledList>
      <Text type="xl">연결됨</Text>
      <AccountsLayout>
        <Account logo="riot" name="PodoLove#LOVE" />
        <Account logo="google" name="Faker#kr1" />
      </AccountsLayout>
      <Text>계정 등록하기</Text>
      <OAuthLayout>
        <OAuth logo="riot">
          <SiRiotgames />
          <Text type="lg" color="#fff" fontWeight={"bold"}>
            Riot Games
          </Text>
        </OAuth>
        <OAuth logo="google">
          <FcGoogle />
          <Text type="lg" color="black" fontWeight={"bold"}>
            Google
          </Text>
        </OAuth>
      </OAuthLayout>
    </StyledList>
  );
};

const StyledList = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.gray50};
`;

const AccountsLayout = styled.div`
  gap: 0.5rem;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  height: 20rem;
  overflow: auto;
`;

const OAuthLayout = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
`;

const OAuth = styled.a<{ logo: "riot" | "google" }>`
  padding: 0.75rem 1rem;
  width: fit-content;
  display: flex;
  gap: 1rem;
  background-color: ${({ theme, logo }) => theme[logo]};
  border-radius: 0.25rem;
  align-items: center;
  color: white;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export default AccountList;
