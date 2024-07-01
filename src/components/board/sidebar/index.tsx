import styled from "styled-components";
import Text from "../../shared/text";
import SideItem from "./item";

const Sidebar = () => {
  return (
    <StyledSidebar>
      <SideTitle>
        <Text type="xl">실시간 커뮤니티</Text>
      </SideTitle>
      <ItemsLayout>
        <SideItem title="같이 게임 하실분" />
        <SideItem title="같이 게임 하실분" />
        <SideItem title="같이 게임 하실분" />
        <SideItem title="같이 게임 하실분" />
      </ItemsLayout>
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
  background-color: ${({ theme }) => theme.background50};
`;

const ItemsLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

const SideTitle = styled.div`
  padding: 1rem;
`;
export default Sidebar;
