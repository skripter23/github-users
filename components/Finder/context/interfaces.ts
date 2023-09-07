import type { Dispatch, ReactNode, SetStateAction } from "react";

export interface ContextType {
  userName: string;
  handleSearchUser: (name: string) => void;
}

export interface FinderProvider {
  children: ReactNode;
}
