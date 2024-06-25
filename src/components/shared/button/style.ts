import { css } from "styled-components";
import { ButtonType } from "./type";
import font from "../../../design-token/font";
type Font = keyof typeof font;
const sizeGenerator = (height: number, px: number, minWidth: number, fontType: Font) => css`
  height: ${height}rem;
  padding: 0 ${px}rem;
  min-width: ${minWidth}rem;
  ${font[fontType]}
`;
export const getButtonType = (type: ButtonType, color: string) => {
  switch (type) {
    case "primary":
      return css`
        color: white;
        background-color: ${({ theme }) => theme[color]};
        border: none;
        &:hover {
          background-color: white;
          color: ${({ theme }) => theme[color]};
        }
      `;
    case "ghost":
      return css`
        color: ${({ theme }) => theme[color]};
        background-color: inherit;
        border: 1px solid ${({ theme }) => theme[color]};
        &:hover {
          background-color: ${({ theme }) => theme[color]};
          color: white;
        }
      `;
    case "text":
      return css`
        background-color: inherit;
        border: none;
        color: ${({ theme }) => theme[color]};
      `;
    case "icon":
      return css`
        background-color: ${({ theme }) => theme[color]};
        border-radius: 9999px;
        padding: 1rem;
        border: none;
        color: white;
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
  icon: font["3xl"],
};
