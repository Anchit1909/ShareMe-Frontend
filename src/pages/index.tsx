import Head from "next/head";
import { Inter } from "@next/font/google";
import DropZoneComponent from "@/components/DropZoneComponent";
import { useState } from "react";
import RenderFile from "@/components/RenderFile";
import axios from "axios";
import DownloadFile from "@/components/DownloadFile";
import Layout from "@/layout/Layout";
import Hero from "@/components/Hero";
import { Upload } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [file, setFile] = useState<any>(null);
  const [id, setId] = useState(null);
  const [downloadPageLink, setDownloadPageLink] = useState(null);
  const [uploadState, setUploadState] = useState<
    "Uploading" | "Upload Failed" | "Uploaded" | "Upload"
  >("Upload");

  const handleUpload = async () => {
    if (uploadState == "Uploading") return;
    setUploadState("Uploading");
    const formData = new FormData();
    formData.append("myFile", file);
    try {
      const { data } = await axios({
        method: "post",
        data: formData,
        url: "api/files/upload",
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setDownloadPageLink(data.downloadPageLink);
      setId(data.id);
    } catch (error: any) {
      console.log(error.response.data);
      setUploadState("Upload Failed");
    }
  };

  const resetComponent = () => {
    setFile(null);
    setDownloadPageLink(null);
    setUploadState("Upload");
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen">
        <Layout>
          <Hero />
          <div className="flex flex-col mx-auto items-center mt-12  bg-white shadow-xl w-96 rounded-xl p-4 h-auto mb-20">
            {/* Drop Zone */}
            {!downloadPageLink && <DropZoneComponent setFile={setFile} />}

            {/* Render File */}
            {file && !downloadPageLink && (
              <RenderFile
                file={{
                  format: file.type.split("/")[1],
                  name: file.name,
                  sizeInBytes: file.size,
                }}
              />
            )}
            {/* Upload Button */}
            {!downloadPageLink && file && (
              <button
                className="group mx-auto mt-6 flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black font-default"
                onClick={handleUpload}
              >
                <Upload className="h-5 w-5 text-white group-hover:text-black" />
                <p>Upload file</p>
              </button>
            )}
            {downloadPageLink && (
              <div className="p-2 text-center">
                <DownloadFile downloadPageLink={downloadPageLink} />
                {/* Email Form */}
                <button
                  className="group mx-auto mt-6 flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black font-default"
                  onClick={resetComponent}
                >
                  <Upload className="h-5 w-5 text-white group-hover:text-black" />
                  <p>Upload new file</p>
                </button>
              </div>
            )}
          </div>
        </Layout>
      </main>
    </>
  );
}
