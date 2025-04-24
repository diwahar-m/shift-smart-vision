import { Stack, SxProps } from "@mui/material";
import { ReactNode } from "react";

interface AppVStackProps {
  children: ReactNode;
  sx?: SxProps;
  rest?: object;
  gap?: string;
  key?: string;
}
const AppVStack = ({
  children,
  sx,
  gap = "0px",
  key,
  ...rest
}: AppVStackProps) => {
  return (
    <Stack sx={{ ...sx }} gap={gap} id={key} {...rest}>
      {children}
    </Stack>
  );
};

export default AppVStack;
