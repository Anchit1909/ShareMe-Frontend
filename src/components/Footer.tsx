import React from "react";

const Footer = () => {
  return (
    <div className="flex items-center justify-between h-16 max-w-screen-xl mx-5 -mb-24 xl:mx-auto">
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
