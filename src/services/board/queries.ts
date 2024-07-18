import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addComment, getBoardById, getBoardList } from "./api";
import { toast } from "react-toastify";

export const useGetBoardList = () => {
  const { data, ...restQuery } = useQuery({
    queryKey: ["board"],
    queryFn: getBoardList,
  });

  return { data, ...restQuery };
};

export const useBoard = (id: string | undefined) => {
  const queryClient = useQueryClient();
  const { data, ...restQuery } = useQuery({
    queryKey: ["board", id],
    queryFn: () => getBoardById(id),
  });

  const { mutate: commentMutate } = useMutation({
    mutationFn: (comment: any) => addComment(id, comment),
    mutationKey: ["comment", id],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["board", id], exact: true });
      toast.success("댓글 등록 성공!");
    },
    onError: () => toast.error("댓글 등록 실패!"),
  });

  return { data, ...restQuery, commentMutate };
};
