/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import AppVStack from "../mui/AppVStack";
import AppText from "../mui/AppText";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../context";
import AppImage from "../mui/AppImage";
import EmptyContainer from "./EmptyContainer";
import AppLoader from "../others/AppLoader";
import { Box } from "@mui/material";
import AssessmentCard from "./AssessmentCard";
import AppButton from "../mui/AppButton";
import AppHStack from "../mui/AppHStack";
import { Sparkles } from "lucide-react";

export default function Result({ handleSubmit }: any) {
  const { promptResult, loader, imageType } = useContext<any>(LoginContext);
  const [predictions, setPredictions] = useState<any>([]);

  useEffect(() => {
    const prediction = [
      {
        title: "Image Quality Assessment",
        condition: promptResult?.image_quality,
        desc: promptResult?.image_quality_desc,
      },
      {
        title: "Asset Condition Assessment",
        condition: promptResult?.asset_condition,
        desc: promptResult?.asset_condition_desc,
      },
      {
        title: "Prediction",
        condition: promptResult?.prediction,
        desc: promptResult?.prediction_desc,
      },
    ];
    setPredictions(prediction);
  }, [promptResult]);

  return (
    <AppVStack
      sx={{
        alignItems: "center",
        gap: "15px",
        width: "92%",
        minHeight: "486px",
        padding: "0 30px",
      }}
    >
      <AppText
        variant="h3"
        text="Assessment"
        fontStyles={["1.5rem", "1rem", "600"]}
        sx={{ alignSelf: "flex-start", marginBottom: "5px" }}
      />
      <AppText
        variant="subtitle2"
        text="Please choose category, image and criteria before you run the assessment"
        sx={{
          alignSelf: "flex-start",
          marginBottom: "4px",
          textAlign: "left",
          color: "#656569",
        }}
      />

      <AppButton
        loading={loader}
        handleClick={handleSubmit}
        isDisabled={
          !imageType?.asset_id &&
          !imageType?.input_image_id &&
          !imageType?.criteria_id
        }
        sx={{
          bgcolor: "skyblue",
          // alignSelf: "flex-end",
          color: "white",
          height: "38px",
          fontWeight: "bold",
          width: "100%",
          borderRadius: "10px",
          "&:hover": {
            backgroundColor: "#007fff",
          },
        }}
      >
        <AppHStack sx={{ gap: "5px" }}>
          <Sparkles size="20" />
          Run Assessment
        </AppHStack>
      </AppButton>

      {loader ? (
        <Box sx={{ height: "300px" }}>
          <AppLoader />
        </Box>
      ) : promptResult?.id ? (
        <AppVStack sx={{ gap: "6px", width: "100%" }}>
          {predictions?.length ? (
            predictions?.map((_: any) => (
              <AssessmentCard
                title={_?.title}
                condition={_?.condition}
                desc={_?.desc}
              />
            ))
          ) : (
            <></>
          )}
          <AppVStack
            sx={{
              width: "100%",
              padding: "9px 0",
              gap: "6px",
            }}
          >
            <AppText
              sx={{ alignSelf: "flex-start" }}
              variant="h4"
              fontStyles={["0.9rem", "1.25rem", "500"]}
              text={"Processed Image"}
            />
            <AppImage
              src={promptResult?.bbox_image}
              sx={{
                width: "377px",
                height: "240px",
                borderRadius: "10px",
                objectFit: "cover",
              }}
            />
          </AppVStack>

          {/* 
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
          </AppHStack> */}
        </AppVStack>
      ) : (
        <EmptyContainer />
      )}
    </AppVStack>
  );
}
