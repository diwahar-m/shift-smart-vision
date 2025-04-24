import AppVStack from "../mui/AppVStack";
import AppText from "../mui/AppText";
import AppAccordian from "../mui/AppAccordian";
import { useContext } from "react";
import { LoginContext } from "../../context";
import EmptyContainer from "./EmptyContainer";

export default function Criteria() {
  const { promptResult } = useContext(LoginContext);
  return (
    <AppVStack
      sx={{
        alignItems: "center",
        gap: "7px",
        padding: "10px",
        minWidth: "40%",
        maxHeight: "100%",
        minHeight: "250px",
        border: "1px dashed #bac2c3",
        borderRadius: "30px",
      }}
    >
      <AppText variant="h5" text="Criteria" sx={{ alignSelf: "flex-start" }} />
      {promptResult?.id ? (
        <AppAccordian
          name={promptResult?.criteria_name}
          desc={promptResult?.criteria}
          prediction={promptResult?.prediction}
        />
      ) : (
        <EmptyContainer />
      )}
    </AppVStack>
  );
}
