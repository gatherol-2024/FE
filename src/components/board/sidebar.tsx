import styled from "styled-components";
import Text from "../shared/text";

const Sidebar = () => {
  return (
    <StyledSidebar>
      <Text type="lg">실시간 커뮤니티</Text>
      <ItemsLayout>HI</ItemsLayout>
    </StyledSidebar>
  );
};

const StyledSidebar = styled.div`
  position: sticky;
  top: 2rem;
  width: 18rem;
  height: fit-content;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: ${({ theme }) => theme.background50};
`;

const ItemsLayout = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.gray200};
`;
export default Sidebar;
