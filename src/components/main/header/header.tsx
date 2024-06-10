import { StyledHeader, StyledMenu } from "./header.style";
import { IoMoonOutline } from "react-icons/io5";
export const Header = () => {
  return (
    <StyledHeader>
      <img src="https://i.namu.wiki/i/4kTJGvpYAXvbT44b-ePbMSkdNuwLCFEUCwWPrIcEYX1LFnemJhrYl9LZd8wWriY-ADdCS3QhPlHNsrlnnWSSfQ.svg"></img>
      <StyledMenu>
        <IoMoonOutline />
        <span>로그인</span>
      </StyledMenu>
    </StyledHeader>
  );
};

export default Header;
