import styled from "styled-components";
import Text from "../../shared/text";
import Button from "../../shared/button";
import CommentsItem from "./item";
import { useState } from "react";
import AddComment from "./add";
import { CommentType } from "../../../types/board";

interface CommentsProps {
  comments?: CommentType[];
  addComment: (comment: CommentType) => void;
}

const Comments = ({ comments, addComment }: CommentsProps) => {
  const CommentsList = comments?.map((comment: CommentType, idx: number) => <CommentsItem key={idx} {...comment} />);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <StyledComments>
      <CommentsInfo>
        <InfoText>
          <Text type="xl">댓글</Text>
          <Text color="primary" data-testid="comment-cnt">
            {comments?.length}
          </Text>
        </InfoText>
        <Button size="xs" type="ghost" color="success" onClick={() => setIsOpen(true)}>
          댓글 작성
        </Button>
      </CommentsInfo>

      <AddComment addComment={addComment} isOpen={isOpen} setIsOpen={setIsOpen} />

      {CommentsList}
    </StyledComments>
  );
};

const StyledComments = styled.div`
  display: flex;
  border-radius: 0.5rem;
  flex-direction: column;
  padding: 1.5rem;
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

export default Comments;
