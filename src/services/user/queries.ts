import { useQuery } from "@tanstack/react-query";
import { getUser } from "./api";
import { getCookie } from "../../api/cookie";

export const useUserQuery = () => {
  const { data, ...restQuery } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    enabled: !!getCookie("accessToken"),
  });

  return { data: data, ...restQuery };
};
