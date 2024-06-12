import { CSSProperties, css } from "styled-components";
import { ButtonType } from "./type";
import font from "../../../design-token/font";
type Font = keyof typeof font;
const sizeGenerator = (height: number, px: number, minWidth: number, fontType: Font) => css`
  height: ${height}rem;
  padding: 0 ${px}rem;
  min-width: ${minWidth}rem;
  ${font[fontType]}
`;
export const getButtonType = (type: ButtonType, color: CSSProperties["color"]) => {
  switch (type) {
    case "primary":
      return css`
        color: white;
        background-color: ${color};
        border: none;
        &:hover {
          background-color: white;
          color: ${color};
        }
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
      `;
    case "text":
      return css`
        background-color: inherit;
        border: none;
        color: ${color};
      `;
  }
};

export const getButtonSize = {
  xs: sizeGenerator(2, 0.5, 4, "xs"),
  sm: sizeGenerator(2.5, 0.75, 5, "sm"),
  md: sizeGenerator(3, 1, 6, "base"),
  lg: sizeGenerator(3.25, 1.25, 7, "lg"),
  xl: sizeGenerator(3.5, 1.5, 8, "xl"),
  full: sizeGenerator(3, 0.5, 9, "base"),
};
