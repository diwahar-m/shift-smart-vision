import { FadeLoader } from "react-spinners";
import AppVStack from "../mui/AppVStack";

export default function AppLoader() {
  return (
    // <Bars
    //   height="80"
    //   width="80"
    //   color="#0000ff"
    //   ariaLabel="bars-loading"
    //   wrapperStyle={{}}
    //   wrapperClass=""
    //   visible={true}
    // />
    <AppVStack
      sx={{
        width: "100%",
        minHeight: "300px",
        justifyContent: "center",
        alignItems: "center",
        flexShrink: 1,
      }}
    >
      <FadeLoader color="#0000ff" />
    </AppVStack>
  );
}
