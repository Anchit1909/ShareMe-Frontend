import { IFile } from "libs/types";
import { FunctionComponent } from "react";
import { sizeInMB } from "libs/sizeInMB";

const RenderFile: FunctionComponent<{ file: IFile }> = ({
  file: { format, sizeInBytes, name },
}) => {
  return (
    <div className="flex items-center justify-between w-full px-4 -mt-24">
      <div className="flex items-center justify-center">
        <img src={`/images/${format}.png`} alt="" className="w-14 h-14" />
        <span className="max-w-sm mx-2 text-base font-default">{name}</span>
      </div>
      <span className="ml-auto text-base font-default">
        {sizeInMB(sizeInBytes)}
      </span>
    </div>
  );
};

export default RenderFile;
