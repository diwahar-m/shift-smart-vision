/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import AppVStack from "../mui/AppVStack";
import AppSelect from "../others/AppSelect";
import AppDropZone from "../others/AppDropZone";
import AppHStack from "../mui/AppHStack";
import AppButton from "../mui/AppButton";
import AppText from "../mui/AppText";
import { useMutation, useQuery } from "@tanstack/react-query";
import makeGetRequest from "../../api/makeGetRequest";
import { ToastContainer, toast } from "react-toastify";
import {
  GET_ASSET_LIST_API,
  POST_IMAGE_UPLOAD_API,
  POST_PROCESS_IMAGE_API,
} from "../../api/url";
import { useContext, useEffect, useState } from "react";
import { formatSelectOptions } from "../../constant/utils";
import makePostRequest from "../../api/makePostRequest";
import { LoginContext } from "../../context";

export default function ImageUploader() {
  const [options, setOptions] = useState<any>([]);
  const [files, setFiles] = useState<any>("");
  const [imageType, setImageType] = useState({
    input_image_id: "",
    asset_id: "",
  });

  const { loader, setLoader, setPromptResult } = useContext(LoginContext);

  const { data } = useQuery<any>({
    queryKey: [GET_ASSET_LIST_API],
    queryFn: () => makeGetRequest(GET_ASSET_LIST_API),
  });

  const { mutate } = useMutation<any>({
    mutationFn: (body) => makePostRequest(POST_IMAGE_UPLOAD_API, body),
    onSuccess: (data) => {
      setFiles(data?.data);
      setImageType({ ...imageType, input_image_id: data?.data?.id });
    },
    onError: () => {
      toast("Something went wrong");
      setFiles("");
    },
  });

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

  useEffect(() => {
    const option: any = [];

    data?.data?.results?.map((_) => option.push(formatSelectOptions(_)));
    setOptions(option);
  }, [data]);

  const handleSubmit = () => {
    console.log(imageType);
    if (imageType?.asset_id && imageType?.input_image_id) {
      mutateAssessment(imageType);
      setLoader(true);
    } else {
      toast("Please select all fields");
    }
  };

  return (
    <AppVStack
      sx={{
        alignItems: "center",
        gap: "7px",
        padding: "10px",
        minWidth: "40%",
        maxHeight: "100%",
        minHeight: "486px",
        border: "0px solid #bac2c3",
        borderRightWidth: "1px",
        // bgcolor: "red",
      }}
    >
      <ToastContainer position="bottom-center" />
      <AppText
        variant="h5"
        text="Input"
        sx={{ alignSelf: "flex-start", marginBottom: "16px" }}
      />
      <AppHStack sx={{ justifyContent: "space-between", width: "100%" }}>
        <AppSelect
          options={options}
          onChange={(selected) =>
            setImageType({ ...imageType, asset_id: selected?.id })
          }
        />
        <AppButton
          sx={{
            color: "red",
            borderRadius: "20px",
            "&:hover": {
              backgroundColor: "#eb7f86",
              color: "#fff",
            },
          }}
          handleClick={() => {
            setImageType({
              input_image_id: "",
              asset_id: "",
            });
            setPromptResult("");
            setFiles("");
          }}
        >
          Reset
        </AppButton>
      </AppHStack>
      <AppDropZone
        file={files}
        setFile={(file, formData) => {
          setFiles(file);
          mutate(formData);
        }}
        setFiles={setFiles}
      />
      <AppButton
        loading={loader}
        handleClick={handleSubmit}
        sx={{
          bgcolor: "skyblue",
          alignSelf: "flex-end",
          color: "white",
          height: "35px",
          fontWeight: "bold",
          borderRadius: "20px",
          "&:hover": {
            backgroundColor: "#007fff",
          },
        }}
      >
        Run Assessment
      </AppButton>
    </AppVStack>
  );
}
