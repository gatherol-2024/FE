import { useQuery } from "@tanstack/react-query";
import { getUser } from "./api";
import { Storage } from "../../api/storage";

export const useUserQuery = () => {
  const { data, ...restQuery } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    // enabled: !!Storage.getItem("accessToken"),
  });

  return { data: data?.data, ...restQuery };
};
