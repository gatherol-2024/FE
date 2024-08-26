import styled from "styled-components";
import LeftItem from "./item";
import { FaUser } from "react-icons/fa";
import { IoMdChatboxes } from "react-icons/io";
const LeftSideBar = () => {
  return (
    <StyledSidebar>
      <LeftItem text="내 프로필" active={true}>
        <FaUser />
      </LeftItem>
      <LeftItem text="라이브 커뮤니티">
        <IoMdChatboxes />
      </LeftItem>
    </StyledSidebar>
  );
};

const StyledSidebar = styled.div`
  width: 12rem;
  display: flex;
  gap: 0.25rem;
  flex-direction: column;
  padding: 0.75rem;
  background-color: ${({ theme }) => theme.background};
`;

export default LeftSideBar;
