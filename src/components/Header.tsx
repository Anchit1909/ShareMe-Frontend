import useScroll from "@/lib/hooks/use-scroll";
import React from "react";
import Logo from "./Icons/Logo";
import Link from "next/link";
import Github from "../components/Icons/GithubLogo";
import Twitter from "../components/Icons/TwitterLogo";

export const Header = () => {
  const scrolled = useScroll(20);
  return (
    <>
      <div
        className={`fixed top-0 w-full ${
          scrolled
            ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
            : "bg-white/0"
        } z-30 transition-opacity`}
      >
        <div className="flex items-center justify-between h-16 max-w-screen-xl mx-5 xl:mx-auto">
          <Link href="/" className="flex items-center text-2xl font-display">
            <Logo />
            <p className="font-semibold">ShareMe.</p>
          </Link>
          <div className="flex items-center space-x-4">
            <a
              href="https://twitter.com/anchit1909"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter />
            </a>
            <a
              href="https://github.com/Anchit1909/ShareFile-Frontend"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
