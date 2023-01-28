import useScroll from "@/lib/hooks/use-scroll";
import React from "react";
import Logo from "./Icons/Logo";
import Link from "next/link";
import Github from "../components/Icons/GithubLogo";
import Twitter from "../components/Icons/TwitterLogo";

export const Header = () => {
  const scrolled = useScroll(50);
  return (
    // <>
    //   <div
    //     className={`fixed top-0 w-full ${
    //       scrolled
    //         ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
    //         : ""
    //     } z-30 transition-all`}
    //   >
    <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
      <Link href="/" className="flex items-center font-display text-2xl">
        <Logo />
        <p className="font-semibold">ShareMe.</p>
      </Link>
      <div className="flex items-center space-x-4">
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter />
        </a>
        <a
          href="https://github.com/steven-tey/extrapolate"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
        </a>
      </div>
    </div>
    //   </div>
    // </>
  );
};
