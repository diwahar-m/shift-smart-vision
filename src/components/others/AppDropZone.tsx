/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */

import { useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";
import AppImage from "../mui/AppImage";
import { Box } from "@mui/material";
import { X } from "lucide-react";

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
  height: "200px",
};

const focusedStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

export default function AppDropZone({ file, setFile, setFiles }: any) {
  console.log("file", file);
  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
    useDropzone({
      accept: { "image/*": [] },
      onDrop: (acceptedFiles) => {
        const formData = new FormData();
        acceptedFiles?.map((file) => {
          console.log(file);
          formData?.append("file", file);
        });
        console.log(formData);
        // files?.[0]?.preview
        const imageFile = acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        );
        setFile({ file: imageFile?.[0]?.preview }, formData);
      },
    });
  console.log(file);

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  return (
    <>
      {file?.file ? (
        <Box sx={{ position: "relative" }}>
          <AppImage src={file?.file} sx={{ width: "377px", height: "240px" }} />
          <Box
            sx={{
              position: "absolute",
              top: "4px",
              right: "4px",
              cursor: "pointer",
            }}
            onClick={() => setFiles("")}
          >
            <X color="red" />
          </Box>
        </Box>
      ) : (
        <div className="container">
          <div {...getRootProps({ style })}>
            <input {...getInputProps()} />
            <p style={{ color: "#0000ff" }}>
              Drag 'n' drop some files here, or click to select files
            </p>
          </div>
        </div>
      )}
    </>
  );
}
