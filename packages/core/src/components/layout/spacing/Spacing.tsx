import * as React from "react";
import { Box, BoxProps } from "../box/Box";

interface SpacingProps extends BoxProps {
  num?: number | boolean;
}

export const Spacing: React.FC<SpacingProps> = ({ num, ...props }) => {
  return <Box spacing={num} {...props} />;
};
