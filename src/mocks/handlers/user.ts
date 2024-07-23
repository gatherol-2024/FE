import { HttpResponse, http } from "msw";

const USER_DATA = [
  {
    name: "TEST 1",
  },
  {
    name: "TEST 2",
  },
  {
    name: "TEST 3",
  },
  {
    name: "TEST 4",
  },
];
const userHandlers = [http.get("/mock/user", () => HttpResponse.json(USER_DATA))];

export default userHandlers;
