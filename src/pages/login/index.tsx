import styled from "styled-components";
import Text from "../../components/shared/text";
import AccountList from "../../components/login/list";

const LoginPage = () => {
  return (
    <StyledLoginPage>
      <LoginLayout>
        <LoginInfo>
          <Text type="2xl">연결된 계정</Text>
        </LoginInfo>
        <AccountList />
      </LoginLayout>
    </StyledLoginPage>
  );
};

const StyledLoginPage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginInfo = styled.div`
  padding: 1.5rem 2rem;
  display: flex;
  background-color: ${({ theme }) => theme.gray100};
  flex-direction: column;
`;

const LoginLayout = styled.div`
  width: fit-content;
  display: flex;
  padding: 1.5rem 2rem;
  flex-direction: column;
`;

export default LoginPage;
