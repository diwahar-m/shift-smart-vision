import React from "react";
import AppVStack from "../components/mui/AppVStack";
import AppHStack from "../components/mui/AppHStack";
import AppText from "../components/mui/AppText";
import AppImage from "../components/mui/AppImage";
import Criteria from "../components/features/Criteria";
import ImageUploader from "../components/features/ImageUploader";
import Result from "../components/features/Result";
import { LogoIcon } from "../assets";
import { Divider } from "@mui/material";
import AppNavbar from "../components/mui/AppNavbar";

export default function Home() {
  return (
    <AppVStack sx={{ gap: "20px", bgcolor: "red", maxWidth: "100%" }}>
      <AppNavbar />
      <AppHStack sx={{ gap: "5px", alignItems: "center" }}>
        <AppImage
          src={LogoIcon}
          sx={{ width: "160px", margin: "10px 5px 10px 5px" }}
        />
        <AppText
          variant="subtitle2"
          //   fontStyles={['']}
          text={"--- MISSION - VISION ---"}
        />
      </AppHStack>
      <AppHStack sx={{ flex: 1, width: "100%" }}>
        <ImageUploader />
        {/* <Divider /> */}
        <Criteria />
        {/* <Divider /> */}
        {/* <Result /> */}
      </AppHStack>
    </AppVStack>
  );
}
