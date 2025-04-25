/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import AppVStack from "../components/mui/AppVStack";
import AppImage from "../components/mui/AppImage";
import { LogoIcon } from "../assets";
import AppInput from "../components/mui/AppInput";
import AppButton from "../components/mui/AppButton";
import AppText from "../components/mui/AppText";
import { useNavigate } from "react-router";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../context";
export default function Login() {
  const navigate = useNavigate();
  const { user, setUser } = useContext<any>(LoginContext);
  const [error, setError] = useState("");
  useEffect(() => {
    setError("");
  }, []);
  console.log(user);
  return (
    <AppVStack
      sx={{
        whiteSpaceTrimidth: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AppVStack
        sx={{
          gap: "5px",
          alignItems: "center",
          border: "1px solid skyblue",
          padding: "40px 20px",
          borderRadius: "10px",
          boxShadow: "5px 10px 50px skyblue",
        }}
      >
        <AppImage
          src={LogoIcon}
          sx={{ width: "170px", marginBottom: "10px" }}
        />
        <AppText
          variant="subtitle2"
          fontStyles={["14px", "18px", "500"]}
          sx={{ color: "#0000ff" }}
          //   fontStyles={['']}
          text={"MISSION - VISION"}
        />

        <AppInput
          label="Username"
          value={user?.username}
          onChange={(e) => {
            setUser({ ...user, username: e.target.value });
            setError("");
          }}
        />
        <AppInput
          label="Password"
          type="password"
          value={user?.password}
          onChange={(e) => {
            setUser({ ...user, password: e.target.value });
            setError("");
          }}
        />
        {error && (
          <AppText variant="subtitle2" sx={{ color: "red" }} text={error} />
        )}
        <AppButton
          id="login"
          sx={{
            bgcolor: "skyblue",
            width: "92%",
            color: "white",
            height: "35px",
            fontWeight: "bold",
            borderRadius: "20px",
            "&:hover": {
              backgroundColor: "#007fff",
            },
          }}
          handleClick={() => {
            if (user?.username && user?.password === "2A2Rs75R")
              navigate("/dashboard");
            else {
              setError("Invalid credentials");
            }
          }}
        >
          Login
        </AppButton>
      </AppVStack>
    </AppVStack>
  );
}
