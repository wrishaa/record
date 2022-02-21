import "../styles/globals.css";
import type { AppProps } from "next/app";
import RecordOverlay from "@record/RecordOverlay";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <RecordOverlay />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
