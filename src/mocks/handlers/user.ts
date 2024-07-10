import { HttpResponse, http } from "msw";

const USER_DATA = {
  name: "test",
};
const userHandlers = [http.get("/api/user", () => HttpResponse.json(USER_DATA))];

export default userHandlers;
