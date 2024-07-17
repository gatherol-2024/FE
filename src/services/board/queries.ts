import { useQuery } from "@tanstack/react-query";
import { getBoardById, getBoardList } from "./api";

export const useGetBoardList = () => {
  const { data, ...restQuery } = useQuery({
    queryKey: ["board"],
    queryFn: getBoardList,
  });

  return { data, ...restQuery };
};

export const useGetBoardById = (id: string | undefined) => {
  const { data, ...restQuery } = useQuery({
    queryKey: ["board", id],
    queryFn: () => getBoardById(id),
  });

  return { data, ...restQuery };
};
