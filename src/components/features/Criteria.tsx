/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import AppVStack from "../mui/AppVStack";
import AppText from "../mui/AppText";
import { useContext, useEffect } from "react";
import { LoginContext } from "../../context";
import EmptyContainer from "./EmptyContainer";
import AppAccordianNew from "../others/AppAccordianNew";
import { Box } from "@mui/material";

export default function Criteria() {
  const { options, imageType, setImageType } = useContext<any>(LoginContext);

  useEffect(() => {
    console.log(
      options?.filter((asset: any) => asset?.id === imageType?.asset_id)?.[0]
        ?.criterias?.[0]?.id
    );
  }, [imageType]);

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
        text="Criteria"
        fontStyles={["1.5rem", "1rem", "600"]}
        sx={{ alignSelf: "flex-start", marginBottom: "16px" }}
      />
      {imageType?.asset_id ? (
        <div style={{ width: "100%" }}>
          {/* {options
            ?.filter((asset) => asset?.id === imageType?.asset_id)?.[0]
            ?.criterias?.map((_) => (
              <AppAccordianNew
                onClick={(e) => setImageType({ ...imageType, criteria_id: e })}
                key={_?.id}
                itemKey={_?.id?.toString()}
                name={_?.criteria_name}
                desc={_?.client_criteria}
                selectedId={imageType?.criteria_id}
                defaultValue={
                  options?.filter(
                    (asset) => asset?.id === imageType?.asset_id
                  )?.[0]?.criterias?.[0]?.id
                }
              />
            ))} */}
          {
            <AppAccordianNew
              options={options}
              defaultValue={
                options?.filter(
                  (asset: any) => asset?.id === imageType?.asset_id
                )?.[0]?.criterias?.[0]?.id
              }
              assetId={imageType?.asset_id}
              selectedId={imageType?.criteria_id}
              onClick={(e) => setImageType({ ...imageType, criteria_id: e })}
            />
          }
        </div>
      ) : (
        <Box sx={{ marginTop: "52px" }}>
          <EmptyContainer />
        </Box>
      )}
    </AppVStack>
  );
}
