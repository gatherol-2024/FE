import { server } from "../../api/instance";
import { CommentType } from "../../types/board";

export const getBoardList = async () => {
  const { data } = await server.get("/board");
  return data;
};

export const getBoardItem = async (id: string | undefined) => {
  const { data } = await server.get(`/board/${id}`);
  return data;
};

export const addComment = async (id: string | undefined, comment: CommentType) => {
  await server.post(`comment/add/${id}`, comment);
};
