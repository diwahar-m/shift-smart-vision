import AppVStack from "../components/mui/AppVStack";
import Criteria from "../components/features/Criteria";
import ImageUploader from "../components/features/ImageUploader";
import Result from "../components/features/Result";
import { Grid } from "@mui/material";
import AppNavbar from "../components/mui/AppNavbar";

export default function Home() {
  return (
    <AppVStack sx={{ gap: "30px", maxWidth: "100%", padding: "20px" }}>
      <AppNavbar />
      {/* <AppHStack sx={{ flex: 1, maxWidth: "100%" }}>
        <ImageUploader />
        <Criteria />
        <Result />
      </AppHStack> */}
      <Grid container spacing={1}>
        <Grid size={4}>
          <ImageUploader />
        </Grid>
        <Grid size={4}>
          <Criteria />
        </Grid>
        <Grid size={4}>
          <Result />
        </Grid>
      </Grid>
      {/* <AppHStack sx={{ flex: 1, maxWidth: "100%" }}>
        <ImageUploader />
        <Criteria />
        <Result />
      </AppHStack> */}
    </AppVStack>
  );
}
