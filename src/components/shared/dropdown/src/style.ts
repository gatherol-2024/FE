import sizeGenerator from "../../../../utils/sizeGenerator";

export const getDropdownSize = {
  xs: sizeGenerator(1.5, 0.25, 3, "sm"),
  sm: sizeGenerator(2, 0.5, 4, "base"),
  md: sizeGenerator(2.5, 0.75, 5, "lg"),
  lg: sizeGenerator(3, 1, 6, "xl"),
  xl: sizeGenerator(3.25, 1.25, 7, "2xl"),
  full: sizeGenerator(3.5, 0.5, 8, "base"),
};
