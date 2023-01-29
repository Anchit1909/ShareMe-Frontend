import { useState } from "react";

const DownloadFile = ({ downloadPageLink }) => {
  const [copy, setCopy] = useState<Boolean>(false);
  return (
    <>
      <div className="p-1">
        {/* <h1 className="my-2 text-lg font-medium">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique,
        repudiandae.
      </h1> */}
        <div className="flex items-center justify-between space-x-6 max-w-sm">
          <span className="break-all">{downloadPageLink}</span>
          <div onClick={() => setCopy(true)}>
            <img
              src="/images/copy.png"
              alt=""
              className="object-contain w-8 h-8 cursor-pointer"
              onClick={() => navigator.clipboard.writeText(downloadPageLink)}
            />
          </div>
        </div>
      </div>
      <div>
        {copy && (
          <div
            className="p-1 my-4 text-sm text-blue-800 rounded-lg bg-blue-50"
            id="hideMeAfter5Seconds"
            role="alert"
          >
            <span className="font-medium font-default">
              Copied to clipboard!
            </span>
          </div>
        )}
      </div>
    </>
  );
};

export default DownloadFile;
