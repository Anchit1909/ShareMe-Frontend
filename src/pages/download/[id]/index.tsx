import React from "react";
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import axios from "axios";
import { IFile } from "libs/types";
import RenderFile from "@/components/RenderFile";

const index: NextPage<{
  file: IFile;
}> = ({ file: { format, name, sizeInBytes, id } }) => {
  return (
    <div className="flex flex-col items-center justify-center py-3 space-y-4 bg-gray-800 rounded-md shadow-xl w-96">
      {!id ? (
        <span>File does not exist! Check the URL and try again.</span>
      ) : (
        <>
          <img src="/images/file-download.png" alt="" className="w-16 h-16" />
          <h1 className="text-xl">Your file is ready to be downloaded</h1>
          <RenderFile file={{ format, name, sizeInBytes }} />
          <button className="button">Download</button>
        </>
      )}
    </div>
  );
};

export default index;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { id } = context.query;

  let file;
  try {
    const { data } = await axios.get(`http://localhost:8000/api/files/${id}`);
    file = data;
  } catch (error: any) {
    console.log(error.response.data);
    file = {};
  }
  return {
    props: {
      file,
    },
  };
}
