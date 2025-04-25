import AppHStack from "../mui/AppHStack";
import AppText from "../mui/AppText";
import AppVStack from "../mui/AppVStack";

interface AssessmentCardProps {
  title: string;
  condition: string;
  desc: string;
}

export default function AssessmentCard({
  title,
  condition,
  desc,
}: AssessmentCardProps) {
  return (
    <AppVStack
      sx={{
        width: "100%",
        border: "0 solid #a1a1aa",
        borderBottomWidth: "1px",
        padding: "9px 0",
        gap: "6px",
      }}
    >
      <AppHStack
        sx={{
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <AppText
          variant="h4"
          fontStyles={["0.9rem", "1.25rem", "500"]}
          text={title}
        />
        <AppText
          variant="subtitle1"
          sx={{ color: condition == "good" ? "#22c55e" : "#FF0000" }}
          fontStyles={["0.875rem", "1.25rem", "500"]}
          text={condition == "good" ? "Good ✅" : "Bad ❌"}
        />
      </AppHStack>
      <AppText
        variant="subtitle2"
        sx={{ color: "#a1a1aa", textAlign: "left" }}
        fontStyles={["0.875rem", "1.25rem", "500"]}
        // @ts-expect-error "replaceall"
        text={desc?.replaceAll("_", " ")}
      />
    </AppVStack>
  );
}
