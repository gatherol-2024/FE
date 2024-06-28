import styled from "styled-components";

const Detail = () => {
  return <StyledDetail>HIHI</StyledDetail>;
};

const StyledDetail = styled.div`
  width: 100%;
  height: 500rem;
  background-color: ${({ theme }) => theme.background50};
`;

export default Detail;
