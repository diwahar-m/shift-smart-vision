/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import AppVStack from "../mui/AppVStack";
import AppText from "../mui/AppText";
import { useContext } from "react";
import { LoginContext } from "../../context";
import AppImage from "../mui/AppImage";
import EmptyContainer from "./EmptyContainer";
import AppHStack from "../mui/AppHStack";
import AppLoader from "../others/AppLoader";
import { Box } from "@mui/material";

export default function Result() {
  const { promptResult, loader } = useContext<any>(LoginContext);

  return (
    <AppVStack
      sx={{
        alignItems: "center",
        gap: "7px",
        padding: "10px",
        minWidth: "40%",
        maxWidth: "100%",
        maxHeight: "100%",
        minHeight: "400px",
      }}
    >
      <AppText
        variant="h5"
        text="Assessment Results"
        sx={{ alignSelf: "flex-start", marginBottom: "2rem" }}
      />
      {loader ? (
        <AppLoader />
      ) : promptResult?.id ? (
        <AppVStack sx={{ gap: "6px", width: "100%" }}>
          <AppImage
            src={promptResult?.bbox_image}
            sx={{ width: "80%", height: "240px" }}
          />
          {/* <AppHStack sx={{ width: "60%", justifyContent: "space-between" }}>
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
          </AppHStack> */}
          <AppHStack sx={{ width: "47%", justifyContent: "space-between" }}>
            <AppText
              fontStyles={["14px", "22px", "600"]}
              variant="h6"
              text={"Image Quality: "}
            />
            <AppText variant="subtitle2" text={promptResult?.image_quality} />
          </AppHStack>
          <AppHStack sx={{ width: "47%", justifyContent: "space-between" }}>
            <AppText
              fontStyles={["14px", "22px", "600"]}
              variant="h6"
              text={"Asset Condition: "}
            />
            <AppText variant="subtitle2" text={promptResult?.asset_condition} />
          </AppHStack>
          <AppHStack
            sx={{
              width: "97%",
              justifyContent: "space-between",
            }}
          >
            <AppText
              sx={{ alignSelf: "flex-start" }}
              variant="h6"
              fontStyles={["14px", "22px", "600"]}
              text={"Asset Description: "}
            />
            <Box sx={{ width: "59%" }}>
              <AppText
                variant="subtitle2"
                sx={{ width: "100%", textAlign: "left" }}
                text={promptResult?.asset_condition_desc}
              />
            </Box>
          </AppHStack>
          <AppHStack sx={{ width: "100%", justifyContent: "space-between" }}>
            <AppText
              sx={{ alignSelf: "flex-start", textAlign: "left", width: "45%" }}
              variant="h6"
              fontStyles={["14px", "22px", "600"]}
              text={"Prediction Description: "}
            />
            <Box sx={{ width: "69%" }}>
              <AppText
                variant="subtitle2"
                sx={{ width: "100%", textAlign: "left" }}
                text={promptResult?.prediction_desc}
              />
            </Box>
          </AppHStack>
        </AppVStack>
      ) : (
        <EmptyContainer />
      )}
    </AppVStack>
  );
}
