import styled from "styled-components";
import { SiRiotgames } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import { FiMinus } from "react-icons/fi";
import Text from "../../shared/text";
interface AccountProps {
  name: string;
  logo: "riot" | "google";
}

const Account = ({ name, logo }: AccountProps) => {
  return (
    <StyledAccount>
      <Logo logo={logo}>{logo === "riot" ? <SiRiotgames /> : <FcGoogle />}</Logo>
      <AccountInfo>
        <Text fontWeight={"bold"}>{name}</Text>
        <DeleteIcon>
          <FiMinus />
        </DeleteIcon>
      </AccountInfo>
    </StyledAccount>
  );
};

const StyledAccount = styled.div`
  display: flex;
`;
const Logo = styled.div<{ logo: "riot" | "google" }>`
  display: flex;
  border-radius: 0.25rem 0rem 0rem 0.25rem;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  background-color: ${({ logo, theme }) => theme[logo]};
  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: white;
  }
`;

const AccountInfo = styled.div`
  background-color: ${({ theme }) => theme.gray150};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.75rem;
  width: 25rem;
  border-radius: 0rem 0.25rem 0.25rem 0rem;
`;

const DeleteIcon = styled.div`
  padding: 0.25rem;
  border-radius: 9999px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  cursor: pointer;
  svg {
    width: 0.75rem;
    height: 0.75rem;
  }
`;
export default Account;
