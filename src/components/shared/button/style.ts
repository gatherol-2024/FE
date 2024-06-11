import { CSSProperties, css } from "styled-components";
import color from "../../../design-token/color";
import { ButtonType } from "./type";

const sizeGenerator = (height: number, px: number, minWidth: number) => css`
  height: ${height}rem;
  padding: 0 ${px}rem;
  min-width: ${minWidth}rem;
`;
export const getButtonType = (type: ButtonType, color: CSSProperties["color"]) => {
  switch (type) {
    case "primary":
      return css`
        color: white;
        background-color: ${color};
      `;
    case "ghost":
      return css`
        color: ${color};
        background-color: inherit;
        border: 1px solid ${color};
        &:hover {
          background-color: ${color};
          color: white;
        }
        transition: 0.3s;
      `;
    case "outline":
      return css``;
    case "text":
      return css`
        background-color: inherit;
        border: none;
        color: ${color};
      `;
  }
};

export const getButtonSize = {
  xs: sizeGenerator(2, 0.5, 4),
  sm: sizeGenerator(2.5, 0.75, 5),
  md: sizeGenerator(3, 1, 6),
  lg: sizeGenerator(3.25, 1.25, 7),
  xl: sizeGenerator(3.5, 1.5, 8),
  full: sizeGenerator(3, 0.5, 9),
};
