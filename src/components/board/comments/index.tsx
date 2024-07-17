import styled from "styled-components";
import Text from "../../shared/text";
import Button from "../../shared/button";
import CommentsItem from "./item";
import { useState } from "react";
import AddComment from "./add";

interface CommentsProps {
  comments?: any[];
}

const Comments = ({ comments }: CommentsProps) => {
  const CommentsList = comments?.map((comment: any, idx: number) => <CommentsItem key={idx} {...comment} />);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <StyledComments>
      <CommentsInfo>
        <InfoText>
          <Text type="xl">댓글</Text>
          <Text color="primary">{2}</Text>
        </InfoText>
        <Button size="xs" type="ghost" color="success" onClick={() => setIsOpen(true)}>
          댓글 작성
        </Button>
      </CommentsInfo>
      <AddLayout>
        <AddComment isOpen={isOpen} setIsOpen={setIsOpen} />
      </AddLayout>
      {CommentsList}
    </StyledComments>
  );
};

const StyledComments = styled.div`
  display: flex;
  border-radius: 0.5rem;
  flex-direction: column;
  padding: 1.5rem;
  gap: 0.75rem;
  background-color: ${({ theme }) => theme.background50};
`;

const CommentsInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.gray200};
`;

const InfoText = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const AddLayout = styled.div``;

export default Comments;
