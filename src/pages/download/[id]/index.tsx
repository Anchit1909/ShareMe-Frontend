import React from "react";
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import axios from "axios";
import { IFile } from "libs/types";
import RenderFile from "@/components/RenderFile";
import fileDownload from "js-file-download";
import Layout from "@/layout/Layout";
import Hero from "@/components/Hero";
import { Download } from "lucide-react";

const index: NextPage<{
  file: IFile;
}> = ({ file: { format, name, sizeInBytes, id } }) => {
  const handleDownload = async () => {
    const { data } = await axios.get(
      `http://localhost:8000/api/files/${id}/download`,
      {
        responseType: "blob",
      }
    );
    fileDownload(data, name);
  };
  return (
    <Layout>
      <div className="flex items-center justify-center w-full p-0 overflow-y-hidden min-h-screen">
        <div className="flex flex-col items-center justify-center py-8 space-y-4 bg-white rounded-lg shadow-xl w-96 m-auto">
          {!id ? (
            <span>File does not exist! Check the URL and try again.</span>
          ) : (
            <>
              <img
                src="/images/file-download.png"
                alt=""
                className="w-16 h-16"
              />
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-lg font-default font-medium">
                  Your file is ready to be downloaded
                </h1>
                <h2 className="font-default text-[#4588E8] text-sm font-semibold">
                  Link expires in 24 hours
                </h2>
              </div>
              <RenderFile file={{ format, name, sizeInBytes }} />
              <button
                className="group mx-auto mt-6 flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black font-default"
                onClick={handleDownload}
              >
                <Download className="h-5 w-5 text-white group-hover:text-black" />
                <p>Download</p>
              </button>
            </>
          )}
        </div>
      </div>
    </Layout>
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
