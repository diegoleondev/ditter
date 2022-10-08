import { UserProvider } from "context/UserContext";
import { ViewportProvider } from "context/ViewportContext";
import type { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ViewportProvider>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </ViewportProvider>
  );
}

export default MyApp;
