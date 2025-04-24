import AppCenterStack from "../components/mui/AppCenterStack";
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
  const { user, setUser } = useContext(LoginContext);
  const [error, setError] = useState("");
  useEffect(() => {
    setError("");
  }, []);
  console.log(user);
  return (
    <AppCenterStack sx={{ width: "100%", height: "100%" }}>
      <AppVStack sx={{ gap: "5px", alignItems: "center" }}>
        <AppImage
          src={LogoIcon}
          sx={{ width: "160px", marginBottom: "10px" }}
        />
        <AppText
          variant="subtitle2"
          //   fontStyles={['']}
          text={"--- MISSION - VISION ---"}
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
          sx={{ bgcolor: "skyblue", width: "92%" }}
          handleClick={() => {
            if (user?.username && user?.password === "2A2Rs75R")
              navigate("/dashboard");
            else setError("Invalid credentials");
          }}
        >
          Login
        </AppButton>
      </AppVStack>
    </AppCenterStack>
  );
}
