import { useCommentMutation } from "../services/board/mutations";
import { useBoardItemQuery } from "../services/board/queries";

export const useBoard = (id: string | undefined) => {
  const { boardData, ...restQuery } = useBoardItemQuery(id);
  const { commentMutate } = useCommentMutation(id);
  return { boardData, ...restQuery, commentMutate };
};
