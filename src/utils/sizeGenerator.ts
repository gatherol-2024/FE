import { css } from "styled-components";
import font from "../design-token/font";

type Font = keyof typeof font;

const sizeGenerator = (height: number, px: number, minWidth: number, fontType: Font) => css`
  height: ${height}rem;
  padding: 0 ${px}rem;
  min-width: ${minWidth}rem;
  ${font[fontType]}
`;

export default sizeGenerator;
