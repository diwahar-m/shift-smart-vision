/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import AppVStack from "../components/mui/AppVStack";
import AppImage from "../components/mui/AppImage";
import { LogoIcon } from "../assets";
// import AppInput from "../components/mui/AppInput";
// import AppButton from "../components/mui/AppButton";
import AppText from "../components/mui/AppText";
import { useNavigate } from "react-router";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast, ToastContainer } from "react-toastify";
export default function Login() {
  const navigate = useNavigate();
  const { user, setUser } = useContext<any>(LoginContext);
  const [error, setError] = useState("");
  useEffect(() => {
    setError("");
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (user?.username === "shiftsmart" && user?.password === "2A2Rs75R")
      navigate("/dashboard");
    else {
      toast("Please enter valid credentials");
      // setError("Invalid credentials");
    }
  };

  return (
    <AppVStack
      sx={{
        whiteSpaceTrimidth: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form onSubmit={handleSubmit}>
        <AppVStack
          // @ts-expect-error ""
          className="navbar-background"
          sx={{
            gap: "15px",
            alignItems: "center",
            // border: "1px solid skyblue",
            border: "1px solid #ccc",
            padding: "40px 20px",
            borderRadius: "10px",
            // boxShadow: "5px 10px 15px skyblue",
            width: "340px",
          }}
        >
          <AppImage
            src={LogoIcon}
            sx={{ width: "170px", marginBottom: "10px" }}
          />
          <AppText
            variant="subtitle2"
            fontStyles={["14px", "18px", "500"]}
            sx={{ color: "#a1a1aa" }}
            //   fontStyles={['']}
            text={"MACHINE - VISION"}
          />
          <AppText
            variant="subtitle2"
            fontStyles={["12px", "18px", "500"]}
            sx={{ color: "#black" }}
            //   fontStyles={['']}
            text={"Enter your credentials to login to your account."}
          />

          {/* <AppInput
            label="Username"
            value={user?.username}
            onChange={(e) => {
              setUser({ ...user, username: e.target.value });
              setError("");
            }}
          /> */}
          <AppVStack sx={{ gap: "5px", width: "100%" }}>
            <AppText
              variant="subtitle2"
              fontStyles={["14px", "18px", "500"]}
              sx={{ color: "#black", alignSelf: "flex-start" }}
              //   fontStyles={['']}
              text={"Username"}
            />
            <Input
              placeholder="Username"
              className="focus-visible:ring-0"
              value={user?.username}
              onChange={(e) => {
                setUser({ ...user, username: e.target.value });
                setError("");
              }}
            />
          </AppVStack>

          {/* <AppInput
            label="Password"
            type="password"
            value={user?.password}
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
              setError("");
            }}
          /> */}
          <AppVStack sx={{ gap: "5px", width: "100%" }}>
            <AppText
              variant="subtitle2"
              fontStyles={["14px", "18px", "500"]}
              sx={{ color: "#black", alignSelf: "flex-start" }}
              //   fontStyles={['']}
              text={"Password"}
            />
            <Input
              placeholder="Password"
              className="focus-visible:ring-0"
              value={user?.password}
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
                setError("");
              }}
            />
          </AppVStack>
          {error && (
            <AppText variant="subtitle2" sx={{ color: "red" }} text={error} />
          )}
          {/* <AppButton
            type="submit"
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
          >
            Login
          </AppButton> */}
          <Button
            type="submit"
            id="login"
            className=" mt-2 w-[100%] text-white h-[35px] font-bold rounded-[20px]  focus:!outline-none active:!outline-none"
          >
            Login
          </Button>
        </AppVStack>
      </form>
      <ToastContainer position="bottom-center" />
    </AppVStack>
  );
}
