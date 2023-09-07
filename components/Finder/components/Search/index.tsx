import type { FC } from "react";
import { useState } from "react";
import { Container, IconButton, TextField } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import { useFinder } from "../../context";
import { useTranslation } from "next-i18next";

const Search: FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { handleSearchUser } = useFinder();
  const { t } = useTranslation("common");

  return (
    <Container sx={{ display: "flex", justifyContent: "center", padding: "30px", gap: "4px" }}>
      <TextField fullWidth label={`${t("userName")}`} variant="outlined" onChange={(e) => setSearchTerm(e.currentTarget.value)} />
      <div className="flex items-center">
        <IconButton onClick={() => handleSearchUser(searchTerm)} aria-label="Search">
          <SearchOutlined />
        </IconButton>
      </div>
    </Container>
  );
};

export default Search;
