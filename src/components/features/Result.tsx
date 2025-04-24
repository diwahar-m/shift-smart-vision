import AppVStack from "../mui/AppVStack";
import AppText from "../mui/AppText";
import { useContext } from "react";
import { LoginContext } from "../../context";
import AppImage from "../mui/AppImage";
import EmptyContainer from "./EmptyContainer";
import AppHStack from "../mui/AppHStack";

export default function Result() {
  const { promptResult } = useContext(LoginContext);

  return (
    <AppVStack
      sx={{
        alignItems: "center",
        gap: "7px",
        padding: "10px",
        minWidth: "40%",
        maxHeight: "100%",
        minHeight: "400px",
      }}
    >
      <AppText
        variant="h5"
        text="Assessment Results"
        sx={{ alignSelf: "flex-start" }}
      />
      {promptResult?.id ? (
        <AppVStack sx={{ gap: "6px" }}>
          <AppImage
            src={promptResult?.bbox_image}
            sx={{ width: "380px", height: "240px" }}
          />
          <AppHStack sx={{ width: "60%", justifyContent: "space-between" }}>
            <AppText text={"Prediction: "} />
            <AppText text={promptResult?.prediction} />
          </AppHStack>
          <AppHStack sx={{ width: "60%", justifyContent: "space-between" }}>
            <AppText text={"Condition: "} />
            <AppText text={promptResult?.condition_good ? "Good" : "Bad"} />
          </AppHStack>
          <AppHStack sx={{ width: "60%", justifyContent: "space-between" }}>
            <AppText text={"Clean: "} />
            <AppText text={promptResult?.clean_good ? "Good" : "Bad"} />
          </AppHStack>
          <AppHStack sx={{ width: "60%", justifyContent: "space-between" }}>
            <AppText text={"Image Quality: "} />
            <AppText text={promptResult?.image_quality} />
          </AppHStack>
          <AppHStack sx={{ width: "60%", justifyContent: "space-between" }}>
            <AppText text={"Asset Condition: "} />
            <AppText text={promptResult?.asset_condition} />
          </AppHStack>
          <AppHStack sx={{ width: "60%", justifyContent: "space-between" }}>
            <AppText text={"Asset Description: "} />
            <AppText text={promptResult?.asset_condition_desc} />
          </AppHStack>
          <AppHStack sx={{ width: "60%", justifyContent: "space-between" }}>
            <AppText text={"Prediction Description: "} />
            <AppText text={promptResult?.prediction_desc} />
          </AppHStack>
        </AppVStack>
      ) : (
        <EmptyContainer />
      )}
    </AppVStack>
  );
}
