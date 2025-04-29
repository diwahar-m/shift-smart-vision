/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import AppVStack from "../components/mui/AppVStack";
import Criteria from "../components/features/Criteria";
import ImageUploader from "../components/features/ImageUploader";
import Result from "../components/features/Result";
import { Grid } from "@mui/material";
import AppNavbar from "../components/mui/AppNavbar";
import { useMutation } from "@tanstack/react-query";
import makePostRequest from "@/api/makePostRequest";
import { POST_PROCESS_IMAGE_API } from "@/api/url";
import { useContext } from "react";
import { LoginContext } from "@/context";
import { toast, ToastContainer } from "react-toastify";

export default function Home() {
  const { setLoader, setPromptResult, imageType, setFiles, additionalSpec } =
    useContext<any>(LoginContext);

  const { mutate: mutateAssessment } = useMutation<any>({
    mutationFn: (body) => makePostRequest(POST_PROCESS_IMAGE_API, body),
    onSuccess: (data) => {
      setLoader(false);
      setPromptResult(data?.data);
    },
    onError: () => {
      toast("Something went wrong");
      setLoader(false);
      setFiles("");
    },
  });
  const handleSubmit = () => {
    if (
      imageType?.asset_id &&
      imageType?.input_image_id &&
      imageType?.criteria_id
    ) {
      mutateAssessment({ ...imageType, additional_spec: additionalSpec });
      setLoader(true);
    } else {
      toast("Please select all fields");
    }
  };

  return (
    <AppVStack sx={{ gap: "30px", maxWidth: "100%", padding: "20px" }}>
      <AppNavbar />

      <Grid container sx={{ marginTop: "30px" }}>
        <Grid size={4}>
          <ImageUploader />
        </Grid>
        <Grid size={4}>
          <Criteria />
        </Grid>
        <Grid size={4}>
          <Result handleSubmit={handleSubmit} />
        </Grid>
      </Grid>
      <ToastContainer position="bottom-center" />
    </AppVStack>
  );
}
