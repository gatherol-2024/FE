import { server } from "../../api/instance";

export const getBoardList = async () => {
  const { data } = await server.get("/board");
  return data;
};

export const getBoardById = async (id: string | undefined) => {
  const { data } = await server.get(`/board/${id}`);
  return data;
};
