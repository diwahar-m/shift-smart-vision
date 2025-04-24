import AppText from "../mui/AppText";
import AppVStack from "../mui/AppVStack";

export default function EmptyContainer() {
  return (
    <AppVStack
      sx={{
        width: "100%",
        minHeight: "400px",
        justifyContent: "center",
        alignItems: "center",
        flexShrink: 1,
      }}
    >
      <AppText variant="h6" text={"Upload Image on the Left side "} />
      <AppText variant="h6" text={"And Run the Assessment"} />
    </AppVStack>
  );
}
