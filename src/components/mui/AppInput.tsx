import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

interface AppInputProps {
  label?: string;
  type?: string;
  value?: string;
  onChange?:
    | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
}

export default function AppInput({
  label,
  type,
  value,
  onChange,
}: AppInputProps) {
  return (
    // @ts-expect-error "box"
    <Box
      // component={"input"}
      sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
      noValidate
      autoComplete="off"
    >
      <TextField
        size="small"
        sx={{ borderRadius: "50px" }}
        value={value}
        onChange={onChange}
        id="outlined-basic"
        label={label || "Outline"}
        variant="outlined"
        type={type || "text"}
      />
    </Box>
  );
}
