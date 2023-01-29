import React from "react";

const Footer = () => {
  return (
    <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
      <div />
      <div className="flex items-center space-x-4 text-sm font-default">
        <p>
          © 2023{" "}
          <span className="text-[#4588E8] font-semibold">Anchit Sinha.</span>{" "}
          All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
