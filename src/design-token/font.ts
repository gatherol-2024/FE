import { css } from "styled-components";
const fontGenerator = (weight: number, size: number) => css`
  font-size: ${size}rem;
  font-weight: ${weight};
`;

const font = {
  xs: fontGenerator(500, 0.75),
  sm: fontGenerator(500, 0.875),
  base: fontGenerator(500, 1),
  lg: fontGenerator(500, 1.125),
  xl: fontGenerator(500, 1.25),
  "2xl": fontGenerator(500, 1.5),
  "3xl": fontGenerator(500, 1.875),
  "4xl": fontGenerator(500, 2.25),
  "5xl": fontGenerator(500, 3),
  "6xl": fontGenerator(500, 3.75),
  "7xl": fontGenerator(500, 4.5),
  "8xl": fontGenerator(500, 6),
  "9xl": fontGenerator(500, 8),
  "10xl": fontGenerator(500, 10),
};
export default font;
