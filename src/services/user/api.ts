import { server } from "../../api/instance";
import { Storage } from "../../api/storage";

export const getUser = async () => {
  const { data } = await server.get(`/user/login/${Storage.getItem("accessToken")}`);

  return data;
};
