import AppHStack from "../mui/AppHStack";
import AppText from "../mui/AppText";
import AppVStack from "../mui/AppVStack";

interface AssessmentCardProps {
  title: string;
  condition: string;
  desc: string;
}

const badResults = ["Bad", "Fail"];

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
          sx={{
            color: badResults?.includes(condition) ? "#FF0000" : "#22c55e",
          }}
          fontStyles={["0.875rem", "1.25rem", "500"]}
          //text={condition == "good" ? "Good ✅" : "Bad ❌"}
          text={
            badResults?.includes(condition)
              ? `${condition + " ❌"}`
              : `${condition + " ✅"}`
          }
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
