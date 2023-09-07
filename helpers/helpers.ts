import { format } from "date-fns";

export const initialUserData = {
  data: {
    avatar_url: "",
    bio: "",
    blog: "",
    company: "",
    created_at: "",
    email: "",
    events_url: "",
    followers: 0,
    following: 0,
    followers_url: "",
    gists_url: "",
    gravatar_id: "",
    hireable: null,
    html_url: "",
    id: 0,
    location: "",
    login: "",
    name: "",
    node_id: "",
    organizations_url: "",
    public_gists: 0,
    public_repos: 0,
    received_events_url: "",
    repos_url: "",
    site_admin: false,
    starred_url: "",
    subscriptions_url: "",
    twitter_username: null,
    type: "",
    updated_at: "",
    url: "",
  },
};

export const formateDate = (str: string) => {
  if (!str) return "";
  const date = new Date(str);

  const formattedDate = format(date, "MMMM d, yyyy");
  const formattedTime = format(date, "h:mm:ss a");

  return `${formattedDate} ${formattedTime}`;
};
