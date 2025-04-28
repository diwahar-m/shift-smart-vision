/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import AppVStack from "../mui/AppVStack";
import AppDropZone from "../others/AppDropZone";
import AppButton from "../mui/AppButton";
import AppText from "../mui/AppText";
import { useMutation, useQuery } from "@tanstack/react-query";
import makeGetRequest from "../../api/makeGetRequest";
import { toast } from "react-toastify";
import { GET_ASSET_LIST_API, POST_IMAGE_UPLOAD_API } from "../../api/url";
import { useContext, useEffect } from "react";
import makePostRequest from "../../api/makePostRequest";
import { LoginContext } from "../../context";
import AppSelectNew from "../others/AppSelectNew";
import { Box } from "@mui/material";

export default function ImageUploader() {
  // const [options, setOptions] = useState<any>([]);
  // const [files, setFiles] = useState<any>("");
  // const [imageType, setImageType] = useState({
  //   input_image_id: "",
  //   asset_id: "",
  // });

  const {
    setPromptResult,
    options,
    setOptions,
    imageType,
    setImageType,
    files,
    setFiles,
  } = useContext<any>(LoginContext);

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

  useEffect(() => {
    setOptions(data?.data?.results);
  }, [data]);

  const handleClear = () => {
    setPromptResult("");
    setFiles("");
    setPromptResult(null);
  };

  return (
    <AppVStack
      sx={{
        alignItems: "center",
        gap: "15px",
        width: "92%",
        minHeight: "486px",
        padding: "0 30px",
      }}
    >
      <AppText
        variant="h3"
        fontStyles={["1.5rem", "1rem", "600"]}
        text="Input"
        sx={{ alignSelf: "flex-start", marginBottom: "16px" }}
      />

      {/* <AppSelect
          options={options}
          onChange={(selected: any) =>
            setImageType({ ...imageType, asset_id: selected?.id })
          }
        /> */}
      <Box sx={{ alignSelf: "flex-start" }}>
        <AppSelectNew
          label={"Asset Type "}
          value={imageType?.asset_id}
          options={options}
          onChange={(selected: any) => {
            console.log(selected);

            setImageType({
              asset_id: options?.find((_: any) => _?.id === selected)?.id,
              input_image_id: null,
              criteria_id: null,
            });
            handleClear();
          }}
        />
      </Box>
      <AppVStack sx={{ width: "100%", gap: "10px" }}>
        <AppText
          sx={{ color: "#a1a1a1", textAlign: "left" }}
          text={"Upload Image"}
        />

        <AppDropZone
          file={files}
          setFile={(file: any, formData: any) => {
            setFiles(file);
            mutate(formData);
          }}
          removeImage={() => {
            setFiles("");
            setImageType({ ...imageType, input_image_id: "" });
          }}
          setFiles={setFiles}
        />
      </AppVStack>
      {/* <AppButton
        loading={loader}
        handleClick={handleSubmit}
        isDisabled={
          !imageType?.asset_id &&
          !imageType?.input_image_id &&
          !imageType?.criteria_id
        }
        sx={{
          bgcolor: "skyblue",
          // alignSelf: "flex-end",
          color: "white",
          height: "38px",
          fontWeight: "bold",
          width: "100%",
          borderRadius: "10px",
          "&:hover": {
            backgroundColor: "#007fff",
          },
        }}
      >
        <AppHStack sx={{ gap: "5px" }}>
          <Sparkles size="20" />
          Run Assessment
        </AppHStack>
      </AppButton> */}
      <AppButton
        sx={{
          height: "38px",
          fontWeight: "bold",
          width: "100%",
          borderRadius: "10px",

          backgroundColor: "#eb7f86",
          color: "#fff",
        }}
        handleClick={() => {
          setImageType({
            input_image_id: "",
            asset_id: "",
            criteria_id: "",
          });
          handleClear();
        }}
      >
        Clear
      </AppButton>
      {/* <ToastContainer position="bottom-center" /> */}
    </AppVStack>
  );
}
