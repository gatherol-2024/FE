import styled from "styled-components";
import Text from "../../shared/text";
import Account from "./item";
import { SiRiotgames } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import { FaPlus } from "react-icons/fa6";

const AccountList = () => {
  return (
    <StyledList>
      <Text type="xl">연결됨</Text>
      <AccountsLayout>
        <Account logo="riot" name="PodoLove#LOVE" />
        <Account logo="google" name="Faker#kr1" />
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
          <FaPlus />
        </OAuth>
        <OAuth logo="google">
          <FcGoogle />
          <Text type="lg" color="black" fontWeight={"bold"}>
            Google
          </Text>
          <FaPlus color="black" />
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
  border-radius: 0 0 0.25rem 0.25rem;
`;

const AccountsLayout = styled.div`
  gap: 0.5rem;
  margin: 0.75rem 0rem 2rem;
  display: flex;
  flex-direction: column;
  min-height: 20rem;
`;

const OAuthLayout = styled.div`
  display: flex;
  margin-top: 0.5rem;
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
  border: 1px solid ${({ theme }) => theme.gray100};
  align-items: center;
  color: white;
  flex: 1;
  cursor: pointer;
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  svg:last-child {
    width: 1rem;
    height: 1rem;
    position: absolute;
    right: 1rem;
  }

  &:hover {
    filter: brightness(97%);
  }
  position: relative;
`;

export default AccountList;
