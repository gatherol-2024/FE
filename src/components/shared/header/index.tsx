import { IoMoonOutline } from "react-icons/io5";
import styled from "styled-components";
import color from "../../../design-token/color";
import Button from "../button";

const Header = () => {
  return (
    <StyledHeader>
      <img src="https://i.namu.wiki/i/4kTJGvpYAXvbT44b-ePbMSkdNuwLCFEUCwWPrIcEYX1LFnemJhrYl9LZd8wWriY-ADdCS3QhPlHNsrlnnWSSfQ.svg"></img>
      <StyledMenu>
        <IoMoonOutline />
        <Button size="md" type="text" color={color.white}>
          로그인
        </Button>
      </StyledMenu>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  height: 75px;
  padding: 0px 50px;
  display: flex;
  align-items: center;

  justify-content: space-between;
  color: white;
  background-color: ${color.dark};
  & img {
    width: 75px;
  }
`;
const StyledMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  & svg {
    font-size: 1.5rem;
  }
`;

export default Header;
