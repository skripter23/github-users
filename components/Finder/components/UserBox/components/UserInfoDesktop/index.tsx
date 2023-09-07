import type { FC } from "react";

import { Box, Stack, Typography, useTheme } from "@mui/material";
import { UserData } from "../../../../../../types/interfaces";
import Image from "next/image";
import { formateDate } from "../../../../../../helpers/helpers";
import { useTranslation } from "next-i18next";

interface IUserInfoDesktop {
  user: UserData;
}

const UserInfoDesktop: FC<IUserInfoDesktop> = ({ user: { data } }) => {
  const { avatar_url, created_at } = data;
  const theme = useTheme();
  const { t } = useTranslation("common");

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        padding: "15px",
        gap: "15px",
        backgroundColor: theme.palette.background.paper,
        borderRadius: "10px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
        alignItems: "center",
      }}
    >
      <div className="h-[150px] min-w-[150px] relative rounded-full overflow-hidden" style={{ border: "4px solid #FFF" }}>
        <Image src={avatar_url} alt="Avatar" fill className="object-cover" />
      </div>
      <div className="w-full flex flex-col gap-[10px]">
        <Stack direction="row" className="justify-between w-full">
          <Typography variant="h4" sx={{ fontWeight: "bold", color: "primary" }}>
            {data.name}
          </Typography>
          <Typography variant="body2" sx={{ color: "primary" }}>
            {t("joined")} {formateDate(created_at)}
          </Typography>
        </Stack>
        <Typography variant="body1" sx={{ color: "primary" }}>
          @{data.login}
        </Typography>
        <Stack direction="row" sx={{ gap: "15px", width: "100%", justifyContent: "space-between" }}>
          <Typography variant="body2" sx={{ color: "primary" }}>
            {t("repos")}: {data.public_repos}
          </Typography>
          <Typography variant="body2" sx={{ color: "primary" }}>
            {t("followers")}: {data.followers}
          </Typography>
          <Typography variant="body2" sx={{ color: "primary" }}>
            {t("following")}: {data.following}
          </Typography>
        </Stack>
        <Stack direction="row" sx={{ gap: "15px", width: "100%", justifyContent: "space-between" }}>
          <Typography variant="body2" sx={{ color: "primary" }}>
            {t("located")}: {data.location}
          </Typography>
          <Typography variant="body2" sx={{ color: "primary" }}>
            {t("twitter")}: {data.twitter_username !== null ? `@${data.twitter_username}` : `${t("withoutTwitter")}`}
          </Typography>
        </Stack>
        <Typography variant="body2">{data.bio ? `${t("bio")}: ${data.bio}` : `${t("withoutBio")}`}</Typography>
        <Stack direction="row" sx={{ gap: "15px", width: "100%", justifyContent: "center" }}>
          <Typography variant="body2" sx={{ color: "#007BFF" }}>
            <a href={data.html_url} target="_blank" rel="noopener noreferrer">
              {t("visit")}
            </a>
          </Typography>
        </Stack>
      </div>
    </Box>
  );
};

export default UserInfoDesktop;
