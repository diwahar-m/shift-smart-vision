/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import AppVStack from "../mui/AppVStack";
import AppText from "../mui/AppText";
import { useContext } from "react";
import { LoginContext } from "../../context";
import EmptyContainer from "./EmptyContainer";
import AppLoader from "../others/AppLoader";
import { Box } from "@mui/material";
import AppAccordianNew from "../others/AppAccordianNew";

export default function Criteria() {
  const { promptResult, loader } = useContext<any>(LoginContext);
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
      {loader ? (
        <Box sx={{ height: "300px" }}>
          <AppLoader />
        </Box>
      ) : promptResult?.id ? (
        // <AppAccordian
        //   name={promptResult?.criteria_name}
        //   desc={promptResult?.critera}
        // />
        <AppAccordianNew
          name={promptResult?.criteria_name?.replaceAll("_", " ")}
          desc={promptResult?.critera?.replaceAll("_", " ")}
        />
      ) : (
        <EmptyContainer />
      )}
    </AppVStack>
  );
}
