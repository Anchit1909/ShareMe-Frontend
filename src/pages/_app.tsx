import "@/styles/globals.css";
import axios from "axios";
import type { AppProps } from "next/app";
import localFont from "@next/font/local";
import { Poppins } from "@next/font/google";
import cx from "classnames";

const clash = localFont({
  src: "../styles/ClashDisplay-Variable.ttf",
  variable: "--font-clash",
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASE_ENDPOINT;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-gradient-to-br from-[#B5FFD9]/20 to-[#EEB0EC]/20">
      <main className={cx(clash.variable, poppins.variable)}>
        <Component {...pageProps} />
      </main>
    </div>
  );
}
