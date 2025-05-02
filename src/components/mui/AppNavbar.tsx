// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import IconButton from "@mui/material/IconButton";
import { LogoIcon } from "../../assets";
import AppImage from "./AppImage";
import AppHStack from "./AppHStack";
import AppText from "./AppText";
import { Button } from "../ui/button";
import { useNavigate } from "react-router";

export default function AppNavbar() {
  const navigate = useNavigate();
  return (
    // <Box sx={{ flexGrow: 1 }}>
    //   <AppBar sx={{ bgcolor: "#fff", borderRadius: "40px" }} position="static">
    //     <Toolbar>
    //       <IconButton
    //         size="large"
    //         edge="start"
    //         color="inherit"
    //         aria-label="menu"
    //         sx={{
    //           mr: 2,
    //           "&:hover": {
    //             backgroundColor: "transparent",
    //           },
    //           "&:active": {
    //             outline: "none",
    //           },
    //           "&:focus": {
    //             outline: "none",
    //           },
    //         }}
    //       >
    //         <AppHStack sx={{ gap: "40px" }}>
    //           <AppImage src={LogoIcon} sx={{ width: "160px" }} />
    //           <AppText
    //             variant="subtitle2"
    //             fontStyles={["14px", "18px", "500"]}
    //             sx={{ color: "#a1a1a1", fontFamily: "Figtree" }}
    //             //   fontStyles={['']}
    //             text={" MACHINE - VISION "}
    //           />
    //         </AppHStack>
    //       </IconButton>
    //       <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
    //         News
    //       </Typography>
    //     </Toolbar>
    //   </AppBar>
    // </Box>

    <nav className=" top-4 z-navbar w-full lg:top-6 sticky bg-[#fff]  ">
      <div className=" container box-border !max-w-[1672px] !px-6 md:!px-6 ">
        <div className="navbar-background relative flex  h-[60px] w-[96%]  items-center justify-between rounded-lg border border-transparent bg-brand-background px-2 py-1.5 transition-[box-shadow_background-color_border-color] duration-300 motion-reduce:transition-none lg:grid lg:grid-cols-2 lg:rounded-2xl lg:py-[0.4375rem] lg:pr-[0.4375rem]">
          <AppHStack sx={{ gap: "40px" }}>
            <AppImage src={LogoIcon} sx={{ width: "160px" }} />
            <AppText
              variant="subtitle2"
              fontStyles={["14px", "18px", "500"]}
              sx={{ color: "#a1a1a1", fontFamily: "Figtree" }}
              //   fontStyles={['']}
              text={" MACHINE - VISION "}
            />
          </AppHStack>
          <Button
            onClick={() => {
              localStorage.removeItem("username");
              navigate("/");
            }}
            className="w-[25%] ml-auto mr-2"
          >
            Logout
          </Button>
        </div>
      </div>
    </nav>
  );
}
