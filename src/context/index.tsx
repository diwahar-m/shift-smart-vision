// ContextLayout.js
import { Outlet, useNavigate } from "react-router";
import { createContext, useEffect, useState } from "react";
import { Box } from "@mui/material";

export const LoginContext = createContext({});

export default function ContextLayout() {
  const [user, setUser] = useState({ username: "", password: "" });
  const [loader, setLoader] = useState(false);
  const [promptResult, setPromptResult] = useState("");
  const navigate = useNavigate();

  console.log("promptResult", promptResult);

  useEffect(() => {
    if (user?.password === "2A2Rs75R") {
      navigate("/dashboard");
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
        }}
      >
        <Outlet />
      </LoginContext.Provider>
    </Box>
  );
}
