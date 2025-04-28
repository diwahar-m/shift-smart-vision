import AppText from "../mui/AppText";
import AppVStack from "../mui/AppVStack";

export default function EmptyContainer() {
  return (
    <AppVStack
      sx={{
        width: "100%",
        minHeight: "300px",
        justifyContent: "center",
        alignItems: "center",
        flexShrink: 1,
      }}
    >
      <AppText
        variant="h6"
        sx={{ color: "#a1a1aa" }}
        text={
          "Please upload Image on the Left side, select the criteria and run the assessment "
        }
      />
    </AppVStack>
  );
}
