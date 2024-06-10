import styled from "styled-components";
import color from "../../../design-token/color";
export const StyledHeader = styled.div`
  height: 75px;
  padding: 0px 50px;
  display: flex;
  align-items: center;

  justify-content: space-between;
  color: white;
  background-color: ${color.dark};
  & img {
    width: 75px;
  }
`;

export const StyledMenu = styled.div`
  display: flex;
  gap: 8px;
`;
