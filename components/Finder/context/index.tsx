import type { FC } from "react";
import { createContext, useContext, useState } from "react";
import { ContextType, FinderProvider } from "./interfaces";

const FinderContext = createContext<ContextType>({
  userName: "",
  handleSearchUser: () => undefined,
});

export const useFinder = () => {
  return useContext(FinderContext);
};

const FinderProvider: FC<FinderProvider> = ({ children }) => {
  const [userName, setUserName] = useState<string>("");

  const handleSearchUser = (name: string) => {
    setUserName((prev) => (prev === name ? prev : name));
  };

  return (
    <FinderContext.Provider
      value={{
        userName,
        handleSearchUser,
      }}
    >
      {children}
    </FinderContext.Provider>
  );
};

export default FinderProvider;
