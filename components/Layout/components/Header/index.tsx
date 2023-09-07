import type { FC } from "react";
import { useContext } from "react";
import { AppBar, IconButton, Stack, Toolbar, Typography, useTheme } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import GitHubIcon from "@mui/icons-material/GitHub";
import TranslateIcon from "@mui/icons-material/Translate";
import { useTranslation } from "next-i18next";
import { ThemeSwitchContext } from "../../../../theme/theme";
import { IHeader } from "./interfaces";
import { useRouter } from "next/router";

const Header: FC<IHeader> = ({ locale }) => {
  const themeMaterial = useTheme();
  const { toggleColorMode } = useContext(ThemeSwitchContext);
  const router = useRouter();
  const { t } = useTranslation("common");

  const changeLocale = () => {
    router.push(router.pathname, router.asPath, { locale: locale === undefined || locale === "en" ? "cs" : "en" });
  };

  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Stack direction={`row`} spacing={3} alignItems={`center`}>
          <GitHubIcon />
          <Typography variant={"h6"} component={"div"}>
            Finder
          </Typography>
        </Stack>
        <Stack direction={`row`} spacing={1} alignItems={`center`}>
          <Typography>{themeMaterial.palette.mode === "light" ? t("lightMode") : t("darkMode")}</Typography>
          <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
            {themeMaterial.palette.mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Stack>
        <Stack direction={`row`} spacing={3} alignItems={`center`}>
          <IconButton sx={{ ml: 1 }} color="inherit" onClick={changeLocale}>
            <TranslateIcon />
          </IconButton>
          <Typography>{locale === "undefined" || locale === "en" ? "EN" : "CS"}</Typography>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
