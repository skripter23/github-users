import type { FC } from "react";
import Search from "./components/Search";
import UserBox from "./components/UserBox";
import { useFinder } from "./context";

const Finder: FC = ({}) => {
  const { userName } = useFinder();

  return (
    <>
      <Search />
      {userName !== "" && <UserBox />}
    </>
  );
};

export default Finder;
