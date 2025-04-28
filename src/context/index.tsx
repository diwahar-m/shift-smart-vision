// ContextLayout.js
import { Outlet, useNavigate } from "react-router";
import { createContext, useEffect, useState } from "react";
import { Box } from "@mui/material";

export const LoginContext = createContext({});

export default function ContextLayout() {
  const [user, setUser] = useState({ username: "", password: "" });
  const [loader, setLoader] = useState(false);
  const [promptResult, setPromptResult] = useState("");
  const [options, setOptions] = useState([]);
  const navigate = useNavigate();
  const [imageType, setImageType] = useState({
    input_image_id: "",
    asset_id: "",
  });

  console.log("promptResult", promptResult);

  useEffect(() => {
    localStorage.setItem("username", user?.username);
  }, [user]);

  useEffect(() => {
    if (localStorage.getItem("username")) {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  }, []);

  return (
    <Box sx={{ maxWidth: "100vw", flex: 1, height: "100vh" }}>
      <LoginContext.Provider
        value={{
          user,
          setUser,
          loader,
          setLoader,
          promptResult,
          setPromptResult,
          options,
          setOptions,
          imageType,
          setImageType,
        }}
      >
        <Outlet />
      </LoginContext.Provider>
    </Box>
  );
}
