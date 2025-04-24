/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import AppVStack from "../mui/AppVStack";
import AppText from "../mui/AppText";
import AppAccordian from "../mui/AppAccordian";
import { useContext } from "react";
import { LoginContext } from "../../context";
import EmptyContainer from "./EmptyContainer";
import AppLoader from "../others/AppLoader";

export default function Criteria() {
  const { promptResult, loader } = useContext<any>(LoginContext);
  return (
    <AppVStack
      sx={{
        alignItems: "center",
        gap: "7px",
        padding: "10px",
        minWidth: "40%",
        maxHeight: "100%",
        minHeight: "480px",
        border: "0px dashed #bac2c3",
        borderRightWidth: "1px",
      }}
    >
      <AppText
        variant="h5"
        text="Criteria"
        sx={{ alignSelf: "flex-start", marginBottom: "30px" }}
      />
      {loader ? (
        <AppLoader />
      ) : promptResult?.id ? (
        <AppAccordian
          name={promptResult?.criteria_name}
          desc={promptResult?.critera}
          // prediction={promptResult?.prediction}
        />
      ) : (
        <EmptyContainer />
      )}
    </AppVStack>
  );
}
