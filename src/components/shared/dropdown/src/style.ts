import sizeGenerator from "../../../../utils/sizeGenerator";

export const getDropdownSize = {
  xs: sizeGenerator(1.5, 0.5, 3, "xs"),
  sm: sizeGenerator(2, 0.75, 4, "sm"),
  md: sizeGenerator(2.5, 1, 5, "base"),
  lg: sizeGenerator(3, 1.25, 6, "lg"),
  xl: sizeGenerator(3.25, 1.5, 7, "xl"),
};
