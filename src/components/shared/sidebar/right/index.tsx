import styled from "styled-components";

const RightSideBar = () => {
  return <StyledSideBar>hI</StyledSideBar>;
};

const StyledSideBar = styled.div`
  width: 15rem;
  background-color: ${({ theme }) => theme.background100};
`;
export default RightSideBar;
