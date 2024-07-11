import { server } from "../../api/instance";

export const getBoardList = async () => {
  const { data } = await server.get("/board");
  return data;
};
