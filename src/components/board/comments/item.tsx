import styled from "styled-components";
import Text from "../../shared/text";
import { BsArrowReturnRight } from "react-icons/bs";
interface CommentsItemProps {
  author: string;
  date: string;
  comment: string;
  reply?: CommentsItemProps[];
}

const CommentsItem = ({ author, date, reply, comment }: CommentsItemProps) => {
  const Replies = reply?.map(({ author, date, comment }, idx) => (
    <ReplyLayout>
      <BsArrowReturnRight />
      <div>
        <CommentInfo>
          <Text fontWeight={"bold"}>{author}</Text>
          <Text color="gray400" type={"sm"}>
            {date}
          </Text>
        </CommentInfo>
        <Text type="sm">{comment}</Text>
      </div>
    </ReplyLayout>
  ));

  return (
    <StyledItem>
      <CommentItemLayout>
        <CommentInfo>
          <Text fontWeight={"bold"}>{author}</Text>
          <Text color="gray400" type={"sm"}>
            {date}
          </Text>
        </CommentInfo>
        <Text type="sm">{comment}</Text>
      </CommentItemLayout>
      {Replies}
    </StyledItem>
  );
};

const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const CommentItemLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 0.5rem;
`;

const ReplyLayout = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem;
`;

const CommentInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export default CommentsItem;
