import { createContext, ReactNode, useMemo, useState } from "react";

import { PaletteMode, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";
import { lightTheme } from "./LightTheme.mode";
import { darkTheme } from "./DarkTheme.mode";

export const light = lightTheme;
export const dark = darkTheme;

export const ThemeSwitchContext = createContext<{
  toggleColorMode?: () => void;
}>({});

export const ThemeSettingProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const theme = createTheme({
    typography: {
      fontFamily: "Montserrat",
    },
    palette: mode === "dark" ? dark : light,
  });

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme}>
      <ThemeSwitchContext.Provider value={{ toggleColorMode }}>{children}</ThemeSwitchContext.Provider>
    </ThemeProvider>
  );
};
