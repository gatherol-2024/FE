import { useQuery } from "@tanstack/react-query";
import { getBoardItem, getBoardList } from "./api";

export const useGetBoardList = () => {
  const { data, ...restQuery } = useQuery({
    queryKey: ["board"],
    queryFn: getBoardList,
  });

  return { data, ...restQuery };
};

export const useBoardItemQuery = (id: string | undefined) => {
  const { data, ...restQuery } = useQuery({
    queryKey: ["board", id],
    queryFn: () => getBoardItem(id),
  });

  return { boardData: data, ...restQuery };
};
