import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { LogoIcon } from "../../assets";
import AppImage from "./AppImage";
import AppHStack from "./AppHStack";
import AppText from "./AppText";

export default function AppNavbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ bgcolor: "#fff", borderRadius: "40px" }} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{
              mr: 2,
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
          >
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
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
