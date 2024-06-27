import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import styled from "styled-components";
import Button from "../button";
import { useThemeStore } from "../../../store/theme";

const Header = () => {
  const [theme, setTheme] = useThemeStore();
  return (
    <StyledHeader>
      <a href="/">
        <img src="https://i.namu.wiki/i/4kTJGvpYAXvbT44b-ePbMSkdNuwLCFEUCwWPrIcEYX1LFnemJhrYl9LZd8wWriY-ADdCS3QhPlHNsrlnnWSSfQ.svg"></img>
      </a>
      <StyledMenu>
        {theme === "light" ? (
          <IoMoonOutline onClick={() => setTheme("dark")} />
        ) : (
          <IoSunnyOutline onClick={() => setTheme("light")} />
        )}

        <Button color="text" size="md" type="text">
          로그인
        </Button>
      </StyledMenu>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.background};
  min-height: 5rem;
  padding: 0rem 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  transition: 0.3s;
  & img {
    width: 5rem;
  }
`;
const StyledMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  & svg {
    color: ${({ theme }) => theme.text};
    cursor: pointer;
    font-size: 1.5rem;
  }
`;

export default Header;
