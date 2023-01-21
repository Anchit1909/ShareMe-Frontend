import "@/styles/globals.css";
import axios from "axios";
import type { AppProps } from "next/app";

axios.defaults.baseURL = "http://localhost:8000/";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="grid h-screen font-serif text-white bg-gray-900 place-items-center">
      <div>
        <Component {...pageProps} />
      </div>
    </div>
  );
}
