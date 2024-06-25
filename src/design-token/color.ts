import { css } from "styled-components";

const commonColor = {
  white: "#ece8e1",
  danger: "#ff4c4c",
  primary: "#f85149",
  success: "#20c997",
  gray100: "#edf0f3",
  gray200: "#c5c8cb",
  gray300: "#9da0a3",
  gray400: "#75787b",
  gray500: "#4d5053",
  gray600: "#25282b",
  black: "#000",
};

export const dark = {
  background: "#1c1c1f",
  text: "#ece8e1",
  ...commonColor,
};
export const light = {
  background: "#fff",
  text: "#1c1c1c",
  ...commonColor,
};
