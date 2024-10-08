import styled from "styled-components";
import Text from "../../shared/text";
import BoardItem from "./borad-item";
import Dropdown from "../../shared/dropdown";
import Button from "../../shared/button";
import { IoPencil } from "react-icons/io5";
import { useGetBoardList } from "../../../services/board/queries";
import { BoardType } from "../../../types/board";
import { useState } from "react";
const LiveCommunity = () => {
  const [category, setCategory] = useState("전체");
  const { data, isLoading } = useGetBoardList(category);
  console.log(category);
  const BoardList = data?.map((props: BoardType, idx: number) => <BoardItem {...props} key={idx} />);
  const Cate = ["전체", "팀 구하기", "잡담"].map((data, idx) => (
    <Dropdown.Item selected={category == data} onClick={() => setCategory(data)}>
      {data}
    </Dropdown.Item>
  ));
  return (
    <StyledCommunity>
      <CommunityMenu>
        <Dropdown title={category}>{Cate}</Dropdown>
        <Button color="primary" type="ghost" size="sm">
          글 작성
          <IoPencil />
        </Button>
      </CommunityMenu>
      <LiveBoard>{BoardList}</LiveBoard>
    </StyledCommunity>
  );
};

const StyledCommunity = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
`;
const CommunityMenu = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const LiveBoard = styled.div`
  display: flex;
  border-top: 1px solid ${({ theme }) => theme.gray200};
  width: 100%;
  flex-direction: column;
`;

export default LiveCommunity;
