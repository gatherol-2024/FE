import { useQuery } from "@tanstack/react-query";
import { getBoardList } from "./api";

const useGetBoardList = () => {
  const { data, ...restQuery } = useQuery({
    queryKey: ["board"],
    queryFn: getBoardList,
  });

  return { data, ...restQuery };
};

export default useGetBoardList;
