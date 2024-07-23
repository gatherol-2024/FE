import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addComment } from "./api";
import { CommentType } from "../../types/board";
import { toast } from "react-toastify";

export const useCommentMutation = (id: string | undefined) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: (comment: CommentType) => addComment(id, comment),
    mutationKey: ["comment", id],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["board", id], exact: true });
      toast.success("댓글 등록 성공!");
    },
    onError: () => toast.error("댓글 등록 실패!"),
  });

  return { commentMutate: mutate };
};
