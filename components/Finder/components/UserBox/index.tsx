import type { FC } from "react";
import { CircularProgress, Container, Typography } from "@mui/material";
import useSearch from "../../../../hooks/useSearch";
import UserInfo from "./components/UserInfo";
import { useTranslation } from "next-i18next";

const UserBox: FC = () => {
  const { data, loading, error } = useSearch();
  const { t } = useTranslation("common");

  return (
    <Container sx={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "30px", gap: "4px" }}>
      {loading && <CircularProgress />}
      {error && <Typography>{t("userError")}</Typography>}
      {!loading && !error && data && <UserInfo user={data} />}
    </Container>
  );
};

export default UserBox;
