import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center flex-1 w-full px-4 mt-10 space-y-5 text-center">
      <a
        href="https://twitter.com/nutlope/status/1615597965787435015"
        target="_blank"
        rel="noreferrer"
        className="px-4 py-1 text-sm transition duration-300 ease-in-out border rounded-2xl text-slate-500 hover:scale-105 font-default"
      >
        Used by over <span className="font-semibold">55,000</span> happy
        customers
      </a>
      <h1 className="max-w-sm mx-auto text-4xl font-bold tracking-normal font-display text-slate-900 md:text-5xl md:max-w-lg">
        <span className="relative whitespace-nowrap text-[#3290EE]">
          {/* <SquigglyLines /> */}
          <span className="relative">Share</span>
        </span>{" "}
        your files with ease without any hassle
      </h1>

      <p className="mx-auto max-w-xl text-md font-default text-[#334155] leading-7 md:text-lg">
        Want to share any image with your friends? Let our app share them 100%
        free – share your files today.
      </p>
    </div>
  );
};

export default Hero;
