import { css } from "styled-components";
import { ButtonType } from "./type";
import font from "../../../design-token/font";
import sizeGenerator from "../../../utils/sizeGenerator";

export const getButtonType = (type: ButtonType, color: string) => {
  const themeColor = css`
    ${({ theme }) => theme[color]}
  `;
  switch (type) {
    case "primary":
      return css`
        color: white;
        background-color: ${themeColor};
        border: none;
        &:hover {
          background-color: white;
          color: ${themeColor};
        }
      `;
    case "ghost":
      return css`
        color: ${themeColor};
        background-color: inherit;
        border: 1px solid ${themeColor};
        &:hover {
          background-color: ${themeColor};
          color: white;
        }
      `;
    case "text":
      return css`
        background-color: inherit;
        border: none;
        color: ${themeColor};
        padding: 0;
        min-width: 0;
        height: auto;
      `;
    case "icon":
      return css`
        background-color: ${themeColor};
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
