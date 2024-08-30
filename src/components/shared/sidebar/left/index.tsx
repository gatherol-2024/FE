import styled from "styled-components";
import LeftItem from "./item";
import { FaUser } from "react-icons/fa";
import { IoMdChatboxes } from "react-icons/io";
import { MdVoiceChat } from "react-icons/md";
const LeftSideBar = () => {
  return (
    <StyledSidebar>
      <LeftItem text="라이브 커뮤니티" link="/">
        <IoMdChatboxes />
      </LeftItem>
      <LeftItem text="내 프로필" link="/profile">
        <FaUser />
      </LeftItem>

      <LeftItem text="팀보이스" link="/voice">
        <MdVoiceChat />
      </LeftItem>
    </StyledSidebar>
  );
};

const StyledSidebar = styled.div`
  flex-shrink: 0;
  width: 12rem;
  display: flex;
  gap: 0.25rem;
  flex-direction: column;
  padding: 0.75rem;
  background-color: ${({ theme }) => theme.background};
`;

export default LeftSideBar;
