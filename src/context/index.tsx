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
  const [files, setFiles] = useState("");
  const navigate = useNavigate();
  const [additionalSpec, setAdditionalSpec] = useState("");
  const [imageType, setImageType] = useState({
    input_image_id: "",
    asset_id: "",
  });

  // const addCriteriaNote=(assetId, criteriaId, text)=> {
  //   const filteredCriteria = options
  //     ?.filter((asset) => asset?.id === assetId)?.[0]?.criterias?.map((criteria)=> {
  //       if(criteria?.id === criteriaId) criteria['additional_spec'] = text
  //     });

  // }

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
          files,
          setFiles,
          additionalSpec,
          setAdditionalSpec,
        }}
      >
        <Outlet />
      </LoginContext.Provider>
    </Box>
  );
}
