import { server } from "../../api/instance";
import { CommentType } from "../../types/board";

export const getBoardList = async (category: string) => {
  const { data } = await server.get(`/board/${category}`);
  return data;
};

export const getBoardItem = async (id: string | undefined) => {
  const { data } = await server.get(`/board/${id}`);
  return data;
};

export const addComment = async (id: string | undefined, comment: CommentType) => {
  await server.post(`comment/add/${id}`, comment);
};
