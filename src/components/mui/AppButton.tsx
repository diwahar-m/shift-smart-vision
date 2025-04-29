import { SxProps, Tooltip, Button } from "@mui/material";
// import AppCircleProgress from "../AppCircleProgress";
import { ReactNode } from "react";

interface AppButtonProps {
  children?: ReactNode;
  sx?: SxProps;
  isLoading?: boolean;
  padding?: string;
  isDisabled?: boolean;
  tooltipText?: string;
  handleClick?: () => void;
  loading?: boolean;
  id?: string;
  type?: "button" | "submit" | "reset";
}

const AppButton = ({
  children,
  sx,
  isLoading = false,
  padding = "8px 16px",
  isDisabled = false,
  tooltipText,
  handleClick,
  loading,
  type = "button",
  id,
  ...rest
}: AppButtonProps) => {
  return (
    <>
      <Tooltip title={tooltipText}>
        <Button
          type={type}
          id={id}
          loading={loading}
          onClick={handleClick}
          sx={{
            boxSizing: "border-box",
            padding: padding,
            textTransform: "none",
            ...sx,
            borderColor: "none",
            "&:focus": {
              outline: "none",
              boxShadow: "none", // Also remove any box shadow that might appear
            },
          }}
          disabled={isLoading || isDisabled}
          {...rest}
        >
          {children}
          {/* {isLoading && <AppCircleProgress size={16} sx={{ ml: 1 }} />} */}
        </Button>
      </Tooltip>
    </>
  );
};

export default AppButton;
