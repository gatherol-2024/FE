import styled from "styled-components";
import Text from "../../shared/text";
import Button from "../../shared/button";

const Comments = () => {
  return (
    <StyledComments>
      <CommentsInfo>
        <InfoText>
          <Text type="xl">댓글</Text>
          <Text color="primary">{2}</Text>
        </InfoText>
        <Button size="xs" type="ghost" color="success">
          댓글 작성
        </Button>
      </CommentsInfo>
    </StyledComments>
  );
};

const StyledComments = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.background50};
`;

const CommentsInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const InfoText = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export default Comments;
