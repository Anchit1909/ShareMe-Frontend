import React, { Dispatch, FunctionComponent, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import FileIcon from "./Icons/FileIcon";

const DropZoneComponent: FunctionComponent<{ setFile: Dispatch<any> }> = ({
  setFile,
}) => {
  const onDrop = useCallback((acceptedFiles: any) => {
    console.log(acceptedFiles);
    setFile(acceptedFiles[0]);
  }, []);
  const { getRootProps, getInputProps, isDragAccept, isDragReject } =
    useDropzone({
      onDrop,
      multiple: false,
      accept: {
        "image/png": [".png"],
        "image/jpeg": [".jpeg"],
        "audio/mpeg": [".mpeg"],
      },
    });
  return (
    <div
      {...getRootProps()}
      className="w-full h-[400px] rounded-md cursor-pointer focus:outline-none"
    >
      <input {...getInputProps()} />
      <div
        className={
          "flex flex-col items-center h-auto space-y-6 border-2 border-dashed border-[#b6cef0] rounded-xl py-8 " +
          (isDragReject == true ? "border-red-300" : " ") +
          (isDragAccept == true ? "border-green-300" : " ")
        }
      >
        <FileIcon />
        {isDragReject ? (
          <p className="font-default font-semibold text-sm text-center pb-2">
            Sorry, This app only supports images and mp3.
          </p>
        ) : (
          <>
            <div className="text-xl font-default font-semibold max-w-lg px-6 text-center">
              <h1>Drag and drop your files or</h1>{" "}
              <span className="text-[#307BE5] underline">browse</span>
            </div>
            <p className="font-default text-sm">
              Only jpeg, png & mp3 files are supported.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default DropZoneComponent;
