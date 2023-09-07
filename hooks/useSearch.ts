import { Octokit } from "@octokit/rest";
import { useFinder } from "../components/Finder/context";
import { useEffect, useState } from "react";
import { UserData } from "../types/interfaces";
import { initialUserData } from "../helpers/helpers";

const useSearch = () => {
  const { userName } = useFinder();
  const [data, setData] = useState<UserData>(initialUserData);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const octokit = new Octokit({
    auth: process.env.GITHUB_AUTH_TOKEN,
  });

  const fetchData = async () => {
    setError(false);
    setLoading(true);
    try {
      const res = await octokit.request(`GET /users/${userName}`, {
        username: userName.toUpperCase(),
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      });

      return res;
    } catch {
      setError(true);
    }
  };

  useEffect(() => {
    fetchData().then((data) => {
      if (data !== undefined) {
        setError(false);
      }
      setData(data as UserData);
      setLoading(false);
    });
  }, [userName]);

  return {
    data,
    loading,
    error,
  };
};

export default useSearch;
