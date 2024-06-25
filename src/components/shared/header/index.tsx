import { IoMoonOutline } from "react-icons/io5";
import styled from "styled-components";
import Button from "../button";
import { useThemeStore } from "../../../store/theme";

const Header = () => {
  const [theme, setTheme] = useThemeStore();
  console.log(theme);
  return (
    <StyledHeader>
      <img src="https://i.namu.wiki/i/4kTJGvpYAXvbT44b-ePbMSkdNuwLCFEUCwWPrIcEYX1LFnemJhrYl9LZd8wWriY-ADdCS3QhPlHNsrlnnWSSfQ.svg"></img>
      <StyledMenu>
        <IoMoonOutline onClick={() => setTheme(theme == "light" ? "dark" : "light")} />

        <Button size="md" type="text">
          로그인
        </Button>
      </StyledMenu>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  height: 5rem;
  padding: 0px 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  & img {
    width: 5rem;
  }
`;
const StyledMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  & svg {
    font-size: 1.5rem;
  }
`;

export default Header;
