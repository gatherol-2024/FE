import styled from "styled-components";
import Text from "../../shared/text";
import { useGetBoardList } from "../../../services/board/queries";

const Sidebar = () => {
  const { data } = useGetBoardList("전체");
  const BoardList = data?.map(({ title, id }: { title: string; id: number }, idx: number) => (
    <StyledItem href={`/board/detail/${id}`} key={idx}>
      {title}
    </StyledItem>
  ));
  return (
    <StyledSidebar>
      <SideTitle>
        <Text type="xl">실시간 커뮤니티</Text>
      </SideTitle>
      <ItemsLayout>{BoardList}</ItemsLayout>
    </StyledSidebar>
  );
};

const StyledSidebar = styled.div`
  border-radius: 0.5rem;
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

const StyledItem = styled.a`
  padding: 0.75rem 1rem;
  border-top: 1px solid;
  border-color: ${({ theme }) => theme.gray200};
  color: ${({ theme }) => theme.text};
  &:hover {
    background-color: ${({ theme }) => theme.gray100};
  }
  transition: 0.2s;
  cursor: pointer;
`;

export default Sidebar;
