import { css } from "styled-components";
const fontGenerator = (weight: number, size: number) => css`
  font-size: ${size}rem;
  font-weight: ${weight};
`;

const font = {
  H1: fontGenerator(700, 2.25),
  H2: fontGenerator(700, 1.75),
  H3: fontGenerator(600, 1.5),
  H4: fontGenerator(600, 1.25),
  H5: fontGenerator(500, 1.125),
};
export default font;
