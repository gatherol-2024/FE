import { getCookie } from "../../api/cookie";
import { server } from "../../api/instance";

export const getUser = async () => {
  const { data } = await server.get("/auth", {
    headers: {
      Authorization: `Bearer ${getCookie("refreshToken")}`,
    },
  });

  return data;
};
