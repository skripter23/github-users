import { FC } from "react";
import { UserData } from "../../../../../../types/interfaces";
import { useMediaQuery } from "@mui/material";
import UserInfoDesktop from "../UserInfoDesktop";
import UserInfoMobile from "../UserInfoMobile";

interface IUserInfo {
  user: UserData;
}

const UserInfo: FC<IUserInfo> = ({ user }) => {
  const isDesktop = useMediaQuery("(min-width: 1200px)");

  return isDesktop ? <UserInfoDesktop user={user} /> : <UserInfoMobile user={user} />;
};

export default UserInfo;
