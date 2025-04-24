import AppCenterStack from "../components/mui/AppCenterStack";
import { CircularProgress } from "@mui/material";

export default function Loader() {
  return (
    <AppCenterStack sx={{ height: "100%", width: "100%" }}>
      <CircularProgress />
    </AppCenterStack>
  );
}
