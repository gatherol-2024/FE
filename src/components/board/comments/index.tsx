import styled from "styled-components";

const Comments = () => {
  return <StyledComments>HI</StyledComments>;
};

const StyledComments = styled.div`
  background-color: ${({ theme }) => theme.background50};
`;

export default Comments;
