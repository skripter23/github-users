import type { AppProps } from "next/app";
import { ThemeSettingProvider } from "../theme/theme";
import FinderProvider from "../components/Finder/context";
import { CssBaseline } from "@mui/material";
import { appWithTranslation } from "next-i18next";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeSettingProvider>
      <CssBaseline />
      <FinderProvider>
        <Component {...pageProps} />
      </FinderProvider>
    </ThemeSettingProvider>
  );
}

export default appWithTranslation(MyApp);
